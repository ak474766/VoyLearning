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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                    ref: ctaRef,
                    className: "absolute left-1/2 bottom-10 z-20 -translate-x-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/signup",
                        "aria-label": "Explore subjects and sign up",
                        className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:from-sky-300 hover:to-violet-400 active:scale-95",
                        children: "Explore"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/hero-scrolly.tsx",
                    lineNumber: 140,
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
"[project]/src/components/ui/Scrollfloat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const ScrollFloat = (param)=>{
    let { children, scrollContainerRef, containerClassName = '', textClassName = '', animationDuration = 1, ease = 'back.inOut(2)', scrollStart = 'center bottom+=50%', scrollEnd = 'bottom bottom-=40%', stagger = 0.03 } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollFloat.useMemo[splitText]": ()=>{
            const text = typeof children === 'string' ? children : '';
            return text.split('').map({
                "ScrollFloat.useMemo[splitText]": (char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block word",
                        children: char === ' ' ? '\u00A0' : char
                    }, index, false, {
                        fileName: "[project]/src/components/ui/Scrollfloat.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
            }["ScrollFloat.useMemo[splitText]"]);
        }
    }["ScrollFloat.useMemo[splitText]"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollFloat.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
            const charElements = el.querySelectorAll('.inline-block');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(charElements, {
                willChange: 'opacity, transform',
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
                transformOrigin: '50% 0%'
            }, {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: true
                }
            });
        }
    }["ScrollFloat.useEffect"], [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        className: "my-5 overflow-hidden ".concat(containerClassName),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ".concat(textClassName),
            children: splitText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Scrollfloat.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Scrollfloat.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollFloat, "hIZrZL5u/LWmVxtB2uNEyPh5EJc=");
_c = ScrollFloat;
const __TURBOPACK__default__export__ = ScrollFloat;
var _c;
__turbopack_context__.k.register(_c, "ScrollFloat");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gsap-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Scrollfloat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [semester, setSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SubjectsSectionClient.useLayoutEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const section = sectionRef.current;
            if (!section) return;
            let ctx;
            let mounted = true;
            ({
                "SubjectsSectionClient.useLayoutEffect": async ()=>{
                    const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-client] (ecmascript, async loader)");
                    const { ScrollTrigger } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript, async loader)");
                    gsap.registerPlugin(ScrollTrigger);
                    if (!mounted) return;
                    ctx = gsap.context({
                        "SubjectsSectionClient.useLayoutEffect": ()=>{
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
                                y: {
                                    "SubjectsSectionClient.useLayoutEffect": (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, -16, 72, i)
                                }["SubjectsSectionClient.useLayoutEffect"],
                                rotationZ: {
                                    "SubjectsSectionClient.useLayoutEffect": (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, 5, -5, i)
                                }["SubjectsSectionClient.useLayoutEffect"],
                                rotationY: -6,
                                z: {
                                    "SubjectsSectionClient.useLayoutEffect": (i, _el, arr)=>gsap.utils.mapRange(0, arr.length - 1, 0, 64, i)
                                }["SubjectsSectionClient.useLayoutEffect"],
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
                            tl.call({
                                "SubjectsSectionClient.useLayoutEffect": ()=>setSemester(1)
                            }["SubjectsSectionClient.useLayoutEffect"]);
                            tl.to(cards, {
                                x: {
                                    "SubjectsSectionClient.useLayoutEffect": (i)=>{
                                        const col = i % cols;
                                        return (col - (cols - 1) / 2) * 24;
                                    }
                                }["SubjectsSectionClient.useLayoutEffect"],
                                z: {
                                    "SubjectsSectionClient.useLayoutEffect": (i)=>{
                                        const col = i % cols;
                                        const depth = (cols - 1) / 2 - Math.abs(col - (cols - 1) / 2);
                                        return depth * 54;
                                    }
                                }["SubjectsSectionClient.useLayoutEffect"],
                                rotationY: {
                                    "SubjectsSectionClient.useLayoutEffect": (i)=>{
                                        const col = i % cols;
                                        return gsap.utils.mapRange(0, cols - 1, -10, 10, col);
                                    }
                                }["SubjectsSectionClient.useLayoutEffect"],
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
                            tl.call({
                                "SubjectsSectionClient.useLayoutEffect": ()=>setSemester(2)
                            }["SubjectsSectionClient.useLayoutEffect"]);
                            tl.to(grid, {
                                rotateY: 0,
                                xPercent: 10,
                                autoAlpha: 0,
                                duration: 0.4,
                                ease: "power2.in"
                            });
                        }
                    }["SubjectsSectionClient.useLayoutEffect"], section);
                }
            })["SubjectsSectionClient.useLayoutEffect"]();
            return ({
                "SubjectsSectionClient.useLayoutEffect": ()=>{
                    var _ctx_revert;
                    mounted = false;
                    ctx === null || ctx === void 0 ? void 0 : (_ctx_revert = ctx.revert) === null || _ctx_revert === void 0 ? void 0 : _ctx_revert.call(ctx);
                }
            })["SubjectsSectionClient.useLayoutEffect"];
        }
    }["SubjectsSectionClient.useLayoutEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "SubjectsSectionClient.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) return;
            const section = sectionRef.current;
            if (!section) return;
            let cleanup;
            let mounted = true;
            ({
                "SubjectsSectionClient.useEffect": async ()=>{
                    const { gsap } = await __turbopack_context__.A("[project]/node_modules/gsap/dist/gsap.js [app-client] (ecmascript, async loader)");
                    if (!mounted) return;
                    const cards = Array.from(section.querySelectorAll("[data-card]"));
                    const tiltTo = new Map();
                    const moveHandlers = new Map();
                    const leaveHandlers = new Map();
                    cards.forEach({
                        "SubjectsSectionClient.useEffect": (card)=>{
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
                            const onMove = {
                                "SubjectsSectionClient.useEffect.onMove": (e)=>{
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
                                    card.style.setProperty("--px", "".concat(px, "%"));
                                    card.style.setProperty("--py", "".concat(py, "%"));
                                }
                            }["SubjectsSectionClient.useEffect.onMove"];
                            const onLeave = {
                                "SubjectsSectionClient.useEffect.onLeave": ()=>{
                                    gsap.to(card, {
                                        rotateX: 0,
                                        rotateY: 0,
                                        duration: 0.6,
                                        ease: "power3.out"
                                    });
                                }
                            }["SubjectsSectionClient.useEffect.onLeave"];
                            card.addEventListener("pointermove", onMove);
                            card.addEventListener("pointerleave", onLeave);
                            moveHandlers.set(card, onMove);
                            leaveHandlers.set(card, onLeave);
                        }
                    }["SubjectsSectionClient.useEffect"]);
                    cleanup = ({
                        "SubjectsSectionClient.useEffect": ()=>{
                            cards.forEach({
                                "SubjectsSectionClient.useEffect": (card)=>{
                                    const onMove = moveHandlers.get(card);
                                    const onLeave = leaveHandlers.get(card);
                                    if (onMove) card.removeEventListener("pointermove", onMove);
                                    if (onLeave) card.removeEventListener("pointerleave", onLeave);
                                }
                            }["SubjectsSectionClient.useEffect"]);
                        }
                    })["SubjectsSectionClient.useEffect"];
                }
            })["SubjectsSectionClient.useEffect"]();
            return ({
                "SubjectsSectionClient.useEffect": ()=>{
                    mounted = false;
                    cleanup === null || cleanup === void 0 ? void 0 : cleanup();
                }
            })["SubjectsSectionClient.useEffect"];
        }
    }["SubjectsSectionClient.useEffect"], []);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "subjects",
            className: "w-full py-24 md:py-32 mt-12 bg-secondary ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 md:px-6 mt-12 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        animationDuration: 1,
                        ease: "back.inOut(2)",
                        scrollStart: "center bottom+=50%",
                        scrollEnd: "bottom bottom-=40%",
                        stagger: 0.03,
                        containerClassName: "mb-12 text-center flex justify-center",
                        textClassName: "text-white font-extrabold tracking-tight text-[clamp(2.4rem,6vw,4rem)] whitespace-nowrap",
                        children: "Explore Subjects"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        children: subjects.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: s.href,
                                    className: "block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-semibold text-white/90",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-white/60",
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            }, s.id, false, {
                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "subjects",
        ref: sectionRef,
        "aria-label": "Explore Subjects",
        className: "relative w-full bg-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-stage": true,
                className: "relative h-[100svh] w-full flex items-center justify-center overflow-visible [perspective:1000px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-16 left-1/2 -translate-x-1/2 w-full text-center z-10 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Scrollfloat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            animationDuration: 3,
                            ease: "back.inOut(2)",
                            scrollStart: "top center",
                            scrollEnd: "center center",
                            stagger: 0.03,
                            containerClassName: "my-0 mb-0 text-center",
                            textClassName: "text-white font-extrabold tracking-tight text-[clamp(3rem,7vw,5rem)] whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
                            children: "Explore Subjects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-grid": true,
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl origin-left will-change-transform [transform-style:preserve-3d] mt-24",
                        children: subjects.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: s.href,
                                "data-card": true,
                                className: "group relative block rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg overflow-hidden will-change-transform [transform-style:preserve-3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 transition-transform duration-300 ease-out hover:-translate-y-1 h-56 sm:h-64 lg:h-72",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-card3d": true,
                                        className: "relative h-full w-full [transform-style:preserve-3d] will-change-transform",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 z-10 [backface-visibility:hidden]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: subjectImagesFront[i % subjectImagesFront.length],
                                                    alt: s.title,
                                                    fill: true,
                                                    sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
                                                    className: "object-cover",
                                                    priority: i === 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(80%_80%_at_80%_20%,rgba(56,189,248,0.25),transparent)]",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-sky-400/10 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 z-10 [backface-visibility:hidden]",
                                                style: {
                                                    transform: "rotateY(180deg)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: subjectImagesBack[i % subjectImagesBack.length],
                                                    alt: "".concat(s.title, " back"),
                                                    fill: true,
                                                    sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 mix-blend-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        style: {
                                            background: "radial-gradient(200px 200px at var(--px,50%) var(--py,50%), rgba(255,255,255,0.08), transparent 60%)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/90 text-lg font-semibold select-none",
                        children: semester === 1 ? "Sem 1" : "Sem 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/subjects-section.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(SubjectsSectionClient, "z3S/lF/NxilRgThyUgiPUqHqtk8=");
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
"[project]/src/components/reactbits/beams-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeamsBackground",
    ()=>BeamsBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function BeamsBackground(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className),
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 [mask-image:radial-gradient(60rem_60rem_at_center,black,transparent)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -inset-[20%] animate-[spin_30s_linear_infinite] opacity-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.08)_20deg,transparent_40deg)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reactbits/beams-background.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rotate-45 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.1)_18deg,transparent_36deg)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reactbits/beams-background.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 -rotate-30 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(56,189,248,0.1)_16deg,transparent_34deg)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reactbits/beams-background.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reactbits/beams-background.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/beams-background.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(50rem_50rem_at_50%_10%,rgba(255,255,255,0.06),transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/beams-background.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reactbits/beams-background.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = BeamsBackground;
var _c;
__turbopack_context__.k.register(_c, "BeamsBackground");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$beams$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reactbits/beams-background.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$beams$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BeamsBackground"], {
                className: "opacity-35"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 114,
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
                                    lineNumber: 122,
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
                                            lineNumber: 128,
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
                                            lineNumber: 133,
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
                                            lineNumber: 138,
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
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 121,
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
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Why VoyLearning?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 156,
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
                                            lineNumber: 164,
                                            columnNumber: 42
                                        }, this),
                                        " and make them yours."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 160,
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
                                                    lineNumber: 168,
                                                    columnNumber: 133
                                                }, this),
                                                " with AI assistance."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground font-medium",
                                            children: "Pick a subject (ATA, BDA, FSP, LANA), open a note, ask the assistant to modify a section, add examples, or simplify concepts—then save your personalized version."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 166,
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
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-muted-foreground mt-1",
                                                            children: p.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    style: {
                                                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-fuchsia-400/10 to-transparent blur-[2px] transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.title, true, {
                                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/problem-solution-section.tsx",
        lineNumber: 110,
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
"[project]/src/components/reactbits/aurora-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuroraBackground",
    ()=>AuroraBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function AuroraBackground(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "jsx-df19bee6a60265d8" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className) || ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-df19bee6a60265d8" + " " + "absolute left-[-20%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.55),transparent_60%)] blur-3xl animate-[aurora_12s_ease-in-out_infinite]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/aurora-background.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-df19bee6a60265d8" + " " + "absolute right-[-15%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.5),transparent_60%)] blur-3xl animate-[aurora_14s_ease-in-out_infinite_reverse]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/aurora-background.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-df19bee6a60265d8" + " " + "absolute left-[10%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),transparent_60%)] blur-3xl animate-[aurora_16s_ease-in-out_infinite]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/aurora-background.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-df19bee6a60265d8" + " " + "absolute right-[20%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.4),transparent_60%)] blur-3xl animate-[aurora_18s_ease-in-out_infinite_reverse]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/aurora-background.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-df19bee6a60265d8" + " " + "absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/reactbits/aurora-background.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "df19bee6a60265d8",
                children: "@keyframes aurora{0%,to{filter:hue-rotate();transform:translate(0)rotate(0)scale(1)}25%{filter:hue-rotate(30deg);transform:translate(4%,-2%)rotate(10deg)scale(1.05)}50%{filter:hue-rotate(60deg);transform:translate(-3%,3%)rotate(-8deg)scale(1.03)}75%{filter:hue-rotate(30deg);transform:translate(2%,-4%)rotate(6deg)scale(1.06)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/reactbits/aurora-background.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AuroraBackground;
var _c;
__turbopack_context__.k.register(_c, "AuroraBackground");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reactbits/aurora-background.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuroraBackground"], {
                className: "opacity-60"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-[40%] hidden h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 md:block animate-shimmer bg-[length:200%_100%]"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 27,
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
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                                children: "Getting started with VoyLearning is as easy as one, two, three."
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 29,
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
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 41,
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
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground",
                                                    children: s.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, s.title, false, {
                                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/how-it-works-section.tsx",
        lineNumber: 25,
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
"[project]/src/components/voy-learning/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrowdCanvas",
    ()=>CrowdCanvas,
    "Skiper39",
    ()=>Skiper39,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CrowdCanvas = (param)=>{
    let { src, rows = 15, cols = 7 } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrowdCanvas.useEffect": ()=>{
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
            const randomRange = {
                "CrowdCanvas.useEffect.randomRange": (min, max)=>min + Math.random() * (max - min)
            }["CrowdCanvas.useEffect.randomRange"];
            const randomIndex = {
                "CrowdCanvas.useEffect.randomIndex": (array)=>randomRange(0, array.length) | 0
            }["CrowdCanvas.useEffect.randomIndex"];
            const removeFromArray = {
                "CrowdCanvas.useEffect.removeFromArray": (array, i)=>array.splice(i, 1)[0]
            }["CrowdCanvas.useEffect.removeFromArray"];
            const removeItemFromArray = {
                "CrowdCanvas.useEffect.removeItemFromArray": (array, item)=>removeFromArray(array, array.indexOf(item))
            }["CrowdCanvas.useEffect.removeItemFromArray"];
            const removeRandomFromArray = {
                "CrowdCanvas.useEffect.removeRandomFromArray": (array)=>removeFromArray(array, randomIndex(array))
            }["CrowdCanvas.useEffect.removeRandomFromArray"];
            const getRandomFromArray = {
                "CrowdCanvas.useEffect.getRandomFromArray": (array)=>array[randomIndex(array) | 0]
            }["CrowdCanvas.useEffect.getRandomFromArray"];
            // TWEEN FACTORIES
            const resetPeep = {
                "CrowdCanvas.useEffect.resetPeep": (param)=>{
                    let { stage, peep } = param;
                    const direction = Math.random() > 0.5 ? 1 : -1;
                    const offsetY = 100 - 250 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].parseEase("power2.in")(Math.random());
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
                }
            }["CrowdCanvas.useEffect.resetPeep"];
            const normalWalk = {
                "CrowdCanvas.useEffect.normalWalk": (param)=>{
                    let { peep, props } = param;
                    const { startX, startY, endX } = props;
                    const xDuration = 10;
                    const yDuration = 0.25;
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
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
                }
            }["CrowdCanvas.useEffect.normalWalk"];
            const walks = [
                normalWalk
            ];
            // FACTORY FUNCTIONS
            const createPeep = {
                "CrowdCanvas.useEffect.createPeep": (param)=>{
                    let { image, rect } = param;
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
                        setRect: {
                            "CrowdCanvas.useEffect.createPeep": (rect)=>{
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
                            }
                        }["CrowdCanvas.useEffect.createPeep"],
                        render: {
                            "CrowdCanvas.useEffect.createPeep": (ctx)=>{
                                ctx.save();
                                ctx.translate(peep.x, peep.y);
                                ctx.scale(peep.scaleX, 1);
                                ctx.drawImage(peep.image, peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3], 0, 0, peep.width, peep.height);
                                ctx.restore();
                            }
                        }["CrowdCanvas.useEffect.createPeep"]
                    };
                    peep.setRect(rect);
                    return peep;
                }
            }["CrowdCanvas.useEffect.createPeep"];
            // MAIN
            const img = document.createElement("img");
            const stage = {
                width: 0,
                height: 0
            };
            const allPeeps = [];
            const availablePeeps = [];
            const crowd = [];
            const createPeeps = {
                "CrowdCanvas.useEffect.createPeeps": ()=>{
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
                }
            }["CrowdCanvas.useEffect.createPeeps"];
            const initCrowd = {
                "CrowdCanvas.useEffect.initCrowd": ()=>{
                    while(availablePeeps.length){
                        addPeepToCrowd().walk.progress(Math.random());
                    }
                }
            }["CrowdCanvas.useEffect.initCrowd"];
            const addPeepToCrowd = {
                "CrowdCanvas.useEffect.addPeepToCrowd": ()=>{
                    const peep = removeRandomFromArray(availablePeeps);
                    const walk = getRandomFromArray(walks)({
                        peep,
                        props: resetPeep({
                            peep,
                            stage
                        })
                    }).eventCallback("onComplete", {
                        "CrowdCanvas.useEffect.addPeepToCrowd.walk": ()=>{
                            removePeepFromCrowd(peep);
                            addPeepToCrowd();
                        }
                    }["CrowdCanvas.useEffect.addPeepToCrowd.walk"]);
                    peep.walk = walk;
                    crowd.push(peep);
                    crowd.sort({
                        "CrowdCanvas.useEffect.addPeepToCrowd": (a, b)=>a.anchorY - b.anchorY
                    }["CrowdCanvas.useEffect.addPeepToCrowd"]);
                    return peep;
                }
            }["CrowdCanvas.useEffect.addPeepToCrowd"];
            const removePeepFromCrowd = {
                "CrowdCanvas.useEffect.removePeepFromCrowd": (peep)=>{
                    removeItemFromArray(crowd, peep);
                    availablePeeps.push(peep);
                }
            }["CrowdCanvas.useEffect.removePeepFromCrowd"];
            const render = {
                "CrowdCanvas.useEffect.render": ()=>{
                    if (!canvas) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.save();
                    ctx.scale(devicePixelRatio, devicePixelRatio);
                    crowd.forEach({
                        "CrowdCanvas.useEffect.render": (peep)=>{
                            peep.render(ctx);
                        }
                    }["CrowdCanvas.useEffect.render"]);
                    ctx.restore();
                }
            }["CrowdCanvas.useEffect.render"];
            const resize = {
                "CrowdCanvas.useEffect.resize": ()=>{
                    if (!canvas) return;
                    stage.width = canvas.clientWidth;
                    stage.height = canvas.clientHeight;
                    canvas.width = stage.width * devicePixelRatio;
                    canvas.height = stage.height * devicePixelRatio;
                    crowd.forEach({
                        "CrowdCanvas.useEffect.resize": (peep)=>{
                            peep.walk.kill();
                        }
                    }["CrowdCanvas.useEffect.resize"]);
                    crowd.length = 0;
                    availablePeeps.length = 0;
                    availablePeeps.push(...allPeeps);
                    initCrowd();
                }
            }["CrowdCanvas.useEffect.resize"];
            const init = {
                "CrowdCanvas.useEffect.init": ()=>{
                    createPeeps();
                    resize();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(render);
                }
            }["CrowdCanvas.useEffect.init"];
            img.onload = init;
            img.src = config.src;
            const handleResize = {
                "CrowdCanvas.useEffect.handleResize": ()=>resize()
            }["CrowdCanvas.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "CrowdCanvas.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(render);
                    crowd.forEach({
                        "CrowdCanvas.useEffect": (peep)=>{
                            if (peep.walk) peep.walk.kill();
                        }
                    }["CrowdCanvas.useEffect"]);
                }
            })["CrowdCanvas.useEffect"];
        }
    }["CrowdCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 block h-full w-full"
    }, void 0, false, {
        fileName: "[project]/src/components/voy-learning/footer.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CrowdCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CrowdCanvas;
const Skiper39 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[60vh] overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0a0f14] to-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']",
                    children: "Created by Armaan Kachhawa"
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/footer.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 h-full w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrowdCanvas, {
                    src: "/images/peeps/all-peeps.png",
                    rows: 15,
                    cols: 7
                }, void 0, false, {
                    fileName: "[project]/src/components/voy-learning/footer.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/footer.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/footer.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Skiper39;
;
const __TURBOPACK__default__export__ = Skiper39;
var _c, _c1;
__turbopack_context__.k.register(_c, "CrowdCanvas");
__turbopack_context__.k.register(_c1, "Skiper39");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reactbits/aurora-background.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reactbits$2f$aurora$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuroraBackground"], {
                className: "opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$voy$2d$learning$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 38,
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
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground md:text-lg",
                                children: "Transform static notes into personalized learning materials"
                            }, void 0, false, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 40,
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
                                                        lineNumber: 48,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Original Note"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 46,
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
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Semantic HTML provides meaning to the structure of web content. Elements like ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 97
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 126
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 156
                                                        }, this),
                                                        " help both users and search engines understand the layout."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "overflow-auto rounded-lg bg-muted p-4 text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n</main>"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 80
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 45,
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
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-yellow-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3 w-3 rounded-full bg-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gradient flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 79
                                                    }, this),
                                                    " AI-Enhanced Note"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 72,
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
                                                    lineNumber: 83,
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
                                                            lineNumber: 85,
                                                            columnNumber: 33
                                                        }, this),
                                                        " by providing meaningful structure. Use elements like ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<header>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 200
                                                        }, this),
                                                        ", ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<nav>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 229
                                                        }, this),
                                                        ", and ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: "<article>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 259
                                                        }, this),
                                                        " to describe sections of your page."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 84,
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
                                                        lineNumber: 87,
                                                        columnNumber: 138
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 44,
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
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "ai-modify-input",
                                    className: "flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-3",
                                    placeholder: "Ask AI to modify this note...",
                                    "aria-label": "Ask AI to modify this note"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 102,
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
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 108,
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
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/voy-learning/notes-demo-section.tsx",
        lineNumber: 36,
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

//# sourceMappingURL=src_2cbdb092._.js.map