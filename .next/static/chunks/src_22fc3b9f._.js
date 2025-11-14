(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/bubblemenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BubbleMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function BubbleMenu(param) {
    let { logo, onMenuClick, className, style, menuAriaLabel = 'Toggle menu', menuBg = '#fff', menuContentColor = '#111', useFixedPosition = false, items, animationEase = 'back.out(1.5)', animationDuration = 0.5, staggerDelay = 0.12 } = param;
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bubblesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const labelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const menuItems = (items === null || items === void 0 ? void 0 : items.length) ? items : DEFAULT_ITEMS;
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
        onMenuClick === null || onMenuClick === void 0 ? void 0 : onMenuClick(nextState);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BubbleMenu.useEffect": ()=>{
            const overlay = overlayRef.current;
            const bubbles = bubblesRef.current.filter(Boolean);
            const labels = labelRefs.current.filter(Boolean);
            if (!overlay || !bubbles.length) return;
            if (isMenuOpen) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                    display: 'flex'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                    ...bubbles,
                    ...labels
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bubbles, {
                    scale: 0,
                    transformOrigin: '50% 50%'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(labels, {
                    y: 24,
                    autoAlpha: 0
                });
                bubbles.forEach({
                    "BubbleMenu.useEffect": (bubble, i)=>{
                        const delay = i * staggerDelay + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-0.05, 0.05);
                        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            delay
                        });
                        tl.to(bubble, {
                            scale: 1,
                            duration: animationDuration,
                            ease: animationEase
                        });
                        if (labels[i]) {
                            tl.to(labels[i], {
                                y: 0,
                                autoAlpha: 1,
                                duration: animationDuration,
                                ease: 'power3.out'
                            }, '-=' + animationDuration * 0.9);
                        }
                    }
                }["BubbleMenu.useEffect"]);
            } else if (showOverlay) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf([
                    ...bubbles,
                    ...labels
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(labels, {
                    y: 24,
                    autoAlpha: 0,
                    duration: 0.2,
                    ease: 'power3.in'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(bubbles, {
                    scale: 0,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: {
                        "BubbleMenu.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(overlay, {
                                display: 'none'
                            });
                            setShowOverlay(false);
                        }
                    }["BubbleMenu.useEffect"]
                });
            }
        }
    }["BubbleMenu.useEffect"], [
        isMenuOpen,
        showOverlay,
        animationEase,
        animationDuration,
        staggerDelay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BubbleMenu.useEffect": ()=>{
            const handleResize = {
                "BubbleMenu.useEffect.handleResize": ()=>{
                    if (isMenuOpen) {
                        const bubbles = bubblesRef.current.filter(Boolean);
                        const isDesktop = window.innerWidth >= 900;
                        bubbles.forEach({
                            "BubbleMenu.useEffect.handleResize": (bubble, i)=>{
                                const item = menuItems[i];
                                if (bubble && item) {
                                    var _item_rotation;
                                    const rotation = isDesktop ? (_item_rotation = item.rotation) !== null && _item_rotation !== void 0 ? _item_rotation : 0 : 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(bubble, {
                                        rotation
                                    });
                                }
                            }
                        }["BubbleMenu.useEffect.handleResize"]);
                    }
                }
            }["BubbleMenu.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "BubbleMenu.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["BubbleMenu.useEffect"];
        }
    }["BubbleMenu.useEffect"], [
        isMenuOpen,
        menuItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        .bubble-menu .menu-line {\n          transition: transform 0.3s ease, opacity 0.3s ease;\n          transform-origin: center;\n        }\n        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {\n          margin-left: calc(100% / 6);\n        }\n        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {\n          margin-left: calc(100% / 3);\n        }\n        @media (min-width: 900px) {\n          .bubble-menu-items .pill-link {\n            transform: rotate(var(--item-rot));\n          }\n          .bubble-menu-items .pill-link:hover {\n            transform: rotate(var(--item-rot)) scale(1.06);\n            background: var(--hover-bg) !important;\n            color: var(--hover-color) !important;\n          }\n          .bubble-menu-items .pill-link:active {\n            transform: rotate(var(--item-rot)) scale(.94);\n          }\n        }\n        @media (max-width: 899px) {\n          .bubble-menu-items {\n            padding-top: 120px;\n            align-items: flex-start;\n          }\n          .bubble-menu-items .pill-list {\n            row-gap: 16px;\n          }\n          .bubble-menu-items .pill-list .pill-col {\n            flex: 0 0 100% !important;\n            margin-left: 0 !important;\n            overflow: visible;\n          }\n          .bubble-menu-items .pill-link {\n            font-size: clamp(1.2rem, 3vw, 4rem);\n            padding: clamp(1rem, 2vw, 2rem) 0;\n            min-height: 80px !important;\n          }\n          .bubble-menu-items .pill-link:hover {\n            transform: scale(1.06);\n            background: var(--hover-bg);\n            color: var(--hover-color);\n          }\n          .bubble-menu-items .pill-link:active {\n            transform: scale(.94);\n          }\n        }\n      "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: containerClassName,
                style: style,
                "aria-label": "Main navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            'bubble logo-bubble',
                            'inline-flex items-center justify-center',
                            'rounded-full',
                            'bg-white',
                            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                            'pointer-events-auto',
                            'h-12 md:h-14',
                            'px-4 md:px-8',
                            'gap-2',
                            'will-change-transform'
                        ].join(' '),
                        "aria-label": "Logo",
                        style: {
                            background: menuBg,
                            minHeight: '48px',
                            borderRadius: '9999px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: [
                                'logo-content',
                                'inline-flex items-center justify-center',
                                'w-[120px] h-full'
                            ].join(' '),
                            style: {
                                ['--logo-max-height']: '60%',
                                ['--logo-max-width']: '100%'
                            },
                            children: typeof logo === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "Logo",
                                className: "bubble-logo max-h-[60%] max-w-full object-contain block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 271,
                                columnNumber: 15
                            }, this) : logo
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/bubblemenu.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: [
                            'bubble toggle-bubble menu-btn',
                            isMenuOpen ? 'open' : '',
                            'inline-flex flex-col items-center justify-center',
                            'rounded-full',
                            'bg-white',
                            'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                            'pointer-events-auto',
                            'w-12 h-12 md:w-14 md:h-14',
                            'border-0 cursor-pointer p-0',
                            'will-change-transform'
                        ].join(' '),
                        onClick: handleToggle,
                        "aria-label": menuAriaLabel,
                        "aria-pressed": isMenuOpen,
                        style: {
                            background: menuBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "menu-line block mx-auto rounded-[2px]",
                                style: {
                                    width: 26,
                                    height: 2,
                                    background: menuContentColor,
                                    transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/bubblemenu.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            showOverlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: [
                    'bubble-menu-items',
                    useFixedPosition ? 'fixed' : 'absolute',
                    'inset-0',
                    'flex items-center justify-center',
                    'pointer-events-none',
                    'z-[1000]'
                ].join(' '),
                "aria-hidden": !isMenuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: [
                        'pill-list',
                        'list-none m-0 px-6',
                        'w-full max-w-[1600px] mx-auto',
                        'flex flex-wrap',
                        'gap-x-0 gap-y-1',
                        'pointer-events-auto'
                    ].join(' '),
                    role: "menu",
                    "aria-label": "Menu links",
                    children: menuItems.map((item, idx)=>{
                        var _item_hoverStyles, _item_hoverStyles1;
                        var _item_rotation;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            role: "none",
                            className: [
                                'pill-col',
                                'flex justify-center items-stretch',
                                '[flex:0_0_calc(100%/3)]',
                                'box-border'
                            ].join(' '),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    ['--item-rot']: "".concat((_item_rotation = item.rotation) !== null && _item_rotation !== void 0 ? _item_rotation : 0, "deg"),
                                    ['--pill-bg']: menuBg,
                                    ['--pill-color']: menuContentColor,
                                    ['--hover-bg']: ((_item_hoverStyles = item.hoverStyles) === null || _item_hoverStyles === void 0 ? void 0 : _item_hoverStyles.bgColor) || '#f3f4f6',
                                    ['--hover-color']: ((_item_hoverStyles1 = item.hoverStyles) === null || _item_hoverStyles1 === void 0 ? void 0 : _item_hoverStyles1.textColor) || menuContentColor,
                                    background: 'var(--pill-bg)',
                                    color: 'var(--pill-color)',
                                    minHeight: 'var(--pill-min-h, 160px)',
                                    padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                                    fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                                    fontWeight: 400,
                                    lineHeight: 0,
                                    willChange: 'transform',
                                    height: 10
                                },
                                ref: (el)=>{
                                    if (el) bubblesRef.current[idx] = el;
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 395,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                                lineNumber: 355,
                                columnNumber: 17
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/ui/bubblemenu.tsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/bubblemenu.tsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/bubblemenu.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(BubbleMenu, "X0suZMttFXXD0yiMkpIPU2H3QrA=");
_c = BubbleMenu;
var _c;
__turbopack_context__.k.register(_c, "BubbleMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bubblemenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bubblemenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Header() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const items = [
        {
            label: 'subjects',
            href: '#subjects',
            ariaLabel: 'Subjects',
            rotation: -8,
            hoverStyles: {
                bgColor: '#3b82f6',
                textColor: '#ffffff'
            }
        },
        {
            label: 'features',
            href: '#features',
            ariaLabel: 'Features',
            rotation: 8,
            hoverStyles: {
                bgColor: '#10b981',
                textColor: '#ffffff'
            }
        },
        {
            label: 'how it works',
            href: '#how-it-works',
            ariaLabel: 'How It Works',
            rotation: 8,
            hoverStyles: {
                bgColor: '#f59e0b',
                textColor: '#ffffff'
            }
        },
        {
            label: 'benefits',
            href: '#benefits',
            ariaLabel: 'Benefits',
            rotation: 8,
            hoverStyles: {
                bgColor: '#ef4444',
                textColor: '#ffffff'
            }
        },
        {
            label: 'contact',
            href: '#contact',
            ariaLabel: 'Contact',
            rotation: -8,
            hoverStyles: {
                bgColor: '#8b5cf6',
                textColor: '#ffffff'
            }
        },
        ...user ? [
            {
                label: 'dashboard',
                href: '/dashboard',
                ariaLabel: 'Dashboard',
                rotation: 8,
                hoverStyles: {
                    bgColor: '#6366f1',
                    textColor: '#ffffff'
                }
            }
        ] : [
            {
                label: 'sign in',
                href: '/signin',
                ariaLabel: 'Sign In',
                rotation: 8,
                hoverStyles: {
                    bgColor: '#0ea5e9',
                    textColor: '#ffffff'
                }
            },
            {
                label: 'get started',
                href: '/signup',
                ariaLabel: 'Get Started',
                rotation: -8,
                hoverStyles: {
                    bgColor: '#22c55e',
                    textColor: '#ffffff'
                }
            }
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bubblemenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontWeight: 700
            },
            children: " Voylearning "
        }, void 0, false, {
            fileName: "[project]/src/components/voy-learning/header.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, void 0),
        items: items,
        menuAriaLabel: "Toggle navigation",
        menuBg: "#ffffff",
        menuContentColor: "#111111",
        useFixedPosition: false,
        animationEase: "back.out(1.5)",
        animationDuration: 0.5,
        staggerDelay: 0.12
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/header.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Header, "Q+JCVIy3JH0MXpFK+vm68eAxsAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Ensure plugin is registered only on client
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function prefersReducedMotion() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useGSAP(setup, scope) {
    _s();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(scope !== null && scope !== void 0 ? scope : null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useGSAP.useLayoutEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let ctx = null;
            let extraCleanup;
            ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useGSAP.useLayoutEffect": (self)=>{
                    const maybe = setup(self);
                    if (typeof maybe === "function") {
                        return maybe;
                    }
                    if (maybe && typeof maybe.then === "function") {
                        maybe.then({
                            "useGSAP.useLayoutEffect": (ret)=>{
                                if (typeof ret === "function") extraCleanup = ret;
                            }
                        }["useGSAP.useLayoutEffect"]);
                    }
                }
            }["useGSAP.useLayoutEffect"], scopeRef);
            return ({
                "useGSAP.useLayoutEffect": ()=>{
                    try {
                        extraCleanup && extraCleanup();
                    } catch (e) {}
                    ctx && ctx.revert();
                }
            })["useGSAP.useLayoutEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useGSAP.useLayoutEffect"], []);
    return scopeRef;
}
_s(useGSAP, "TfySyzeSMCSVwTvFzv0sA02evP4=");
function registerScrollTrigger(defaults) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    if (defaults) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].defaults({
            ...defaults
        });
    }
}
function splitTextIntoChars(text) {
    return Array.from(text);
}
function createParallaxEffect(target) {
    let speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (prefersReducedMotion()) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(target, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            scrub: true,
            ...options
        }
    });
}
function createPinnedSection(trigger) {
    let pin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
        trigger: trigger,
        pin,
        pinSpacing: true,
        start: "top top",
        end: "+=100%",
        ...options
    });
}
function createHorizontalScroll(container, items) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (prefersReducedMotion()) return null;
    const totalWidth = items.reduce((acc, el)=>acc + (el.clientWidth || 0), 0);
    const xAmount = -(totalWidth - (container.clientWidth || 0));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(items, {
        x: xAmount,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: "top top",
            end: ()=>"+=".concat(totalWidth),
            ...options
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/hero-scrolly.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScrolly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lottiefiles/dotlottie-react/dist/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HeroScrolly() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lottieRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameCount = 192; // 00001.jpg ... 00192.jpg
    const srcFor = (i)=>"/image/".concat(String(i).padStart(5, "0"), ".jpg");
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroScrolly.useMemo[images]": ()=>{
            return Array.from({
                length: frameCount
            }, {
                "HeroScrolly.useMemo[images]": (_, idx)=>{
                    const img = new Image();
                    img.src = srcFor(idx + 1);
                    return img;
                }
            }["HeroScrolly.useMemo[images]"]);
        }
    }["HeroScrolly.useMemo[images]"], []);
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "HeroScrolly.useGSAP[scopeRef]": ()=>{
            var _images_;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const canvas = canvasRef.current;
            const wrapper = wrapperRef.current;
            const lottieEl = lottieRef.current;
            if (!canvas || !wrapper) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const state = {
                frame: 0
            };
            let ctaVisible = false;
            const setSize = {
                "HeroScrolly.useGSAP[scopeRef].setSize": ()=>{
                    const w = wrapper.clientWidth;
                    const h = window.innerHeight;
                    canvas.style.width = "100%";
                    canvas.style.height = "100%";
                    canvas.width = Math.floor(w * dpr);
                    canvas.height = Math.floor(h * dpr);
                }
            }["HeroScrolly.useGSAP[scopeRef].setSize"];
            const render = {
                "HeroScrolly.useGSAP[scopeRef].render": ()=>{
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
                    // Apply decreasing blur on the canvas from frame 1..87 (kept below Lottie overlay)
                    const blurEndFrame = 50;
                    const blurT = Math.max(0, Math.min(1, state.frame / (blurEndFrame - 1)));
                    const blurMax = 12; // px
                    const blurPx = blurMax * (1 - blurT);
                    if (canvas.style.filter !== "blur(".concat(blurPx, "px)")) {
                        canvas.style.filter = "blur(".concat(blurPx, "px)");
                    }
                    // Lottie overlay control: visible frames 1..87, scale down and fade out to 0 at 87
                    if (lottieEl) {
                        const endFrame = 20;
                        const t = Math.max(0, Math.min(1, state.frame / (endFrame - 1))); // 0..1 over frames 0..86
                        const scaleStart = 1.4; // bigger at start
                        const scaleEnd = 0.6; // smaller by frame 87
                        const scaleVal = scaleStart + (scaleEnd - scaleStart) * t;
                        const opacityVal = 1 - t;
                        lottieEl.style.opacity = String(opacityVal);
                        lottieEl.style.transform = "translate(-50%, -50%) scale(".concat(scaleVal, ")");
                        lottieEl.style.visibility = t >= 1 ? "hidden" : "visible";
                    }
                }
            }["HeroScrolly.useGSAP[scopeRef].render"];
            setSize();
            if ((_images_ = images[0]) === null || _images_ === void 0 ? void 0 : _images_.complete) render();
            else images[0].onload = render;
            if (ctaRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(ctaRef.current, {
                    autoAlpha: 0,
                    y: 12,
                    scale: 0.98,
                    pointerEvents: "none"
                });
            }
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(state, {
                frame: frameCount - 1,
                ease: "none",
                snap: "frame",
                onUpdate: {
                    "HeroScrolly.useGSAP[scopeRef].tween": ()=>{
                        render();
                        const show = state.frame >= 129;
                        if (show && !ctaVisible && ctaRef.current) {
                            ctaVisible = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ctaRef.current, {
                                autoAlpha: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.5,
                                ease: "power3.out",
                                onStart: {
                                    "HeroScrolly.useGSAP[scopeRef].tween": ()=>{
                                        if (ctaRef.current) ctaRef.current.style.pointerEvents = "auto";
                                    }
                                }["HeroScrolly.useGSAP[scopeRef].tween"]
                            });
                        } else if (!show && ctaVisible && ctaRef.current) {
                            ctaVisible = false;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(ctaRef.current, {
                                autoAlpha: 0,
                                y: 12,
                                scale: 0.98,
                                duration: 0.35,
                                ease: "power3.inOut",
                                onComplete: {
                                    "HeroScrolly.useGSAP[scopeRef].tween": ()=>{
                                        if (ctaRef.current) ctaRef.current.style.pointerEvents = "none";
                                    }
                                }["HeroScrolly.useGSAP[scopeRef].tween"]
                            });
                        }
                    }
                }["HeroScrolly.useGSAP[scopeRef].tween"],
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    end: "+=2000",
                    scrub: 0.5,
                    pin: true
                }
            });
            const onResize = {
                "HeroScrolly.useGSAP[scopeRef].onResize": ()=>{
                    setSize();
                    render();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["HeroScrolly.useGSAP[scopeRef].onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "HeroScrolly.useGSAP[scopeRef]": ()=>{
                    window.removeEventListener("resize", onResize);
                    tween.kill();
                }
            })["HeroScrolly.useGSAP[scopeRef]"];
        }
    }["HeroScrolly.useGSAP[scopeRef]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        ref: scopeRef,
        className: "relative w-full bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            className: "relative h-[100svh] w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "block h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: lottieRef,
                    className: "pointer-events-none absolute left-1/2 top-1/2 z-10",
                    style: {
                        transform: "translate(-50%, -50%) scale(1.4)",
                        opacity: 1,
                        visibility: "visible"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                        src: "https://lottie.host/ead225de-35e0-4b44-886b-7a26bf177769/JWXrLeUK8g.lottie",
                        loop: true,
                        autoplay: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ctaRef,
                    className: "absolute left-1/2 bottom-10 z-20 -translate-x-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/signup",
                        "aria-label": "Explore subjects and sign up",
                        className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:from-sky-300 hover:to-violet-400 active:scale-95",
                        children: "Explore"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(HeroScrolly, "/RmiVK8KKGqEWpOso5mf3AR6jNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = HeroScrolly;
var _c;
__turbopack_context__.k.register(_c, "HeroScrolly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/InfiniteMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__ = __turbopack_context__.i("[project]/node_modules/gl-matrix/esm/mat4.js [app-client] (ecmascript) <export * as mat4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__ = __turbopack_context__.i("[project]/node_modules/gl-matrix/esm/quat.js [app-client] (ecmascript) <export * as quat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__ = __turbopack_context__.i("[project]/node_modules/gl-matrix/esm/vec2.js [app-client] (ecmascript) <export * as vec2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__ = __turbopack_context__.i("[project]/node_modules/gl-matrix/esm/vec3.js [app-client] (ecmascript) <export * as vec3>");
;
;
var _s = __turbopack_context__.k.signature();
;
;
const discVertShaderSource = "#version 300 es\n\nuniform mat4 uWorldMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec3 uCameraPosition;\nuniform vec4 uRotationAxisVelocity;\n\nin vec3 aModelPosition;\nin vec3 aModelNormal;\nin vec2 aModelUvs;\nin mat4 aInstanceMatrix;\n\nout vec2 vUvs;\nout float vAlpha;\nflat out int vInstanceId;\n\n#define PI 3.141593\n\nvoid main() {\n    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);\n\n    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;\n    float radius = length(centerPos.xyz);\n\n    if (gl_VertexID > 0) {\n        vec3 rotationAxis = uRotationAxisVelocity.xyz;\n        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);\n        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));\n        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);\n        float strength = dot(stretchDir, relativeVertexPos);\n        float invAbsStrength = min(0., abs(strength) - 1.);\n        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);\n        worldPosition.xyz += stretchDir * strength;\n    }\n\n    worldPosition.xyz = radius * normalize(worldPosition.xyz);\n\n    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;\n\n    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;\n    vUvs = aModelUvs;\n    vInstanceId = gl_InstanceID;\n}\n";
const discFragShaderSource = "#version 300 es\nprecision highp float;\n\nuniform sampler2D uTex;\nuniform int uItemCount;\nuniform int uAtlasSize;\n\nout vec4 outColor;\n\nin vec2 vUvs;\nin float vAlpha;\nflat in int vInstanceId;\n\nvoid main() {\n    int itemIndex = vInstanceId % uItemCount;\n    int cellsPerRow = uAtlasSize;\n    int cellX = itemIndex % cellsPerRow;\n    int cellY = itemIndex / cellsPerRow;\n    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));\n    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;\n\n    ivec2 texSize = textureSize(uTex, 0);\n    float imageAspect = float(texSize.x) / float(texSize.y);\n    float containerAspect = 1.0;\n    \n    float scale = max(imageAspect / containerAspect, \n                     containerAspect / imageAspect);\n    \n    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);\n    st = (st - 0.5) * scale + 0.5;\n    \n    st = clamp(st, 0.0, 1.0);\n    st = st * cellSize + cellOffset;\n    \n    outColor = texture(uTex, st);\n    outColor.a *= vAlpha;\n}\n";
class Face {
    constructor(a, b, c){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "a", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "b", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "c", void 0);
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
class Vertex {
    constructor(x, y, z){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "position", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "normal", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "uv", void 0);
        this.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(x, y, z);
        this.normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create();
        this.uv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create();
    }
}
class Geometry {
    addVertex() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        for(let i = 0; i < args.length; i += 3){
            this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
        }
        return this;
    }
    addFace() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        for(let i = 0; i < args.length; i += 3){
            this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
        }
        return this;
    }
    get lastVertex() {
        return this.vertices[this.vertices.length - 1];
    }
    subdivide() {
        let divisions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        const midPointCache = {};
        let f = this.faces;
        for(let div = 0; div < divisions; ++div){
            const newFaces = new Array(f.length * 4);
            f.forEach((face, ndx)=>{
                const mAB = this.getMidPoint(face.a, face.b, midPointCache);
                const mBC = this.getMidPoint(face.b, face.c, midPointCache);
                const mCA = this.getMidPoint(face.c, face.a, midPointCache);
                const i = ndx * 4;
                newFaces[i + 0] = new Face(face.a, mAB, mCA);
                newFaces[i + 1] = new Face(face.b, mBC, mAB);
                newFaces[i + 2] = new Face(face.c, mCA, mBC);
                newFaces[i + 3] = new Face(mAB, mBC, mCA);
            });
            f = newFaces;
        }
        this.faces = f;
        return this;
    }
    spherize() {
        let radius = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        this.vertices.forEach((vertex)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].normalize(vertex.normal, vertex.position);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].scale(vertex.position, vertex.normal, radius);
        });
        return this;
    }
    get data() {
        return {
            vertices: this.vertexData,
            indices: this.indexData,
            normals: this.normalData,
            uvs: this.uvData
        };
    }
    get vertexData() {
        return new Float32Array(this.vertices.flatMap((v)=>Array.from(v.position)));
    }
    get normalData() {
        return new Float32Array(this.vertices.flatMap((v)=>Array.from(v.normal)));
    }
    get uvData() {
        return new Float32Array(this.vertices.flatMap((v)=>Array.from(v.uv)));
    }
    get indexData() {
        return new Uint16Array(this.faces.flatMap((f)=>[
                f.a,
                f.b,
                f.c
            ]));
    }
    getMidPoint(ndxA, ndxB, cache) {
        const cacheKey = ndxA < ndxB ? "k_".concat(ndxB, "_").concat(ndxA) : "k_".concat(ndxA, "_").concat(ndxB);
        if (Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
            return cache[cacheKey];
        }
        const a = this.vertices[ndxA].position;
        const b = this.vertices[ndxB].position;
        const ndx = this.vertices.length;
        cache[cacheKey] = ndx;
        this.addVertex((a[0] + b[0]) * 0.5, (a[1] + b[1]) * 0.5, (a[2] + b[2]) * 0.5);
        return ndx;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "vertices", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "faces", void 0);
        this.vertices = [];
        this.faces = [];
    }
}
class IcosahedronGeometry extends Geometry {
    constructor(){
        super();
        const t = Math.sqrt(5) * 0.5 + 0.5;
        this.addVertex(-1, t, 0, 1, t, 0, -1, -t, 0, 1, -t, 0, 0, -1, t, 0, 1, t, 0, -1, -t, 0, 1, -t, t, 0, -1, t, 0, 1, -t, 0, -1, -t, 0, 1).addFace(0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1);
    }
}
class DiscGeometry extends Geometry {
    constructor(steps = 4, radius = 1){
        super();
        const safeSteps = Math.max(4, steps);
        const alpha = 2 * Math.PI / safeSteps;
        this.addVertex(0, 0, 0);
        this.lastVertex.uv[0] = 0.5;
        this.lastVertex.uv[1] = 0.5;
        for(let i = 0; i < safeSteps; ++i){
            const x = Math.cos(alpha * i);
            const y = Math.sin(alpha * i);
            this.addVertex(radius * x, radius * y, 0);
            this.lastVertex.uv[0] = x * 0.5 + 0.5;
            this.lastVertex.uv[1] = y * 0.5 + 0.5;
            if (i > 0) {
                this.addFace(0, i, i + 1);
            }
        }
        this.addFace(0, safeSteps, 1);
    }
}
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
}
function createProgram(gl, shaderSources, transformFeedbackVaryings, attribLocations) {
    const program = gl.createProgram();
    if (!program) return null;
    [
        gl.VERTEX_SHADER,
        gl.FRAGMENT_SHADER
    ].forEach((type, ndx)=>{
        const shader = createShader(gl, type, shaderSources[ndx]);
        if (shader) {
            gl.attachShader(program, shader);
        }
    });
    if (transformFeedbackVaryings) {
        gl.transformFeedbackVaryings(program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
    }
    if (attribLocations) {
        for(const attrib in attribLocations){
            if (Object.prototype.hasOwnProperty.call(attribLocations, attrib)) {
                gl.bindAttribLocation(program, attribLocations[attrib], attrib);
            }
        }
    }
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
}
function makeVertexArray(gl, bufLocNumElmPairs, indices) {
    const va = gl.createVertexArray();
    if (!va) return null;
    gl.bindVertexArray(va);
    for (const [buffer, loc, numElem] of bufLocNumElmPairs){
        if (loc === -1) continue;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, numElem, gl.FLOAT, false, 0, 0);
    }
    if (indices) {
        const indexBuffer = gl.createBuffer();
        if (indexBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
        }
    }
    gl.bindVertexArray(null);
    return va;
}
function resizeCanvasToDisplaySize(canvas) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const displayWidth = Math.round(canvas.clientWidth * dpr);
    const displayHeight = Math.round(canvas.clientHeight * dpr);
    const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
    if (needResize) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }
    return needResize;
}
function makeBuffer(gl, sizeOrData, usage) {
    const buf = gl.createBuffer();
    if (!buf) {
        throw new Error('Failed to create WebGL buffer.');
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    if (typeof sizeOrData === 'number') {
        gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
    } else {
        gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return buf;
}
function createAndSetupTexture(gl, minFilter, magFilter, wrapS, wrapT) {
    const texture = gl.createTexture();
    if (!texture) {
        throw new Error('Failed to create WebGL texture.');
    }
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
    return texture;
}
class ArcballControl {
    update(deltaTime) {
        let targetFrameDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;
        const timeScale = deltaTime / targetFrameDuration + 0.00001;
        let angleFactor = timeScale;
        const snapRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create();
        if (this.isPointerDown) {
            const INTENSITY = 0.3 * timeScale;
            const ANGLE_AMPLIFICATION = 5 / timeScale;
            const midPointerPos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].sub(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create(), this.pointerPos, this.previousPointerPos);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].scale(midPointerPos, midPointerPos, INTENSITY);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].sqrLen(midPointerPos) > this.EPSILON) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].add(midPointerPos, this.previousPointerPos, midPointerPos);
                const p = this.project(midPointerPos);
                const q = this.project(this.previousPointerPos);
                const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), p);
                const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), q);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].copy(this.previousPointerPos, midPointerPos);
                angleFactor *= ANGLE_AMPLIFICATION;
                this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
            }
        } else {
            const INTENSITY = 0.1 * timeScale;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
            if (this.snapTargetDirection) {
                const SNAPPING_INTENSITY = 0.2;
                const a = this.snapTargetDirection;
                const b = this.snapDirection;
                const sqrDist = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].squaredDistance(a, b);
                const distanceFactor = Math.max(0.1, 1 - sqrDist * 10);
                angleFactor *= SNAPPING_INTENSITY * distanceFactor;
                this.quatFromVectors(a, b, snapRotation, angleFactor);
            }
        }
        const combinedQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].multiply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create(), snapRotation, this.pointerRotation);
        this.orientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].multiply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create(), combinedQuat, this.orientation);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].normalize(this.orientation, this.orientation);
        const RA_INTENSITY = 0.8 * timeScale;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].slerp(this._combinedQuat, this._combinedQuat, combinedQuat, RA_INTENSITY);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].normalize(this._combinedQuat, this._combinedQuat);
        const rad = Math.acos(this._combinedQuat[3]) * 2.0;
        const s = Math.sin(rad / 2.0);
        let rv = 0;
        if (s > 0.000001) {
            rv = rad / (2 * Math.PI);
            this.rotationAxis[0] = this._combinedQuat[0] / s;
            this.rotationAxis[1] = this._combinedQuat[1] / s;
            this.rotationAxis[2] = this._combinedQuat[2] / s;
        }
        const RV_INTENSITY = 0.5 * timeScale;
        this._rotationVelocity += (rv - this._rotationVelocity) * RV_INTENSITY;
        this.rotationVelocity = this._rotationVelocity / timeScale;
        this.updateCallback(deltaTime);
    }
    quatFromVectors(a, b, out) {
        let angleFactor = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].cross(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), a, b);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].normalize(axis, axis);
        const d = Math.max(-1, Math.min(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].dot(a, b)));
        const angle = Math.acos(d) * angleFactor;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].setAxisAngle(out, axis, angle);
        return {
            q: out,
            axis,
            angle
        };
    }
    project(pos) {
        const r = 2;
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        const s = Math.max(w, h) - 1;
        const x = (2 * pos[0] - w - 1) / s;
        const y = (2 * pos[1] - h - 1) / s;
        let z = 0;
        const xySq = x * x + y * y;
        const rSq = r * r;
        if (xySq <= rSq / 2.0) {
            z = Math.sqrt(rSq - xySq);
        } else {
            z = rSq / Math.sqrt(xySq);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(-x, y, z);
    }
    constructor(canvas, updateCallback){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "canvas", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "updateCallback", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isPointerDown", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "orientation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pointerRotation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rotationVelocity", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "rotationAxis", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(1, 0, 0));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "snapDirection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(0, 0, -1));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "snapTargetDirection", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pointerPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "previousPointerPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_rotationVelocity", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_combinedQuat", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "EPSILON", 0.1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "IDENTITY_QUAT", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create());
        this.canvas = canvas;
        this.updateCallback = updateCallback || (()=>undefined);
        canvas.addEventListener('pointerdown', (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].set(this.pointerPos, e.clientX, e.clientY);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].copy(this.previousPointerPos, this.pointerPos);
            this.isPointerDown = true;
        });
        canvas.addEventListener('pointerup', ()=>{
            this.isPointerDown = false;
        });
        canvas.addEventListener('pointerleave', ()=>{
            this.isPointerDown = false;
        });
        canvas.addEventListener('pointermove', (e)=>{
            if (this.isPointerDown) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].set(this.pointerPos, e.clientX, e.clientY);
            }
        });
        canvas.style.touchAction = 'none';
    }
}
class InfiniteGridMenu {
    resize() {
        const needsResize = resizeCanvasToDisplaySize(this.canvas);
        if (!this.gl) return;
        if (needsResize) {
            this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        }
        this.updateProjectionMatrix();
    }
    run() {
        let time = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        this._deltaTime = Math.min(32, time - this._time);
        this._time = time;
        this._deltaFrames = this._deltaTime / this.TARGET_FRAME_DURATION;
        this._frames += this._deltaFrames;
        this.animate(this._deltaTime);
        this.render();
        requestAnimationFrame((t)=>this.run(t));
    }
    init(onInit) {
        const gl = this.canvas.getContext('webgl2', {
            antialias: true,
            alpha: false
        });
        if (!gl) {
            throw new Error('No WebGL 2 context!');
        }
        this.gl = gl;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].set(this.viewportSize, this.canvas.clientWidth, this.canvas.clientHeight);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].clone(this.drawBufferSize);
        this.discProgram = createProgram(gl, [
            discVertShaderSource,
            discFragShaderSource
        ], null, {
            aModelPosition: 0,
            aModelNormal: 1,
            aModelUvs: 2,
            aInstanceMatrix: 3
        });
        this.discLocations = {
            aModelPosition: gl.getAttribLocation(this.discProgram, 'aModelPosition'),
            aModelUvs: gl.getAttribLocation(this.discProgram, 'aModelUvs'),
            aInstanceMatrix: gl.getAttribLocation(this.discProgram, 'aInstanceMatrix'),
            uWorldMatrix: gl.getUniformLocation(this.discProgram, 'uWorldMatrix'),
            uViewMatrix: gl.getUniformLocation(this.discProgram, 'uViewMatrix'),
            uProjectionMatrix: gl.getUniformLocation(this.discProgram, 'uProjectionMatrix'),
            uCameraPosition: gl.getUniformLocation(this.discProgram, 'uCameraPosition'),
            uScaleFactor: gl.getUniformLocation(this.discProgram, 'uScaleFactor'),
            uRotationAxisVelocity: gl.getUniformLocation(this.discProgram, 'uRotationAxisVelocity'),
            uTex: gl.getUniformLocation(this.discProgram, 'uTex'),
            uFrames: gl.getUniformLocation(this.discProgram, 'uFrames'),
            uItemCount: gl.getUniformLocation(this.discProgram, 'uItemCount'),
            uAtlasSize: gl.getUniformLocation(this.discProgram, 'uAtlasSize')
        };
        this.discGeo = new DiscGeometry(56, 1);
        this.discBuffers = this.discGeo.data;
        this.discVAO = makeVertexArray(gl, [
            [
                makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW),
                this.discLocations.aModelPosition,
                3
            ],
            [
                makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW),
                this.discLocations.aModelUvs,
                2
            ]
        ], this.discBuffers.indices);
        this.icoGeo = new IcosahedronGeometry();
        this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
        this.instancePositions = this.icoGeo.vertices.map((v)=>v.position);
        this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
        this.initDiscInstances(this.DISC_INSTANCE_COUNT);
        this.initTexture();
        this.control = new ArcballControl(this.canvas, (deltaTime)=>this.onControlUpdate(deltaTime));
        this.updateCameraMatrix();
        this.updateProjectionMatrix();
        this.resize();
        if (onInit) {
            onInit(this);
        }
    }
    initTexture() {
        if (!this.gl) return;
        const gl = this.gl;
        this.tex = createAndSetupTexture(gl, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
        const itemCount = Math.max(1, this.items.length);
        this.atlasSize = Math.ceil(Math.sqrt(itemCount));
        const cellSize = 512;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = this.atlasSize * cellSize;
        canvas.height = this.atlasSize * cellSize;
        Promise.all(this.items.map((item)=>new Promise((resolve)=>{
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = ()=>resolve(img);
                img.src = item.image;
            }))).then((images)=>{
            images.forEach((img, i)=>{
                const x = i % this.atlasSize * cellSize;
                const y = Math.floor(i / this.atlasSize) * cellSize;
                ctx.drawImage(img, x, y, cellSize, cellSize);
            });
            gl.bindTexture(gl.TEXTURE_2D, this.tex);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
            gl.generateMipmap(gl.TEXTURE_2D);
        });
    }
    initDiscInstances(count) {
        if (!this.gl || !this.discVAO) return;
        const gl = this.gl;
        const matricesArray = new Float32Array(count * 16);
        const matrices = [];
        for(let i = 0; i < count; ++i){
            const instanceMatrixArray = new Float32Array(matricesArray.buffer, i * 16 * 4, 16);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].identity(instanceMatrixArray);
            matrices.push(instanceMatrixArray);
        }
        this.discInstances = {
            matricesArray,
            matrices,
            buffer: gl.createBuffer()
        };
        gl.bindVertexArray(this.discVAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.discInstances.matricesArray.byteLength, gl.DYNAMIC_DRAW);
        const mat4AttribSlotCount = 4;
        const bytesPerMatrix = 16 * 4;
        for(let j = 0; j < mat4AttribSlotCount; ++j){
            const loc = this.discLocations.aInstanceMatrix + j;
            gl.enableVertexAttribArray(loc);
            gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMatrix, j * 4 * 4);
            gl.vertexAttribDivisor(loc, 1);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }
    animate(deltaTime) {
        if (!this.gl) return;
        this.control.update(deltaTime, this.TARGET_FRAME_DURATION);
        const positions = this.instancePositions.map((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].transformQuat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), p, this.control.orientation));
        const scale = 0.25;
        const SCALE_INTENSITY = 0.6;
        positions.forEach((p, ndx)=>{
            const s = Math.abs(p[2]) / this.SPHERE_RADIUS * SCALE_INTENSITY + (1 - SCALE_INTENSITY);
            const finalScale = s * scale;
            const matrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(matrix, matrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].fromTranslation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].negate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), p)));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(matrix, matrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].targetTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(), [
                0,
                0,
                0
            ], p, [
                0,
                1,
                0
            ]));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(matrix, matrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].fromScaling(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(), [
                finalScale,
                finalScale,
                finalScale
            ]));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].multiply(matrix, matrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].fromTranslation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(), [
                0,
                0,
                -this.SPHERE_RADIUS
            ]));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].copy(this.discInstances.matrices[ndx], matrix);
        });
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.discInstances.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.discInstances.matricesArray);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        this.smoothRotationVelocity = this.control.rotationVelocity;
    }
    render() {
        if (!this.gl || !this.discProgram) return;
        const gl = this.gl;
        gl.useProgram(this.discProgram);
        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.uniformMatrix4fv(this.discLocations.uWorldMatrix, false, this.worldMatrix);
        gl.uniformMatrix4fv(this.discLocations.uViewMatrix, false, this.camera.matrices.view);
        gl.uniformMatrix4fv(this.discLocations.uProjectionMatrix, false, this.camera.matrices.projection);
        gl.uniform3f(this.discLocations.uCameraPosition, this.camera.position[0], this.camera.position[1], this.camera.position[2]);
        gl.uniform4f(this.discLocations.uRotationAxisVelocity, this.control.rotationAxis[0], this.control.rotationAxis[1], this.control.rotationAxis[2], this.smoothRotationVelocity * 1.1);
        gl.uniform1i(this.discLocations.uItemCount, this.items.length);
        gl.uniform1i(this.discLocations.uAtlasSize, this.atlasSize);
        gl.uniform1f(this.discLocations.uFrames, this._frames);
        gl.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor);
        gl.uniform1i(this.discLocations.uTex, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.bindVertexArray(this.discVAO);
        gl.drawElementsInstanced(gl.TRIANGLES, this.discBuffers.indices.length, gl.UNSIGNED_SHORT, 0, this.DISC_INSTANCE_COUNT);
        gl.bindVertexArray(null);
    }
    updateCameraMatrix() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].targetTo(this.camera.matrix, this.camera.position, [
            0,
            0,
            0
        ], this.camera.up);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].invert(this.camera.matrices.view, this.camera.matrix);
    }
    updateProjectionMatrix() {
        if (!this.gl) return;
        const canvasEl = this.gl.canvas;
        this.camera.aspect = canvasEl.clientWidth / canvasEl.clientHeight;
        const height = this.SPHERE_RADIUS * 0.35;
        const distance = this.camera.position[2];
        if (this.camera.aspect > 1) {
            this.camera.fov = 2 * Math.atan(height / distance);
        } else {
            this.camera.fov = 2 * Math.atan(height / this.camera.aspect / distance);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].perspective(this.camera.matrices.projection, this.camera.fov, this.camera.aspect, this.camera.near, this.camera.far);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].invert(this.camera.matrices.inversProjection, this.camera.matrices.projection);
    }
    onControlUpdate(deltaTime) {
        const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
        let damping = 5 / timeScale;
        let cameraTargetZ = 3;
        const isMoving = this.control.isPointerDown || Math.abs(this.smoothRotationVelocity) > 0.01;
        if (isMoving !== this.movementActive) {
            this.movementActive = isMoving;
            this.onMovementChange(isMoving);
        }
        if (!this.control.isPointerDown) {
            const nearestVertexIndex = this.findNearestVertexIndex();
            const itemIndex = nearestVertexIndex % Math.max(1, this.items.length);
            this.onActiveItemChange(itemIndex);
            const snapDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), this.getVertexWorldPosition(nearestVertexIndex));
            this.control.snapTargetDirection = snapDirection;
        } else {
            cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
            damping = 7 / timeScale;
        }
        this.camera.position[2] += (cameraTargetZ - this.camera.position[2]) / damping;
        this.updateCameraMatrix();
    }
    findNearestVertexIndex() {
        const n = this.control.snapDirection;
        const inversOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].conjugate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__quat$3e$__["quat"].create(), this.control.orientation);
        const nt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].transformQuat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), n, inversOrientation);
        let maxD = -1;
        let nearestVertexIndex = 0;
        for(let i = 0; i < this.instancePositions.length; ++i){
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].dot(nt, this.instancePositions[i]);
            if (d > maxD) {
                maxD = d;
                nearestVertexIndex = i;
            }
        }
        return nearestVertexIndex;
    }
    getVertexWorldPosition(index) {
        const nearestVertexPos = this.instancePositions[index];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].transformQuat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].create(), nearestVertexPos, this.control.orientation);
    }
    constructor(canvas, items, onActiveItemChange, onMovementChange, onInit){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "canvas", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "items", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onActiveItemChange", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onMovementChange", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discProgram", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discVAO", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discBuffers", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "icoGeo", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discGeo", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "worldMatrix", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "tex", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "control", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discLocations", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "viewportSize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "drawBufferSize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "discInstances", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "instancePositions", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "DISC_INSTANCE_COUNT", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "atlasSize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_time", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_deltaTime", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_deltaFrames", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_frames", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "movementActive", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "TARGET_FRAME_DURATION", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "SPHERE_RADIUS", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "camera", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "smoothRotationVelocity", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scaleFactor", void 0);
        this.canvas = canvas;
        this.items = items;
        this.onActiveItemChange = onActiveItemChange;
        this.onMovementChange = onMovementChange;
        this.gl = null;
        this.discProgram = null;
        this.discVAO = null;
        this.worldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create();
        this.tex = null;
        this.viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create();
        this.drawBufferSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec2$3e$__["vec2"].create();
        this.instancePositions = [];
        this.DISC_INSTANCE_COUNT = 0;
        this.atlasSize = 1;
        this._time = 0;
        this._deltaTime = 0;
        this._deltaFrames = 0;
        this._frames = 0;
        this.movementActive = false;
        this.TARGET_FRAME_DURATION = 1000 / 60;
        this.SPHERE_RADIUS = 2;
        this.camera = {
            matrix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(),
            near: 0.1,
            far: 40,
            fov: Math.PI / 4,
            aspect: 1,
            position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(0, 0, 3),
            up: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__vec3$3e$__["vec3"].fromValues(0, 1, 0),
            matrices: {
                view: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(),
                projection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create(),
                inversProjection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__mat4$3e$__["mat4"].create()
            }
        };
        this.smoothRotationVelocity = 0;
        this.scaleFactor = 1.0;
        this.init(onInit);
    }
}
const defaultItems = [
    {
        image: 'https://picsum.photos/900/900?grayscale',
        link: 'https://google.com/',
        title: '',
        description: ''
    }
];
const InfiniteMenu = (param)=>{
    let { items = [] } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMoving, setIsMoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMenu.useEffect": ()=>{
            const canvas = canvasRef.current;
            let sketch = null;
            const handleActiveItem = {
                "InfiniteMenu.useEffect.handleActiveItem": (index)=>{
                    if (!items.length) return;
                    const itemIndex = index % items.length;
                    setActiveItem(items[itemIndex]);
                }
            }["InfiniteMenu.useEffect.handleActiveItem"];
            if (canvas) {
                sketch = new InfiniteGridMenu(canvas, items.length ? items : defaultItems, handleActiveItem, setIsMoving, {
                    "InfiniteMenu.useEffect": (sk)=>sk.run()
                }["InfiniteMenu.useEffect"]);
            }
            const handleResize = {
                "InfiniteMenu.useEffect.handleResize": ()=>{
                    if (sketch) {
                        sketch.resize();
                    }
                }
            }["InfiniteMenu.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            handleResize();
            return ({
                "InfiniteMenu.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                }
            })["InfiniteMenu.useEffect"];
        }
    }["InfiniteMenu.useEffect"], [
        items
    ]);
    const handleButtonClick = ()=>{
        if (!(activeItem === null || activeItem === void 0 ? void 0 : activeItem.link)) return;
        if (activeItem.link.startsWith('http')) {
            window.open(activeItem.link, '_blank');
        } else {
            console.log('Internal route:', activeItem.link);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                id: "infinite-grid-menu-canvas",
                ref: canvasRef,
                className: "cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
                lineNumber: 1102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "\n          select-none\n          absolute\n          font-black\n          [font-size:4rem]\n          left-[1.6em]\n          top-1/2\n          transform\n          translate-x-[20%]\n          -translate-y-1/2\n          transition-all\n          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ".concat(isMoving ? 'opacity-0 pointer-events-none duration-[100ms]' : 'opacity-100 pointer-events-auto duration-[500ms]', "\n        "),
                        children: activeItem.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
                        lineNumber: 1110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\n          select-none\n          absolute\n          max-w-[10ch]\n          text-[1.5rem]\n          top-1/2\n          right-[1%]\n          transition-all\n          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ".concat(isMoving ? 'opacity-0 pointer-events-none duration-[100ms] translate-x-[-60%] -translate-y-1/2' : 'opacity-100 pointer-events-auto duration-[500ms] translate-x-[-90%] -translate-y-1/2', "\n        "),
                        children: activeItem.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
                        lineNumber: 1133,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleButtonClick,
                        className: "\n          absolute\n          left-1/2\n          z-10\n          w-[60px]\n          h-[60px]\n          grid\n          place-items-center\n          bg-[#00ffff]\n          border-[5px]\n          border-black\n          rounded-full\n          cursor-pointer\n          transition-all\n          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ".concat(isMoving ? 'bottom-[-80px] opacity-0 pointer-events-none duration-[100ms] scale-0 -translate-x-1/2' : 'bottom-[3.8em] opacity-100 pointer-events-auto duration-[500ms] scale-100 -translate-x-1/2', "\n        "),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "select-none relative text-[#060010] top-[2px] text-[26px]",
                            children: "↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
                            lineNumber: 1177,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
                        lineNumber: 1153,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/InfiniteMenu.tsx",
        lineNumber: 1101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InfiniteMenu, "bqii/3nPo3QmIYtF64MiyG8ePAM=");
_c = InfiniteMenu;
const __TURBOPACK__default__export__ = InfiniteMenu;
var _c;
__turbopack_context__.k.register(_c, "InfiniteMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/subjects-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubjectsSectionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$InfiniteMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/InfiniteMenu.tsx [app-client] (ecmascript)");
"use client";
;
;
const items = [
    {
        image: "/New%20folder/image.png",
        link: "https://google.com/",
        title: "Item 1",
        description: "This is pretty cool, right?"
    },
    {
        image: "/New%20folder/image%20(1).png",
        link: "https://google.com/",
        title: "Item 2",
        description: "This is pretty cool, right?"
    },
    {
        image: "/New%20folder/image%20(2).png",
        link: "https://google.com/",
        title: "Item 3",
        description: "This is pretty cool, right?"
    },
    {
        image: "/New%20folder/image%20(3).png",
        link: "https://google.com/",
        title: "Item 4",
        description: "This is pretty cool, right?"
    }
];
function SubjectsSectionClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "subjects",
        className: "w-full py-24 md:py-32 bg-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 md:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "600px",
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$InfiniteMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: items
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = SubjectsSectionClient;
var _c;
__turbopack_context__.k.register(_c, "SubjectsSectionClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotPattern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function DotPattern(param) {
    let { density = 'normal', color, opacity = 0.2, className, ...props } = param;
    const densityClass = density === 'dense' ? 'dot-pattern dot-pattern-dense' : 'dot-pattern';
    const style = {
        // Override default via CSS custom properties if provided
        ...color ? {
            ['--dot-color']: color
        } : {},
        opacity
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pointer-events-none absolute inset-0 z-0', densityClass, className),
        style: style,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/dot-pattern.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = DotPattern;
var _c;
__turbopack_context__.k.register(_c, "DotPattern");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/glass-card.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const GlassCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant = 'default', hover = false, gradient = false, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variant === 'dark' ? 'glass-dark' : 'glass-card', 'group relative overflow-hidden transition-all duration-300', hover && 'hover:scale-105 hover:shadow-premium-lg', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative'),
            children: [
                gradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c1 = GlassCard;
GlassCard.displayName = 'GlassCard';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlassCard$React.forwardRef");
__turbopack_context__.k.register(_c1, "GlassCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/problem-solution-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemSolutionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProblemSolutionSection() {
    _s();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const sceneRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ProblemSolutionSection.useGSAP": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const root = ref.current;
            if (!root) return;
            __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-client] (ecmascript, async loader)").then({
                "ProblemSolutionSection.useGSAP": (param)=>{
                    let { gsap } = param;
                    __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript, async loader)").then({
                        "ProblemSolutionSection.useGSAP": (param)=>{
                            let { ScrollTrigger } = param;
                            gsap.registerPlugin(ScrollTrigger);
                            const tl = gsap.timeline({
                                defaults: {
                                    ease: "power2.out"
                                },
                                scrollTrigger: {
                                    trigger: root,
                                    start: "top 78%"
                                }
                            });
                            tl.fromTo(root.querySelectorAll('[data-anim="chip"]'), {
                                opacity: 0,
                                y: 10,
                                filter: "blur(6px)"
                            }, {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                duration: 0.5,
                                stagger: 0.1
                            }).fromTo(root.querySelector('[data-anim="heading"]'), {
                                opacity: 0,
                                y: 18,
                                filter: "blur(10px)"
                            }, {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                duration: 0.7
                            }, "-=0.1").fromTo(root.querySelectorAll('[data-anim="copy"] p'), {
                                opacity: 0,
                                y: 16
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 0.55,
                                stagger: 0.08
                            }, "-=0.2").fromTo(root.querySelectorAll('[data-anim="card"]'), {
                                opacity: 0,
                                y: 20,
                                scale: 0.96
                            }, {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.5,
                                stagger: 0.08
                            });
                            const scene = sceneRef.current;
                            if (scene) {
                                gsap.to(scene.querySelectorAll('[data-scene-layer]'), {
                                    y: {
                                        "ProblemSolutionSection.useGSAP": (i)=>i % 2 === 0 ? -8 : -4
                                    }["ProblemSolutionSection.useGSAP"],
                                    rotate: {
                                        "ProblemSolutionSection.useGSAP": (i)=>i % 2 === 0 ? 1.2 : -0.8
                                    }["ProblemSolutionSection.useGSAP"],
                                    duration: 3.5,
                                    yoyo: true,
                                    repeat: -1,
                                    ease: "sine.inOut",
                                    stagger: 0.2
                                });
                            }
                        }
                    }["ProblemSolutionSection.useGSAP"]);
                }
            }["ProblemSolutionSection.useGSAP"]);
        }
    }["ProblemSolutionSection.useGSAP"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ProblemSolutionSection.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const scene = sceneRef.current;
            if (!scene) return;
            let cleanup;
            let mounted = true;
            __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-client] (ecmascript, async loader)").then({
                "ProblemSolutionSection.useEffect": (param)=>{
                    let { gsap } = param;
                    if (!mounted) return;
                    const lerpTo = {
                        rx: gsap.quickTo(scene, "rotateX", {
                            duration: 0.6,
                            ease: "power3.out"
                        }),
                        ry: gsap.quickTo(scene, "rotateY", {
                            duration: 0.6,
                            ease: "power3.out"
                        }),
                        tx: gsap.quickTo(scene, "x", {
                            duration: 0.6,
                            ease: "power3.out"
                        }),
                        ty: gsap.quickTo(scene, "y", {
                            duration: 0.6,
                            ease: "power3.out"
                        })
                    };
                    const onMove = {
                        "ProblemSolutionSection.useEffect.onMove": (e)=>{
                            const rect = scene.getBoundingClientRect();
                            const cx = rect.left + rect.width / 2;
                            const cy = rect.top + rect.height / 2;
                            const dx = (e.clientX - cx) / (rect.width / 2);
                            const dy = (e.clientY - cy) / (rect.height / 2);
                            const maxTilt = 8;
                            lerpTo.ry(dx * maxTilt);
                            lerpTo.rx(-dy * maxTilt);
                            lerpTo.tx(dx * 6);
                            lerpTo.ty(dy * 6);
                        }
                    }["ProblemSolutionSection.useEffect.onMove"];
                    const onLeave = {
                        "ProblemSolutionSection.useEffect.onLeave": ()=>{
                            gsap.to(scene, {
                                rotateX: 0,
                                rotateY: 0,
                                x: 0,
                                y: 0,
                                duration: 0.8,
                                ease: "power3.out"
                            });
                        }
                    }["ProblemSolutionSection.useEffect.onLeave"];
                    scene.addEventListener("mousemove", onMove);
                    scene.addEventListener("mouseleave", onLeave);
                    cleanup = ({
                        "ProblemSolutionSection.useEffect": ()=>{
                            scene.removeEventListener("mousemove", onMove);
                            scene.removeEventListener("mouseleave", onLeave);
                        }
                    })["ProblemSolutionSection.useEffect"];
                }
            }["ProblemSolutionSection.useEffect"]);
            return ({
                "ProblemSolutionSection.useEffect": ()=>{
                    mounted = false;
                    cleanup === null || cleanup === void 0 ? void 0 : cleanup();
                }
            })["ProblemSolutionSection.useEffect"];
        }
    }["ProblemSolutionSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "why",
        className: "relative w-full py-24 md:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6",
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            "data-anim": "scene",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 -z-10 rounded-2xl blur-3xl",
                                    style: {
                                        backgroundImage: 'var(--gradient-hero)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: sceneRef,
                                    className: "relative h-72 sm:h-80 lg:h-96 w-full [transform-style:preserve-3d] rounded-3xl shadow-premium-lg bg-white/40 dark:bg-white/5 glass flex items-center justify-center overflow-hidden will-change-transform",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-scene-layer": true,
                                            className: "absolute inset-x-8 top-10 h-40 rounded-2xl bg-gradient-to-br from-white/70 to-white/20 dark:from-white/10 dark:to-white/5 shadow-premium-lg border border-white/40 dark:border-white/10 backdrop-blur-xl",
                                            style: {
                                                transform: "translateZ(38px) rotate(-3deg)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-scene-layer": true,
                                            className: "absolute inset-x-12 top-24 h-44 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 shadow-premium-lg border border-white/30 dark:border-white/10 backdrop-blur-xl",
                                            style: {
                                                transform: "translateZ(62px) rotate(2.5deg)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-scene-layer": true,
                                            className: "absolute inset-x-16 top-36 h-40 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 shadow-premium-lg border border-white/20 dark:border-white/10 backdrop-blur-xl",
                                            style: {
                                                transform: "translateZ(86px) rotate(-1.5deg)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative grid place-items-center rounded-2xl bg-white/70 dark:bg-white/10 p-6 shadow-premium-lg ring-1 ring-white/40 dark:ring-white/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                    className: "h-14 w-14 text-primary drop-shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 w-fit ring-1 ring-white/20",
                                    "data-anim": "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Why VoyLearning?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-anim": "heading",
                                    className: "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.1]",
                                    children: [
                                        "Static notes are limiting. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient",
                                            children: "Edit them"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 162,
                                            columnNumber: 42
                                        }, this),
                                        " and make them yours."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 text-muted-foreground md:text-lg",
                                    "data-anim": "copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "As a junior, you learn fastest when you can change things. VoyLearning ships clean, curated HTML notes and lets you ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground font-medium text-gradient",
                                                    children: "edit them directly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 133
                                                }, this),
                                                " with AI assistance."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-medium",
                                            children: "Pick a subject (ATA, BDA, FSP, LANA), open a note, ask the assistant to modify a section, add examples, or simplify concepts—then save your personalized version."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: [
                                        {
                                            title: "Too passive",
                                            desc: "Static notes don't adapt to your understanding."
                                        },
                                        {
                                            title: "Hard to remember",
                                            desc: "Without examples, concepts don't stick."
                                        },
                                        {
                                            title: "Time-consuming",
                                            desc: "Hunting for the right explanation slows you down."
                                        }
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                            className: "group relative p-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-premium-lg",
                                            hover: true,
                                            "data-anim": "card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-semibold tracking-tight",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-muted-foreground mt-1",
                                                            children: p.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    style: {
                                                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-fuchsia-400/10 to-transparent blur-[2px] transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.title, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(ProblemSolutionSection, "FavdoLLUkPFGEoh92Asgq3LrWYU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ProblemSolutionSection;
var _c;
__turbopack_context__.k.register(_c, "ProblemSolutionSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/how-it-works-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HowItWorksSection() {
    _s();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "HowItWorksSection.useGSAP[scopeRef]": async (ctx)=>{
            var _ctx_selector;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)");
            const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript, async loader)");
            gsap.registerPlugin(ScrollTrigger);
            const steps = (_ctx_selector = ctx.selector) === null || _ctx_selector === void 0 ? void 0 : _ctx_selector.call(ctx, '[data-step]');
            if (!steps || !steps.length) return;
            gsap.fromTo(steps, {
                opacity: 0,
                y: 24,
                rotateY: 45
            }, {
                opacity: 1,
                y: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ctx.scope,
                    start: 'top 80%'
                }
            });
        }
    }["HowItWorksSection.useGSAP[scopeRef]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        ref: scopeRef,
        className: "w-full py-24 md:py-32 bg-secondary relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-[40%] hidden h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 md:block animate-shimmer bg-[length:200%_100%]"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center space-y-4 text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold tracking-tighter sm:text-5xl text-gradient",
                                children: "Your Learning Journey in 3 Simple Steps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                                children: "Getting started with VoyLearning is as easy as one, two, three."
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto grid max-w-5xl items-stretch gap-y-10 gap-x-8 md:grid-cols-3 [perspective:1000px]",
                        children: [
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
                                title: '1. Sign Up',
                                desc: 'Create your free account in just a few seconds to unlock all notes.'
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                                title: '2. Browse Notes',
                                desc: 'Explore our extensive and neatly organized library of HTML notes.'
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                                title: '3. Learn & Grow',
                                desc: 'Study at your own pace and gain the confidence to build websites.'
                            }
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "text-center hover:rotate-[5deg] transition-transform",
                                hover: true,
                                gradient: true,
                                "data-step": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-glow-blue motion-safe:animate-float",
                                            style: {
                                                backgroundImage: 'var(--gradient-3)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                className: "h-10 w-10 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute right-2 top-2 text-6xl font-bold opacity-20 text-gradient select-none",
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: s.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, s.title, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(HowItWorksSection, "CEBYZMbFTC4OwqL4TSvNtn7WfbA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = HowItWorksSection;
var _c;
__turbopack_context__.k.register(_c, "HowItWorksSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CtaSection() {
    _s();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "CtaSection.useGSAP": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const root = ref.current;
            if (!root) return;
            __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-client] (ecmascript, async loader)").then({
                "CtaSection.useGSAP": (param)=>{
                    let { gsap } = param;
                    __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript, async loader)").then({
                        "CtaSection.useGSAP": (param)=>{
                            let { ScrollTrigger } = param;
                            gsap.registerPlugin(ScrollTrigger);
                            gsap.fromTo(root.querySelectorAll("[data-cta-anim]"), {
                                opacity: 0,
                                y: 16
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                ease: "power2.out",
                                stagger: 0.15,
                                scrollTrigger: {
                                    trigger: root,
                                    start: "top 80%"
                                }
                            });
                        }
                    }["CtaSection.useGSAP"]);
                }
            }["CtaSection.useGSAP"]);
        }
    }["CtaSection.useGSAP"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "cta",
        className: "relative w-full py-24 md:py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6",
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl p-12 md:p-16 text-center",
                    style: {
                        backgroundImage: 'var(--gradient-cta)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1",
                            "data-cta-anim": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🚀"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Start Your Journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow",
                            "data-cta-anim": true,
                            children: "Ready to Begin Your Web Development Voyage?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-[700px] text-white/90 md:text-xl",
                            "data-cta-anim": true,
                            children: "Take the first step towards mastering HTML. Create your free account and start learning with the clearest notes on the web."
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3",
                            "data-cta-anim": true,
                            children: [
                                '500+ Curated Notes',
                                'AI-Powered Editing',
                                'Free Forever'
                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-dark rounded-full px-3 py-2 text-white/90 text-sm flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: f
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, f, true, {
                                    fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            size: "lg",
                            className: "shadow-glow-purple hover:scale-110 transition",
                            "data-cta-anim": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signup",
                                children: "Access Notes Now →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/cta-section.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/cta-section.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(CtaSection, "nKKHggZXpngBxL+e4Le1LUPYkpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = CtaSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "contact",
        className: "relative w-full bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container flex flex-col items-center justify-between gap-6 md:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-6 w-6 text-primary transition-transform duration-300 hover:rotate-[360deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/footer.tsx",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm font-bold leading-loose text-gradient md:text-left",
                                        children: "VoyLearning"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/footer.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm leading-loose text-gray-400 md:text-left",
                                children: [
                                    "© ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: new Date().getFullYear()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    " VoyLearning. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/footer.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/footer.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                label: 'Twitter',
                                href: '#'
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                label: 'GitHub',
                                href: '#'
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                label: 'LinkedIn',
                                href: '#'
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: s.href,
                                "aria-label": s.label,
                                className: "glass-dark rounded-full p-3 transition hover:scale-110 hover:shadow-glow-blue",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                    className: "h-5 w-5 text-gray-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, s.label, false, {
                                fileName: "[project]/src/components/voy-learning/footer.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/footer.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/notes-demo-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesDemoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/voy-learning/glass-card.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NotesDemoSection() {
    _s();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "NotesDemoSection.useGSAP[scopeRef]": async (ctx)=>{
            var _ctx_selector;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)");
            const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript, async loader)");
            gsap.registerPlugin(ScrollTrigger);
            const items = (_ctx_selector = ctx.selector) === null || _ctx_selector === void 0 ? void 0 : _ctx_selector.call(ctx, '[data-animate]');
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
        }
    }["NotesDemoSection.useGSAP[scopeRef]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: scopeRef,
        className: "relative w-full py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-3xl text-center space-y-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tighter sm:text-5xl text-gradient",
                                children: "See the Difference"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground md:text-lg",
                                children: "Transform static notes into personalized learning materials"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 lg:grid-cols-2",
                        "data-animate": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "relative p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Original Note"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-sm max-w-none text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "m-0",
                                                    children: "Semantic HTML"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Semantic HTML provides meaning to the structure of web content. Elements like ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 97
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 126
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 156
                                                        }, this),
                                                        " help both users and search engines understand the layout."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "overflow-auto rounded-lg bg-muted p-4 text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n</main>"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 80
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GlassCard"], {
                                className: "relative p-0 ring-1 ring-transparent",
                                "data-animate": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gradient flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 79
                                                    }, this),
                                                    " AI-Enhanced Note"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-sm max-w-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "m-0 text-gradient",
                                                    children: "Semantic HTML"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Semantic HTML ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                            className: "rounded bg-gradient-to-r from-purple-100 to-pink-100 px-1",
                                                            children: "improves accessibility and SEO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 33
                                                        }, this),
                                                        " by providing meaningful structure. Use elements like ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 200
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 229
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 259
                                                        }, this),
                                                        " to describe sections of your page."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "overflow-auto rounded-lg p-4 text-xs",
                                                    style: {
                                                        backgroundImage: 'var(--gradient-hero)',
                                                        color: '#111'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: '<header aria-label="Site header">\n  <nav aria-label="Primary navigation">...</nav>\n</header>\n<main id="content">\n  <article role="article">...</article>\n</main>'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 138
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-10 max-w-3xl",
                        "data-animate": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass rounded-2xl p-3 md:p-4 flex items-center gap-2"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "ai-modify-input",
                                    className: "sr-only",
                                    children: "Ask AI to modify this note"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "ai-modify-input",
                                    className: "flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-3",
                                    placeholder: "Ask AI to modify this note...",
                                    "aria-label": "Ask AI to modify this note"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        'Add examples',
                                        'Simplify',
                                        'Add diagrams'
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "hidden sm:inline-flex rounded-full px-3 py-1 text-sm text-foreground/80 hover:text-foreground transition-colors glass",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    className: "ml-2",
                                    "aria-label": "Send",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(NotesDemoSection, "CEBYZMbFTC4OwqL4TSvNtn7WfbA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = NotesDemoSection;
var _c;
__turbopack_context__.k.register(_c, "NotesDemoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/text-reveal-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextRevealSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/voy-learning/dot-pattern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function FallingText(param) {
    let { text = '', highlightWords = [], trigger = 'auto', backgroundColor = 'transparent', wireframes = false, gravity = 1, mouseConstraintStiffness = 0.2, fontSize = '1rem' } = param;
    _s();
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const canvasContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [effectStarted, setEffectStarted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FallingText.useEffect": ()=>{
            if (!textRef.current) return;
            const words = text.split(' ');
            const newHTML = words.map({
                "FallingText.useEffect.newHTML": (word)=>{
                    const isHighlighted = highlightWords.some({
                        "FallingText.useEffect.newHTML.isHighlighted": (hw)=>word.startsWith(hw)
                    }["FallingText.useEffect.newHTML.isHighlighted"]);
                    return '<span class="inline-block mx-[2px] select-none '.concat(isHighlighted ? 'text-cyan-500 font-bold' : '', '">').concat(word, "</span>");
                }
            }["FallingText.useEffect.newHTML"]).join(' ');
            textRef.current.innerHTML = newHTML;
        }
    }["FallingText.useEffect"], [
        text,
        highlightWords
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FallingText.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            if (trigger === 'auto') {
                setEffectStarted(true);
                return;
            }
            if (trigger === 'scroll' && containerRef.current) {
                const el = containerRef.current;
                const observer = new IntersectionObserver({
                    "FallingText.useEffect": (param)=>{
                        let [entry] = param;
                        if (entry.isIntersecting) {
                            setEffectStarted(true);
                            observer.disconnect();
                        }
                    }
                }["FallingText.useEffect"], {
                    threshold: 0.1
                });
                observer.observe(el);
                return ({
                    "FallingText.useEffect": ()=>observer.disconnect()
                })["FallingText.useEffect"];
            }
        }
    }["FallingText.useEffect"], [
        trigger
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FallingText.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            if (!effectStarted) return;
            let mounted = true;
            let cleanup;
            ({
                "FallingText.useEffect": async ()=>{
                    let Matter;
                    try {
                        const matterModule = await __turbopack_context__.A("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript, async loader)");
                        var _default;
                        Matter = (_default = matterModule.default) !== null && _default !== void 0 ? _default : matterModule;
                    } catch (e) {
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
                    const wordBodies = Array.from(wordSpans).map({
                        "FallingText.useEffect.wordBodies": (elem)=>{
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
                        }
                    }["FallingText.useEffect.wordBodies"]);
                    wordBodies.forEach({
                        "FallingText.useEffect": (param)=>{
                            let { elem } = param;
                            elem.style.position = 'absolute';
                            elem.style.left = "0px";
                            elem.style.top = "0px";
                            elem.style.transform = 'translate(-50%, -50%)';
                        }
                    }["FallingText.useEffect"]);
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
                        ...wordBodies.map({
                            "FallingText.useEffect": (w)=>w.body
                        }["FallingText.useEffect"])
                    ]);
                    const runner = Runner.create();
                    Runner.run(runner, engine);
                    Render.run(render);
                    const updateLoop = {
                        "FallingText.useEffect.updateLoop": ()=>{
                            wordBodies.forEach({
                                "FallingText.useEffect.updateLoop": (param)=>{
                                    let { body, elem } = param;
                                    const { x, y } = body.position;
                                    elem.style.left = "".concat(x, "px");
                                    elem.style.top = "".concat(y, "px");
                                    elem.style.transform = "translate(-50%, -50%) rotate(".concat(body.angle, "rad)");
                                }
                            }["FallingText.useEffect.updateLoop"]);
                            Matter.Engine.update(engine);
                            requestAnimationFrame(updateLoop);
                        }
                    }["FallingText.useEffect.updateLoop"];
                    updateLoop();
                    cleanup = ({
                        "FallingText.useEffect": ()=>{
                            Render.stop(render);
                            Runner.stop(runner);
                            if (render.canvas && canvasContainerRef.current) {
                                try {
                                    canvasContainerRef.current.removeChild(render.canvas);
                                } catch (e) {}
                            }
                            World.clear(engine.world, false);
                            Engine.clear(engine);
                        }
                    })["FallingText.useEffect"];
                }
            })["FallingText.useEffect"]();
            return ({
                "FallingText.useEffect": ()=>{
                    mounted = false;
                    cleanup === null || cleanup === void 0 ? void 0 : cleanup();
                }
            })["FallingText.useEffect"];
        }
    }["FallingText.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative z-[1] w-full h-[min(22vh,280px)] cursor-pointer text-center pt-2 overflow-hidden",
        onClick: trigger === 'click' ? handleTrigger : undefined,
        onMouseEnter: trigger === 'hover' ? handleTrigger : undefined,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "inline-block text-white font-bold tracking-tight",
                style: {
                    fontSize,
                    lineHeight: 1.25
                }
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(FallingText, "eHvFl6O29bOgs5Z9Y2zvcA3Wbb4=");
_c = FallingText;
function TextRevealSection() {
    _s1();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TextRevealSection.useGSAP[scopeRef]": async (ctx)=>{
            var _ctx_selector;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)");
            const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript, async loader)");
            gsap.registerPlugin(ScrollTrigger);
            const container = ctx.scope;
            const lines = ((_ctx_selector = ctx.selector) === null || _ctx_selector === void 0 ? void 0 : _ctx_selector.call(ctx, '[data-line]')) || [];
            const isDesktop = "object" !== 'undefined' && window.innerWidth >= 768;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: isDesktop ? 'top center' : 'top 80%',
                    end: isDesktop ? '+=60%' : 'top center',
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
        }
    }["TextRevealSection.useGSAP[scopeRef]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: scopeRef,
        className: "relative w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black py-32 md:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[-8rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[-8rem] bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/text-reveal-section.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center text-gray-100 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-line": true,
                            className: "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
                            children: [
                                "Learning shouldn't be ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-line": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingText, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-line": true,
                            className: "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s1(TextRevealSection, "CEBYZMbFTC4OwqL4TSvNtn7WfbA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = TextRevealSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "FallingText");
__turbopack_context__.k.register(_c1, "TextRevealSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/voy-learning/scroll-progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScrollProgress() {
    _s();
    const [progress, setProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollProgress.useEffect": ()=>{
            const onScroll = {
                "ScrollProgress.useEffect.onScroll": ()=>{
                    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                    const pct = scrollTop / (scrollHeight - clientHeight) * 100;
                    setProgress(Number.isFinite(pct) ? pct : 0);
                    setVisible(pct > 20);
                }
            }["ScrollProgress.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ScrollProgress.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    const strokeDasharray = 2 * Math.PI * 22; // r=22
    const dashOffset = strokeDasharray - progress / 100 * strokeDasharray;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-label": "Scroll to top",
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-8 right-8 z-50 rounded-full glass shadow-premium-lg transition-transform duration-200", "hover:scale-110 hover:shadow-premium-xl", visible ? "opacity-100" : "pointer-events-none opacity-0"),
        style: {
            width: 56,
            height: 56
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: 56,
                height: 56,
                viewBox: "0 0 56 56",
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "sp-grad",
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#7c3aed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/scroll-progress.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex h-full w-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
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
_s(ScrollProgress, "N3eHrk6DNkX2v5MEKt//E7kA4nM=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_22fc3b9f._.js.map