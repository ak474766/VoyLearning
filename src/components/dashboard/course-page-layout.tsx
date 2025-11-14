'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FcGraduationCap } from "react-icons/fc";
import { AuthGuard } from '@/components/auth/auth-guard';
import { Search, Calendar, Clock } from 'lucide-react';

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

type CoursePageLayoutProps = {
  courseName: string;
  courseTitle: string;
  notesData: Note[];
};

export default function CoursePageLayout({ courseName, courseTitle, notesData }: CoursePageLayoutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const auth = useAuth();
  
  const filteredNotes = useMemo(() => {
    return notesData.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [notesData, searchTerm]);

  return (
    <AuthGuard>
      <div className="min-h-screen w-full relative bg-[#f6d7d7]">
        <div
          className="hidden"
          style={{
            background: '#ffffff',
            backgroundImage: `radial-gradient(circle at top left, rgba(255, 140, 60, 0.5), transparent 70%)`,
            filter: 'blur(80px)',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="hidden"
          style={{
            backgroundImage: `radial-gradient(circle at top right, rgba(139, 92, 246, 0.35), transparent 65%), radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.25), transparent 60%)`,
            filter: 'blur(90px)',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10">
          <header className="sticky top-0 z-30 border-b bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="font-extrabold tracking-wide text-lg">
                  <FcGraduationCap />VoyLearning
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
                  <Link href="/dashboard" className="hover:text-white">Notes</Link>
                  <Link href="/dashboard/mind-map" className="hover:text-white">Mind Map</Link>
                  <Link href="/dashboard/quizzes" className="hover:text-white">Quizzes</Link>
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
            <section className="mb-6">
              <div className="rounded-[24px] px-8 py-10 text-white shadow-xl ring-1 ring-white/20 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899]">
                <h1 className="text-base md:text-lg font-semibold tracking-wide mb-1">{courseName} - {courseTitle}</h1>
                <p className="text-white/90 text-sm md:text-base">Search and open any note in this course.</p>
              </div>
            </section>

            <div className="mb-10">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11 pr-5 py-6 rounded-full bg-white text-slate-900 placeholder:text-slate-400 shadow-xl border-0 ring-1 ring-black/5 focus-visible:ring-2 focus-visible:ring-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="flex flex-col bg-[#0E1525] text-white border-0 rounded-2xl shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{note.title}</CardTitle>
                        {(note.week > 0 || note.lesson > 0) && (
                          <CardDescription className="text-white/60">{`Week ${note.week} - Lesson ${note.lesson}`}</CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-white/80 mb-4">{note.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/80">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 opacity-70" />
                        <span>{note.dateAdded}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 opacity-70" />
                        <span>{note.readTime}</span>
                      </div>
                    </div>
                    <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white px-4 py-1.5 shadow hover:opacity-90">
                      <Link href={`/dashboard/${courseName.toLowerCase()}/${encodeURIComponent(note.id)}`}>Open</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {filteredNotes.length === 0 && (
                <div className="text-center col-span-full py-12">
                    <p className="text-muted-foreground">No notes found for your search.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}

