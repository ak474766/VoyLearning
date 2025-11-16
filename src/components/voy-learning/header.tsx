"use client";

import BubbleMenu from "@/components/ui/bubblemenu";
import { useUser } from "@/firebase";
import VoylearningLogo from '@/components/ui/voylearninglogo';
type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export default function Header() {
  const { user } = useUser();

  const items: MenuItem[] = [
    {
      label: 'subjects',
      href: '#subjects',
      ariaLabel: 'Subjects',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'features',
      href: '#features',
      ariaLabel: 'Features',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'how it works',
      href: '#how-it-works',
      ariaLabel: 'How It Works',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'benefits',
      href: '#benefits',
      ariaLabel: 'Benefits',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '#contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },
    ...(user
      ? [
          {
            label: 'dashboard',
            href: '/dashboard',
            ariaLabel: 'Dashboard',
            rotation: 8,
            hoverStyles: { bgColor: '#6366f1', textColor: '#ffffff' }
          }
        ]
      : [
          {
            label: 'sign in',
            href: '/signin',
            ariaLabel: 'Sign In',
            rotation: 8,
            hoverStyles: { bgColor: '#0ea5e9', textColor: '#ffffff' }
          },
          {
            label: 'get started',
            href: '/signup',
            ariaLabel: 'Get Started',
            rotation: -8,
            hoverStyles: { bgColor: '#22c55e', textColor: '#ffffff' }
          }
        ])
  ];

  return (
    <BubbleMenu
      logo={<VoylearningLogo />}

      items={items}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={false}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}
