'use client';
import * as React from 'react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, ChevronLeft, ChevronRight, Star, RotateCcw, Maximize2, Minimize2, MoreVertical, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import AssistantSidebarNew from './assistant-sidebar-new';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { AuthGuard } from '@/components/auth/auth-guard';
import { useNotePreview } from '@/hooks/use-note-preview';
import { saveModifiedHtml, deleteModifiedHtml } from '@/services/firebase/html-storage';
import { Badge } from '../ui/badge';
import { ataNotesData } from '@/data/notes/ataData';
import { bdaNotesData } from '@/data/notes/bdaData';
import { fspNotesData } from '@/data/notes/fspData';
import { lanaNotesData } from '@/data/notes/lanaData';
import { noNotesData } from '@/data/notes/noData';
import { prpNotesData } from '@/data/notes/prpData';
import { vsdNotesData } from '@/data/notes/vsdData';
import { faiNotesData } from '@/data/notes/faiData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


import { NoteData } from '@/types/notes';

type NotePreviewLayoutProps = {
  courseName: string;
  courseTitle: string;
  note: NoteData | undefined;
  coursePath: string;
};

export default function NotePreviewLayout({ courseName, courseTitle, note, coursePath }: NotePreviewLayoutProps) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';

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
      updateHtml(newHtml);
      await saveModifiedHtml(user.uid, weekId, lectureId, newHtml);
      toast({
        title: '✓ Changes saved',
        description: 'Your modified version has been saved to your account.'
      });
    } catch (error) {
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
      await deleteModifiedHtml(user.uid, weekId, lectureId);
      await reload();
      toast({
        title: 'Reset Complete',
        description: 'The note has been reset to its original version.'
      });
    } catch (error) {
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
        <div className="flex h-screen w-full bg-slate-950 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            <p className="text-purple-300 animate-pulse">Loading your note...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  const handlePrint = () => {
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
      <TooltipProvider>
        <div className="min-h-screen w-full relative bg-slate-950 text-white overflow-hidden selection:bg-purple-500/30 flex flex-col">
          {/* Animated Background Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
          </div>

          {/* Minimalist Header */}
          <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full">
                <Link href={coursePath}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex flex-col">
                <h1 className="text-sm font-semibold text-white leading-none">{note.title}</h1>
                <span className="text-xs text-gray-400 mt-1">
                  {note.week != 0 && `Week ${note.week}`}
                  {note.week != 0 && note.lesson != 0 && " • "}
                  {note.lesson != 0 && `Lecture ${note.lesson}`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isModified ? (
                <Badge variant="secondary" className="text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-0.5">
                  Edited
                </Badge>
              ) : (
                <Badge variant="outline" className="text-xs rounded-full bg-white/5 text-gray-400 border border-white/10 px-3 py-0.5">
                  Original
                </Badge>
              )}
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[1px]">
                <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{firstName[0]}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area - Maximized */}
          <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-0 sm:p-2 pt-20 pb-0">
            <div
              ref={previewContainerRef}
              className={`w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-50 h-screen rounded-none' : 'h-[calc(100vh-6rem)] max-w-[98%] sm:rounded-2xl border border-white/10 ring-1 ring-white/20'}`}
            >
              <iframe
                id="note-iframe"
                srcDoc={buildExportHtml(currentHtmlContent || '')}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
                title="Note Preview"
              />
            </div>
          </main>

          {/* Floating Dock / Action Bar */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">

              {/* Navigation Group */}
              <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                <Tooltip>
                  <TooltipTrigger asChild>
                    {prevNote ? (
                      <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10">
                        <Link href={`/dashboard/${courseId}/${encodeURIComponent(prevNote.id)}`}>
                          <ChevronLeft className="h-5 w-5" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" disabled className="h-10 w-10 rounded-xl text-gray-600">
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>Previous Lecture</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    {nextNote ? (
                      <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10">
                        <Link href={`/dashboard/${courseId}/${encodeURIComponent(nextNote.id)}`}>
                          <ChevronRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" disabled className="h-10 w-10 rounded-xl text-gray-600">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>Next Lecture</TooltipContent>
                </Tooltip>
              </div>

              {/* Tools Group */}
              <div className="flex items-center gap-1 px-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleAssistantClick}
                      className="h-10 w-10 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>AI Assistant</TooltipContent>
                </Tooltip>

                {isModified && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/20">
                        <RotateCcw className="h-5 w-5" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-slate-900 border border-white/10 text-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Reset Changes?</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                          This will revert the note to its original state. Custom edits will be lost.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-white/5 border-white/10 text-white hover:bg-white/10">Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleResetToOriginal} className="bg-red-600 hover:bg-red-700">Reset</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleToggleFullscreen} className="h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10">
                      {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</TooltipContent>
                </Tooltip>
              </div>

              {/* Export Group */}
              <div className="flex items-center gap-1 pl-2 border-l border-white/10">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handlePrint} className="h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10">
                      <Printer className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Print</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={handleDownload} className="h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10">
                      <Download className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Download HTML</TooltipContent>
                </Tooltip>
              </div>

            </div>
          </div>

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
      </TooltipProvider>
    </AuthGuard>
  );
}
