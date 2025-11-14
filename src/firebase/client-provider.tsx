'use client';

import React, { useState, useEffect, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';



interface FirebaseClientProviderProps {
  children: ReactNode;
}

interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  storage: FirebaseStorage;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const [firebaseServices, setFirebaseServices] = useState<FirebaseServices | null>(null);
  const [initError, setInitError] = useState<Error | null>(null);

  useEffect(() => {
    // Initialize Firebase only once on mount
    try {
      const services = initializeFirebase();
      setFirebaseServices(services);
    } catch (error) {
      console.error('FirebaseClientProvider: Failed to initialize Firebase', error);
      setInitError(error as Error);
    }
  }, []);

  // Show error state if initialization failed
  if (initError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Firebase Initialization Error</h2>
          <p className="text-muted-foreground">{initError.message}</p>
        </div>
      </div>
    );
  }

  // Show loading state while initializing
  if (!firebaseServices) {
    return (
      <div className="min-h-screen w-full relative bg-black">
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
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <video
            src="/LOADING%203D%20TEXT.webm"
            autoPlay
            loop
            muted
            playsInline
            className="h-200 w-200 md:h-56 md:w-56 object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
      storage={firebaseServices.storage}
    >
      {children}
    </FirebaseProvider>
  );
}