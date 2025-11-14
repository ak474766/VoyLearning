'use client';

import Link from 'next/link';
import { AuthGuard } from '@/components/auth/auth-guard';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { FcGraduationCap } from "react-icons/fc";

export default function QuizzesPage() {
  const auth = useAuth();
  const { user } = useUser();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';

  return (
    <AuthGuard>
      <div className="min-h-screen w-full relative bg-white">
        <div className="relative z-10">
          <header className="sticky top-0 z-30 border-b bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href="/" className="font-extrabold tracking-wide text-lg">
                 <FcGraduationCap />Voylearning
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
            <section className="mb-10 md:mb-12">
              <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-white ring-1 ring-white/20"
                   style={{
                     background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #22D3EE 100%)',
                   }}>
                <div className="pointer-events-none absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 80% 40%, rgba(255,255,255,.25), transparent 40%)'}} />
                <h2 className="relative text-2xl md:text-3xl font-bold mb-2">Welcome, {firstName}! · Quizzes</h2>
                <p className="relative text-white/90 max-w-2xl mb-2 text-sm md:text-base">
                  I'm working on it. Stay tuned!
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
