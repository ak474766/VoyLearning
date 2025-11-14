'use client';
import * as React from 'react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, ChevronLeft, ChevronRight, Star, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import AssistantSidebarNew from './assistant-sidebar-new';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { AuthGuard } from '@/components/auth/auth-guard';
import { useNotePreview } from '@/hooks/use-note-preview';
import { saveModifiedHtml, deleteModifiedHtml } from '@/services/firebase/html-storage';
import { Badge } from '../ui/badge';
import { FcGraduationCap } from "react-icons/fc";
import { ataNotesData } from '@/data/notes/ataData';
import { bdaNotesData } from '@/data/notes/bdaData';
import { fspNotesData } from '@/data/notes/fspData';
import { lanaNotesData } from '@/data/notes/lanaData';
import { noNotesData } from '@/data/notes/noData';
import { prpNotesData } from '@/data/notes/prpData';
import { vsdNotesData } from '@/data/notes/vsdData';
import { faiNotesData } from '@/data/notes/faiData';


type Note = {
  id: string;
  title: string;
  description:string;
  week: number;
  lesson: number;
  tags: string[];
  dateAdded: string;
  readTime: string;
  htmlFile: string;
} | undefined;

type NotePreviewLayoutProps = {
  courseName: string;
  courseTitle: string;
  note: Note;
  coursePath: string;
};

export default function NotePreviewLayout({ courseName, courseTitle, note, coursePath }: NotePreviewLayoutProps) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  
  const [isAssistantOpen, setIsAssistantOpen] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const previewContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Extract course identifier from coursePath (e.g., '/dashboard/fsp' -> 'fsp')
  const courseId = coursePath.split('/').pop() || '';
  const weekId = `week${note?.week || 1}`;
  const lectureId = note?.id || '';

  // Determine previous/next notes for navigation
  const courseNotesMap: Record<string, { id: string }[]> = {
    ata: ataNotesData,
    bda: bdaNotesData,
    fsp: fspNotesData,
    lana: lanaNotesData,
    no: noNotesData,
    prp: prpNotesData,
    vsd: vsdNotesData,
    fai: faiNotesData,
  };
  const notesArray = courseNotesMap[courseId] || [];
  const currentIdx = notesArray.findIndex((n) => n.id === note?.id);
  const prevNote = currentIdx > 0 ? notesArray[currentIdx - 1] : undefined;
  const nextNote = currentIdx >= 0 && currentIdx < notesArray.length - 1 ? notesArray[currentIdx + 1] : undefined;

  // Use the new cascading load logic hook - wait for auth to complete
  const { htmlContent, isModified, loading, error, reload, updateHtml } = useNotePreview(
    isUserLoading ? undefined : user?.uid,
    courseId,
    weekId,
    lectureId
  );

  // Show error toast if loading failed
  React.useEffect(() => {
    if (error) {
      toast({ variant: 'destructive', title: 'Error', description: error });
    }
  }, [error, toast]);



  if (!note) {
    notFound();
  }

  const handleAssistantClick = () => {
    // Open assistant directly - using server-side Gemini API key
    setIsAssistantOpen(true);
  };

  const handleToggleFullscreen = () => {
    const el = previewContainerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
    } else {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else {
        (el as any).webkitRequestFullscreen?.();
        (el as any).msRequestFullscreen?.();
      }
    }
  };

  const buildExportHtml = (html: string) => {
    if (!html) return '';
    if (html.includes('<html')) return html;
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${html}</body></html>`;
  };

  const handleDownload = () => {
    const content = buildExportHtml(currentHtmlContent || '');
    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lectureId}${isModified ? '-edited' : ''}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleHtmlUpdate = async (newHtml: string) => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      // Update local state immediately for instant preview
      updateHtml(newHtml);
      
      // Save to Firebase Storage
      await saveModifiedHtml(user.uid, weekId, lectureId, newHtml);
      
      toast({ 
        title: '✓ Changes saved', 
        description: 'Your modified version has been saved to your account.' 
      });
    } catch(error) {
      console.error("Failed to save changes:", error);
      toast({ 
        variant: 'destructive', 
        title: 'Error', 
        description: 'Could not save your changes. Please try again.' 
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetToOriginal = async () => {
    if (!user) return;
    
    try {
      // Delete modified version from Firebase Storage
      await deleteModifiedHtml(user.uid, weekId, lectureId);
      
      // Reload to show original
      await reload();
      
      toast({ 
        title: 'Reset Complete', 
        description: 'The note has been reset to its original version.' 
      });
    } catch(error) {
      console.error("Failed to reset note:", error);
      toast({ 
        variant: 'destructive', 
        title: 'Error', 
        description: 'Could not reset the note.' 
      });
    }
  }
  
  const isLoading = isUserLoading || loading;

  if (isLoading) {
    return (
      <AuthGuard>
        <div className="flex h-screen w-full bg-background">
          <div className="hidden md:block w-64 border-r p-4">
            <Skeleton className="h-8 w-32 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="flex-1 p-8">
            <Skeleton className="h-12 w-1/3 mb-8" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-[60vh] w-full" />
          </div>
        </div>
      </AuthGuard>
    );
  }

  const handlePrint = () => {
    // Create a new window with the note content for printing
    const printWindow = window.open('', '_blank');
    if (printWindow && currentHtmlContent) {
      printWindow.document.write(currentHtmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  const currentHtmlContent = htmlContent;

  return (
    <AuthGuard>
      <div className="min-h-screen w-full relative bg-[#f6d7d7]">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.15), transparent 35%), radial-gradient(circle at 85% 25%, rgba(236, 72, 153, 0.18), transparent 45%), radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.12), transparent 45%)`,
            filter: 'blur(80px)',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10">
          <header className="sticky top-0 z-30 border-b bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="font-extrabold tracking-wide text-lg">
                 <FcGraduationCap /> VoyLearning
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
                  <Link href="/dashboard" className="hover:text-white">Home</Link>
                  <Link href={coursePath} className="hover:text-white">{courseName}</Link>
                  <span className="text-white/60">Week {note?.week} - Lesson {note?.lesson}</span>
                </nav>
              </div>
              <button
                onClick={() => signOut(auth)}
                className="rounded-full border border-red-400/60 bg-transparent px-4 py-1.5 text-sm text-red-100 hover:bg-red-500/10"
              >
                Logout
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" size="sm" className="rounded-full bg-black text-white border-0 px-4 py-1.5 hover:bg-black/90">
                      <Link href={coursePath}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Course
                      </Link>
                  </Button>
                  {isModified ? (
                    <Badge variant="secondary" className="text-xs rounded-full bg-emerald-500/15 text-emerald-900 border-0 px-2 py-1">
                      ✏️ Your modified version
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs rounded-full bg-amber-500/20 text-amber-900 border border-amber-300 px-2 py-1">
                      📄 Original version
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                    {isModified && (
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" className="rounded-full px-3">
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    Reset to Original
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This will discard all your custom changes to this note. This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleResetToOriginal}>Confirm Reset</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    )}
                    <Button variant="outline" size="sm" onClick={handleAssistantClick} className="rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700">
                        <Star className="mr-2 h-4 w-4" />
                        AI Assistant
                    </Button>
                    {prevNote ? (
                      <Button asChild variant="outline" size="sm" className="rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700">
                        <Link href={`/dashboard/${courseId}/${encodeURIComponent(prevNote.id)}`}>
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="rounded-full bg-slate-700 text-white border-0 px-3 disabled:opacity-50">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    )}
                    {nextNote ? (
                      <Button asChild variant="outline" size="sm" className="rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700">
                        <Link href={`/dashboard/${courseId}/${encodeURIComponent(nextNote.id)}`}>
                          Next
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="rounded-full bg-slate-700 text-white border-0 px-3 disabled:opacity-50">
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="icon" onClick={handlePrint} className="bg-black text-white border-0">
                        <Printer className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleDownload} className="bg-black text-white border-0">
                        <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleToggleFullscreen}
                      aria-label={isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
                      className="bg-black text-white border-0"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="h-4 w-4" />
                      ) : (
                        <Maximize2 className="h-4 w-4" />
                      )}
                    </Button>
                </div>
            </div>
            <div ref={previewContainerRef} className="w-full h-[calc(100vh-12rem)] bg-[#f3f5f7] rounded-xl border-2 border-black/10 shadow-lg overflow-hidden">
                 <iframe
                    id="note-iframe"
                    srcDoc={buildExportHtml(currentHtmlContent || '')}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin"
                    title="Note Preview"
                />
            </div>
          </main>
        </div>
        {currentHtmlContent && (
          <AssistantSidebarNew
            isOpen={isAssistantOpen}
            onClose={() => setIsAssistantOpen(false)}
            note={note}
            currentHtmlContent={currentHtmlContent}
            onHtmlContentUpdate={handleHtmlUpdate}
          />
        )}
      </div>
    </AuthGuard>
  );
}
