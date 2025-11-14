'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getAuthErrorMessage, extractErrorCode } from '@/lib/auth-errors';

const signupSchema = z.object({
  displayName: z.string().min(2, { message: 'Display name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const signinSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthFormProps = {
  mode: 'signin' | 'signup';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const auth = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const hasHandledRedirect = useRef(false);

  // Get return URL from query params or default to dashboard
  const returnUrl = searchParams.get('returnUrl') || '/dashboard';

  // Handle Google OAuth redirect result (runs once on mount)
  useEffect(() => {
    if (hasHandledRedirect.current) return;
    
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          hasHandledRedirect.current = true;
          setIsGoogleLoading(true);
          toast({ title: 'Signed in with Google successfully!' });
          // Auth state listener will handle navigation
        }
      } catch (error: any) {
        hasHandledRedirect.current = true;
        const errorInfo = getAuthErrorMessage(extractErrorCode(error));
        toast({
          variant: 'destructive',
          title: errorInfo.title,
          description: errorInfo.message,
        });
        setIsGoogleLoading(false);
      } finally {
        // In some environments result may be null even though the user is signed in.
        // If Firebase already has a current user, navigate immediately.
        if (auth?.currentUser) {
          router.replace(returnUrl);
        }
      }
    };

    handleRedirectResult();
  }, []);

  // Event-driven navigation: redirect when user becomes authenticated
  useEffect(() => {
    if (user) {
      router.replace(returnUrl);
    }
  }, [user, router, returnUrl]);

  // Fallback: subscribe directly to auth state to navigate immediately after Google return
  useEffect(() => {
    if (!auth) return;
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        router.replace(returnUrl);
      }
    });
    return () => unsub();
  }, [auth, router, returnUrl]);


  const isSigningIn = mode === 'signin';
  const formSchema = isSigningIn ? signinSchema : signupSchema;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isSigningIn 
      ? { email: '', password: '' } 
      : { displayName: '', email: '', password: '' } as any,
  });

  const onSubmit = async (values: any) => {
    if (!auth) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'Authentication service is not available. Please try again.',
      });
      return;
    }

    setIsLoading(true);

    try {
      if (mode === 'signup' && 'displayName' in values) {
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          values.email, 
          values.password
        );
        
        // Update profile with display name
        await updateProfile(userCredential.user, { 
          displayName: values.displayName 
        });
        
        toast({ 
          title: 'Account created successfully!', 
          description: "You've been signed in." 
        });
        
        // Navigation will be handled by useEffect when user state updates
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, values.email, values.password);
        
        toast({ title: 'Signed in successfully!' });
        
        // Navigation will be handled by useEffect when user state updates
      }
    } catch (error: any) {
      const errorInfo = getAuthErrorMessage(extractErrorCode(error));
      toast({
        variant: 'destructive',
        title: errorInfo.title,
        description: errorInfo.message,
      });
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!auth) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'Authentication service is not available. Please try again.',
      });
      return;
    }

    setIsGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account',
      });
      // Try popup first for better reliability in dev environments
      try {
        await signInWithPopup(auth, provider);
        toast({ title: 'Signed in with Google successfully!' });
        router.replace(returnUrl);
        return;
      } catch (popupError: any) {
        // Fallback to redirect if popup is blocked or not allowed
        await signInWithRedirect(auth, provider);
      }
    } catch (error: any) {
      const errorInfo = getAuthErrorMessage(extractErrorCode(error));
      toast({
        variant: 'destructive',
        title: errorInfo.title,
        description: errorInfo.message,
      });
      setIsGoogleLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    const email = form.getValues('email');
    if (!email) {
      form.setError('email', { 
        type: 'manual', 
        message: 'Please enter your email to reset password.' 
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: 'Password Reset Email Sent',
        description: 'Check your inbox for instructions to reset your password.',
      });
    } catch (error: any) {
      const errorInfo = getAuthErrorMessage(extractErrorCode(error));
      toast({
        variant: 'destructive',
        title: errorInfo.title,
        description: errorInfo.message,
      });
    }
  };

  const title = isSigningIn ? 'Sign In to Your Account' : 'Create a New Account';
  const description = isSigningIn
    ? "Welcome back! Enter your credentials to continue."
    : 'Join us! Create an account to get started.';
  const buttonText = isSigningIn ? 'Sign In' : 'Sign Up';
  const toggleLinkHref = isSigningIn ? '/signup' : '/signin';
  const toggleLinkText = isSigningIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In';

  return (
    <Card className="w-full max-w-sm glass-card rounded-2xl border border-orange-100/60 shadow-lg">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {!isSigningIn && (
               <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">Display Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-white/90 border-slate-200 placeholder:text-slate-400 focus-visible:ring-orange-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      className="bg-white/90 border-slate-200 placeholder:text-slate-400 focus-visible:ring-orange-500 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-white/90 border-slate-200 placeholder:text-slate-400 focus-visible:ring-orange-500 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md shadow-orange-200"
              disabled={isLoading || isGoogleLoading}
            >
              {isLoading ? 'Processing...' : buttonText}
            </Button>
          </form>
        </Form>
        {isSigningIn && (
          <div className="text-right mt-2">
            <Button variant="link" size="sm" className="p-0 h-auto text-orange-600" onClick={handlePasswordReset}>
              Forgot Password?
            </Button>
          </div>
        )}
        <Separator className="my-6 bg-slate-200" />
        <Button
          variant="outline"
          className="w-full border-slate-200 text-slate-800 hover:bg-orange-50"
          onClick={handleGoogleSignIn}
          disabled={isLoading || isGoogleLoading}
        >
           {isGoogleLoading ? 'Signing in...' : 'Sign in with Google'}
        </Button>
        <div className="mt-6 text-center text-sm">
          <Link href={toggleLinkHref} className="text-orange-600 hover:underline">
            {toggleLinkText}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
