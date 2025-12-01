'use client';

import AuthForm from '@/components/auth/auth-form';
import { useUser } from '@/firebase';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SignUpPage() {
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (user) {
      const returnUrl = searchParams.get('returnUrl') || '/dashboard';
      router.replace(returnUrl);
    }
  }, [user, router, searchParams]);
  return (
    <div className="min-h-screen w-full flex bg-[#0a0a0a] text-white overflow-hidden">
      {/* Left Panel - Auth & Content */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-24 relative z-10">
        <div className="max-w-md w-full mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white">
              Impossible? <br />
              <span className="italic text-white/90">Possible.</span>
            </h1>
            <p className="text-lg text-white/60 font-medium tracking-wide">
              The AI for problem solvers
            </p>
          </div>

          <AuthForm mode="signup" isDark={true} />
        </div>

        <div className="absolute bottom-8 left-8 lg:left-24 text-xs text-white/20">
          powered by voyager
        </div>
      </div>

      {/* Right Panel - Visual/Video */}
      <div className="hidden lg:block lg:w-[55%] relative h-screen bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <video
            src="/images/armaan.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to blend if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
