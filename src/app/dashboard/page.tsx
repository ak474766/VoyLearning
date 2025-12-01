'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthGuard } from '@/components/auth/auth-guard';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import VoyLearningLogo from '@/components/ui/voylearninglogo';
import { FiSearch, FiLogOut } from 'react-icons/fi';

const cards = [
  { title: 'Algorithmic Thinking and its Applications', href: '/dashboard/ata', img: '/New folder/image.png', color: 'from-blue-500 to-cyan-500' },
  { title: 'Basics of Data Analytics', href: '/dashboard/bda', img: '/New folder/image (1).png', color: 'from-emerald-500 to-teal-500' },
  { title: 'Foundations of Statistics and Probability', href: '/dashboard/fsp', img: '/New folder/image (2).png', color: 'from-orange-500 to-red-500' },
  { title: 'Linear Algebra and Numerical Analysis', href: '/dashboard/lana', img: '/New folder/image (3).png', color: 'from-indigo-500 to-purple-500' },
  { title: 'Foundations of AI', href: '/dashboard/fai', img: '/New folder/image (4).png', color: 'from-violet-600 to-fuchsia-600' },
  { title: 'Numerical Optimization', href: '/dashboard/no', img: '/New folder/image (5).png', color: 'from-amber-500 to-orange-600' },
  { title: 'Pattern Recognition Principles', href: '/dashboard/prp', img: '/New folder/image (6).png', color: 'from-pink-500 to-rose-500' },
  { title: 'Visualization and Storytelling with Data', href: '/dashboard/vsd', img: '/New folder/image (7).png', color: 'from-cyan-500 to-blue-600' },
];

export default function DashboardPage() {
  const auth = useAuth();
  const { user } = useUser();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
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
          {/* Welcome Section */}
          <section className="mb-12">
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 glass-card border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl z-20">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-gradient-x">{firstName}</span>!
                  </h1>
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                    Ready to continue your learning journey? Pick up where you left off or explore new notes.
                  </p>

                  <div className="relative max-w-md group/search">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-gray-400 group-focus-within/search:text-purple-300 transition-colors" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-11 pr-4 py-4 bg-black/30 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-md transition-all shadow-inner hover:bg-black/40"
                      placeholder="Search for notes, topics, or keywords..."
                    />
                  </div>
                </div>

                {/* Decorative 3D Elements */}
                <div className="hidden lg:block relative w-[400px] h-[300px] pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[60px]" />

                  {/* Floating 3D Images */}
                  <div className="absolute top-0 right-0 w-64 h-64 animate-float z-10">
                    <Image
                      src="/images/3d_notebook.png"
                      alt="3D Notebook"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-[-20px] left-0 w-48 h-48 animate-float animation-delay-2000 z-0 opacity-90">
                    <Image
                      src="/images/pencil_and_book.png"
                      alt="Pencil and Book"
                      fill
                      className="object-contain drop-shadow-2xl rotate-[-15deg]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full block shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Your Courses
              </h2>
              <button className="text-sm font-medium text-purple-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCards.length > 0 ? (
                filteredCards.map((card, idx) => (
                  <Link
                    key={idx}
                    href={card.href}
                    className="group relative flex flex-col overflow-hidden rounded-3xl glass-card border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                      {/* Overlay Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${card.color} shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse`} />
                      </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between relative bg-gradient-to-b from-white/0 to-white/5">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />

                      <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300 line-clamp-2">
                        {card.title}
                      </h3>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 group-hover:border-purple-500/30 transition-colors">
                          Course
                        </span>
                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors flex items-center gap-1 translate-x-0 group-hover:translate-x-1 duration-300">
                          Open Note <span className="text-purple-400">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-400">
                  <p>No courses found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </AuthGuard>
  );
}
