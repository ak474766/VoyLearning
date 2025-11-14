'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AuthGuard } from '@/components/auth/auth-guard';
import { FcGraduationCap } from "react-icons/fc";
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';

const cards = [
  { title: 'Algorithmic Thinking and its Applications', href: '/dashboard/ata', img: '/New folder/image.png' },
  { title: 'Basics of Data Analytics', href: '/dashboard/bda', img: '/New folder/image (1).png' },
  { title: 'Foundations of Statistics and Probability', href: '/dashboard/fsp', img: '/New folder/image (2).png' },
  { title: 'Linear Algebra and Numeical Analysis', href: '/dashboard/lana', img: '/New folder/image (3).png' },
  { title: 'Foundations of AI', href: '/dashboard/fai', img: '/New folder/image (4).png' },
  { title: 'Numerical Optimization', href: '/dashboard/no', img: '/New folder/image (5).png' },
  { title: 'Pattern Recognition Principles', href: '/dashboard/prp', img: '/New folder/image (6).png' },
  { title: 'Visualization and Storytelling with Data', href: '/dashboard/vsd', img: '/New folder/image (7).png' },
  
];

export default function DashboardPage() {
  const auth = useAuth();
  const { user } = useUser();
  const firstName = user?.displayName?.split(' ')[0] || 'Student';

  return (
    <AuthGuard>
      <div className="min-h-screen w-full relative bg-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: '#ffffff',
            backgroundImage: `
              radial-gradient(circle at top left, rgba(255, 140, 60, 0.5), transparent 70%)
            `,
            filter: 'blur(80px)',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at top right, rgba(139, 92, 246, 0.35), transparent 65%),
              radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.25), transparent 60%)
            `,
            filter: 'blur(90px)',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="relative z-10">
          <header className="sticky top-0 z-30 border-b bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href="/" className="font-extrabold tracking-wide text-lg">
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
            <section className="mb-10 md:mb-12">
              <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-white ring-1 ring-white/20"
                   style={{
                     background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #22D3EE 100%)',
                   }}>
                <div className="pointer-events-none absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 80% 40%, rgba(255,255,255,.25), transparent 40%)'}} />
                <h2 className="relative text-2xl md:text-3xl font-bold mb-2">Welcome, {firstName}! · Notes</h2>
                <p className="relative text-white/90 max-w-2xl mb-6 text-sm md:text-base">
                  Browse your courses and open any note to get started.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Create Study Guide</button>
                  <button className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20">My Study Guides</button>
                  <button className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/20">All Study Guides</button>
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                  <Link key={idx} href={card.href} className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow block">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white text-sm md:text-base font-semibold leading-snug drop-shadow-md line-clamp-2">{card.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
