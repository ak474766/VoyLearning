'use client';

import AuthForm from '@/components/auth/auth-form';
import { useUser } from '@/firebase';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SignInPage() {
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
    <div className="mt-13 min-h-screen w-full relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#ffffff',
          backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(255, 140, 60, 0.5),
          transparent 70%
        )
      `,
          filter: 'blur(80px)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="hidden md:block">
            <div className="relative mx-auto aspect-[4/5] max-w-md rounded-2xl overflow-hidden ring-1 ring-orange-200 shadow-xl">
              <Image
                src="/images/armaan.png"
                alt="Welcome illustration"
                fill
                className="object-cover object-top drop-shadow-[0_12px_40px_rgba(255,140,60,0.25)]"
                priority
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center md:items-start">
            <AuthForm mode="signin" />
            <p className="mt-6 text-xs text-slate-600">
              powered by <span className="font-semibold text-orange-600">voyager</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
