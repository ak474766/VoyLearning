"use client";

import BubbleMenu from "@/components/ui/bubblemenu";
import { useUser } from "@/firebase";
import VoylearningLogo from '@/components/ui/voylearninglogo';
import * as React from "react";
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

import { gsap } from "gsap";

export default function Header() {
  const { user } = useUser();
  const headerRef = React.useRef<HTMLDivElement>(null);
  const lastScrollY = React.useRef(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      if (menuOpen) return;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 50;
      const isScrollingUp = currentScrollY < lastScrollY.current || currentScrollY < 50;

      if (isScrollingDown) {
        gsap.to(header, {
          y: -150,
          duration: 0.1,
          ease: "power3.inOut",
          overwrite: true
        });
      } else if (isScrollingUp) {
        gsap.to(header, {
          y: 0,
          duration: 0.1,
          ease: "power3.inOut",
          overwrite: true
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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
    <div
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[11000] will-change-transform pointer-events-none"
    >
      <BubbleMenu
        logo={<img src="images/VoyLearning.png" alt="VoyLearning" className="h-6 md:h-8 w-auto object-contain" />}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        onMenuClick={setMenuOpen}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </div>
  );
}
