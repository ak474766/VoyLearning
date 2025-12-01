'use client';
import * as React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Send, Paperclip, Trash2, KeyRound, CheckCircle2, Sparkles, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { saveChatMessage, clearChatHistory } from '@/firebase/firestore/chat';
import { collection, query, orderBy, Timestamp, doc, onSnapshot } from 'firebase/firestore';
import { format } from 'date-fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { useImageUploader } from '@/hooks/use-image-uploader';
import { editHtmlWithLLM, answerQuestionAboutHtml } from '@/services/llm/html-editor-agent';
import { applyPartialEdit, sanitizeHtml, type ModificationType } from '@/services/llm/html-parser';
import ApiKeyModal from './api-key-modal';

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

import { NoteData } from '@/types/notes';

type AssistantSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  note: NoteData;
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
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = React.useState(false);
  const [userApiKey, setUserApiKey] = React.useState<string | undefined>(undefined);
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
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  // Track the current HTML content for LLM context
  const currentHtmlRef = React.useRef(currentHtmlContent);
  React.useEffect(() => {
    currentHtmlRef.current = currentHtmlContent;
  }, [currentHtmlContent]);

  const { imageUpload, uploadImage, uploadNow, cancelUpload } = useImageUploader(user?.uid || '', note.id, 'local');

  // Subscribe to user's saved Gemini API key
  React.useEffect(() => {
    if (!firestore || !user) return;
    const ref = doc(firestore, `users/${user.uid}/settings/gemini`);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data() as any;
      setUserApiKey(data?.apiKey);
    });
    return () => unsub();
  }, [firestore, user]);

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
      const id = window.requestAnimationFrame(scrollToBottom);
      return () => window.cancelAnimationFrame(id);
    }
  }, [isOpen, scrollToBottom]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
    if (fileInputRef.current) {
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
      // Save user message (only store image if it's an http(s) URL)
      const storedImageUrl = imageUrl && /^https?:\/\//i.test(imageUrl) ? imageUrl : undefined;
      await saveChatMessage(firestore, user.uid, note.id, 'user', question, storedImageUrl);

      // Determine if this is a modification request or a question
      const isModification = isModificationRequest(question);

      let assistantResponse: string;
      let htmlWasModified = false;

      if (isModification) {
        // Chat memory: include recent context
        const history = messages.slice(-12).map(m => ({ role: m.role, content: m.content }));
        const editResult = await editHtmlWithLLM({
          currentHtml: currentHtmlRef.current,
          userInstruction: question,
          imageUrl,
          apiKey: userApiKey,
          conversationHistory: history,
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
        const history = messages.slice(-12).map(m => ({ role: m.role, content: m.content }));
        assistantResponse = await answerQuestionAboutHtml(
          currentHtmlRef.current,
          question,
          { apiKey: userApiKey, conversationHistory: history, imageUrl }
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
    if (!instruction.trim() || !imageUpload || imageUpload.status !== 'complete') return;

    const wantsInsert = /\b(add|insert|place|put)\b/i.test(instruction) && /(image|img|picture|photo)/i.test(instruction);
    let imageForModel: string | undefined = undefined;

    if (wantsInsert) {
      // Upload on demand to get a durable URL
      const ensuredUrl = imageUpload.downloadURL || await uploadNow('imgbb');
      if (!ensuredUrl) {
        toast({ variant: 'destructive', title: 'Upload failed', description: 'Could not upload image to insert. Please try again.' });
        return;
      }
      imageForModel = ensuredUrl;
    } else {
      // Context-only: prefer local data URL (no external upload)
      imageForModel = imageUpload.dataURL || imageUpload.downloadURL;
    }

    const fullQuestion = instruction;

    // Clear card before sending
    cancelUpload();

    await callAssistant(fullQuestion, imageForModel);
  };


  const handleClearHistory = async () => {
    if (!user || !firestore) return;
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
    } catch (error) {
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
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-white/10 bg-[#0A0A0A]/90 backdrop-blur-3xl shadow-2xl">

        {/* Header */}
        <SheetHeader className="p-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-white font-display">AI Assistant</SheetTitle>
                <SheetDescription className="text-white/50 text-xs truncate max-w-[180px]">
                  {note.title}
                </SheetDescription>
              </div>
            </div>
            <Button
              variant={userApiKey ? 'ghost' : 'outline'}
              size="sm"
              onClick={() => setIsApiKeyModalOpen(true)}
              className={cn(
                'gap-2 text-xs h-8 transition-all duration-300',
                userApiKey
                  ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20'
                  : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
              )}
              disabled={isChatDisabled}
            >
              <KeyRound className="h-3.5 w-3.5" />
              {userApiKey ? 'Key Active' : 'Add Key'}
              {userApiKey && <CheckCircle2 className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </SheetHeader>

        {/* Chat Area */}
        <ScrollArea className="flex-1 bg-transparent" ref={scrollAreaRef}>
          <div className="space-y-6 p-6">
            {isHistoryLoading && (
              <div className="flex justify-center p-8">
                <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
              </div>
            )}

            {messages.map((message, index) => {
              const isWelcome = message.role === 'assistant' && (message.id?.startsWith('welcome') || message.content?.startsWith("Hello! I'm your AI assistant"));

              if (isWelcome) {
                return (
                  <div key={message.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-9 w-9 border border-white/10 shadow-lg">
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white"><Bot className="h-5 w-5" /></AvatarFallback>
                      </Avatar>
                      <div className="rounded-2xl rounded-tl-none p-5 bg-white/5 border border-white/10 shadow-xl backdrop-blur-md max-w-[90%]">
                        <p className="text-sm text-white/90 leading-relaxed whitespace-pre-wrap mb-4">{message.content.split('\n\n')[0]}</p>

                        <div className="grid grid-cols-1 gap-2">
                          <button onClick={() => prefill('What are the key points in this note?')} className="group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">🧠</span>
                            <span className="text-sm text-white/80 group-hover:text-white">Explain key points</span>
                          </button>
                          <button onClick={() => prefill('Modify the section about ... to be clearer.')} className="group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">✏️</span>
                            <span className="text-sm text-white/80 group-hover:text-white">Modify content</span>
                          </button>
                          <button onClick={() => prefill('Add an image illustrating ... and link it appropriately.')} className="group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform">🖼️</span>
                            <span className="text-sm text-white/80 group-hover:text-white">Add images</span>
                          </button>
                          <button onClick={() => prefill('Reorganize sections to improve flow: ...')} className="group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">🔀</span>
                            <span className="text-sm text-white/80 group-hover:text-white">Reorganize</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-center text-white/20 mt-2">AI can make mistakes. Please review generated content.</div>
                  </div>
                );
              }

              const isUser = message.role === 'user';

              return (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-end gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300',
                    isUser ? 'justify-end' : 'justify-start'
                  )}
                >
                  {!isUser && (
                    <Avatar className="h-8 w-8 border border-white/10 shadow-sm mb-1 flex-shrink-0">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white"><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                  )}

                  <div className={cn(
                    'relative max-w-[80%] rounded-2xl p-4 shadow-md overflow-hidden',
                    isUser
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-sm'
                      : 'bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md'
                  )}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
                    <p className={cn(
                      "text-[10px] mt-2 opacity-50 text-right",
                      isUser ? "text-blue-100" : "text-white/50"
                    )}>
                      {message.timestamp ? format(message.timestamp.toDate(), 'p') : ''}
                    </p>
                  </div>

                  {isUser && (
                    <Avatar className="h-8 w-8 border border-white/10 shadow-sm mb-1 flex-shrink-0">
                      <AvatarImage src={user?.photoURL || ''} />
                      <AvatarFallback className="bg-slate-700 text-white">{getInitials(user?.displayName)}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              );
            })}

            {(isLoading || isChatDisabled) && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
              <div className="flex items-start gap-3 animate-pulse">
                <Avatar className="h-8 w-8 border border-white/10">
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white"><Bot className="h-4 w-4" /></AvatarFallback>
                </Avatar>
                <div className="rounded-2xl rounded-tl-none p-4 bg-white/5 border border-white/10 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-purple-400" />
                  <span className="text-xs text-white/50">Thinking...</span>
                </div>
              </div>
            )}
            <div className="h-4" /> {/* Spacer */}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-[#0A0A0A]/90 border-t border-white/10 backdrop-blur-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (imageUpload && imageUpload.status === 'complete') {
                handleImageInstructionSubmit(input);
                setInput('');
              } else {
                handleSubmit(e);
              }
            }}
            className="relative flex flex-col gap-2 bg-white/5 p-2 rounded-3xl border border-white/10 focus-within:border-purple-500/50 focus-within:bg-white/10 transition-all duration-300 ring-offset-2 ring-offset-[#0A0A0A]"
          >
            {imageUpload && (
              <div className="flex items-center gap-3 px-2 pt-2 pb-1 animate-in slide-in-from-bottom-2 fade-in">
                <div className="relative group">
                  <div className="h-12 w-12 rounded-lg overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
                    {imageUpload.status === 'compressing' || imageUpload.status === 'uploading' ? (
                      <Loader2 className="h-5 w-5 animate-spin text-purple-400" />
                    ) : imageUpload.status === 'error' ? (
                      <X className="h-5 w-5 text-red-400" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={imageUpload.dataURL || imageUpload.downloadURL} alt="Preview" className="h-full w-full object-cover" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={cancelUpload}
                    className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-white/10 hover:bg-red-500/80 text-white/60 hover:text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                  >
                    <X className="h-2.5 w-2.5" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/80 truncate">{imageUpload.file.name}</p>
                  <p className="text-[10px] text-white/40">
                    {imageUpload.status === 'complete' ? 'Ready to send' : imageUpload.status}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-end gap-2">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading || isChatDisabled}
                className="h-10 w-10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors mb-0.5"
              >
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach image</span>
              </Button>

              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPaste={(e) => {
                  const items = e.clipboardData.items;
                  for (let i = 0; i < items.length; i++) {
                    if (items[i].type.indexOf('image') !== -1) {
                      const file = items[i].getAsFile();
                      if (file) uploadImage(file);
                    }
                  }
                }}
                placeholder={imageUpload ? "Add a caption..." : "Ask a question or paste an image..."}
                disabled={isLoading || isChatDisabled}
                className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/30 min-h-[44px] py-3 px-2"
              />

              <Button
                type="submit"
                disabled={isLoading || (!input.trim() && !imageUpload) || isChatDisabled || !!(imageUpload && imageUpload.status !== 'complete')}
                className={cn(
                  "h-10 w-10 rounded-full transition-all duration-300 shadow-lg mb-0.5",
                  (input.trim() || imageUpload)
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 hover:scale-105"
                    : "bg-white/10 text-white/30"
                )}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 ml-0.5" />}
              </Button>
            </div>
          </form>

          {messages.length > 1 && (
            <div className="flex justify-center mt-3">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="sm" disabled={isChatDisabled} className="text-[10px] text-white/30 hover:text-red-400 hover:bg-red-500/10 h-6 px-2">
                    <Trash2 className="mr-1.5 h-3 w-3" />
                    Clear Chat
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#111] border-white/10 text-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear conversation?</AlertDialogTitle>
                    <AlertDialogDescription className="text-white/60">
                      This will permanently delete the chat history for this note. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClearHistory} className="bg-red-600 hover:bg-red-700 text-white border-0">Clear History</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>

        <ApiKeyModal
          isOpen={isApiKeyModalOpen}
          onClose={() => setIsApiKeyModalOpen(false)}
          userId={user?.uid || ''}
          onKeyVerified={() => setIsApiKeyModalOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
