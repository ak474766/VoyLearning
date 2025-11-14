'use client';

import { useState } from 'react';
import { useAuth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AuthTest() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [displayName, setDisplayName] = useState('Test User');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const auth = useAuth();

  const handleSignUp = async () => {
    setLoading(true);
    setMessage('');
    try {
      console.log('AuthTest: Starting signup with:', { email, displayName });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('AuthTest: User created:', userCredential.user);
      
      await updateProfile(userCredential.user, { displayName });
      console.log('AuthTest: Profile updated');
      
      setMessage(`Success! User created: ${userCredential.user.email}`);
    } catch (error: any) {
      console.error('AuthTest: Signup error:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    setMessage('');
    try {
      console.log('AuthTest: Starting signin with:', { email });
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('AuthTest: User signed in:', userCredential.user);
      
      setMessage(`Success! User signed in: ${userCredential.user.email}`);
    } catch (error: any) {
      console.error('AuthTest: Signin error:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setMessage('');
    try {
      await auth.signOut();
      setMessage('Signed out successfully');
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-white border rounded-lg p-4 shadow-lg max-w-sm z-50">
      <div className="font-bold mb-4">Auth Test</div>
      
      <div className="space-y-2 mb-4">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      
      <div className="space-y-2 mb-4">
        <Button onClick={handleSignUp} disabled={loading} className="w-full">
          Sign Up
        </Button>
        <Button onClick={handleSignIn} disabled={loading} className="w-full">
          Sign In
        </Button>
        <Button onClick={handleSignOut} disabled={loading} className="w-full" variant="outline">
          Sign Out
        </Button>
      </div>
      
      {message && (
        <div className={`text-xs p-2 rounded ${message.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {message}
        </div>
      )}
    </div>
  );
}
