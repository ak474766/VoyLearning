'use client';
import * as React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Send, Paperclip, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { saveChatMessage, clearChatHistory } from '@/firebase/firestore/chat';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import ImageUploadCard from './image-upload-card';
import { useImageUploader } from '@/hooks/use-image-uploader';
import { editHtmlWithLLM, answerQuestionAboutHtml } from '@/services/llm/html-editor-agent';
import { applyPartialEdit, sanitizeHtml, type ModificationType } from '@/services/llm/html-parser';

/**
 * Determine if user instruction requires HTML modification or just a question
 */
function isModificationRequest(instruction: string): boolean {
  const modificationKeywords = [
    'change', 'modify', 'edit', 'update', 'replace', 'add', 'insert',
    'remove', 'delete', 'move', 'rewrite', 'fix', 'correct',
    'make', 'create', 'put', 'place', 'set',
  ];

  const lowerInstruction = instruction.toLowerCase();
  return modificationKeywords.some(keyword => lowerInstruction.includes(keyword));
}

type Note = {
  id: string;
  title: string;
  description: string;
  week: number;
  lesson: number;
  tags: string[];
  dateAdded: string;
  readTime: string;
  htmlFile: string;
};

type AssistantSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  note: Note;
  currentHtmlContent: string;
  onHtmlContentUpdate: (newHtml: string) => void;
};

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Timestamp;
    imageUrl?: string;
}

export default function AssistantSidebarNew({ isOpen, onClose, note, currentHtmlContent, onHtmlContentUpdate }: AssistantSidebarProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const scrollToBottom = React.useCallback(() => {
    if (!scrollAreaRef.current) return;
    const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLDivElement | null;
    const el = viewport ?? scrollAreaRef.current;
    try {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    } catch {
      // fallback for older browsers
      el.scrollTop = el.scrollHeight;
    }
  }, []);
  
  // Track the current HTML content for LLM context
  const currentHtmlRef = React.useRef(currentHtmlContent);
  React.useEffect(() => {
    currentHtmlRef.current = currentHtmlContent;
  }, [currentHtmlContent]);
  
  const { imageUpload, uploadImage, cancelUpload } = useImageUploader(user?.uid || '', note.id, 'imgbb');

  const chatHistoryQuery = useMemoFirebase(() => {
    if (!user || !note) return null;
    return query(collection(firestore, `users/${user.uid}/noteChats/${note.id}/messages`), orderBy('timestamp', 'asc'));
  }, [firestore, user, note]);

  const { data: chatHistory, isLoading: isHistoryLoading } = useCollection<Omit<Message, 'id'>>(chatHistoryQuery);

   React.useEffect(() => {
    if (chatHistory) {
      setMessages(chatHistory);
    }
  }, [chatHistory]);

  React.useEffect(() => {
    // Only show welcome message if there's no chat history and we're not loading
    if (isOpen && !isHistoryLoading && messages.length === 0 && !imageUpload && chatHistory && chatHistory.length === 0) {
      const welcomeMessage = {
        id: 'welcome',
        role: 'assistant' as const,
        content: `Hello! I'm your AI assistant for "${note.title}". Ask me anything about this note or ask me to edit it.\n\nI can help you:\n• Answer questions about the content\n• Modify specific parts of the note\n• Add images or links\n• Reorganize sections`,
        timestamp: Timestamp.now()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, note.title, isHistoryLoading, messages.length, imageUpload, chatHistory]);
  
  React.useEffect(() => {
    scrollToBottom();
  }, [messages, imageUpload, isLoading, scrollToBottom]);

  // When the assistant is opened, ensure we jump to the latest message
  React.useEffect(() => {
    if (isOpen) {
      // wait a tick to let the sheet animate/render and then scroll
      const id = window.requestAnimationFrame(scrollToBottom);
      return () => window.cancelAnimationFrame(id);
    }
  }, [isOpen, scrollToBottom]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const callAssistant = async (question: string, imageUrl?: string) => {
    setIsLoading(true);
    
    if (!user || !firestore) {
        toast({ variant: 'destructive', title: 'Authentication Error', description: 'Please log in to use the assistant.' });
        setIsLoading(false);
        return;
    }

    try {
        // Save user message
        await saveChatMessage(firestore, user.uid, note.id, 'user', question, imageUrl);

        // Determine if this is a modification request or a question
        const isModification = isModificationRequest(question) || imageUrl;

        let assistantResponse: string;
        let htmlWasModified = false;

        if (isModification) {
            const editResult = await editHtmlWithLLM({
                currentHtml: currentHtmlRef.current,
                userInstruction: question,
                imageUrl,
            });

            if (editResult.success) {
                let updatedHtml: string | null = null;
                if (editResult.modifiedHtml) {
                    updatedHtml = editResult.modifiedHtml;
                } else if (editResult.modification) {
                    const m = editResult.modification;
                    try {
                        const applied = await applyPartialEdit(
                            currentHtmlRef.current,
                            m.targetSelector,
                            m.modificationType as ModificationType,
                            m.newContent,
                            {
                                selector: m.targetSelector,
                                textContent: (m as any).textContent,
                                tagName: (m as any).tagName,
                                index: (m as any).index,
                            }
                        );
                        updatedHtml = sanitizeHtml(applied);
                    } catch (e: any) {
                        const msg = typeof e?.message === 'string' ? e.message : '';
                        if (msg.includes('Target element not found')) {
                            assistantResponse = 'I could not find the exact place to insert. Please specify a nearby heading or add a placeholder element with class "diagram-placeholder" and try again.';
                        } else {
                            assistantResponse = `I encountered an error while applying the edit: ${msg || 'Unknown error'}`;
                        }
                        updatedHtml = null;
                    }
                }

                if (updatedHtml) {
                    onHtmlContentUpdate(updatedHtml);
                    htmlWasModified = true;
                    assistantResponse = `✓ ${editResult.changeDescription || 'I\'ve made the requested changes to your note.'}`;
                } else {
                    assistantResponse = `I encountered an error: ${editResult.error || 'No modification was returned.'}`;
                }
            } else {
                assistantResponse = `I encountered an error: ${editResult.error || 'Could not modify the HTML.'}`;
            }
        } else {
            // Answer question about the content
            assistantResponse = await answerQuestionAboutHtml(
                currentHtmlRef.current,
                question
            );
        }

        // Save assistant response
        await saveChatMessage(firestore, user.uid, note.id, 'assistant', assistantResponse);

        if (htmlWasModified) {
            toast({
                title: 'Changes Applied',
                description: 'Your note has been updated. Changes are saved automatically.',
            });
        }
    } catch (error: any) {
        console.error("Assistant error:", error);
        
        let errorMessage = "Sorry, I encountered an error. Please try again.";
        let errorTitle = 'Assistant Error';
        
        if (error.message?.includes('timeout')) {
            errorMessage = "The request took too long. Please try again with a simpler question.";
            errorTitle = 'Timeout Error';
        } else if (error.message?.includes('API')) {
            errorMessage = "There was an issue with the AI service. Please check your API key.";
            errorTitle = 'API Error';
        }
        
        await saveChatMessage(firestore, user.uid, note.id, 'assistant', errorMessage);
        toast({
            variant: 'destructive',
            title: errorTitle,
            description: errorMessage
        });
    } finally {
        setIsLoading(false);
    }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const currentInput = input;
    setInput('');
    await callAssistant(currentInput);
  };
  
  const handleImageInstructionSubmit = async (instruction: string) => {
    if (!instruction.trim() || !imageUpload || imageUpload.status !== 'complete' || !imageUpload.downloadURL) return;
    
    const fullQuestion = instruction;
    
    // This will clear the card and re-enable the main input
    cancelUpload();

    await callAssistant(fullQuestion, imageUpload.downloadURL);
};


  const handleClearHistory = async () => {
    if(!user || !firestore) return;
    try {
      await clearChatHistory(firestore, user.uid, note.id);
      const welcomeMessage = {
        id: 'welcome-cleared',
        role: 'assistant' as const,
        content: `Hello! I'm your AI assistant for "${note.title}". Ask me anything about this note or ask me to edit it.`,
        timestamp: Timestamp.now()
      };
      setMessages([welcomeMessage]);
       toast({ title: 'Chat history cleared' });
    } catch(error) {
       console.error("Failed to clear chat history:", error);
       toast({ variant: 'destructive', title: 'Error', description: 'Could not clear chat history.' });
    }
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  
  const isChatDisabled = isUserLoading || !user;

  const prefill = (text: string) => {
    if (isLoading || !!imageUpload || isChatDisabled) return;
    setInput(text);
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-gradient-to-b from-rose-500/50 via-purple-500/50 to-sky-500/50 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl">
        <SheetHeader className="p-6 border-b border-white/10 bg-gradient-to-r from-rose-500/40 via-purple-500/40 to-sky-500/40 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl">
          <SheetTitle>AI Assistant</SheetTitle>
          <SheetDescription>Ask questions or request edits for '{note.title}'</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="space-y-6 p-4">
                {isHistoryLoading && <div className="flex justify-center p-4"><Loader2 className="h-6 w-6 animate-spin" /></div>}
                {messages.map((message) => {
                    const isWelcome = message.role === 'assistant' && (message.id?.startsWith('welcome') || message.content?.startsWith("Hello! I'm your AI assistant"));
                    if (isWelcome) {
                      return (
                        <div key={message.id} className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                          </Avatar>
                          <div className="rounded-2xl p-4 md:p-5 max-w-sm bg-slate-900/70 ring-1 ring-white/10 shadow-xl backdrop-blur-2xl">
                            <p className="text-sm whitespace-pre-wrap mb-3">{message.content.split('\n\n')[0]}</p>
                            <div className="space-y-2">
                              <button onClick={() => prefill('What are the key points in this note?')} className="w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-white/5 via-transparent to-white/5 hover:from-white/10 hover:to-white/10 ring-1 ring-white/10">
                                🧠 Answer questions about the content
                              </button>
                              <button onClick={() => prefill('Modify the section about ... to be clearer.')} className="w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 ring-1 ring-white/10">
                                ✏️ Modify specific parts of the note
                              </button>
                              <button onClick={() => prefill('Add an image illustrating ... and link it appropriately.')} className="w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 ring-1 ring-white/10">
                                🖼️ Add images or links
                              </button>
                              <button onClick={() => prefill('Reorganize sections to improve flow: ...')} className="w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 ring-1 ring-white/10">
                                🔀 Reorganize sections
                              </button>
                            </div>
                            <p className="text-xs mt-3 opacity-60 text-right">{message.timestamp ? format(message.timestamp.toDate(), 'p') : ''}</p>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={message.id} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : '')}>
                        {message.role === 'assistant' && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                          </Avatar>
                        )}
                        <div className={cn('rounded-lg p-3 max-w-xs md:max-w-sm', message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-2xl')}> 
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs mt-2 opacity-60 text-right">{message.timestamp ? format(message.timestamp.toDate(), 'p') : ''}</p>
                        </div>
                        {message.role === 'user' && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.photoURL || ''} />
                            <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    );
                })}
                 {imageUpload && (
                  <div className="flex items-start gap-3">
                     <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                    </Avatar>
                    <ImageUploadCard
                        upload={imageUpload}
                        onInstructionSubmit={handleImageInstructionSubmit}
                        onCancel={cancelUpload}
                    />
                  </div>
                )}
                 {(isLoading || isChatDisabled) && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                    <div className="flex items-start gap-3">
                         <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                        </Avatar>
                         <div className="rounded-lg p-3 bg-muted flex items-center">
                            <Loader2 className="h-5 w-5 animate-spin" />
                         </div>
                    </div>
                 )}
            </div>
        </ScrollArea>
        <SheetFooter className="p-4 border-t border-white/10 flex-col sm:flex-col sm:space-x-0 gap-4 bg-gradient-to-r from-rose-500/40 via-purple-500/40 to-sky-500/40 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            <Button type="button" variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()} disabled={isLoading || !!imageUpload || isChatDisabled}>
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach image</span>
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or request an edit..."
              disabled={isLoading || !!imageUpload || isChatDisabled}
              className="bg-slate-900/70 border-white/10 text-white placeholder:text-white/60 backdrop-blur-xl"
            />
            <Button type="submit" disabled={isLoading || !input.trim() || !!imageUpload || isChatDisabled} className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-500 text-white hover:opacity-90">
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
           {messages.length > 1 && (
            <div className="flex justify-center">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" disabled={isChatDisabled}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Clear Chat
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will permanently delete the chat history for this note. This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleClearHistory}>Confirm Clear</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
           )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
