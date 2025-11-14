'use client';

import { useUser, useFirebase } from '@/firebase';
import { useEffect, useState } from 'react';

export function AuthDebug() {
  const { user, isUserLoading, userError } = useUser();
  const { auth } = useFirebase();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    if (auth) {
      setCurrentUser(auth.currentUser);
      const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log('AuthDebug: Auth state changed:', user);
        setCurrentUser(user);
      });
      return () => unsubscribe();
    }
  }, [auth]);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <div className="font-bold mb-2">Auth Debug</div>
      <div>Auth Available: {auth ? 'Yes' : 'No'}</div>
      <div>Loading: {isUserLoading ? 'Yes' : 'No'}</div>
      <div>User (Hook): {user ? user.email : 'None'}</div>
      <div>User (Direct): {currentUser ? currentUser.email : 'None'}</div>
      <div>Display Name: {user?.displayName || currentUser?.displayName || 'None'}</div>
      <div>Email Verified: {user?.emailVerified || currentUser?.emailVerified ? 'Yes' : 'No'}</div>
      <div>UID: {user?.uid || currentUser?.uid || 'None'}</div>
      {userError && <div className="text-red-400">Error: {userError.message}</div>}
      <div className="mt-2 text-xs opacity-75">
        Refresh count: {Math.floor(Date.now() / 1000) % 100}
      </div>
    </div>
  );
}
