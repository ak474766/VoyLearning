'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { useAuth, useUser } from '@/firebase';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { AuthGuard } from '@/components/auth/auth-guard';
import { Search, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import VoyLearningLogo from '@/components/ui/voylearninglogo';
import { FiBell, FiLogOut } from 'react-icons/fi';
import Image from 'next/image';

type Note = {
  id: string;
  title: string;
  description: string;
  week: number | string;
  lesson: number | string;
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
  const { user } = useUser();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredNotes = useMemo(() => {
    return notesData.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [notesData, searchTerm]);

  return (
    <AuthGuard>
      <div className="min-h-screen w-full relative bg-slate-950 text-white overflow-x-hidden selection:bg-purple-500/30">
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        {/* Floating Glass Header */}
        <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl px-6 h-16 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/10 bg-slate-900/60 backdrop-blur-xl">
              <div className="flex items-center gap-8">
                <Link href="/dashboard" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
                  <VoyLearningLogo />
                </Link>
                <nav className="hidden md:flex items-center gap-1">
                  {['Notes', 'Mind Map', 'Quizzes'].map((item) => (
                    <Link
                      key={item}
                      href={`/dashboard/${item.toLowerCase().replace(' ', '-') === 'notes' ? '' : item.toLowerCase().replace(' ', '-')}`}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${item === 'Notes'
                        ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {item}
                    </Link>
                  ))}
                  <a
                    href="https://bsj-pyqs-hub.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/20 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    BS-J Community
                  </a>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-6 w-px bg-white/10" />
                <div className="flex items-center gap-3 pl-2">
                  <div className="hidden sm:block text-right">
                    <p className="text-sm font-semibold text-white leading-none">{user?.displayName || 'Student'}</p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[1px]">
                    <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{firstName[0]}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => signOut(auth)}
                    className="ml-2 p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-colors"
                    title="Logout"
                  >
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="relative z-10 pt-28 pb-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          {/* Course Header Section */}
          <section className="mb-10">
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 glass-card border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                        Course
                      </span>
                      <span className="text-gray-400 text-sm font-medium">{courseName}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      {courseTitle}
                    </h1>
                    <p className="text-gray-300 max-w-2xl text-lg">
                      Explore lessons, notes, and resources to master this subject.
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-96 group/search">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within/search:text-purple-400 transition-colors" />
                    <Input
                      placeholder="Search notes in this course..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-11 pr-5 py-6 rounded-xl bg-black/30 text-white placeholder:text-gray-500 shadow-inner border border-white/10 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-transparent backdrop-blur-md transition-all hover:bg-black/40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="flex flex-col bg-white/5 border border-white/10 hover:border-purple-500/30 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm group">
                <CardHeader className="pb-3 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                        {note.title}
                      </CardTitle>
                      {(note.week != 0 || note.lesson != 0) && (
                        <CardDescription className="text-gray-400 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {note.week != 0 && `Week ${note.week}`}
                          {note.week != 0 && note.lesson != 0 && " • "}
                          {note.lesson != 0 && `Lecture ${note.lesson}`}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                    {note.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-white/5 pt-4 pb-4 px-6 text-xs text-gray-400 bg-black/20 rounded-b-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5" title="Date Added">
                      <Calendar className="h-3.5 w-3.5 text-purple-400" />
                      <span>{note.dateAdded}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Read Time">
                      <Clock className="h-3.5 w-3.5 text-pink-400" />
                      <span>{note.readTime}</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-none hover:shadow-lg transition-all group/btn">
                    <Link href={`/dashboard/${courseName.toLowerCase()}/${encodeURIComponent(note.id)}`} className="flex items-center gap-2">
                      Read <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No notes found</h3>
              <p className="text-gray-400">Try adjusting your search terms to find what you are looking for.</p>
            </div>
          )}
        </main>
      </div>
    </AuthGuard>
  );
}
