import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VoyLearning',
  description: 'Premium design system for VoyLearning with glass morphism, gradients, and GSAP animations across a refined landing experience.',
  openGraph: {
    title: 'Premium Design System - VoyLearning',
    description: 'Premium design system for VoyLearning with glass morphism, gradients, and GSAP animations across a refined landing experience.',
    url: 'https://voylearning.com',
    siteName: 'VoyLearning',
    images: [
      {
        url: 'https://voylearning.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            {children}
          </FirebaseClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
