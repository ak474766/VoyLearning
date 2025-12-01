'use client'
import type { CSSProperties, ReactNode, MouseEventHandler, KeyboardEventHandler } from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { createPortal } from 'react-dom';

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

export type BubbleMenuProps = {
  logo: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Documentation',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const containerClassName = [
    'bubble-menu',
    useFixedPosition ? 'fixed' : 'absolute',
    'left-0 right-0 top-8',
    'flex items-center justify-between',
    'gap-4 px-8',
    'pointer-events-none',
    'z-[1001]',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const closeMenu = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
    onMenuClick?.(false);
  };

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === overlayRef.current) {
      closeMenu();
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') closeMenu();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay) return;

    if (isMenuOpen) {
      // Ensure the overlay is visible even if refs aren't ready yet
      gsap.set(overlay, { display: 'flex' });
      if (bubbles.length) {
        gsap.killTweensOf([...bubbles, ...labels]);
        // Make items visible by default, then animate in from a subtle state
        gsap.set(bubbles, { scale: 1, transformOrigin: '50% 50%' });
        gsap.set(labels, { y: 0, autoAlpha: 1 });

        bubbles.forEach((bubble, i) => {
          const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
          gsap.from(bubble, {
            scale: 0.9,
            duration: animationDuration,
            ease: animationEase,
            delay
          });
          if (labels[i]) {
            gsap.from(labels[i], {
              y: 24,
              autoAlpha: 0,
              duration: animationDuration,
              ease: 'power3.out',
              delay: Math.max(0, delay - 0.05)
            });
          }
        });
      }
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      if (labels.length) {
        gsap.to(labels, {
          y: 24,
          autoAlpha: 0,
          duration: 0.2,
          ease: 'power3.in'
        });
      }
      if (bubbles.length) {
        gsap.to(bubbles, {
          scale: 0,
          duration: 0.2,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(overlay, { display: 'none' });
            setShowOverlay(false);
          }
        });
      } else {
        // If nothing to animate, hide immediately
        gsap.set(overlay, { display: 'none' });
        setShowOverlay(false);
      }
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  // Lock background scroll while menu is open and focus the overlay for ESC
  useEffect(() => {
    const docEl = document.documentElement;
    const prevHtmlOverflow = docEl.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlPaddingRight = docEl.style.paddingRight;

    if (isMenuOpen) {
      // Prevent background scroll
      const scrollbarGap = window.innerWidth - docEl.clientWidth;
      docEl.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (scrollbarGap > 0) docEl.style.paddingRight = `${scrollbarGap}px`;

      // Focus the overlay for keyboard handling
      setTimeout(() => overlayRef.current?.focus(), 0);
    }

    return () => {
      docEl.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      docEl.style.paddingRight = prevHtmlPaddingRight;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      {/* Workaround for silly Tailwind capabilities */}
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 0;
            align-items: center;
          }
          .bubble-menu-items .pill-list {
            row-gap: 16px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3vw, 4rem);
            padding: clamp(1rem, 2vw, 2rem) 0;
            min-height: 80px !important;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.06);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active {
            transform: scale(.94);
          }
        }
        /* Layout for 7 items: 4 on top, 3 on bottom centered */
        @media (min-width: 900px) {
          .bubble-menu-items .pill-list.layout-7 .pill-col {
            flex: 0 0 25% !important;
          }
          .bubble-menu-items .pill-list.layout-7 .pill-col:nth-child(5) {
            margin-left: 12.5% !important;
          }
        }
      `}</style>

      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <div
          className={[
            'bubble logo-bubble',
            'inline-flex items-center justify-center',
            'rounded-full',
            'bg-white/20',
            'backdrop-blur-md',
            'border border-white/20',
            'ring-1 ring-white/30 dark:ring-white/10',
            // 'overflow-hidden', // Removed to prevent clipping
            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            'h-14 md:h-16',
            'px-4 md:px-8',
            'gap-2',
            'will-change-transform'
          ].join(' ')}
          aria-label="Logo"
          style={{
            minHeight: '48px',
            borderRadius: '9999px'
          }}
        >
          <span
            className={['logo-content', 'inline-flex items-center justify-center', 'h-full w-auto max-w-full'].join(' ')}
            style={
              {
                ['--logo-max-height']: '60%',
                ['--logo-max-width']: '100%'
              } as CSSProperties
            }
          >
            {typeof logo === 'string' ? (
              <img src={logo} alt="Logo" className="bubble-logo max-h-[60%] max-w-full object-contain block" />
            ) : (
              logo
            )}
          </span>
        </div>

        <button
          type="button"
          className={[
            'bubble toggle-bubble menu-btn',
            isMenuOpen ? 'open' : '',
            'inline-flex flex-col items-center justify-center',
            'rounded-full',
            'bg-white/20',
            'backdrop-blur-md',
            'border border-white/20',
            'ring-1 ring-white/30 dark:ring-white/10',
            'overflow-hidden',
            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            'w-14 h-14 md:w-16 md:h-16',
            'border-0 cursor-pointer p-0',
            'will-change-transform'
          ].join(' ')}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}

        >
          <span
            className="menu-line block mx-auto rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
            }}
          />
          <span
            className="menu-line short block mx-auto rounded-[2px]"
            style={{
              marginTop: '6px',
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
            }}
          />
        </button>
      </nav>

      {showOverlay && (
        (mounted
          ? createPortal(
            (
              <div
                ref={overlayRef}
                className={[
                  'bubble-menu-items',
                  'fixed',
                  'inset-0',
                  'flex items-center justify-center',
                  'pointer-events-auto overflow-y-auto',
                  'z-[9999]',
                  'backdrop-blur-2xl',
                  'bg-black/50',
                  'dark:bg-black/60',
                  'overscroll-contain touch-pan-y'
                ].join(' ')}
                aria-hidden={!isMenuOpen}
                role="dialog"
                aria-modal="true"
                onClick={handleBackdropClick}
                onKeyDown={handleKeyDown}
                tabIndex={-1}
              >
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 shadow pointer-events-auto"
                >
                  <span className="sr-only">Close</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <ul
                  className={[
                    'pill-list',
                    'list-none m-0 px-16 md:px-32 py-16 md:py-24',
                    'w-full max-w-[1600px] mx-auto',
                    'flex flex-wrap justify-center content-center',
                    'gap-x-0 gap-y-1',
                    'pointer-events-auto',
                    `layout-${menuItems.length}`
                  ].join(' ')}
                  role="menu"
                  aria-label="Menu links"
                >
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      role="none"
                      className={[
                        'pill-col',
                        'flex justify-center items-stretch',
                        '[flex:0_0_calc(100%/3)]',
                        'box-border'
                      ].join(' ')}
                    >
                      <a
                        role="menuitem"
                        href={item.href}
                        aria-label={item.ariaLabel || item.label}
                        className={[
                          'pill-link',
                          'w-full',
                          'rounded-[999px]',
                          'no-underline',
                          'bg-white',
                          'text-inherit',
                          'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                          'flex items-center justify-center',
                          'relative',
                          'transition-[background,color] duration-300 ease-in-out',
                          'box-border',
                          'whitespace-nowrap overflow-hidden'
                        ].join(' ')}
                        style={
                          {
                            ['--item-rot']: `${item.rotation ?? 0}deg`,
                            ['--pill-bg']: menuBg,
                            ['--pill-color']: menuContentColor,
                            ['--hover-bg']: item.hoverStyles?.bgColor || '#f3f4f6',
                            ['--hover-color']: item.hoverStyles?.textColor || menuContentColor,
                            background: 'var(--pill-bg)',
                            color: 'var(--pill-color)',
                            minHeight: 'var(--pill-min-h, 100px)',
                            padding: 'clamp(1rem, 2vw, 4rem) 0',
                            fontSize: 'clamp(1.2rem, 2.5vw, 3rem)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                            willChange: 'transform'
                          } as CSSProperties
                        }
                        onClick={(e) => {
                          const href = item.href || '';
                          if (href.startsWith('#')) {
                            e.preventDefault();
                            const el = document.querySelector(href) as HTMLElement | null;
                            closeMenu();
                            setTimeout(() => {
                              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 60);
                          } else {
                            // For navigation links, close the menu immediately
                            closeMenu();
                          }
                        }}
                        ref={el => {
                          if (el) bubblesRef.current[idx] = el;
                        }}
                      >
                        <span
                          className="pill-label inline-block"
                          style={{
                            willChange: 'transform, opacity',
                            height: '1.2em',
                            lineHeight: 1.2
                          }}
                          ref={el => {
                            if (el) labelRefs.current[idx] = el;
                          }}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            document.body
          )
          : (
            <div
              ref={overlayRef}
              className={[
                'bubble-menu-items',
                'fixed',
                'inset-0',
                'flex items-center justify-center',
                'pointer-events-auto overflow-y-auto',
                'z-[9999]',
                'backdrop-blur-2xl',
                'bg-black/50',
                'dark:bg-black/60',
                'overscroll-contain touch-pan-y'
              ].join(' ')}
              aria-hidden={!isMenuOpen}
              role="dialog"
              aria-modal="true"
              onClick={handleBackdropClick}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 shadow pointer-events-auto"
              >
                <span className="sr-only">Close</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul
                className={[
                  'pill-list',
                  'list-none m-0 px-16 md:px-32 py-16 md:py-24',
                  'w-full max-w-[1600px] mx-auto',
                  'flex flex-wrap justify-center content-center',
                  'gap-x-0 gap-y-1',
                  'pointer-events-auto',
                  `layout-${menuItems.length}`
                ].join(' ')}
                role="menu"
                aria-label="Menu links"
              >
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    role="none"
                    className={[
                      'pill-col',
                      'flex justify-center items-stretch',
                      '[flex:0_0_calc(100%/3)]',
                      'box-border'
                    ].join(' ')}
                  >
                    <a
                      role="menuitem"
                      href={item.href}
                      aria-label={item.ariaLabel || item.label}
                      className={[
                        'pill-link',
                        'w-full',
                        'rounded-[999px]',
                        'no-underline',
                        'bg-white',
                        'text-inherit',
                        'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                        'flex items-center justify-center',
                        'relative',
                        'transition-[background,color] duration-300 ease-in-out',
                        'box-border',
                        'whitespace-nowrap overflow-hidden'
                      ].join(' ')}
                      style={
                        {
                          ['--item-rot']: `${item.rotation ?? 0}deg`,
                          ['--pill-bg']: menuBg,
                          ['--pill-color']: menuContentColor,
                          ['--hover-bg']: item.hoverStyles?.bgColor || '#f3f4f6',
                          ['--hover-color']: item.hoverStyles?.textColor || menuContentColor,
                          background: 'var(--pill-bg)',
                          color: 'var(--pill-color)',
                          minHeight: 'var(--pill-min-h, 100px)',
                          padding: 'clamp(1rem, 2vw, 4rem) 0',
                          fontSize: 'clamp(1.2rem, 2.5vw, 3rem)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                          willChange: 'transform'
                        } as CSSProperties
                      }
                      onClick={(e) => {
                        const href = item.href || '';
                        if (href.startsWith('#')) {
                          e.preventDefault();
                          const el = document.querySelector(href) as HTMLElement | null;
                          closeMenu();
                          setTimeout(() => {
                            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }, 60);
                        } else {
                          closeMenu();
                        }
                      }}
                      ref={el => {
                        if (el) bubblesRef.current[idx] = el;
                      }}
                    >
                      <span
                        className="pill-label inline-block"
                        style={{
                          willChange: 'transform, opacity',
                          height: '1.2em',
                          lineHeight: 1.2
                        }}
                        ref={el => {
                          if (el) labelRefs.current[idx] = el;
                        }}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </>
  );
}
