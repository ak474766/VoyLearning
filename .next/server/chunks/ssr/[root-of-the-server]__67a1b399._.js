module.exports = [
"[project]/src/components/ui/bubblemenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BubbleMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DEFAULT_ITEMS = [
    {
        label: 'home',
        href: '#',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: {
            bgColor: '#3b82f6',
            textColor: '#ffffff'
        }
    },
    {
        label: 'about',
        href: '#',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: {
            bgColor: '#10b981',
            textColor: '#ffffff'
        }
    },
    {
        label: 'projects',
        href: '#',
        ariaLabel: 'Documentation',
        rotation: 8,
        hoverStyles: {
            bgColor: '#f59e0b',
            textColor: '#ffffff'
        }
    },
    {
        label: 'blog',
        href: '#',
        ariaLabel: 'Blog',
        rotation: 8,
        hoverStyles: {
            bgColor: '#ef4444',
            textColor: '#ffffff'
        }
    },
    {
        label: 'contact',
        href: '#',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: {
            bgColor: '#8b5cf6',
            textColor: '#ffffff'
        }
    }
];
function BubbleMenu({ logo, onMenuClick, className, style, menuAriaLabel = 'Toggle menu', menuBg = '#fff', menuContentColor = '#111', useFixedPosition = false, items, animationEase = 'back.out(1.5)', animationDuration = 0.5, staggerDelay = 0.12 }) {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bubblesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const labelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
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
    ].filter(Boolean).join(' ');
    const handleToggle = ()=>{
        const nextState = !isMenuOpen;
        if (nextState) setShowOverlay(true);
        setIsMenuOpen(nextState);
        onMenuClick?.(nextState);
    };
    const closeMenu = ()=>{
        if (!isMenuOpen) return;
        setIsMenuOpen(false);
        onMenuClick?.(false);
    };
    const handleBackdropClick = (e)=>{
        if (e.target === overlayRef.current) {
            closeMenu();
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Escape') closeMenu();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const overlay = overlayRef.current;
        const bubbles = bubblesRef.current.filter(Boolean);
        const labels = labelRefs.current.filter(Boolean);
        if (!overlay) return;
        if (isMenuOpen) {
            // Ensure the overlay is visible even if refs aren't ready yet
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                display: 'flex'
            });
            if (bubbles.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                    ...bubbles,
                    ...labels
                ]);
                // Make items visible by default, then animate in from a subtle state
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bubbles, {
                    scale: 1,
                    transformOrigin: '50% 50%'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(labels, {
                    y: 0,
                    autoAlpha: 1
                });
                bubbles.forEach((bubble, i)=>{
                    const delay = i * staggerDelay + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-0.05, 0.05);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(bubble, {
                        scale: 0.9,
                        duration: animationDuration,
                        ease: animationEase,
                        delay
                    });
                    if (labels[i]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(labels[i], {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                ...bubbles,
                ...labels
            ]);
            if (labels.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(labels, {
                    y: 24,
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: 'power3.in'
                });
            }
            if (bubbles.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(bubbles, {
                    scale: 0,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                            display: 'none'
                        });
                        setShowOverlay(false);
                    }
                });
            } else {
                // If nothing to animate, hide immediately
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                    display: 'none'
                });
                setShowOverlay(false);
            }
        }
    }, [
        isMenuOpen,
        showOverlay,
        animationEase,
        animationDuration,
        staggerDelay
    ]);
    // Lock background scroll while menu is open and focus the overlay for ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            setTimeout(()=>overlayRef.current?.focus(), 0);
        }
        return ()=>{
            docEl.style.overflow = prevHtmlOverflow;
            document.body.style.overflow = prevBodyOverflow;
            docEl.style.paddingRight = prevHtmlPaddingRight;
        };
    }, [
        isMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (isMenuOpen) {
                const bubbles = bubblesRef.current.filter(Boolean);
                const isDesktop = window.innerWidth >= 900;
                bubbles.forEach((bubble, i)=>{
                    const item = menuItems[i];
                    if (bubble && item) {
                        const rotation = isDesktop ? item.rotation ?? 0 : 0;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bubble, {
                            rotation
                        });
                    }
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        isMenuOpen,
        menuItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: containerClassName,
                style: style,
                "aria-label": "Main navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            'bubble logo-bubble',
                            'inline-flex items-center justify-center',
                            'rounded-full',
                            'bg-white/15',
                            'backdrop-blur-md',
                            'border border-white/20',
                            'ring-1 ring-white/30 dark:ring-white/10',
                            'overflow-hidden',
                            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                            'pointer-events-auto',
                            'h-12 md:h-14',
                            'px-4 md:px-8',
                            'gap-2',
                            'will-change-transform'
                        ].join(' '),
                        "aria-label": "Logo",
                        style: {
                            minHeight: '48px',
                            borderRadius: '9999px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: [
                                'logo-content',
                                'inline-flex items-center justify-center',
                                'h-full w-auto max-w-full overflow-hidden'
                            ].join(' '),
                            style: {
                                ['--logo-max-height']: '60%',
                                ['--logo-max-width']: '100%'
                            },
                            children: typeof logo === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "Logo",
                                className: "bubble-logo max-h-[60%] max-w-full object-contain block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this) : logo
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/bubblemenu.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: [
                            'bubble toggle-bubble menu-btn',
                            isMenuOpen ? 'open' : '',
                            'inline-flex flex-col items-center justify-center',
                            'rounded-full',
                            'bg-white/15',
                            'backdrop-blur-md',
                            'border border-white/20',
                            'ring-1 ring-white/30 dark:ring-white/10',
                            'overflow-hidden',
                            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                            'pointer-events-auto',
                            'w-12 h-12 md:w-14 md:h-14',
                            'border-0 cursor-pointer p-0',
                            'will-change-transform'
                        ].join(' '),
                        onClick: handleToggle,
                        "aria-label": menuAriaLabel,
                        "aria-pressed": isMenuOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "menu-line block mx-auto rounded-[2px]",
                                style: {
                                    width: 26,
                                    height: 2,
                                    background: menuContentColor,
                                    transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "menu-line short block mx-auto rounded-[2px]",
                                style: {
                                    marginTop: '6px',
                                    width: 26,
                                    height: 2,
                                    background: menuContentColor,
                                    transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            showOverlay && (mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: [
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
                ].join(' '),
                "aria-hidden": !isMenuOpen,
                role: "dialog",
                "aria-modal": "true",
                onClick: handleBackdropClick,
                onKeyDown: handleKeyDown,
                tabIndex: -1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close menu",
                        onClick: closeMenu,
                        className: "absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 shadow pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 422,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 424,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 425,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 423,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 416,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: [
                            'pill-list',
                            'list-none m-0 px-16 md:px-32 py-16 md:py-24',
                            'w-full max-w-[1600px] mx-auto',
                            'flex flex-wrap justify-center content-center',
                            'gap-x-0 gap-y-1',
                            'pointer-events-auto',
                            `layout-${menuItems.length}`
                        ].join(' '),
                        role: "menu",
                        "aria-label": "Menu links",
                        children: menuItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                role: "none",
                                className: [
                                    'pill-col',
                                    'flex justify-center items-stretch',
                                    '[flex:0_0_calc(100%/3)]',
                                    'box-border'
                                ].join(' '),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    role: "menuitem",
                                    href: item.href,
                                    "aria-label": item.ariaLabel || item.label,
                                    className: [
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
                                    ].join(' '),
                                    style: {
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
                                    },
                                    onClick: (e)=>{
                                        const href = item.href || '';
                                        if (href.startsWith('#')) {
                                            e.preventDefault();
                                            const el = document.querySelector(href);
                                            closeMenu();
                                            setTimeout(()=>{
                                                el?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }, 60);
                                        } else {
                                            // For navigation links, close the menu immediately
                                            closeMenu();
                                        }
                                    },
                                    ref: (el)=>{
                                        if (el) bubblesRef.current[idx] = el;
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill-label inline-block",
                                        style: {
                                            willChange: 'transform, opacity',
                                            height: '1.2em',
                                            lineHeight: 1.2
                                        },
                                        ref: (el)=>{
                                            if (el) labelRefs.current[idx] = el;
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 505,
                                        columnNumber: 27
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                    lineNumber: 452,
                                    columnNumber: 25
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 442,
                                columnNumber: 23
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 428,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 395,
                columnNumber: 17
            }, this), document.body) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: [
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
                ].join(' '),
                "aria-hidden": !isMenuOpen,
                role: "dialog",
                "aria-modal": "true",
                onClick: handleBackdropClick,
                onKeyDown: handleKeyDown,
                tabIndex: -1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close menu",
                        onClick: closeMenu,
                        className: "absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-900 shadow pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 554,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 556,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 557,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 555,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 548,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: [
                            'pill-list',
                            'list-none m-0 px-16 md:px-32 py-16 md:py-24',
                            'w-full max-w-[1600px] mx-auto',
                            'flex flex-wrap justify-center content-center',
                            'gap-x-0 gap-y-1',
                            'pointer-events-auto',
                            `layout-${menuItems.length}`
                        ].join(' '),
                        role: "menu",
                        "aria-label": "Menu links",
                        children: menuItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                role: "none",
                                className: [
                                    'pill-col',
                                    'flex justify-center items-stretch',
                                    '[flex:0_0_calc(100%/3)]',
                                    'box-border'
                                ].join(' '),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    role: "menuitem",
                                    href: item.href,
                                    "aria-label": item.ariaLabel || item.label,
                                    className: [
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
                                    ].join(' '),
                                    style: {
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
                                    },
                                    onClick: (e)=>{
                                        const href = item.href || '';
                                        if (href.startsWith('#')) {
                                            e.preventDefault();
                                            const el = document.querySelector(href);
                                            closeMenu();
                                            setTimeout(()=>{
                                                el?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }, 60);
                                        } else {
                                            closeMenu();
                                        }
                                    },
                                    ref: (el)=>{
                                        if (el) bubblesRef.current[idx] = el;
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill-label inline-block",
                                        style: {
                                            willChange: 'transform, opacity',
                                            height: '1.2em',
                                            lineHeight: 1.2
                                        },
                                        ref: (el)=>{
                                            if (el) labelRefs.current[idx] = el;
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                        lineNumber: 636,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                    lineNumber: 584,
                                    columnNumber: 21
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 574,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 560,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 527,
                columnNumber: 13
            }, this))
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui/voylearninglogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const VoyLearningLogo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center justify-center h-full gap-2",
        style: {
            ['--logo-max-height']: '60%',
            ['--logo-max-width']: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-6 h-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2L2 7L12 12L22 7L12 2Z",
                        fill: "url(#logo-gradient)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 17L12 22L22 17",
                        stroke: "url(#logo-gradient)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 12L12 17L22 12",
                        stroke: "url(#logo-gradient)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "logo-gradient",
                            x1: "2",
                            y1: "2",
                            x2: "22",
                            y2: "22",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    stopColor: "#8b5cf6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#ec4899"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600",
                style: {
                    fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
                    lineHeight: '1',
                    letterSpacing: '-0.03em'
                },
                children: "VoyLearning"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/voylearninglogo.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/voylearninglogo.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VoyLearningLogo;
}),
"[project]/src/components/voy-learning/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/voy-learning/header.tsx'\n\nExpected '</', got 'public'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHorizontalScroll",
    ()=>createHorizontalScroll,
    "createParallaxEffect",
    ()=>createParallaxEffect,
    "createPinnedSection",
    ()=>createPinnedSection,
    "prefersReducedMotion",
    ()=>prefersReducedMotion,
    "registerScrollTrigger",
    ()=>registerScrollTrigger,
    "splitTextIntoChars",
    ()=>splitTextIntoChars,
    "useGSAP",
    ()=>useGSAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
// Ensure plugin is registered only on client
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function prefersReducedMotion() {
    if ("TURBOPACK compile-time truthy", 1) return true;
    //TURBOPACK unreachable
    ;
}
function useGSAP(setup, scope) {
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(scope ?? null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        let ctx;
        let extraCleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return scopeRef;
}
function registerScrollTrigger(defaults) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function splitTextIntoChars(text) {
    return Array.from(text);
}
function createParallaxEffect(target, speed = 0.5, options = {}) {
    if (prefersReducedMotion()) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(target, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            scrub: true,
            ...options
        }
    });
}
function createPinnedSection(trigger, pin = true, options = {}) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function createHorizontalScroll(container, items, options = {}) {
    if (prefersReducedMotion()) return null;
    const totalWidth = items.reduce((acc, el)=>acc + (el.clientWidth || 0), 0);
    const xAmount = -(totalWidth - (container.clientWidth || 0));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(items, {
        x: xAmount,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: "top top",
            end: ()=>`+=${totalWidth}`,
            ...options
        }
    });
}
}),
"[project]/src/components/voy-learning/hero-scrolly.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScrolly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function HeroScrolly() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameCount = 192; // 00001.jpg ... 00192.jpg
    const srcFor = (i)=>`/image/${String(i).padStart(5, "0")}.jpg`;
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: frameCount
        }, (_, idx)=>{
            const img = new Image();
            img.src = srcFor(idx + 1);
            return img;
        });
    }, []);
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;
        const contentEl = contentRef.current;
        if (!canvas || !wrapper) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const state = {
            frame: 0
        };
        let ctaVisible = false;
        const setSize = ()=>{
            const w = wrapper.clientWidth;
            const h = window.innerHeight;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
        };
        const render = ()=>{
            const img = images[state.frame];
            if (!img || !img.complete) return;
            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth || img.width;
            const ih = img.naturalHeight || img.height;
            const scale = Math.max(cw / iw, ch / ih);
            const dw = Math.floor(iw * scale);
            const dh = Math.floor(ih * scale);
            const dx = Math.floor((cw - dw) / 2);
            const dy = Math.floor((ch - dh) / 2);
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, dx, dy, dw, dh);
            // Apply subtle blur that fades quickly
            const blurEndFrame = 30;
            const blurT = Math.max(0, Math.min(1, state.frame / (blurEndFrame - 1)));
            const blurMax = 8; // px - reduced for cleaner look
            const blurPx = blurMax * (1 - blurT);
            if (canvas.style.filter !== `blur(${blurPx}px)`) {
                canvas.style.filter = `blur(${blurPx}px)`;
            }
        };
        setSize();
        if (images[0]?.complete) render();
        else images[0].onload = render;
        if (ctaRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(ctaRef.current, {
                autoAlpha: 0,
                y: 12,
                scale: 0.98,
                pointerEvents: "none"
            });
        }
        // Initial content animation
        if (contentEl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentEl.children, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }
        const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(state, {
            frame: frameCount - 1,
            ease: "none",
            snap: "frame",
            onUpdate: ()=>{
                render();
                const show = state.frame >= 129;
                if (show && !ctaVisible && ctaRef.current) {
                    ctaVisible = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ctaRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out",
                        onStart: ()=>{
                            if (ctaRef.current) ctaRef.current.style.pointerEvents = "auto";
                        }
                    });
                } else if (!show && ctaVisible && ctaRef.current) {
                    ctaVisible = false;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ctaRef.current, {
                        autoAlpha: 0,
                        y: 12,
                        scale: 0.98,
                        duration: 0.35,
                        ease: "power3.inOut",
                        onComplete: ()=>{
                            if (ctaRef.current) ctaRef.current.style.pointerEvents = "none";
                        }
                    });
                }
                // Fade out content on scroll with smooth parallax
                if (contentEl) {
                    const contentOpacity = Math.max(0, 1 - state.frame / 40); // Fade out by frame 40 (slower)
                    contentEl.style.opacity = String(contentOpacity);
                    contentEl.style.transform = `translate(-50%, -50%) translateY(${-state.frame * 1.5}px)`; // Gentler parallax
                    contentEl.style.pointerEvents = contentOpacity <= 0.1 ? 'none' : 'auto';
                }
            },
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=2000",
                scrub: 0.5,
                pin: true
            }
        });
        const onResize = ()=>{
            setSize();
            render();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        };
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize);
            tween.kill();
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        ref: scopeRef,
        className: "relative w-full bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                style: {
                    background: "#ffffff",
                    backgroundImage: "radial-gradient(circle at top left, rgba(255, 140, 60, 0.5), transparent 70%)",
                    filter: "blur(80px)",
                    backgroundRepeat: "no-repeat"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapperRef,
                className: "relative h-[100svh] w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "block h-full w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-5xl px-6 text-center flex flex-col items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-xl border border-white/50 px-5 py-2.5 shadow-premium-sm hover:bg-white/40 transition-colors duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2.5 w-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold tracking-wide text-slate-800 uppercase text-[11px]",
                                        children: "AI-Powered Learning Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-6xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "relative z-20 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm",
                                        children: [
                                            "Master Engineering",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 animate-gradient pb-4",
                                                children: "with AI-Powered Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-16 -right-4 md:-right-16 w-24 md:w-40 aspect-square pointer-events-none animate-float hidden sm:block z-30 opacity-90",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/pencil_and_book.png",
                                            alt: "Learning illustration",
                                            className: "w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-4 -left-8 md:-left-23 w-20 md:w-36 aspect-square pointer-events-none animate-float hidden sm:block z-10 opacity-90",
                                        style: {
                                            animationDelay: '2s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/3d_notebook.png",
                                            alt: "Notebook illustration",
                                            className: "w-full h-full object-contain drop-shadow-2xl hover:rotate-12 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl lg:text-2xl text-slate-700 max-w-3xl font-medium leading-relaxed tracking-tight",
                                children: [
                                    "Transform static syllabus notes into",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-900 font-semibold",
                                        children: " interactive, personalized "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    "learning workspaces.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block mt-1 text-slate-600",
                                        children: "Edit, ask, and master concepts faster."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-5 mt-10 items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        className: "group relative inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-12 text-lg font-bold text-white shadow-glow-purple transition-all duration-300 hover:shadow-premium-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex items-center gap-3",
                                                children: [
                                                    "Get Started",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 group-hover:translate-x-1 transition-transform",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2.5,
                                                            d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#subjects",
                                        className: "group inline-flex h-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/40 px-12 text-lg font-bold text-slate-800 shadow-premium-md transition-all duration-300 hover:bg-white/30 hover:shadow-premium-lg hover:scale-105 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                "Explore Subjects",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 group-hover:rotate-90 transition-transform duration-300 text-slate-700",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ctaRef,
                        className: "absolute left-1/2 bottom-10 z-20 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "#subjects",
                            "aria-label": "Explore subjects",
                            className: "group relative inline-flex h-14 items-center gap-3 rounded-full bg-white/50 backdrop-blur-md border-2 border-white/60 px-6 pr-8 text-base md:text-lg font-semibold text-slate-800 shadow-xl transition-all duration-300 ease-out hover:bg-white/70 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "drop-shadow-sm",
                                    children: "Explore Subjects"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Scrollfloat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const ScrollFloat = ({ children, scrollContainerRef, containerClassName = '', textClassName = '', animationDuration = 5, ease = 'back.inOut(8)', scrollStart = 'center bottom+=50%', scrollEnd = 'bottom bottom-=40%', stagger = 0.03 })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block word",
                children: char === ' ' ? '\u00A0' : char
            }, index, false, {
                fileName: "[project]/src/components/ui/Scrollfloat.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)));
    }, [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        const charElements = el.querySelectorAll('.inline-block');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(charElements, {
            willChange: 'opacity, transform',
            opacity: 0,
            yPercent: 120,
            transformOrigin: '50% 0%'
        }, {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            stagger: stagger,
            scrollTrigger: {
                trigger: el,
                scroller,
                start: scrollStart,
                end: scrollEnd,
                scrub: true
            }
        });
    }, [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        className: `my-5 overflow-hidden ${containerClassName}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`,
            children: splitText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Scrollfloat.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Scrollfloat.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ScrollFloat;
}),
"[project]/src/components/voy-learning/subjects-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubjectsSectionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Scrollfloat.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const subjects = [
    {
        id: "ata",
        title: "ATA",
        name: "Algorithmic Thinking and its Applications",
        href: "/dashboard/ata"
    },
    {
        id: "bda",
        title: "BDA",
        name: "Basics Of Data Analytics",
        href: "/dashboard/bda"
    },
    {
        id: "fsp",
        title: "FSP",
        name: "Foundations Of Statistics and Probability",
        href: "/dashboard/fsp"
    },
    {
        id: "lana",
        title: "LANA",
        name: "Linear Algebra and Numerical Analysis",
        href: "/dashboard/lana"
    }
];
// Front and back images for the 4 subjects. Files live under public/New folder
const subjectImagesFront = [
    "/New folder/image.png",
    "/New folder/image (1).png",
    "/New folder/image (2).png",
    "/New folder/image (3).png"
];
const subjectImagesBack = [
    "/New folder/image (4).png",
    "/New folder/image (5).png",
    "/New folder/image (6).png",
    "/New folder/image (7).png"
];
function SubjectsSectionClient() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [semester, setSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        const section = sectionRef.current;
        if (!section) return;
        let ctx;
        let mounted = true;
        (async ()=>{
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-ssr] (ecmascript, async loader)");
            const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-ssr] (ecmascript, async loader)");
            gsap.registerPlugin(ScrollTrigger);
            if (!mounted) return;
            ctx = gsap.context(()=>{
                const stage = section.querySelector("[data-stage]");
                const grid = section.querySelector("[data-grid]");
                const cards = Array.from(section.querySelectorAll("[data-card]"));
                const faces = Array.from(section.querySelectorAll("[data-card3d]"));
                if (!stage || !grid || cards.length === 0) return;
                gsap.set(stage, {
                    perspective: 1000
                });
                gsap.set([
                    grid,
                    cards
                ], {
                    transformStyle: "preserve-3d",
                    willChange: "transform"
                });
                gsap.set(grid, {
                    autoAlpha: 1
                });
                const cols = 4;
                const tl = gsap.timeline({
                    defaults: {
                        ease: "power2.inOut"
                    },
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "+=2400",
                        scrub: 0.75,
                        pin: true
                    }
                });
                tl.fromTo(grid, {
                    xPercent: -15,
                    rotateY: -5,
                    scale: 0.975
                }, {
                    xPercent: 0,
                    rotateY: -3,
                    scale: 1,
                    duration: 0.45
                });
                tl.to(cards, {
                    y: (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, -16, 72, i),
                    rotationZ: (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, 5, -5, i),
                    rotationY: -6,
                    z: (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, 0, 64, i),
                    stagger: {
                        each: 0.03
                    },
                    duration: 0.45,
                    ease: "sine.inOut"
                }, ">-0.1");
                tl.to(grid, {
                    rotateY: -12,
                    transformOrigin: "left center",
                    duration: 0.4
                }, ">-0.08");
                // Ensure label shows Sem 1 prior to flip when scrubbing back and forth
                tl.call(()=>setSemester(1));
                tl.to(cards, {
                    x: (i)=>{
                        const col = i % cols;
                        return (col - (cols - 1) / 2) * 24;
                    },
                    z: (i)=>{
                        const col = i % cols;
                        const depth = (cols - 1) / 2 - Math.abs(col - (cols - 1) / 2);
                        return depth * 54;
                    },
                    rotationY: (i)=>{
                        const col = i % cols;
                        return gsap.utils.mapRange(0, cols - 1, -10, 10, col);
                    },
                    duration: 0.5
                }, "<");
                tl.to(faces, {
                    rotateY: "+=180",
                    transformOrigin: "center center",
                    stagger: {
                        each: 0.18
                    },
                    duration: 0.55
                });
                // After flip, switch to Sem 2
                tl.call(()=>setSemester(2));
                // Step 1: Reduce angle and go back to center (Reset to initial grid state)
                tl.to(cards, {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
                tl.to(grid, {
                    rotateY: 0,
                    xPercent: 0,
                    transformOrigin: "center center",
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }, "<");
                // Step 2: Slide to right corner
                tl.to(grid, {
                    xPercent: 25,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }, section);
        })();
        return ()=>{
            mounted = false;
            ctx?.revert?.();
        };
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        const section = sectionRef.current;
        if (!section) return;
        let cleanup;
        let mounted = true;
        (async ()=>{
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-ssr] (ecmascript, async loader)");
            if (!mounted) return;
            const cards = Array.from(section.querySelectorAll("[data-card]"));
            const tiltTo = new Map();
            const moveHandlers = new Map();
            const leaveHandlers = new Map();
            cards.forEach((card)=>{
                const rx = gsap.quickTo(card, "rotateX", {
                    duration: 0.5,
                    ease: "power3.out"
                });
                const ry = gsap.quickTo(card, "rotateY", {
                    duration: 0.5,
                    ease: "power3.out"
                });
                tiltTo.set(card, {
                    rx,
                    ry
                });
                const onMove = (e)=>{
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const px = x / rect.width * 100;
                    const py = y / rect.height * 100;
                    const dx = x / rect.width - 0.5;
                    const dy = y / rect.height - 0.5;
                    const max = 6;
                    ry(dx * max * 2);
                    rx(-dy * max * 2);
                    card.style.setProperty("--px", `${px}%`);
                    card.style.setProperty("--py", `${py}%`);
                };
                const onLeave = ()=>{
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.6,
                        ease: "power3.out"
                    });
                };
                card.addEventListener("pointermove", onMove);
                card.addEventListener("pointerleave", onLeave);
                moveHandlers.set(card, onMove);
                leaveHandlers.set(card, onLeave);
            });
            cleanup = ()=>{
                cards.forEach((card)=>{
                    const onMove = moveHandlers.get(card);
                    const onLeave = leaveHandlers.get(card);
                    if (onMove) card.removeEventListener("pointermove", onMove);
                    if (onLeave) card.removeEventListener("pointerleave", onLeave);
                });
            };
        })();
        return ()=>{
            mounted = false;
            cleanup?.();
        };
    }, []);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "subjects",
            className: "relative w-full py-24 md:py-32 mt-12 bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0 section-radial-bg"
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container px-4 md:px-6 mt-12 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            animationDuration: 1,
                            ease: "back.inOut(2)",
                            scrollStart: "center bottom+=50%",
                            scrollEnd: "bottom bottom-=40%",
                            stagger: 0.03,
                            containerClassName: "mb-12 text-center flex justify-center",
                            textClassName: "text-foreground font-extrabold tracking-tight text-[clamp(2.4rem,6vw,4rem)] whitespace-nowrap",
                            children: "Explore Subjects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                            children: subjects.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "rounded-xl border border-slate-200 bg-white shadow-md p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: s.href,
                                        className: "block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-semibold text-slate-900",
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-600",
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                }, s.id, false, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
            lineNumber: 224,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "subjects",
        ref: sectionRef,
        "aria-label": "Explore Subjects",
        className: "relative w-full bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 section-radial-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-stage": true,
                    className: "relative h-[100svh] w-full flex items-center justify-center overflow-visible [perspective:1000px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-16 left-1/2 -translate-x-1/2 w-full text-center z-10 pointer-events-none space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-full bg-violet-100/90 border border-violet-200/50 px-5 py-1.5 shadow-sm backdrop-blur-md transition-transform hover:scale-105 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2.5 w-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold tracking-widest text-violet-700 uppercase",
                                            children: "Curated Syllabus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    animationDuration: 3,
                                    ease: "back.inOut(2)",
                                    scrollStart: "top center",
                                    scrollEnd: "center center",
                                    stagger: 0.03,
                                    containerClassName: "my-0 mb-0 text-center",
                                    textClassName: "text-foreground font-extrabold tracking-tight text-[clamp(3rem,7vw,5rem)] whitespace-nowrap drop-shadow-sm",
                                    children: "Explore Subjects"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-2xl mx-auto space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            animationDuration: 3,
                                            ease: "back.inOut(2)",
                                            scrollStart: "top center",
                                            scrollEnd: "center center",
                                            stagger: 0.02,
                                            containerClassName: "my-0 mb-0 text-center",
                                            textClassName: "text-lg md:text-xl text-muted-foreground font-medium leading-relaxed",
                                            children: "Dive into AI-enhanced notes for your semester."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            animationDuration: 3,
                                            ease: "back.inOut(2)",
                                            scrollStart: "top center",
                                            scrollEnd: "center center",
                                            stagger: 0.02,
                                            containerClassName: "my-0 mb-0 text-center",
                                            textClassName: "text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500",
                                            children: "Select a card to start learning."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-grid": true,
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl origin-left will-change-transform [transform-style:preserve-3d] mt-24",
                            children: subjects.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: s.href,
                                    "data-card": true,
                                    className: "group relative block rounded-2xl border border-white/20 bg-background/50 backdrop-blur-xl shadow-premium-lg overflow-hidden will-change-transform [transform-style:preserve-3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-glow-purple h-64 sm:h-72 lg:h-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-card3d": true,
                                            className: "relative h-full w-full [transform-style:preserve-3d] will-change-transform",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 z-10 [backface-visibility:hidden]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: subjectImagesFront[i % subjectImagesFront.length],
                                                        alt: s.title,
                                                        fill: true,
                                                        sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
                                                        className: "object-cover",
                                                        priority: i === 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(80%_80%_at_80%_20%,rgba(56,189,248,0.25),transparent)]",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-sky-400/10 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 z-10 [backface-visibility:hidden]",
                                                    style: {
                                                        transform: "rotateY(180deg)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: subjectImagesBack[i % subjectImagesBack.length],
                                                        alt: `${s.title} back`,
                                                        fill: true,
                                                        sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 mix-blend-overlay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            style: {
                                                background: "radial-gradient(200px 200px at var(--px,50%) var(--py,50%), rgba(255,255,255,0.08), transparent 60%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-12 left-1/2 -translate-x-1/2 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-white/20 shadow-premium-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-bold transition-colors duration-300 ${semester === 1 ? 'text-violet-500' : 'text-muted-foreground'}`,
                                        children: "Semester 1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-5 bg-muted rounded-full relative border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shadow-sm transition-all duration-500 ${semester === 1 ? 'left-0.5' : 'left-[22px]'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-bold transition-colors duration-300 ${semester === 2 ? 'text-pink-500' : 'text-muted-foreground'}`,
                                        children: "Semester 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/voy-learning/dot-pattern.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotPattern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function DotPattern({ density = 'normal', color, opacity = 0.12, className, ...props }) {
    const densityClass = density === 'dense' ? 'dot-pattern dot-pattern-dense' : 'dot-pattern';
    const style = {
        // Override default via CSS custom properties if provided
        ...color ? {
            ['--dot-color']: color
        } : {},
        opacity
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('pointer-events-none absolute inset-0 z-0', densityClass, className),
        style: style,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/dot-pattern.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/src/components/voy-learning/glass-card.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GlassCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant = 'default', hover = false, gradient = false, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(variant === 'dark' ? 'glass-dark' : 'glass-card', 'group relative overflow-hidden transition-all duration-300', hover && 'hover:scale-105 hover:shadow-premium-lg', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative'),
            children: [
                gradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    style: {
                        backgroundImage: 'var(--gradient-accent)',
                        mixBlendMode: 'overlay',
                        filter: 'blur(12px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/glass-card.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/voy-learning/glass-card.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/glass-card.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
GlassCard.displayName = 'GlassCard';
;
}),
"[project]/src/components/voy-learning/problem-solution-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemSolutionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const subjectImages = [
    "/images/subject_image/ATA_content.jpg",
    "/images/subject_image/BDA_content.jpg",
    "/images/subject_image/FAI_content.jpg",
    "/images/subject_image/FSP_content.jpg",
    "/images/subject_image/LANA_content.jpg",
    "/images/subject_image/NO_content.jpg",
    "/images/subject_image/PRP_content.jpg",
    "/images/subject_image/VSD_content.jpg"
];
function ProblemSolutionSection() {
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        const root = containerRef.current;
        const scroller = scrollerRef.current;
        if (!root || !scroller) return;
        __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-ssr] (ecmascript, async loader)").then(({ gsap })=>{
            __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-ssr] (ecmascript, async loader)").then(({ ScrollTrigger })=>{
                gsap.registerPlugin(ScrollTrigger);
                // Entrance Animations
                const tl = gsap.timeline({
                    defaults: {
                        ease: "power3.out"
                    },
                    scrollTrigger: {
                        trigger: root,
                        start: "top 70%"
                    }
                });
                tl.fromTo(root.querySelectorAll('[data-anim="chip"]'), {
                    opacity: 0,
                    y: 20,
                    scale: 0.9
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6
                }).fromTo(root.querySelector('[data-anim="heading"]'), {
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)"
                }, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8
                }, "-=0.4").fromTo(root.querySelectorAll('[data-anim="card"]'), {
                    opacity: 0,
                    x: -20
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.15
                }, "-=0.4").fromTo(root.querySelector('[data-anim="visual"]'), {
                    opacity: 0,
                    scale: 0.95,
                    y: 40
                }, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(1.2)"
                }, "-=0.6");
                // Infinite Vertical Scroll Animation
                // We clone the list so we have enough content to loop
                const totalHeight = scroller.scrollHeight / 2;
                gsap.to(scroller, {
                    y: -totalHeight,
                    duration: 40,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        y: gsap.utils.unitize((y)=>parseFloat(y) % totalHeight) // Seamless loop
                    }
                });
            });
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "why",
        className: "relative w-full py-24 md:py-32 overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 section-radial-bg opacity-80"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-[0.15]"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 relative z-10",
                ref: containerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] xl:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 shadow-premium-sm backdrop-blur-md transition-transform hover:scale-105",
                                            "data-anim": "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative flex h-2 w-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold tracking-[0.2em] uppercase text-amber-500/90",
                                                    children: "The Problem"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            "data-anim": "heading",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground",
                                                    children: [
                                                        "Static notes are ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
                                                            children: "dead ends."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "max-w-xl text-lg text-muted-foreground leading-relaxed",
                                                    children: [
                                                        "PDFs and screenshots lock your knowledge away. VoyLearning transforms them into a",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground font-medium",
                                                            children: " living workspace "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this),
                                                        "where you can edit, question, and master every concept."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-5",
                                    "data-anim": "copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-anim": "card",
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                                    className: "relative border-white/5 bg-background/40 p-6 transition-all duration-300 hover:bg-background/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-foreground/90",
                                                                        children: "The Old Way"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                                        children: "Staring at unchangeable PDFs. Copy-pasting into separate docs just to add a note. Losing context between your questions and the source material."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-anim": "card",
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse-slow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                                    className: "relative border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-6 shadow-glow-blue",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-foreground",
                                                                        children: "The Voy Way"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                                        children: [
                                                                            "Directly interact with the syllabus. Ask AI to ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-emerald-400 font-medium",
                                                                                children: "simplify complex paragraphs"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 72
                                                                            }, this),
                                                                            " or insert diagrams right where you need them. Save ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                children: "your"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 205
                                                                            }, this),
                                                                            " perfect version."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[500px] lg:h-[600px] w-full mx-auto lg:ml-auto",
                            "data-anim": "visual",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 inset-x-0 h-10 bg-slate-900/95 backdrop-blur-md z-20 border-b border-white/5 flex items-center px-4 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-6 w-full max-w-sm mx-auto bg-slate-800/50 rounded flex items-center justify-center border border-white/5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full bg-emerald-500/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "voylearning.com/notes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-10 left-0 right-0 h-20 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: scrollerRef,
                                            className: "absolute top-0 left-0 w-full pt-16 pb-10 px-4 space-y-6",
                                            children: [
                                                ...subjectImages,
                                                ...subjectImages
                                            ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg bg-slate-900 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: src,
                                                            alt: `Subject preview ${i}`,
                                                            fill: true,
                                                            className: "object-cover transition-transform duration-700 group-hover:scale-105",
                                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-white px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10",
                                                                children: "View Note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 rounded-[2rem] blur-2xl -z-10 animate-pulse-slow"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/voy-learning/how-it-works-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-ssr] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Node Data
const NODES = {
    root: {
        title: "VoyLearning",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "from-violet-500 to-fuchsia-500"
    },
    branches: [
        {
            id: "notes",
            title: "Smart Notes",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            color: "text-blue-400",
            description: "Static syllabus becomes an interactive workspace.",
            detail: "Edit, remix, and ask AI to simplify complex topics instantly."
        },
        {
            id: "quizzes",
            title: "AI Quizzes",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            color: "text-amber-400",
            description: "Instant self-assessment from your materials.",
            detail: "Generate practice questions to test your retention immediately."
        },
        {
            id: "mindmap",
            title: "Mind Maps",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
            color: "text-emerald-400",
            description: "Visualize connections automatically.",
            detail: "See the big picture and how concepts link together."
        }
    ]
};
function HowItWorksSection() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const branchRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const detailRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // State to store line coordinates
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Function to calculate paths based on element positions
    const calculatePaths = ()=>{
        if (!rootRef.current || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const rootRect = rootRef.current.getBoundingClientRect();
        // Relative center of root
        const startX = rootRect.right - containerRect.left;
        const startY = rootRect.top - containerRect.top + rootRect.height / 2;
        const newPaths = [];
        // Level 1 Paths (Root -> Branches)
        branchRefs.current.forEach((branch, i)=>{
            if (!branch) return;
            const branchRect = branch.getBoundingClientRect();
            const endX = branchRect.left - containerRect.left;
            const endY = branchRect.top - containerRect.top + branchRect.height / 2;
            newPaths.push({
                id: `path-root-${i}`,
                start: {
                    x: startX,
                    y: startY
                },
                end: {
                    x: endX,
                    y: endY
                },
                type: 'curve'
            });
            // Level 2 Paths (Branch -> Detail)
            const detail = detailRefs.current[i];
            if (detail) {
                const detailRect = detail.getBoundingClientRect();
                const dStartX = branchRect.right - containerRect.left;
                const dStartY = endY;
                const dEndX = detailRect.left - containerRect.left;
                const dEndY = detailRect.top - containerRect.top + detailRect.height / 2;
                newPaths.push({
                    id: `path-branch-${i}`,
                    start: {
                        x: dStartX,
                        y: dStartY
                    },
                    end: {
                        x: dEndX,
                        y: dEndY
                    },
                    type: 'straight'
                });
            }
        });
        setPaths(newPaths);
    };
    // Recalculate on resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        calculatePaths();
        window.addEventListener('resize', calculatePaths);
        return ()=>window.removeEventListener('resize', calculatePaths);
    }, []);
    // GSAP Animation - Re-run when paths change to ensure SVG elements exist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])() || paths.length === 0) return;
        const container = containerRef.current;
        if (!container) return;
        let ctx;
        let animation;
        const init = async ()=>{
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-ssr] (ecmascript, async loader)");
            const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-ssr] (ecmascript, async loader)");
            gsap.registerPlugin(ScrollTrigger);
            ctx = gsap.context(()=>{
                animation = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "+=150%",
                        pin: true,
                        scrub: 1,
                        // Ensure pinned element stays on top
                        onRefresh: (self)=>{
                            if (self.pin) gsap.set(self.pin, {
                                zIndex: 10
                            });
                        }
                    }
                });
                // 0. Reveal Header
                animation.fromTo('#how-it-works-header', {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
                // 1. Reveal Branches
                animation.to('.line-level-1', {
                    strokeDashoffset: 0,
                    duration: 1,
                    stagger: 0.2
                }, ">-0.4") // Overlap slightly with header
                .fromTo(branchRefs.current, {
                    opacity: 0,
                    scale: 0.8,
                    x: -20
                }, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.2
                }, "<0.2");
                // 2. Reveal Details
                animation.to('.line-level-2', {
                    strokeDashoffset: 0,
                    duration: 1,
                    stagger: 0.2
                }).fromTo(detailRefs.current, {
                    opacity: 0,
                    scale: 0.8,
                    x: -20
                }, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.2
                }, "<0.2");
            }, container);
        };
        init();
        return ()=>{
            ctx?.revert();
            // Kill ScrollTrigger instance if it exists to prevent ghosts
            if (animation) animation.scrollTrigger?.kill();
        };
    }, [
        paths
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        id: "how-it-works",
        className: "relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center py-20 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-background to-background"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 opacity-[0.03]",
                style: {
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                className: "absolute inset-0 w-full h-full pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "line-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#6366f1",
                                    stopOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#d946ef",
                                    stopOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    paths.map((p)=>{
                        // Bezier curve logic
                        const midX = (p.start.x + p.end.x) / 2;
                        const d = `M ${p.start.x} ${p.start.y} C ${midX} ${p.start.y}, ${midX} ${p.end.y}, ${p.end.x} ${p.end.y}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: d,
                            fill: "none",
                            stroke: "url(#line-gradient)",
                            strokeWidth: "2",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300", p.id.includes('root') ? 'line-level-1' : 'line-level-2'),
                            strokeDasharray: "1000",
                            strokeDashoffset: "1000"
                        }, p.id, false, {
                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 relative z-10 w-full max-w-7xl flex flex-col gap-16 md:gap-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto space-y-4 opacity-0 translate-y-8",
                        id: "how-it-works-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                        className: "w-4 h-4 text-violet-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-violet-200 uppercase tracking-wider",
                                        children: "Workflow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
                                children: [
                                    "Overview of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400",
                                        children: "VoyLearning"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                        lineNumber: 225,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground leading-relaxed",
                                children: "VoyLearning connects the dots for you. Start with a central concept and watch how our platform automatically branches out into notes, quizzes, and visual aids."
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 md:gap-24 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center md:justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: rootRef,
                                    className: "relative group z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                            className: "relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 bg-slate-950/80 backdrop-blur-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NODES.root.icon, {
                                                    className: "w-10 h-10 text-white mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-white tracking-wide",
                                                    children: "VoyLearning"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-8 md:gap-16",
                                children: NODES.branches.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            branchRefs.current[i] = el;
                                        },
                                        className: "relative group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                            className: "p-5 border-white/5 bg-slate-900/60 hover:bg-slate-800/60 transition-colors w-full max-w-[280px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2.5 rounded-lg bg-white/5", node.color),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(node.icon, {
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-foreground",
                                                                children: node.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mt-1 leading-snug",
                                                                children: node.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    }, node.id, false, {
                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-8 md:gap-16",
                                children: NODES.branches.map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            detailRefs.current[i] = el;
                                        },
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                            className: "p-6 border-l-4 border-l-violet-500/50 border-y-white/5 border-r-white/5 bg-gradient-to-r from-violet-500/5 to-transparent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-foreground/90 leading-relaxed",
                                                children: node.detail
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    }, `${node.id}-detail`, false, {
                                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/voy-learning/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrowdCanvas",
    ()=>CrowdCanvas,
    "Skiper39",
    ()=>Skiper39,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const CrowdCanvas = ({ src, rows = 15, cols = 7 })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const config = {
            src,
            rows,
            cols
        };
        // UTILS
        const randomRange = (min, max)=>min + Math.random() * (max - min);
        const randomIndex = (array)=>randomRange(0, array.length) | 0;
        const removeFromArray = (array, i)=>array.splice(i, 1)[0];
        const removeItemFromArray = (array, item)=>removeFromArray(array, array.indexOf(item));
        const removeRandomFromArray = (array)=>removeFromArray(array, randomIndex(array));
        const getRandomFromArray = (array)=>array[randomIndex(array) | 0];
        // TWEEN FACTORIES
        const resetPeep = ({ stage, peep })=>{
            const direction = Math.random() > 0.5 ? 1 : -1;
            const offsetY = 100 - 250 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].parseEase("power2.in")(Math.random());
            const startY = stage.height - peep.height + offsetY;
            let startX;
            let endX;
            if (direction === 1) {
                startX = -peep.width;
                endX = stage.width;
                peep.scaleX = 1;
            } else {
                startX = stage.width + peep.width;
                endX = 0;
                peep.scaleX = -1;
            }
            peep.x = startX;
            peep.y = startY;
            peep.anchorY = startY;
            return {
                startX,
                startY,
                endX
            };
        };
        const normalWalk = ({ peep, props })=>{
            const { startX, startY, endX } = props;
            const xDuration = 10;
            const yDuration = 0.25;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
            tl.timeScale(randomRange(0.5, 1.5));
            tl.to(peep, {
                duration: xDuration,
                x: endX,
                ease: "none"
            }, 0);
            tl.to(peep, {
                duration: yDuration,
                repeat: xDuration / yDuration,
                yoyo: true,
                y: startY - 10
            }, 0);
            return tl;
        };
        const walks = [
            normalWalk
        ];
        // FACTORY FUNCTIONS
        const createPeep = ({ image, rect })=>{
            const peep = {
                image,
                rect: [],
                width: 0,
                height: 0,
                drawArgs: [],
                x: 0,
                y: 0,
                anchorY: 0,
                scaleX: 1,
                walk: null,
                setRect: (rect)=>{
                    peep.rect = rect;
                    peep.width = rect[2];
                    peep.height = rect[3];
                    peep.drawArgs = [
                        peep.image,
                        ...rect,
                        0,
                        0,
                        peep.width,
                        peep.height
                    ];
                },
                render: (ctx)=>{
                    ctx.save();
                    ctx.translate(peep.x, peep.y);
                    ctx.scale(peep.scaleX, 1);
                    ctx.drawImage(peep.image, peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3], 0, 0, peep.width, peep.height);
                    ctx.restore();
                }
            };
            peep.setRect(rect);
            return peep;
        };
        // MAIN
        const img = document.createElement("img");
        const stage = {
            width: 0,
            height: 0
        };
        const allPeeps = [];
        const availablePeeps = [];
        const crowd = [];
        const createPeeps = ()=>{
            const { rows, cols } = config;
            const { naturalWidth: width, naturalHeight: height } = img;
            const total = rows * cols;
            const rectWidth = width / rows;
            const rectHeight = height / cols;
            for(let i = 0; i < total; i++){
                allPeeps.push(createPeep({
                    image: img,
                    rect: [
                        i % rows * rectWidth,
                        (i / rows | 0) * rectHeight,
                        rectWidth,
                        rectHeight
                    ]
                }));
            }
        };
        const initCrowd = ()=>{
            while(availablePeeps.length){
                addPeepToCrowd().walk.progress(Math.random());
            }
        };
        const addPeepToCrowd = ()=>{
            const peep = removeRandomFromArray(availablePeeps);
            const walk = getRandomFromArray(walks)({
                peep,
                props: resetPeep({
                    peep,
                    stage
                })
            }).eventCallback("onComplete", ()=>{
                removePeepFromCrowd(peep);
                addPeepToCrowd();
            });
            peep.walk = walk;
            crowd.push(peep);
            crowd.sort((a, b)=>a.anchorY - b.anchorY);
            return peep;
        };
        const removePeepFromCrowd = (peep)=>{
            removeItemFromArray(crowd, peep);
            availablePeeps.push(peep);
        };
        const render = ()=>{
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.scale(devicePixelRatio, devicePixelRatio);
            crowd.forEach((peep)=>{
                peep.render(ctx);
            });
            ctx.restore();
        };
        const resize = ()=>{
            if (!canvas) return;
            stage.width = canvas.clientWidth;
            stage.height = canvas.clientHeight;
            canvas.width = stage.width * devicePixelRatio;
            canvas.height = stage.height * devicePixelRatio;
            crowd.forEach((peep)=>{
                peep.walk.kill();
            });
            crowd.length = 0;
            availablePeeps.length = 0;
            availablePeeps.push(...allPeeps);
            initCrowd();
        };
        const init = ()=>{
            createPeeps();
            resize();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(render);
        };
        img.onload = init;
        img.src = config.src;
        const handleResize = ()=>resize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(render);
            crowd.forEach((peep)=>{
                if (peep.walk) peep.walk.kill();
            });
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 block h-full w-full"
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/footer.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Skiper39 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[60vh] overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 section-radial-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']",
                    children: "Created by Armaan Kachhawa"
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/footer.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 h-full w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CrowdCanvas, {
                    src: "/images/peeps/all-peeps.png",
                    rows: 15,
                    cols: 7
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/footer.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/footer.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
const __TURBOPACK__default__export__ = Skiper39;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/voy-learning/notes-demo-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesDemoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function NotesDemoSection() {
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(async (ctx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript, async loader)");
        const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript, async loader)");
        gsap.registerPlugin(ScrollTrigger);
        const items = ctx.selector?.('[data-animate]');
        if (!items || !items.length) return;
        gsap.set(items, {
            opacity: 0,
            y: 12
        });
        gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ctx.scope,
                start: "top 80%"
            }
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: scopeRef,
        className: "relative w-full py-24 md:py-32 overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 section-radial-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-3xl text-center space-y-3 mb-12",
                        "data-animate": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold tracking-[0.26em] uppercase text-muted-foreground",
                                children: "Live AI note demo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
                                children: [
                                    "See how a static note becomes ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "your note"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 48,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground md:text-lg",
                                children: "Compare the original HTML explanation with an AI-augmented version, side by side."
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 lg:gap-8 lg:grid-cols-2",
                        "data-animate": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "relative overflow-hidden border border-white/8 bg-background/60 p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3 border-b border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 font-medium tracking-wide uppercase",
                                                        children: "Original"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-muted-foreground/80",
                                                children: "Before AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4 sm:p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-sm max-w-none text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "m-0 text-foreground/90",
                                                    children: "Semantic HTML"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Semantic HTML provides meaning to the structure of web content. Elements like",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: " <header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 49
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 79
                                                        }, this),
                                                        " help both users and search engines understand the layout."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "overflow-auto rounded-lg bg-muted p-4 text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: `<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 80
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "relative overflow-hidden border border-white/10 bg-background/70 p-0",
                                "data-animate": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3 border-b border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 inline-flex items-center gap-1 font-medium tracking-wide uppercase text-gradient",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 19
                                                            }, this),
                                                            " AI-enhanced"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gradient",
                                                children: "After AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4 sm:p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-sm max-w-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "m-0 text-gradient",
                                                    children: "Semantic HTML (improved)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Semantic HTML",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                            className: "rounded bg-gradient-to-r from-purple-100/80 to-pink-100/80 px-1",
                                                            children: "improves accessibility and SEO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        "by giving structure real meaning. Use elements like",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: " <header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 49
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 79
                                                        }, this),
                                                        " to describe the purpose of each section."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "overflow-auto rounded-lg p-4 text-xs text-slate-900 shadow-premium-md",
                                                    style: {
                                                        backgroundImage: 'var(--gradient-hero)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: `<header aria-label="Site header">
  <nav aria-label="Primary navigation">...</nav>
</header>
<main id="content">
  <article role="article" aria-label="Semantic HTML article">...</article>
</main>`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 18
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-8 grid gap-4 md:grid-cols-3 max-w-4xl",
                        "data-animate": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "border border-white/10 bg-background/60 p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground",
                                            children: "Structure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Cleaner document outline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Landmarks and roles make notes easier to navigate with assistive tech."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "border border-white/10 bg-background/60 p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground",
                                            children: "Clarity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Key ideas highlighted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Important phrases are surfaced so revision is faster."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "border border-white/10 bg-background/60 p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground",
                                            children: "Reuse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-foreground",
                                            children: "Ready to remix"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Save this improved version or keep iterating with new prompts."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-10 max-w-3xl",
                        "data-animate": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("glass rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-3"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "ai-modify-input",
                                    className: "sr-only",
                                    children: "Ask AI to modify this note"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "ai-modify-input",
                                    className: "flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-3 text-sm md:text-base",
                                    placeholder: "Ask AI to modify this note...",
                                    "aria-label": "Ask AI to modify this note"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        'Add examples',
                                        'Simplify',
                                        'Add diagrams'
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "hidden sm:inline-flex rounded-full px-3 py-1 text-xs md:text-sm text-foreground/80 hover:text-foreground transition-colors glass",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    className: "ml-0 md:ml-2 shrink-0",
                                    "aria-label": "Send",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/voy-learning/text-reveal-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextRevealSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FallingText({ text = '', highlightWords = [], trigger = 'auto', backgroundColor = 'transparent', wireframes = false, gravity = 1, mouseConstraintStiffness = 0.2, fontSize = '1rem' }) {
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const canvasContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [effectStarted, setEffectStarted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!textRef.current) return;
        const words = text.split(' ');
        const newHTML = words.map((word)=>{
            const isHighlighted = highlightWords.some((hw)=>word.startsWith(hw));
            return `<span class="inline-block mx-[2px] select-none ${isHighlighted ? 'text-cyan-500 font-bold' : ''}">${word}</span>`;
        }).join(' ');
        textRef.current.innerHTML = newHTML;
    }, [
        text,
        highlightWords
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        if (trigger === 'auto') {
            setEffectStarted(true);
            return;
        }
        if (trigger === 'scroll' && containerRef.current) {
            const el = containerRef.current;
            const observer = new IntersectionObserver(([entry])=>{
                if (entry.isIntersecting) {
                    setEffectStarted(true);
                    observer.disconnect();
                }
            }, {
                threshold: 0.1
            });
            observer.observe(el);
            return ()=>observer.disconnect();
        }
    }, [
        trigger
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        if (!effectStarted) return;
        let mounted = true;
        let cleanup;
        (async ()=>{
            let Matter;
            try {
                const matterModule = await __turbopack_context__.A("[project]/node_modules/matter-js/build/matter.js [app-ssr] (ecmascript, async loader)");
                Matter = matterModule.default ?? matterModule;
            } catch  {
                return;
            }
            if (!mounted) return;
            const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;
            if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const width = containerRect.width;
            const height = containerRect.height || 240;
            if (width <= 0 || height <= 0) return;
            const engine = Engine.create();
            engine.world.gravity.y = gravity;
            const render = Render.create({
                element: canvasContainerRef.current,
                engine,
                options: {
                    width,
                    height,
                    background: backgroundColor,
                    wireframes
                }
            });
            const boundaryOptions = {
                isStatic: true,
                render: {
                    fillStyle: 'transparent'
                }
            };
            const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
            const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
            const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
            const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);
            const wordSpans = textRef.current.querySelectorAll('span');
            const wordBodies = Array.from(wordSpans).map((elem)=>{
                const rect = elem.getBoundingClientRect();
                const x = rect.left - containerRect.left + rect.width / 2;
                const y = rect.top - containerRect.top + rect.height / 2;
                const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                    render: {
                        fillStyle: 'transparent'
                    },
                    restitution: 0.8,
                    frictionAir: 0.01,
                    friction: 0.2
                });
                Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 5,
                    y: 0
                });
                Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
                return {
                    elem: elem,
                    body
                };
            });
            wordBodies.forEach(({ elem })=>{
                elem.style.position = 'absolute';
                elem.style.left = `0px`;
                elem.style.top = `0px`;
                elem.style.transform = 'translate(-50%, -50%)';
            });
            const mouse = Mouse.create(containerRef.current);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: mouseConstraintStiffness,
                    render: {
                        visible: false
                    }
                }
            });
            render.mouse = mouse;
            World.add(engine.world, [
                floor,
                leftWall,
                rightWall,
                ceiling,
                mouseConstraint,
                ...wordBodies.map((w)=>w.body)
            ]);
            const runner = Runner.create();
            Runner.run(runner, engine);
            Render.run(render);
            const updateLoop = ()=>{
                wordBodies.forEach(({ body, elem })=>{
                    const { x, y } = body.position;
                    elem.style.left = `${x}px`;
                    elem.style.top = `${y}px`;
                    elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
                });
                Matter.Engine.update(engine);
                requestAnimationFrame(updateLoop);
            };
            updateLoop();
            cleanup = ()=>{
                Render.stop(render);
                Runner.stop(runner);
                if (render.canvas && canvasContainerRef.current) {
                    try {
                        canvasContainerRef.current.removeChild(render.canvas);
                    } catch  {}
                }
                World.clear(engine.world, false);
                Engine.clear(engine);
            };
        })();
        return ()=>{
            mounted = false;
            cleanup?.();
        };
    }, [
        effectStarted,
        gravity,
        wireframes,
        backgroundColor,
        mouseConstraintStiffness
    ]);
    const handleTrigger = ()=>{
        if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
            setEffectStarted(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative z-[1] w-full h-[min(22vh,280px)] cursor-pointer text-center pt-2 overflow-hidden",
        onClick: trigger === 'click' ? handleTrigger : undefined,
        onMouseEnter: trigger === 'hover' ? handleTrigger : undefined,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "inline-block text-foreground font-bold tracking-tight",
                style: {
                    fontSize,
                    lineHeight: 1.25
                }
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 z-0",
                ref: canvasContainerRef
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
function TextRevealSection() {
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(async (ctx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
        const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript, async loader)");
        const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript, async loader)");
        gsap.registerPlugin(ScrollTrigger);
        const container = ctx.scope;
        const lines = ctx.selector?.('[data-line]') || [];
        const isDesktop = "undefined" !== 'undefined' && window.innerWidth >= 768;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'top 80%',
                end: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'top center',
                pin: isDesktop,
                scrub: isDesktop
            },
            defaults: {
                ease: 'power2.out'
            }
        });
        tl.fromTo(lines, {
            opacity: 0,
            y: 40,
            filter: 'blur(10px)'
        }, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.25
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: scopeRef,
        className: "relative w-full overflow-hidden bg-background py-32 md:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 section-radial-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center text-foreground space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-line": true,
                            className: "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
                            children: [
                                "Learning shouldn't be ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient",
                                    children: "passive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                                    lineNumber: 215,
                                    columnNumber: 35
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-line": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingText, {
                                text: "Your notes should grow with you.",
                                highlightWords: [
                                    "grow"
                                ],
                                trigger: "hover",
                                backgroundColor: "transparent",
                                wireframes: false,
                                gravity: 0.56,
                                fontSize: "clamp(2rem,6vw,3.6rem)",
                                mouseConstraintStiffness: 0.9
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-line": true,
                            className: "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-pink",
                                    children: "AI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                " makes it possible."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/voy-learning/scroll-progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ScrollProgress() {
    const [progress, setProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const onScroll = ()=>{
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const pct = scrollTop / (scrollHeight - clientHeight) * 100;
            setProgress(Number.isFinite(pct) ? pct : 0);
            setVisible(pct > 20);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const strokeDasharray = 2 * Math.PI * 22; // r=22
    const dashOffset = strokeDasharray - progress / 100 * strokeDasharray;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-label": "Scroll to top",
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-8 right-8 z-50 rounded-full glass shadow-premium-lg transition-transform duration-200", "hover:scale-110 hover:shadow-premium-xl", visible ? "opacity-100" : "pointer-events-none opacity-0"),
        style: {
            width: 56,
            height: 56
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: 56,
                height: 56,
                viewBox: "0 0 56 56",
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "sp-grad",
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#7c3aed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#db2777"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 28,
                        cy: 28,
                        r: 22,
                        stroke: "#e5e7eb",
                        strokeWidth: 4,
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 28,
                        cy: 28,
                        r: 22,
                        stroke: "url(#sp-grad)",
                        strokeWidth: 4,
                        fill: "none",
                        strokeDasharray: strokeDasharray,
                        strokeDashoffset: dashOffset,
                        strokeLinecap: "round",
                        transform: "rotate(-90 28 28)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex h-full w-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__67a1b399._.js.map