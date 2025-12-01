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
import { motion } from 'motion/react';

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
  isDark?: boolean;
};

export default function AuthForm({ mode, isDark = false }: AuthFormProps) {
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

  const title = isSigningIn ? 'Sign In' : 'Create Account';
  const description = isSigningIn
    ? "Welcome back"
    : 'Join us';
  const buttonText = isSigningIn ? 'Continue with email' : 'Create account';
  const toggleLinkHref = isSigningIn ? '/signup' : '/signin';
  const toggleLinkText = isSigningIn
    ? "Don't have an account? Sign Up"
    : 'Already have an account? Sign In';

  // Styles based on isDark prop
  const cardClasses = isDark
    ? "w-full bg-transparent border-none shadow-none p-0"
    : "w-full glass-card rounded-2xl border border-orange-100/60 shadow-lg overflow-hidden";

  const inputClasses = isDark
    ? "bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/30 focus-visible:ring-white/20 focus-visible:border-white/40 h-12"
    : "bg-white/90 border-slate-200 placeholder:text-slate-400 focus-visible:ring-orange-500 focus-visible:ring-offset-0 transition-all duration-200 focus:scale-[1.01]";

  const labelClasses = isDark ? "text-white/70" : "text-slate-700";

  const primaryButtonClasses = isDark
    ? "w-full bg-white text-black hover:bg-gray-200 shadow-none h-12 font-medium"
    : "w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md shadow-orange-200 transition-all duration-300 hover:shadow-orange-300 hover:-translate-y-0.5";

  const googleButtonClasses = isDark
    ? "w-full bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#222] h-12 font-medium"
    : "w-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-0.5";

  const separatorColor = isDark ? "bg-[#333]" : "bg-slate-200";
  const linkColor = isDark ? "text-white/60 hover:text-white" : "text-orange-600 hover:underline font-medium transition-colors hover:text-orange-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full"
    >
      <Card className={cardClasses}>
        {!isDark && (
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              {title}
            </CardTitle>
            <CardDescription className="text-slate-600">{description}</CardDescription>
          </CardHeader>
        )}
        <CardContent className={isDark ? "p-0" : ""}>
          {/* Google Button First for Dark Mode (Reference Style) */}
          {isDark && (
            <div className="mb-6">
              <Button
                variant="outline"
                className={googleButtonClasses}
                onClick={handleGoogleSignIn}
                disabled={isLoading || isGoogleLoading}
              >
                {isGoogleLoading ? 'Signing in...' : (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                      <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853" />
                      <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                      <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                  </span>
                )}
              </Button>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className={`w-full border-t ${isDark ? 'border-[#333]' : 'border-slate-200'}`} />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className={`px-2 ${isDark ? 'bg-[#0a0a0a] text-white/40' : 'bg-white text-slate-500'}`}>
                    Or
                  </span>
                </div>
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!isSigningIn && (
                <FormField
                  control={form.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      {!isDark && <FormLabel className={labelClasses}>Display Name</FormLabel>}
                      <FormControl>
                        <Input
                          placeholder="Display Name"
                          className={inputClasses}
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
                    {!isDark && <FormLabel className={labelClasses}>Email</FormLabel>}
                    <FormControl>
                      <Input
                        placeholder={isDark ? "Enter your email" : "name@example.com"}
                        className={inputClasses}
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
                    {!isDark && <FormLabel className={labelClasses}>Password</FormLabel>}
                    <FormControl>
                      <Input
                        type="password"
                        placeholder={isDark ? "Password" : "••••••••"}
                        className={inputClasses}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={primaryButtonClasses}
                disabled={isLoading || isGoogleLoading}
              >
                {isLoading ? 'Processing...' : buttonText}
              </Button>
            </form>
          </Form>

          {isSigningIn && (
            <div className={`text-right mt-2 ${isDark ? 'hidden' : ''}`}>
              <Button variant="link" size="sm" className="p-0 h-auto text-orange-600" onClick={handlePasswordReset}>
                Forgot Password?
              </Button>
            </div>
          )}

          {!isDark && (
            <>
              <Separator className="my-6 bg-slate-200" />
              <Button
                variant="default"
                className={googleButtonClasses}
                onClick={handleGoogleSignIn}
                disabled={isLoading || isGoogleLoading}
              >
                {isGoogleLoading ? 'Signing in...' : 'Sign in with Google'}
              </Button>
            </>
          )}

          <div className="mt-6 text-center text-sm">
            <Link href={toggleLinkHref} className={linkColor}>
              {toggleLinkText}
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
