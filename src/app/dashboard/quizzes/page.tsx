'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AuthGuard } from '@/components/auth/auth-guard';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import VoyLearningLogo from '@/components/ui/voylearninglogo';
import { FiLogOut } from 'react-icons/fi';

export default function QuizzesPage() {
  const auth = useAuth();
  const { user } = useUser();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';

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
        <header className="fixed top-4 left-4 right-4 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="glass-dark rounded-2xl px-6 h-16 flex items-center justify-between shadow-lg shadow-black/20 border border-white/10">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
                  <VoyLearningLogo />
                </Link>
                <nav className="hidden md:flex items-center gap-1">
                  {['Notes', 'Mind Map', 'Quizzes'].map((item) => (
                    <Link
                      key={item}
                      href={`/dashboard/${item.toLowerCase().replace(' ', '-') === 'notes' ? '' : item.toLowerCase().replace(' ', '-')}`}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${item === 'Quizzes'
                          ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {item}
                    </Link>
                  ))}
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
                    Quizzes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-gradient-x">Zone</span>
                  </h1>
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                    Test your knowledge and track your progress. We are building something amazing for you!
                  </p>
                </div>

                {/* Decorative 3D Elements */}
                <div className="hidden lg:block relative w-[400px] h-[300px] pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[60px]" />

                  {/* Floating 3D Images */}
                  <div className="absolute top-0 right-0 w-80 h-80 animate-float z-10">
                    <Image
                      src="/images/quiz_3d.png"
                      alt="3D Quiz"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Placeholder */}
          <section className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse border border-white/10">
              <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              We are working hard to bring you the best quiz experience. Stay tuned for updates!
            </p>
          </section>
        </main>
      </div>
    </AuthGuard>
  );
}
