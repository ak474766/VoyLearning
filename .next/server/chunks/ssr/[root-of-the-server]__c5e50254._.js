module.exports = [
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
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
"[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
}),
"[project]/src/firebase/firestore/chat.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearChatHistory",
    ()=>clearChatHistory,
    "saveChatMessage",
    ()=>saveChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
'use client';
;
const saveChatMessage = async (firestore, userId, noteId, role, content, imageUrl)=>{
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(firestore, `users/${userId}/noteChats/${noteId}/messages`);
    const messageData = {
        role,
        content,
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    };
    if (imageUrl) {
        messageData.imageUrl = imageUrl;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(messagesRef, messageData);
};
const clearChatHistory = async (firestore, userId, noteId)=>{
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(firestore, `users/${userId}/noteChats/${noteId}/messages`);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(messagesRef);
    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (querySnapshot.empty) {
        return;
    }
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(firestore);
    querySnapshot.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
};
}),
"[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
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
"[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/src/components/dashboard/image-upload-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageUploadCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ImageUploadCard({ upload, onInstructionSubmit, onCancel }) {
    const [instruction, setInstruction] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!instruction.trim()) return;
        onInstructionSubmit(instruction);
    };
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        toast({
            title: "Copied to clipboard!"
        });
    };
    const formatBytes = (bytes, decimals = 2)=>{
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB',
            'TB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    const isProcessing = upload.status === 'compressing' || upload.status === 'uploading';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full max-w-sm bg-gray-800 border-gray-700 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: [
                                    upload.status === 'compressing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-6 w-6 animate-spin text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 56,
                                        columnNumber: 61
                                    }, this),
                                    upload.status === 'uploading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-6 w-6 animate-spin text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 57,
                                        columnNumber: 59
                                    }, this),
                                    upload.status === 'complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-6 w-6 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 58,
                                        columnNumber: 58
                                    }, this),
                                    upload.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-6 w-6 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 59,
                                        columnNumber: 55
                                    }, this),
                                    !isProcessing && upload.status !== 'complete' && upload.status !== 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                        className: "h-6 w-6 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 60,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium truncate",
                                        children: upload.file.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: formatBytes(upload.file.size)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white",
                                onClick: onCancel,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 66,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-blue-300 capitalize",
                                children: [
                                    upload.status,
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                value: upload.progress,
                                className: "h-1 bg-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    upload.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-400",
                        children: upload.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "p-4 pt-0",
                children: upload.status === 'complete' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "w-full flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            value: instruction,
                            onChange: (e)=>setInstruction(e.target.value),
                            placeholder: "Ask anything...",
                            className: "bg-gray-700 border-gray-600 focus:ring-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                            lineNumber: 84,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            size: "icon",
                            className: "h-10 w-10 flex-shrink-0 bg-blue-600 hover:bg-blue-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 91,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                            lineNumber: 90,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                    lineNumber: 83,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "Ask anything...",
                    disabled: true,
                    className: "bg-gray-900 border-gray-700 cursor-not-allowed"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                    lineNumber: 95,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            upload.downloadURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mb-1",
                        children: "Image URL:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                readOnly: true,
                                value: upload.downloadURL,
                                className: "bg-gray-700 border-gray-600 text-xs h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 106,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-8 w-8 flex-shrink-0 text-gray-400 hover:bg-gray-700 hover:text-white",
                                onClick: ()=>copyToClipboard(upload.downloadURL),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
                lineNumber: 103,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/image-upload-card.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/firebase/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadToFirebase",
    ()=>uploadToFirebase,
    "uploadToImgBB",
    ()=>uploadToImgBB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
'use client';
;
;
async function uploadToFirebase(userId, noteId, file, onProgress) {
    const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
    const timestamp = new Date().getTime();
    const storagePath = `users/${userId}/noteImages/${noteId}/${timestamp}_${file.name}`;
    const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ref"])(storage, storagePath);
    return new Promise((resolve, reject)=>{
        const uploadTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadBytesResumable"])(storageRef, file);
        uploadTask.on('state_changed', (snapshot)=>{
            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            onProgress(progress);
        }, (error)=>{
            console.error("Upload failed:", error);
            reject(error);
        }, async ()=>{
            try {
                const downloadURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDownloadURL"])(uploadTask.snapshot.ref);
                resolve(downloadURL);
            } catch (error) {
                reject(error);
            }
        });
    });
}
function toBase64(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            // result is "data:image/jpeg;base64,LzlqLzRBQ...""
            // we only want the part after the comma
            if (typeof reader.result !== 'string') {
                return reject('FileReader did not return a string');
            }
            resolve(reader.result.substring(reader.result.indexOf(',') + 1));
        };
        reader.onerror = reject;
    });
}
async function uploadToImgBB(file, onProgress) {
    const apiKey = ("TURBOPACK compile-time value", "2ceece1c11960ad27d252d8b854cfb8a");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // ImgBB free tier has a 32MB limit. We can check here.
    if (file.size > 32 * 1024 * 1024) {
        throw new Error("File is too large for ImgBB's free tier (max 32MB).");
    }
    onProgress(50); // Simulate progress
    const base64string = await toBase64(file);
    const formData = new FormData();
    formData.append('image', base64string);
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
    });
    onProgress(100);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`ImgBB upload failed: ${errorData?.error?.message || response.statusText}`);
    }
    const result = await response.json();
    if (!result.data || !result.data.url) {
        throw new Error('ImgBB response did not contain a direct image URL.');
    }
    // Use `result.data.url` which is the direct link to the image.
    return result.data.url;
}
}),
"[project]/src/hooks/use-image-uploader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageUploader",
    ()=>useImageUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ALLOWED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp'
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
function useImageUploader(userId, noteId, method) {
    const [imageUpload, setImageUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const uploadImage = async (file)=>{
        if (!userId) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'You must be logged in to upload images.'
            });
            return;
        }
        // Validate file type
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            toast({
                variant: 'destructive',
                title: 'Invalid File Type',
                description: 'Please upload a valid image file (JPEG, PNG, GIF, or WebP).'
            });
            return;
        }
        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
            toast({
                variant: 'destructive',
                title: 'File Too Large',
                description: 'Image must be smaller than 10MB.'
            });
            return;
        }
        const uploadId = `upload-${Date.now()}`;
        setImageUpload({
            id: uploadId,
            file,
            status: 'compressing',
            progress: 0
        });
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                initialQuality: 0.8
            };
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(file, options);
            setImageUpload((prev)=>prev ? {
                    ...prev,
                    status: 'uploading'
                } : null);
            let downloadURL;
            if (method === 'firebase') {
                downloadURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadToFirebase"])(userId, noteId, compressedFile, (progress)=>{
                    setImageUpload((prev)=>prev ? {
                            ...prev,
                            progress
                        } : null);
                });
            } else {
                downloadURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadToImgBB"])(compressedFile, (progress)=>{
                    setImageUpload((prev)=>prev ? {
                            ...prev,
                            progress
                        } : null);
                });
            }
            setImageUpload((prev)=>prev ? {
                    ...prev,
                    status: 'complete',
                    downloadURL
                } : null);
        } catch (error) {
            console.error("Image upload error:", error);
            const errorMessage = error.message || 'Upload failed. Please try again.';
            setImageUpload((prev)=>prev ? {
                    ...prev,
                    status: 'error',
                    error: errorMessage
                } : null);
            toast({
                variant: 'destructive',
                title: 'Upload Error',
                description: errorMessage
            });
        }
    };
    const cancelUpload = ()=>{
        // In a real app, you might need to cancel the ongoing fetch/upload task.
        // For simplicity here, we're just clearing the UI state.
        setImageUpload(null);
    };
    return {
        imageUpload,
        uploadImage,
        cancelUpload
    };
}
}),
"[project]/src/services/llm/data:9afe50 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ff9fe4e6a6d2f4406f7850ce93a516a802be654a":"editHtmlWithLLM"},"src/services/llm/html-editor-agent.ts",""] */ __turbopack_context__.s([
    "editHtmlWithLLM",
    ()=>editHtmlWithLLM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var editHtmlWithLLM = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ff9fe4e6a6d2f4406f7850ce93a516a802be654a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "editHtmlWithLLM"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaHRtbC1lZGl0b3ItYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbnR5cGUgTW9kaWZpY2F0aW9uVHlwZSA9ICdyZXBsYWNlJyB8ICdpbnNlcnRBZnRlcicgfCAnaW5zZXJ0QmVmb3JlJyB8ICd1cGRhdGVUZXh0JyB8ICdhZGRJbWFnZScgfCAnYXBwZW5kQ2hpbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRJbnN0cnVjdGlvbiB7XG4gIGN1cnJlbnRIdG1sOiBzdHJpbmc7XG4gIHVzZXJJbnN0cnVjdGlvbjogc3RyaW5nO1xuICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0UmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RpZmllZEh0bWw/OiBzdHJpbmc7XG4gIGNoYW5nZURlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBtb2RpZmljYXRpb24/OiB7XG4gICAgdGFyZ2V0U2VsZWN0b3I6IHN0cmluZztcbiAgICBtb2RpZmljYXRpb25UeXBlOiBNb2RpZmljYXRpb25UeXBlO1xuICAgIG5ld0NvbnRlbnQ6IHN0cmluZztcbiAgICBleHBsYW5hdGlvbjogc3RyaW5nO1xuICAgIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICAgIHRhZ05hbWU/OiBzdHJpbmc7XG4gICAgaW5kZXg/OiBudW1iZXI7XG4gIH07XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hID0gei5vYmplY3Qoe1xuICB0YXJnZXRTZWxlY3Rvcjogei5zdHJpbmcoKS5kZXNjcmliZSgnQ1NTIHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50IHRvIG1vZGlmeScpLFxuICBtb2RpZmljYXRpb25UeXBlOiB6LmVudW0oWydyZXBsYWNlJywgJ2luc2VydEFmdGVyJywgJ2luc2VydEJlZm9yZScsICd1cGRhdGVUZXh0JywgJ2FkZEltYWdlJywgJ2FwcGVuZENoaWxkJ10pLFxuICBuZXdDb250ZW50OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgbmV3IEhUTUwgY29udGVudCBvciB0ZXh0IHRvIGluc2VydCcpLFxuICBleHBsYW5hdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnQnJpZWYgZGVzY3JpcHRpb24gb2Ygd2hhdCB3YXMgY2hhbmdlZCcpLFxuICB0ZXh0Q29udGVudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdGYWxsYmFjazogYSBzaG9ydCBzbmlwcGV0IG9mIG5lYXJieSB0ZXh0IHRvIGxvY2F0ZSB0aGUgZWxlbWVudCcpLFxuICB0YWdOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0ZhbGxiYWNrOiB0YWcgbmFtZSB0byBuYXJyb3cgdGhlIHNlYXJjaCAoZS5nLiwgZGl2LCBoMiknKSxcbiAgaW5kZXg6IHoubnVtYmVyKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnRmFsbGJhY2s6IDEtYmFzZWQgaW5kZXggYW1vbmcgZWxlbWVudHMgd2l0aCB0aGUgdGFnTmFtZScpLFxufSk7XG5cbi8qKlxuICogTExNLXBvd2VyZWQgSFRNTCBlZGl0b3IgdGhhdCBpbnRlbGxpZ2VudGx5IGlkZW50aWZpZXMgYW5kIG1vZGlmaWVzIHNwZWNpZmljIHBhcnRzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlZGl0SHRtbFdpdGhMTE0oaW5zdHJ1Y3Rpb246IEVkaXRJbnN0cnVjdGlvbik6IFByb21pc2U8RWRpdFJlc3BvbnNlPiB7XG4gIHRyeSB7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXQgSFRNTFxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUh0bWxTZXJ2ZXIoaW5zdHJ1Y3Rpb24uY3VycmVudEh0bWwpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgSW52YWxpZCBIVE1MOiAke3ZhbGlkYXRpb24uZXJyb3JzLmpvaW4oJywgJyl9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSB0aGUgcHJvbXB0IGZvciBMTE1cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBgWW91IGFyZSBhbiBleHBlcnQgSFRNTCBlZGl0b3IgYWdlbnQuIFlvdXIgdGFzayBpcyB0byBhbmFseXplIEhUTUwgY29udGVudCBhbmQgdXNlciBpbnN0cnVjdGlvbnMgdG8gbWFrZSBwcmVjaXNlLCB0YXJnZXRlZCBtb2RpZmljYXRpb25zLlxuXG5DUklUSUNBTCBSVUxFUzpcbjEuIE5FVkVSIHJlZ2VuZXJhdGUgdGhlIGVudGlyZSBIVE1MIGRvY3VtZW50XG4yLiBJZGVudGlmeSB0aGUgRVhBQ1QgZWxlbWVudCB0aGF0IG5lZWRzIG1vZGlmaWNhdGlvblxuMy4gUHJvdmlkZSBPTkxZIHRoZSBzcGVjaWZpYyBjb250ZW50IHRoYXQgbmVlZHMgdG8gY2hhbmdlXG40LiBVc2UgcHJlY2lzZSBDU1Mgc2VsZWN0b3JzIChwcmVmZXIgSUQgb3IgY2xhc3M7IGF2b2lkIG50aC1vZi10eXBlIHVubGVzcyBuZWNlc3NhcnkpXG41LiBQcmVzZXJ2ZSBhbGwgZXhpc3RpbmcgSFRNTCBzdHJ1Y3R1cmUsIHN0eWxpbmcsIGFuZCBmb3JtYXR0aW5nXG42LiBGb3IgaW1hZ2UgaW5zZXJ0aW9uLCBpZiB0aGUgZG9jdW1lbnQgY29udGFpbnMgXCIuZGlhZ3JhbS1wbGFjZWhvbGRlclwiIG9yIFwiLmltYWdlLXBsYWNlaG9sZGVyXCIsIHRhcmdldCB0aGF0IGVsZW1lbnQuIElmIG5laXRoZXIgZXhpc3RzLCBjaG9vc2UgdGhlIG1vc3QgcmVsZXZhbnQgbmVhcmJ5IHNlY3Rpb24gKGUuZy4sIGFmdGVyIGEgcmVsYXRlZCBoZWFkaW5nKS4gVGhlIHJlbmRlcmVyIHdpbGwgd3JhcCB0aGUgaW1hZ2UgVVJMIGluIHRoZSBjb3JyZWN0IHJlc3BvbnNpdmUgY29udGFpbmVyLCBzbyB5b3Ugb25seSBuZWVkIHRvIGNob29zZSB0aGUgaW5zZXJ0aW9uIHBvaW50LlxuNy4gRW5zdXJlIHRoZSBzZWxlY3RvciBleGlzdHMgaW4gdGhlIHByb3ZpZGVkIEhUTUw7IGFkanVzdCB0byBhbiBleGlzdGluZyBjbGFzcy9JRCBpZiBuZWVkZWRcbjguIEFsc28gaW5jbHVkZSBmYWxsYmFjayBmaWVsZHMgKHRleHRDb250ZW50LCB0YWdOYW1lLCBpbmRleCkgdGhhdCBjYW4gaGVscCBsb2NhdGUgdGhlIHRhcmdldCBpZiB0aGUgc2VsZWN0b3IgZmFpbHNcblxuTU9ESUZJQ0FUSU9OIFRZUEVTOlxuLSBcInJlcGxhY2VcIjogUmVwbGFjZSBlbnRpcmUgZWxlbWVudCB3aXRoIG5ldyBIVE1MIHdpdGggcHJvcGVyIGNzcyBpZiB0aGUgY3NzIGlzIG5vdCBleGlzdChmb3IgaW1hZ2UgY3JlYXRlIGNzcyBhbHNvIHNvIGl0cyByZW5kZXIgcHJvcGVybHkgd2l0aCB0aGUgaHRtbCBjb2RlKVxuLSBcInVwZGF0ZVRleHRcIjogQ2hhbmdlIG9ubHkgdGhlIHRleHQgY29udGVudCAocHJlc2VydmVzIHRhZ3MpXG4tIFwiaW5zZXJ0QWZ0ZXJcIjogSW5zZXJ0IG5ldyBjb250ZW50IGFmdGVyIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImluc2VydEJlZm9yZVwiOiBJbnNlcnQgbmV3IGNvbnRlbnQgYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImFkZEltYWdlXCI6IEluc2VydCBhbiBpbWFnZSBhZnRlciB0aGUgdGFyZ2V0IGVsZW1lbnRcbi0gXCJhcHBlbmRDaGlsZFwiOiBBZGQgY29udGVudCBhcyBhIGNoaWxkIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuXG5DdXJyZW50IEhUTUwgRG9jdW1lbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2luc3RydWN0aW9uLmN1cnJlbnRIdG1sfVxuXFxgXFxgXFxgXG5cblVzZXIgSW5zdHJ1Y3Rpb246IFwiJHtpbnN0cnVjdGlvbi51c2VySW5zdHJ1Y3Rpb259XCJcbiR7aW5zdHJ1Y3Rpb24uaW1hZ2VVcmwgPyBgXFxuSW1hZ2UgVVJMIHRvIGluc2VydDogJHtpbnN0cnVjdGlvbi5pbWFnZVVybH1gIDogJyd9XG5cbkFuYWx5emUgdGhlIEhUTUwgYW5kIHByb3ZpZGUgYSBKU09OIHJlc3BvbnNlIHdpdGg6XG4xLiB0YXJnZXRTZWxlY3RvcjogVGhlIENTUyBzZWxlY3RvciBmb3IgdGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4yLiBtb2RpZmljYXRpb25UeXBlOiBPbmUgb2YgdGhlIHR5cGVzIGxpc3RlZCBhYm92ZVxuMy4gbmV3Q29udGVudDogVGhlIGV4YWN0IEhUTUwvdGV4dCB0byBpbnNlcnQgKGtlZXAgaXQgbWluaW1hbCkuIEZvciBcImFkZEltYWdlXCIsIGEgYnJpZWYgZGVzY3JpcHRpb24gaXMgZmluZSBiZWNhdXNlIHRoZSBmaW5hbCByZW5kZXJlciB3aWxsIHVzZSB0aGUgcHJvdmlkZWQgaW1hZ2UgVVJMLlxuNC4gZXhwbGFuYXRpb246IEJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBjaGFuZ2VcblxuRXhhbXBsZSBSZXNwb25zZTpcbntcbiAgXCJ0YXJnZXRTZWxlY3RvclwiOiBcImgxLm1haW4tdGl0bGVcIixcbiAgXCJtb2RpZmljYXRpb25UeXBlXCI6IFwidXBkYXRlVGV4dFwiLFxuICBcIm5ld0NvbnRlbnRcIjogXCJOZXcgVGl0bGUgVGV4dFwiLFxuICBcImV4cGxhbmF0aW9uXCI6IFwiQ2hhbmdlZCB0aGUgbWFpbiBoZWFkaW5nIHRleHRcIlxufWA7XG5cbiAgICAvLyBDYWxsIExMTSB3aXRoIHJldHJ5IGxvZ2ljXG4gICAgY29uc3QgbGxtUmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBhaS5nZW5lcmF0ZSh7XG4gICAgICAgIHByb21wdDogc3lzdGVtUHJvbXB0LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBzY2hlbWE6IEh0bWxNb2RpZmljYXRpb25TY2hlbWEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFBhcnNlIExMTSByZXNwb25zZSByb2J1c3RseVxuICAgIGxldCBtb2RpZmljYXRpb246IHouaW5mZXI8dHlwZW9mIEh0bWxNb2RpZmljYXRpb25TY2hlbWE+IHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgY2FuZGlkYXRlID0gKGxsbVJlc3BvbnNlIGFzIGFueSk/Lm91dHB1dCA/PyAobGxtUmVzcG9uc2UgYXMgYW55KT8uZGF0YSA/PyB1bmRlZmluZWQ7XG4gICAgaWYgKGNhbmRpZGF0ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gSHRtbE1vZGlmaWNhdGlvblNjaGVtYS5zYWZlUGFyc2UoY2FuZGlkYXRlKTtcbiAgICAgIGlmIChwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgICBtb2RpZmljYXRpb24gPSBwYXJzZWQuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RpZmljYXRpb24pIHtcbiAgICAgIGNvbnN0IHRleHQgPSAobGxtUmVzcG9uc2UgYXMgYW55KT8udGV4dDtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hLnNhZmVQYXJzZShqc29uKTtcbiAgICAgICAgICBpZiAocGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvbiA9IHBhcnNlZC5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIEpTT04gcGFyc2UgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1vZGlmaWNhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMTE0gZGlkIG5vdCByZXR1cm4gYSB2YWxpZCBtb2RpZmljYXRpb24nKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhZGRpbmcgYW4gaW1hZ2UsIHVzZSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgbGV0IGNvbnRlbnRUb0luc2VydCA9IG1vZGlmaWNhdGlvbi5uZXdDb250ZW50O1xuICAgIGlmIChtb2RpZmljYXRpb24ubW9kaWZpY2F0aW9uVHlwZSA9PT0gJ2FkZEltYWdlJyAmJiBpbnN0cnVjdGlvbi5pbWFnZVVybCkge1xuICAgICAgY29udGVudFRvSW5zZXJ0ID0gaW5zdHJ1Y3Rpb24uaW1hZ2VVcmw7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG1vZGlmaWNhdGlvbiBwbGFuOyBjbGllbnQgd2lsbCBhcHBseSBET00gY2hhbmdlcyBhbmQgc2FuaXRpemVcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1vZGlmaWNhdGlvbjoge1xuICAgICAgICB0YXJnZXRTZWxlY3RvcjogbW9kaWZpY2F0aW9uLnRhcmdldFNlbGVjdG9yLFxuICAgICAgICBtb2RpZmljYXRpb25UeXBlOiBtb2RpZmljYXRpb24ubW9kaWZpY2F0aW9uVHlwZSxcbiAgICAgICAgbmV3Q29udGVudDogY29udGVudFRvSW5zZXJ0LFxuICAgICAgICBleHBsYW5hdGlvbjogbW9kaWZpY2F0aW9uLmV4cGxhbmF0aW9uLFxuICAgICAgICB0ZXh0Q29udGVudDogKG1vZGlmaWNhdGlvbiBhcyBhbnkpLnRleHRDb250ZW50LFxuICAgICAgICB0YWdOYW1lOiAobW9kaWZpY2F0aW9uIGFzIGFueSkudGFnTmFtZSxcbiAgICAgICAgaW5kZXg6IChtb2RpZmljYXRpb24gYXMgYW55KS5pbmRleCxcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VEZXNjcmlwdGlvbjogbW9kaWZpY2F0aW9uLmV4cGxhbmF0aW9uLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignSFRNTCBlZGl0aW5nIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBvY2N1cnJlZCcsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlciBxdWVzdGlvbnMgYWJvdXQgSFRNTCBjb250ZW50IHdpdGhvdXQgbW9kaWZ5aW5nIGl0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbnN3ZXJRdWVzdGlvbkFib3V0SHRtbChcbiAgaHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgcXVlc3Rpb246IHN0cmluZ1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9tcHQgPSBgWW91IGFyZSBhIGhlbHBmdWwgbGVhcm5pbmcgYXNzaXN0YW50LiBBbnN3ZXIgdGhlIHVzZXIncyBxdWVzdGlvbiBiYXNlZCBPTkxZIG9uIHRoZSBwcm92aWRlZCBIVE1MIGRvY3VtZW50IGNvbnRlbnQuIERvIG5vdCB1c2UgZXh0ZXJuYWwga25vd2xlZGdlLlxuXG5IVE1MIERvY3VtZW50IENvbnRlbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2h0bWxDb250ZW50fVxuXFxgXFxgXFxgXG5cblVzZXIgUXVlc3Rpb246IFwiJHtxdWVzdGlvbn1cIlxuXG5Qcm92aWRlIGEgY2xlYXIsIGNvbmNpc2UgYW5zd2VyIGJhc2VkIG9uIHRoZSBkb2N1bWVudCBjb250ZW50LiBJZiB0aGUgYW5zd2VyIGNhbm5vdCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQsIHNheSBzby5gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBhaS5nZW5lcmF0ZSh7IHByb21wdCB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1F1ZXN0aW9uIGFuc3dlcmluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gYW5zd2VyIHF1ZXN0aW9uOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InfWApO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXRyeSBoZWxwZXIgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5V2l0aEJhY2tvZmY8VD4oZm46ICgpID0+IFByb21pc2U8VD4sIHJldHJpZXMgPSAzKTogUHJvbWlzZTxUPiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cmllczsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoaSA9PT0gcmV0cmllcyAtIDEpIHRocm93IGVycm9yO1xuICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLnBvdygyLCBpKSAqIDEwMDA7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdNYXggcmV0cmllcyBleGNlZWRlZCcpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVIdG1sU2VydmVyKGh0bWw6IHN0cmluZyk6IHsgdmFsaWQ6IGJvb2xlYW47IGVycm9yczogc3RyaW5nW10gfSB7XG4gIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKCFodG1sIHx8IGh0bWwudHJpbSgpLmxlbmd0aCA9PT0gMCkgZXJyb3JzLnB1c2goJ0hUTUwgY29udGVudCBpcyBlbXB0eScpO1xuICBpZiAoaHRtbC5sZW5ndGggPiA1MDAwMDAwKSBlcnJvcnMucHVzaCgnSFRNTCBjb250ZW50IGV4Y2VlZHMgc2l6ZSBsaW1pdCAoNU1CKScpO1xuICBpZiAoIWh0bWwuaW5jbHVkZXMoJzxodG1sJykgJiYgIWh0bWwuaW5jbHVkZXMoJzxib2R5JykpIGVycm9ycy5wdXNoKCdIVE1MIG1pc3NpbmcgYmFzaWMgc3RydWN0dXJlJyk7XG4gIHJldHVybiB7IHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwLCBlcnJvcnMgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBd0NzQiJ9
}),
"[project]/src/services/llm/data:e1e4e7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60364dc76f720cd99afdb2f862e80a5d8830e52102":"answerQuestionAboutHtml"},"src/services/llm/html-editor-agent.ts",""] */ __turbopack_context__.s([
    "answerQuestionAboutHtml",
    ()=>answerQuestionAboutHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var answerQuestionAboutHtml = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60364dc76f720cd99afdb2f862e80a5d8830e52102", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "answerQuestionAboutHtml"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaHRtbC1lZGl0b3ItYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbnR5cGUgTW9kaWZpY2F0aW9uVHlwZSA9ICdyZXBsYWNlJyB8ICdpbnNlcnRBZnRlcicgfCAnaW5zZXJ0QmVmb3JlJyB8ICd1cGRhdGVUZXh0JyB8ICdhZGRJbWFnZScgfCAnYXBwZW5kQ2hpbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRJbnN0cnVjdGlvbiB7XG4gIGN1cnJlbnRIdG1sOiBzdHJpbmc7XG4gIHVzZXJJbnN0cnVjdGlvbjogc3RyaW5nO1xuICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0UmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBtb2RpZmllZEh0bWw/OiBzdHJpbmc7XG4gIGNoYW5nZURlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBtb2RpZmljYXRpb24/OiB7XG4gICAgdGFyZ2V0U2VsZWN0b3I6IHN0cmluZztcbiAgICBtb2RpZmljYXRpb25UeXBlOiBNb2RpZmljYXRpb25UeXBlO1xuICAgIG5ld0NvbnRlbnQ6IHN0cmluZztcbiAgICBleHBsYW5hdGlvbjogc3RyaW5nO1xuICAgIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICAgIHRhZ05hbWU/OiBzdHJpbmc7XG4gICAgaW5kZXg/OiBudW1iZXI7XG4gIH07XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hID0gei5vYmplY3Qoe1xuICB0YXJnZXRTZWxlY3Rvcjogei5zdHJpbmcoKS5kZXNjcmliZSgnQ1NTIHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50IHRvIG1vZGlmeScpLFxuICBtb2RpZmljYXRpb25UeXBlOiB6LmVudW0oWydyZXBsYWNlJywgJ2luc2VydEFmdGVyJywgJ2luc2VydEJlZm9yZScsICd1cGRhdGVUZXh0JywgJ2FkZEltYWdlJywgJ2FwcGVuZENoaWxkJ10pLFxuICBuZXdDb250ZW50OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgbmV3IEhUTUwgY29udGVudCBvciB0ZXh0IHRvIGluc2VydCcpLFxuICBleHBsYW5hdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnQnJpZWYgZGVzY3JpcHRpb24gb2Ygd2hhdCB3YXMgY2hhbmdlZCcpLFxuICB0ZXh0Q29udGVudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdGYWxsYmFjazogYSBzaG9ydCBzbmlwcGV0IG9mIG5lYXJieSB0ZXh0IHRvIGxvY2F0ZSB0aGUgZWxlbWVudCcpLFxuICB0YWdOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0ZhbGxiYWNrOiB0YWcgbmFtZSB0byBuYXJyb3cgdGhlIHNlYXJjaCAoZS5nLiwgZGl2LCBoMiknKSxcbiAgaW5kZXg6IHoubnVtYmVyKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnRmFsbGJhY2s6IDEtYmFzZWQgaW5kZXggYW1vbmcgZWxlbWVudHMgd2l0aCB0aGUgdGFnTmFtZScpLFxufSk7XG5cbi8qKlxuICogTExNLXBvd2VyZWQgSFRNTCBlZGl0b3IgdGhhdCBpbnRlbGxpZ2VudGx5IGlkZW50aWZpZXMgYW5kIG1vZGlmaWVzIHNwZWNpZmljIHBhcnRzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlZGl0SHRtbFdpdGhMTE0oaW5zdHJ1Y3Rpb246IEVkaXRJbnN0cnVjdGlvbik6IFByb21pc2U8RWRpdFJlc3BvbnNlPiB7XG4gIHRyeSB7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXQgSFRNTFxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUh0bWxTZXJ2ZXIoaW5zdHJ1Y3Rpb24uY3VycmVudEh0bWwpO1xuICAgIGlmICghdmFsaWRhdGlvbi52YWxpZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgSW52YWxpZCBIVE1MOiAke3ZhbGlkYXRpb24uZXJyb3JzLmpvaW4oJywgJyl9YCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSB0aGUgcHJvbXB0IGZvciBMTE1cbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBgWW91IGFyZSBhbiBleHBlcnQgSFRNTCBlZGl0b3IgYWdlbnQuIFlvdXIgdGFzayBpcyB0byBhbmFseXplIEhUTUwgY29udGVudCBhbmQgdXNlciBpbnN0cnVjdGlvbnMgdG8gbWFrZSBwcmVjaXNlLCB0YXJnZXRlZCBtb2RpZmljYXRpb25zLlxuXG5DUklUSUNBTCBSVUxFUzpcbjEuIE5FVkVSIHJlZ2VuZXJhdGUgdGhlIGVudGlyZSBIVE1MIGRvY3VtZW50XG4yLiBJZGVudGlmeSB0aGUgRVhBQ1QgZWxlbWVudCB0aGF0IG5lZWRzIG1vZGlmaWNhdGlvblxuMy4gUHJvdmlkZSBPTkxZIHRoZSBzcGVjaWZpYyBjb250ZW50IHRoYXQgbmVlZHMgdG8gY2hhbmdlXG40LiBVc2UgcHJlY2lzZSBDU1Mgc2VsZWN0b3JzIChwcmVmZXIgSUQgb3IgY2xhc3M7IGF2b2lkIG50aC1vZi10eXBlIHVubGVzcyBuZWNlc3NhcnkpXG41LiBQcmVzZXJ2ZSBhbGwgZXhpc3RpbmcgSFRNTCBzdHJ1Y3R1cmUsIHN0eWxpbmcsIGFuZCBmb3JtYXR0aW5nXG42LiBGb3IgaW1hZ2UgaW5zZXJ0aW9uLCBpZiB0aGUgZG9jdW1lbnQgY29udGFpbnMgXCIuZGlhZ3JhbS1wbGFjZWhvbGRlclwiIG9yIFwiLmltYWdlLXBsYWNlaG9sZGVyXCIsIHRhcmdldCB0aGF0IGVsZW1lbnQuIElmIG5laXRoZXIgZXhpc3RzLCBjaG9vc2UgdGhlIG1vc3QgcmVsZXZhbnQgbmVhcmJ5IHNlY3Rpb24gKGUuZy4sIGFmdGVyIGEgcmVsYXRlZCBoZWFkaW5nKS4gVGhlIHJlbmRlcmVyIHdpbGwgd3JhcCB0aGUgaW1hZ2UgVVJMIGluIHRoZSBjb3JyZWN0IHJlc3BvbnNpdmUgY29udGFpbmVyLCBzbyB5b3Ugb25seSBuZWVkIHRvIGNob29zZSB0aGUgaW5zZXJ0aW9uIHBvaW50LlxuNy4gRW5zdXJlIHRoZSBzZWxlY3RvciBleGlzdHMgaW4gdGhlIHByb3ZpZGVkIEhUTUw7IGFkanVzdCB0byBhbiBleGlzdGluZyBjbGFzcy9JRCBpZiBuZWVkZWRcbjguIEFsc28gaW5jbHVkZSBmYWxsYmFjayBmaWVsZHMgKHRleHRDb250ZW50LCB0YWdOYW1lLCBpbmRleCkgdGhhdCBjYW4gaGVscCBsb2NhdGUgdGhlIHRhcmdldCBpZiB0aGUgc2VsZWN0b3IgZmFpbHNcblxuTU9ESUZJQ0FUSU9OIFRZUEVTOlxuLSBcInJlcGxhY2VcIjogUmVwbGFjZSBlbnRpcmUgZWxlbWVudCB3aXRoIG5ldyBIVE1MIHdpdGggcHJvcGVyIGNzcyBpZiB0aGUgY3NzIGlzIG5vdCBleGlzdChmb3IgaW1hZ2UgY3JlYXRlIGNzcyBhbHNvIHNvIGl0cyByZW5kZXIgcHJvcGVybHkgd2l0aCB0aGUgaHRtbCBjb2RlKVxuLSBcInVwZGF0ZVRleHRcIjogQ2hhbmdlIG9ubHkgdGhlIHRleHQgY29udGVudCAocHJlc2VydmVzIHRhZ3MpXG4tIFwiaW5zZXJ0QWZ0ZXJcIjogSW5zZXJ0IG5ldyBjb250ZW50IGFmdGVyIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImluc2VydEJlZm9yZVwiOiBJbnNlcnQgbmV3IGNvbnRlbnQgYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImFkZEltYWdlXCI6IEluc2VydCBhbiBpbWFnZSBhZnRlciB0aGUgdGFyZ2V0IGVsZW1lbnRcbi0gXCJhcHBlbmRDaGlsZFwiOiBBZGQgY29udGVudCBhcyBhIGNoaWxkIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuXG5DdXJyZW50IEhUTUwgRG9jdW1lbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2luc3RydWN0aW9uLmN1cnJlbnRIdG1sfVxuXFxgXFxgXFxgXG5cblVzZXIgSW5zdHJ1Y3Rpb246IFwiJHtpbnN0cnVjdGlvbi51c2VySW5zdHJ1Y3Rpb259XCJcbiR7aW5zdHJ1Y3Rpb24uaW1hZ2VVcmwgPyBgXFxuSW1hZ2UgVVJMIHRvIGluc2VydDogJHtpbnN0cnVjdGlvbi5pbWFnZVVybH1gIDogJyd9XG5cbkFuYWx5emUgdGhlIEhUTUwgYW5kIHByb3ZpZGUgYSBKU09OIHJlc3BvbnNlIHdpdGg6XG4xLiB0YXJnZXRTZWxlY3RvcjogVGhlIENTUyBzZWxlY3RvciBmb3IgdGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4yLiBtb2RpZmljYXRpb25UeXBlOiBPbmUgb2YgdGhlIHR5cGVzIGxpc3RlZCBhYm92ZVxuMy4gbmV3Q29udGVudDogVGhlIGV4YWN0IEhUTUwvdGV4dCB0byBpbnNlcnQgKGtlZXAgaXQgbWluaW1hbCkuIEZvciBcImFkZEltYWdlXCIsIGEgYnJpZWYgZGVzY3JpcHRpb24gaXMgZmluZSBiZWNhdXNlIHRoZSBmaW5hbCByZW5kZXJlciB3aWxsIHVzZSB0aGUgcHJvdmlkZWQgaW1hZ2UgVVJMLlxuNC4gZXhwbGFuYXRpb246IEJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBjaGFuZ2VcblxuRXhhbXBsZSBSZXNwb25zZTpcbntcbiAgXCJ0YXJnZXRTZWxlY3RvclwiOiBcImgxLm1haW4tdGl0bGVcIixcbiAgXCJtb2RpZmljYXRpb25UeXBlXCI6IFwidXBkYXRlVGV4dFwiLFxuICBcIm5ld0NvbnRlbnRcIjogXCJOZXcgVGl0bGUgVGV4dFwiLFxuICBcImV4cGxhbmF0aW9uXCI6IFwiQ2hhbmdlZCB0aGUgbWFpbiBoZWFkaW5nIHRleHRcIlxufWA7XG5cbiAgICAvLyBDYWxsIExMTSB3aXRoIHJldHJ5IGxvZ2ljXG4gICAgY29uc3QgbGxtUmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBhaS5nZW5lcmF0ZSh7XG4gICAgICAgIHByb21wdDogc3lzdGVtUHJvbXB0LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBzY2hlbWE6IEh0bWxNb2RpZmljYXRpb25TY2hlbWEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFBhcnNlIExMTSByZXNwb25zZSByb2J1c3RseVxuICAgIGxldCBtb2RpZmljYXRpb246IHouaW5mZXI8dHlwZW9mIEh0bWxNb2RpZmljYXRpb25TY2hlbWE+IHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgY2FuZGlkYXRlID0gKGxsbVJlc3BvbnNlIGFzIGFueSk/Lm91dHB1dCA/PyAobGxtUmVzcG9uc2UgYXMgYW55KT8uZGF0YSA/PyB1bmRlZmluZWQ7XG4gICAgaWYgKGNhbmRpZGF0ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gSHRtbE1vZGlmaWNhdGlvblNjaGVtYS5zYWZlUGFyc2UoY2FuZGlkYXRlKTtcbiAgICAgIGlmIChwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgICBtb2RpZmljYXRpb24gPSBwYXJzZWQuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RpZmljYXRpb24pIHtcbiAgICAgIGNvbnN0IHRleHQgPSAobGxtUmVzcG9uc2UgYXMgYW55KT8udGV4dDtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hLnNhZmVQYXJzZShqc29uKTtcbiAgICAgICAgICBpZiAocGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvbiA9IHBhcnNlZC5kYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIEpTT04gcGFyc2UgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1vZGlmaWNhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMTE0gZGlkIG5vdCByZXR1cm4gYSB2YWxpZCBtb2RpZmljYXRpb24nKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhZGRpbmcgYW4gaW1hZ2UsIHVzZSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgbGV0IGNvbnRlbnRUb0luc2VydCA9IG1vZGlmaWNhdGlvbi5uZXdDb250ZW50O1xuICAgIGlmIChtb2RpZmljYXRpb24ubW9kaWZpY2F0aW9uVHlwZSA9PT0gJ2FkZEltYWdlJyAmJiBpbnN0cnVjdGlvbi5pbWFnZVVybCkge1xuICAgICAgY29udGVudFRvSW5zZXJ0ID0gaW5zdHJ1Y3Rpb24uaW1hZ2VVcmw7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG1vZGlmaWNhdGlvbiBwbGFuOyBjbGllbnQgd2lsbCBhcHBseSBET00gY2hhbmdlcyBhbmQgc2FuaXRpemVcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1vZGlmaWNhdGlvbjoge1xuICAgICAgICB0YXJnZXRTZWxlY3RvcjogbW9kaWZpY2F0aW9uLnRhcmdldFNlbGVjdG9yLFxuICAgICAgICBtb2RpZmljYXRpb25UeXBlOiBtb2RpZmljYXRpb24ubW9kaWZpY2F0aW9uVHlwZSxcbiAgICAgICAgbmV3Q29udGVudDogY29udGVudFRvSW5zZXJ0LFxuICAgICAgICBleHBsYW5hdGlvbjogbW9kaWZpY2F0aW9uLmV4cGxhbmF0aW9uLFxuICAgICAgICB0ZXh0Q29udGVudDogKG1vZGlmaWNhdGlvbiBhcyBhbnkpLnRleHRDb250ZW50LFxuICAgICAgICB0YWdOYW1lOiAobW9kaWZpY2F0aW9uIGFzIGFueSkudGFnTmFtZSxcbiAgICAgICAgaW5kZXg6IChtb2RpZmljYXRpb24gYXMgYW55KS5pbmRleCxcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VEZXNjcmlwdGlvbjogbW9kaWZpY2F0aW9uLmV4cGxhbmF0aW9uLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignSFRNTCBlZGl0aW5nIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBvY2N1cnJlZCcsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlciBxdWVzdGlvbnMgYWJvdXQgSFRNTCBjb250ZW50IHdpdGhvdXQgbW9kaWZ5aW5nIGl0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbnN3ZXJRdWVzdGlvbkFib3V0SHRtbChcbiAgaHRtbENvbnRlbnQ6IHN0cmluZyxcbiAgcXVlc3Rpb246IHN0cmluZ1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9tcHQgPSBgWW91IGFyZSBhIGhlbHBmdWwgbGVhcm5pbmcgYXNzaXN0YW50LiBBbnN3ZXIgdGhlIHVzZXIncyBxdWVzdGlvbiBiYXNlZCBPTkxZIG9uIHRoZSBwcm92aWRlZCBIVE1MIGRvY3VtZW50IGNvbnRlbnQuIERvIG5vdCB1c2UgZXh0ZXJuYWwga25vd2xlZGdlLlxuXG5IVE1MIERvY3VtZW50IENvbnRlbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2h0bWxDb250ZW50fVxuXFxgXFxgXFxgXG5cblVzZXIgUXVlc3Rpb246IFwiJHtxdWVzdGlvbn1cIlxuXG5Qcm92aWRlIGEgY2xlYXIsIGNvbmNpc2UgYW5zd2VyIGJhc2VkIG9uIHRoZSBkb2N1bWVudCBjb250ZW50LiBJZiB0aGUgYW5zd2VyIGNhbm5vdCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQsIHNheSBzby5gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBhaS5nZW5lcmF0ZSh7IHByb21wdCB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS50ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1F1ZXN0aW9uIGFuc3dlcmluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gYW5zd2VyIHF1ZXN0aW9uOiAke2Vycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InfWApO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXRyeSBoZWxwZXIgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5V2l0aEJhY2tvZmY8VD4oZm46ICgpID0+IFByb21pc2U8VD4sIHJldHJpZXMgPSAzKTogUHJvbWlzZTxUPiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cmllczsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoaSA9PT0gcmV0cmllcyAtIDEpIHRocm93IGVycm9yO1xuICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLnBvdygyLCBpKSAqIDEwMDA7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdNYXggcmV0cmllcyBleGNlZWRlZCcpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVIdG1sU2VydmVyKGh0bWw6IHN0cmluZyk6IHsgdmFsaWQ6IGJvb2xlYW47IGVycm9yczogc3RyaW5nW10gfSB7XG4gIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKCFodG1sIHx8IGh0bWwudHJpbSgpLmxlbmd0aCA9PT0gMCkgZXJyb3JzLnB1c2goJ0hUTUwgY29udGVudCBpcyBlbXB0eScpO1xuICBpZiAoaHRtbC5sZW5ndGggPiA1MDAwMDAwKSBlcnJvcnMucHVzaCgnSFRNTCBjb250ZW50IGV4Y2VlZHMgc2l6ZSBsaW1pdCAoNU1CKScpO1xuICBpZiAoIWh0bWwuaW5jbHVkZXMoJzxodG1sJykgJiYgIWh0bWwuaW5jbHVkZXMoJzxib2R5JykpIGVycm9ycy5wdXNoKCdIVE1MIG1pc3NpbmcgYmFzaWMgc3RydWN0dXJlJyk7XG4gIHJldHVybiB7IHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwLCBlcnJvcnMgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1RBb0tzQiJ9
}),
"[project]/src/services/llm/html-parser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPartialEdit",
    ()=>applyPartialEdit,
    "extractTextContent",
    ()=>extractTextContent,
    "findElementByContext",
    ()=>findElementByContext,
    "generateSelector",
    ()=>generateSelector,
    "sanitizeHtml",
    ()=>sanitizeHtml,
    "validateHtml",
    ()=>validateHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dompurify/dist/purify.es.mjs [app-ssr] (ecmascript)");
'use client';
;
async function applyPartialEdit(currentHtml, targetSelector, modificationType, newContent, context) {
    try {
        // Create a DOM parser
        const parser = new DOMParser();
        const doc = parser.parseFromString(currentHtml, 'text/html');
        // Fragment-level sanitize options to preserve CSS and scripts inside the iframe document
        const fragmentSanitizeOptions = {
            ALLOWED_TAGS: [
                'html',
                'head',
                'body',
                'title',
                'meta',
                'link',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'p',
                'br',
                'hr',
                'pre',
                'code',
                'blockquote',
                'ul',
                'ol',
                'li',
                'dl',
                'dt',
                'dd',
                'table',
                'thead',
                'tbody',
                'tfoot',
                'tr',
                'th',
                'td',
                'div',
                'span',
                'section',
                'article',
                'aside',
                'header',
                'footer',
                'nav',
                'main',
                'a',
                'img',
                'figure',
                'figcaption',
                'strong',
                'em',
                'b',
                'i',
                'u',
                's',
                'mark',
                'small',
                'sub',
                'sup',
                'style',
                'script'
            ],
            ALLOWED_ATTR: [
                'href',
                'src',
                'alt',
                'title',
                'class',
                'id',
                'style',
                'width',
                'height',
                'colspan',
                'rowspan',
                'target',
                'rel',
                'type',
                'charset',
                'name',
                'content',
                'async',
                'defer',
                'crossorigin',
                'integrity',
                'referrerpolicy',
                'loading',
                'decoding',
                'sizes',
                'fetchpriority'
            ],
            ALLOW_DATA_ATTR: false
        };
        // Find the target element
        let targetElement = doc.querySelector(targetSelector);
        if (!targetElement) {
            const nthMatch = targetSelector.match(/:nth-of-type\((\d+)\)/);
            if (nthMatch) {
                const n = parseInt(nthMatch[1], 10);
                const baseSelector = targetSelector.replace(/:nth-of-type\(\d+\)/g, '');
                const candidates = doc.querySelectorAll(baseSelector);
                if (candidates.length >= n) {
                    targetElement = candidates[n - 1] || null;
                } else if (candidates.length > 0) {
                    targetElement = candidates[0] || null;
                }
            }
        }
        if (!targetElement && targetSelector.includes('.diagram-placeholder')) {
            const placeholders = doc.querySelectorAll('.diagram-placeholder');
            if (placeholders.length > 0) {
                targetElement = placeholders[0];
            }
        }
        if (!targetElement) {
            const altSelector = targetSelector.replace(/:nth-of-type\((\d+)\)/, ':nth-child($1)');
            targetElement = doc.querySelector(altSelector);
        }
        if (!targetElement && context) {
            const candidate = findElementByContext(doc, context);
            if (candidate) targetElement = candidate;
        }
        if (!targetElement) {
            if (modificationType === 'addImage' || modificationType === 'appendChild') {
                targetElement = doc.body;
            } else {
                throw new Error(`Target element not found: ${targetSelector}`);
            }
        }
        // Apply modification based on type
        switch(modificationType){
            case 'replace':
                // Replace entire element
                const tempDiv = doc.createElement('div');
                tempDiv.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(newContent, fragmentSanitizeOptions);
                const newElement = tempDiv.firstElementChild;
                if (newElement) {
                    targetElement.replaceWith(newElement);
                }
                break;
            case 'updateText':
                // Update only text content
                targetElement.textContent = newContent;
                break;
            case 'insertAfter':
                // Insert new content after target element
                const afterDiv = doc.createElement('div');
                afterDiv.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(newContent, fragmentSanitizeOptions);
                while(afterDiv.firstChild){
                    targetElement.after(afterDiv.firstChild);
                }
                break;
            case 'insertBefore':
                // Insert new content before target element
                const beforeDiv = doc.createElement('div');
                beforeDiv.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(newContent, fragmentSanitizeOptions);
                while(beforeDiv.firstChild){
                    targetElement.before(beforeDiv.firstChild);
                }
                break;
            case 'addImage':
                const wrapper = doc.createElement('div');
                wrapper.className = 'flowchart';
                const img = doc.createElement('img');
                img.src = newContent;
                img.alt = 'Image';
                img.loading = 'lazy';
                img.decoding = 'async';
                img.referrerPolicy = 'no-referrer';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                img.style.display = 'block';
                img.style.margin = '1rem auto';
                img.setAttribute('fetchpriority', 'low');
                // Allow responsive hints if later extended with srcset
                img.setAttribute('sizes', '100vw');
                wrapper.appendChild(img);
                const te = targetElement;
                if (te.classList?.contains('diagram-placeholder') || te.classList?.contains('image-placeholder')) {
                    te.innerHTML = '';
                    te.appendChild(wrapper);
                } else if (te.classList?.contains('flowchart')) {
                    te.innerHTML = '';
                    te.appendChild(img);
                } else {
                    te.after(wrapper);
                }
                break;
            case 'appendChild':
                // Append as child of target element
                const childDiv = doc.createElement('div');
                childDiv.innerHTML = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(newContent, fragmentSanitizeOptions);
                while(childDiv.firstChild){
                    targetElement.appendChild(childDiv.firstChild);
                }
                break;
            default:
                throw new Error(`Unknown modification type: ${modificationType}`);
        }
        // Serialize back to HTML
        const serializer = new XMLSerializer();
        const modifiedHtml = serializer.serializeToString(doc);
        // Clean up XML declaration if present
        return modifiedHtml.replace(/<\?xml[^>]*\?>/g, '');
    } catch (error) {
        console.error('Error applying partial edit:', error);
        throw new Error(`Failed to apply partial edit: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
function findElementByContext(doc, context) {
    // Try direct selector first
    if (context.selector) {
        const element = doc.querySelector(context.selector);
        if (element) return element;
    }
    // Try finding by text content
    if (context.textContent && context.tagName) {
        const elements = doc.querySelectorAll(context.tagName);
        for (const el of Array.from(elements)){
            if (el.textContent?.includes(context.textContent)) {
                return el;
            }
        }
    }
    // Try finding by tag name and index
    if (context.tagName && context.index !== undefined) {
        const elements = doc.querySelectorAll(context.tagName);
        return elements[context.index] || null;
    }
    return null;
}
function extractTextContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // Remove script and style tags
    const scripts = doc.querySelectorAll('script, style');
    scripts.forEach((el)=>el.remove());
    return doc.body.textContent || '';
}
function validateHtml(html) {
    const errors = [];
    if (!html || html.trim().length === 0) {
        errors.push('HTML content is empty');
    }
    if (html.length > 5000000) {
        errors.push('HTML content exceeds size limit (5MB)');
    }
    // Check for basic HTML structure
    if (!html.includes('<html') && !html.includes('<body')) {
        errors.push('HTML missing basic structure');
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
function sanitizeHtml(html) {
    const config = {
        WHOLE_DOCUMENT: true,
        ALLOWED_TAGS: [
            'html',
            'head',
            'body',
            'title',
            'meta',
            'link',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'p',
            'br',
            'hr',
            'pre',
            'code',
            'blockquote',
            'ul',
            'ol',
            'li',
            'dl',
            'dt',
            'dd',
            'table',
            'thead',
            'tbody',
            'tfoot',
            'tr',
            'th',
            'td',
            'div',
            'span',
            'section',
            'article',
            'aside',
            'header',
            'footer',
            'nav',
            'main',
            'a',
            'img',
            'figure',
            'figcaption',
            'strong',
            'em',
            'b',
            'i',
            'u',
            's',
            'mark',
            'small',
            'sub',
            'sup',
            'style'
        ],
        ALLOWED_ATTR: [
            'href',
            'src',
            'alt',
            'title',
            'class',
            'id',
            'style',
            'width',
            'height',
            'colspan',
            'rowspan',
            'target',
            'rel',
            'type',
            'charset',
            'name',
            'content',
            'referrerpolicy',
            'loading',
            'decoding',
            'sizes',
            'fetchpriority'
        ],
        ALLOW_DATA_ATTR: false
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sanitize(html, config);
}
function generateSelector(element) {
    // If element has ID, use it
    if (element.id) {
        return `#${element.id}`;
    }
    // If element has unique class
    if (element.className) {
        const classes = element.className.split(' ').filter((c)=>c.trim());
        if (classes.length > 0) {
            return `.${classes[0]}`;
        }
    }
    // Use tag name with nth-of-type
    const parent = element.parentElement;
    if (parent) {
        const siblings = Array.from(parent.children).filter((el)=>el.tagName === element.tagName);
        const index = siblings.indexOf(element) + 1;
        return `${element.tagName.toLowerCase()}:nth-of-type(${index})`;
    }
    return element.tagName.toLowerCase();
}
}),
"[project]/src/components/dashboard/assistant-sidebar-new.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssistantSidebarNew
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-collection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$image$2d$upload$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/image-upload-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$image$2d$uploader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-image-uploader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$9afe50__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/llm/data:9afe50 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$e1e4e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/llm/data:e1e4e7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$html$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/llm/html-parser.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Determine if user instruction requires HTML modification or just a question
 */ function isModificationRequest(instruction) {
    const modificationKeywords = [
        'change',
        'modify',
        'edit',
        'update',
        'replace',
        'add',
        'insert',
        'remove',
        'delete',
        'move',
        'rewrite',
        'fix',
        'correct',
        'make',
        'create',
        'put',
        'place',
        'set'
    ];
    const lowerInstruction = instruction.toLowerCase();
    return modificationKeywords.some((keyword)=>lowerInstruction.includes(keyword));
}
function AssistantSidebarNew({ isOpen, onClose, note, currentHtmlContent, onHtmlContentUpdate }) {
    const [messages, setMessages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [input, setInput] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { user, isUserLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFirestore"])();
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollAreaRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollToBottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (!scrollAreaRef.current) return;
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        const el = viewport ?? scrollAreaRef.current;
        try {
            el.scrollTo({
                top: el.scrollHeight,
                behavior: 'smooth'
            });
        } catch  {
            // fallback for older browsers
            el.scrollTop = el.scrollHeight;
        }
    }, []);
    // Track the current HTML content for LLM context
    const currentHtmlRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](currentHtmlContent);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        currentHtmlRef.current = currentHtmlContent;
    }, [
        currentHtmlContent
    ]);
    const { imageUpload, uploadImage, cancelUpload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$image$2d$uploader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageUploader"])(user?.uid || '', note.id, 'imgbb');
    const chatHistoryQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemoFirebase"])(()=>{
        if (!user || !note) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(firestore, `users/${user.uid}/noteChats/${note.id}/messages`), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('timestamp', 'asc'));
    }, [
        firestore,
        user,
        note
    ]);
    const { data: chatHistory, isLoading: isHistoryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCollection"])(chatHistoryQuery);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (chatHistory) {
            setMessages(chatHistory);
        }
    }, [
        chatHistory
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Only show welcome message if there's no chat history and we're not loading
        if (isOpen && !isHistoryLoading && messages.length === 0 && !imageUpload && chatHistory && chatHistory.length === 0) {
            const welcomeMessage = {
                id: 'welcome',
                role: 'assistant',
                content: `Hello! I'm your AI assistant for "${note.title}". Ask me anything about this note or ask me to edit it.\n\nI can help you:\n• Answer questions about the content\n• Modify specific parts of the note\n• Add images or links\n• Reorganize sections`,
                timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
            };
            setMessages([
                welcomeMessage
            ]);
        }
    }, [
        isOpen,
        note.title,
        isHistoryLoading,
        messages.length,
        imageUpload,
        chatHistory
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        scrollToBottom();
    }, [
        messages,
        imageUpload,
        isLoading,
        scrollToBottom
    ]);
    // When the assistant is opened, ensure we jump to the latest message
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen) {
            // wait a tick to let the sheet animate/render and then scroll
            const id = window.requestAnimationFrame(scrollToBottom);
            return ()=>window.cancelAnimationFrame(id);
        }
    }, [
        isOpen,
        scrollToBottom
    ]);
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            uploadImage(file);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const callAssistant = async (question, imageUrl)=>{
        setIsLoading(true);
        if (!user || !firestore) {
            toast({
                variant: 'destructive',
                title: 'Authentication Error',
                description: 'Please log in to use the assistant.'
            });
            setIsLoading(false);
            return;
        }
        try {
            // Save user message
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatMessage"])(firestore, user.uid, note.id, 'user', question, imageUrl);
            // Determine if this is a modification request or a question
            const isModification = isModificationRequest(question) || imageUrl;
            let assistantResponse;
            let htmlWasModified = false;
            if (isModification) {
                const editResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$9afe50__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["editHtmlWithLLM"])({
                    currentHtml: currentHtmlRef.current,
                    userInstruction: question,
                    imageUrl
                });
                if (editResult.success) {
                    let updatedHtml = null;
                    if (editResult.modifiedHtml) {
                        updatedHtml = editResult.modifiedHtml;
                    } else if (editResult.modification) {
                        const m = editResult.modification;
                        try {
                            const applied = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$html$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPartialEdit"])(currentHtmlRef.current, m.targetSelector, m.modificationType, m.newContent, {
                                selector: m.targetSelector,
                                textContent: m.textContent,
                                tagName: m.tagName,
                                index: m.index
                            });
                            updatedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$html$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeHtml"])(applied);
                        } catch (e) {
                            const msg = typeof e?.message === 'string' ? e.message : '';
                            if (msg.includes('Target element not found')) {
                                assistantResponse = 'I could not find the exact place to insert. Please specify a nearby heading or add a placeholder element with class "diagram-placeholder" and try again.';
                            } else {
                                assistantResponse = `I encountered an error while applying the edit: ${msg || 'Unknown error'}`;
                            }
                            updatedHtml = null;
                        }
                    }
                    if (updatedHtml) {
                        onHtmlContentUpdate(updatedHtml);
                        htmlWasModified = true;
                        assistantResponse = `✓ ${editResult.changeDescription || 'I\'ve made the requested changes to your note.'}`;
                    } else {
                        assistantResponse = `I encountered an error: ${editResult.error || 'No modification was returned.'}`;
                    }
                } else {
                    assistantResponse = `I encountered an error: ${editResult.error || 'Could not modify the HTML.'}`;
                }
            } else {
                // Answer question about the content
                assistantResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$e1e4e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["answerQuestionAboutHtml"])(currentHtmlRef.current, question);
            }
            // Save assistant response
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatMessage"])(firestore, user.uid, note.id, 'assistant', assistantResponse);
            if (htmlWasModified) {
                toast({
                    title: 'Changes Applied',
                    description: 'Your note has been updated. Changes are saved automatically.'
                });
            }
        } catch (error) {
            console.error("Assistant error:", error);
            let errorMessage = "Sorry, I encountered an error. Please try again.";
            let errorTitle = 'Assistant Error';
            if (error.message?.includes('timeout')) {
                errorMessage = "The request took too long. Please try again with a simpler question.";
                errorTitle = 'Timeout Error';
            } else if (error.message?.includes('API')) {
                errorMessage = "There was an issue with the AI service. Please check your API key.";
                errorTitle = 'API Error';
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatMessage"])(firestore, user.uid, note.id, 'assistant', errorMessage);
            toast({
                variant: 'destructive',
                title: errorTitle,
                description: errorMessage
            });
        } finally{
            setIsLoading(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        const currentInput = input;
        setInput('');
        await callAssistant(currentInput);
    };
    const handleImageInstructionSubmit = async (instruction)=>{
        if (!instruction.trim() || !imageUpload || imageUpload.status !== 'complete' || !imageUpload.downloadURL) return;
        const fullQuestion = instruction;
        // This will clear the card and re-enable the main input
        cancelUpload();
        await callAssistant(fullQuestion, imageUpload.downloadURL);
    };
    const handleClearHistory = async ()=>{
        if (!user || !firestore) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearChatHistory"])(firestore, user.uid, note.id);
            const welcomeMessage = {
                id: 'welcome-cleared',
                role: 'assistant',
                content: `Hello! I'm your AI assistant for "${note.title}". Ask me anything about this note or ask me to edit it.`,
                timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
            };
            setMessages([
                welcomeMessage
            ]);
            toast({
                title: 'Chat history cleared'
            });
        } catch (error) {
            console.error("Failed to clear chat history:", error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not clear chat history.'
            });
        }
    };
    const getInitials = (name)=>{
        if (!name) return 'U';
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };
    const isChatDisabled = isUserLoading || !user;
    const prefill = (text)=>{
        if (isLoading || !!imageUpload || isChatDisabled) return;
        setInput(text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
            className: "w-full sm:max-w-md flex flex-col p-0 bg-gradient-to-b from-rose-500/50 via-purple-500/50 to-sky-500/50 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "p-6 border-b border-white/10 bg-gradient-to-r from-rose-500/40 via-purple-500/40 to-sky-500/40 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            children: "AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                            children: [
                                "Ask questions or request edits for '",
                                note.title,
                                "'"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "flex-1",
                    ref: scrollAreaRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 p-4",
                        children: [
                            isHistoryLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-6 w-6 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 314,
                                    columnNumber: 79
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 314,
                                columnNumber: 38
                            }, this),
                            messages.map((message)=>{
                                const isWelcome = message.role === 'assistant' && (message.id?.startsWith('welcome') || message.content?.startsWith("Hello! I'm your AI assistant"));
                                if (isWelcome) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-8 w-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 320,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl p-4 md:p-5 max-w-sm bg-slate-900/70 ring-1 ring-white/10 shadow-xl backdrop-blur-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm whitespace-pre-wrap mb-3",
                                                        children: message.content.split('\n\n')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>prefill('What are the key points in this note?'),
                                                                className: "w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-white/5 via-transparent to-white/5 hover:from-white/10 hover:to-white/10 ring-1 ring-white/10",
                                                                children: "🧠 Answer questions about the content"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>prefill('Modify the section about ... to be clearer.'),
                                                                className: "w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 ring-1 ring-white/10",
                                                                children: "✏️ Modify specific parts of the note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>prefill('Add an image illustrating ... and link it appropriately.'),
                                                                className: "w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 ring-1 ring-white/10",
                                                                children: "🖼️ Add images or links"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>prefill('Reorganize sections to improve flow: ...'),
                                                                className: "w-full text-left rounded-xl px-4 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 ring-1 ring-white/10",
                                                                children: "🔀 Reorganize sections"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-3 opacity-60 text-right",
                                                        children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(message.timestamp.toDate(), 'p') : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 323,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, message.id, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 319,
                                        columnNumber: 25
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-start gap-3', message.role === 'user' ? 'justify-end' : ''),
                                    children: [
                                        message.role === 'assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 348,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 347,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-3 max-w-xs md:max-w-sm', message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-slate-900/70 ring-1 ring-white/10 backdrop-blur-2xl'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm whitespace-pre-wrap",
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-2 opacity-60 text-right",
                                                    children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(message.timestamp.toDate(), 'p') : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 351,
                                            columnNumber: 25
                                        }, this),
                                        message.role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: user?.photoURL || ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    children: getInitials(user?.displayName)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 356,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 345,
                                    columnNumber: 23
                                }, this);
                            }),
                            imageUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-8 w-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 367,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 367,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 366,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$image$2d$upload$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        upload: imageUpload,
                                        onInstructionSubmit: handleImageInstructionSubmit,
                                        onCancel: cancelUpload
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 369,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 365,
                                columnNumber: 19
                            }, this),
                            (isLoading || isChatDisabled) && messages.length > 0 && messages[messages.length - 1].role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-8 w-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 379,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 378,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg p-3 bg-muted flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-5 w-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 382,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 381,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 377,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                        lineNumber: 313,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetFooter"], {
                    className: "p-4 border-t border-white/10 flex-col sm:flex-col sm:space-x-0 gap-4 bg-gradient-to-r from-rose-500/40 via-purple-500/40 to-sky-500/40 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: fileInputRef,
                                    onChange: handleFileChange,
                                    className: "hidden",
                                    accept: "image/*"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    disabled: isLoading || !!imageUpload || isChatDisabled,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Attach image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Ask a question or request an edit...",
                                    disabled: isLoading || !!imageUpload || isChatDisabled,
                                    className: "bg-slate-900/70 border-white/10 text-white placeholder:text-white/60 backdrop-blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isLoading || !input.trim() || !!imageUpload || isChatDisabled,
                                    className: "bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-500 text-white hover:opacity-90",
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 403,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 403,
                                        columnNumber: 77
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this),
                        messages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            disabled: isChatDisabled,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 29
                                                }, this),
                                                "Clear Chat"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 410,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 409,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                        children: "Are you sure?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                        children: "This will permanently delete the chat history for this note. This action cannot be undone."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 416,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                        onClick: handleClearHistory,
                                                        children: "Confirm Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 422,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 415,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 408,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/auth/auth-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AuthGuard({ children }) {
    const { user, isUserLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isUserLoading && !user) {
            // Store the intended destination for post-login redirect
            const returnUrl = encodeURIComponent(pathname);
            router.push(`/signin?returnUrl=${returnUrl}`);
        }
    }, [
        user,
        isUserLoading,
        router,
        pathname
    ]);
    // Show loading skeleton while checking auth state
    if (isUserLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block w-64 border-r p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-32 mb-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/auth-guard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/auth-guard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-12 w-1/3 mb-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/auth-guard.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-48 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-48 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-48 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-48 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/auth-guard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/auth-guard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/auth-guard.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    // Don't render children if user is not authenticated (redirect in progress)
    if (!user) {
        return null;
    }
    // User is authenticated, render protected content
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/services/firebase/html-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteModifiedHtml",
    ()=>deleteModifiedHtml,
    "hasModifiedVersion",
    ()=>hasModifiedVersion,
    "listModifiedNotes",
    ()=>listModifiedNotes,
    "loadModifiedHtml",
    ()=>loadModifiedHtml,
    "loadOriginalHtml",
    ()=>loadOriginalHtml,
    "saveModifiedHtml",
    ()=>saveModifiedHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
'use client';
;
;
async function saveModifiedHtml(userId, week, lectureId, htmlContent) {
    try {
        const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
        const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${userId}/notes/${lectureId}`);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
            modifiedHtml: htmlContent,
            lastModified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
        // Return the document path for compatibility with previous string return type
        return docRef.path;
    } catch (error) {
        console.error('Error saving modified HTML:', error);
        throw new Error(`Failed to save modified HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
async function loadModifiedHtml(userId, week, lectureId) {
    try {
        const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
        const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${userId}/notes/${lectureId}`);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (!snapshot.exists()) {
            return null;
        }
        const data = snapshot.data();
        if (typeof data?.modifiedHtml === 'string') {
            return data.modifiedHtml;
        }
        return null;
    } catch (error) {
        console.error('Error loading modified HTML:', error);
        return null;
    }
}
async function hasModifiedVersion(userId, week, lectureId) {
    try {
        const html = await loadModifiedHtml(userId, week, lectureId);
        return html !== null;
    } catch (error) {
        return false;
    }
}
async function deleteModifiedHtml(userId, week, lectureId) {
    try {
        const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
        const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${userId}/notes/${lectureId}`);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
    } catch (error) {
        console.error('Error deleting modified HTML:', error);
        throw new Error(`Failed to delete modified HTML: ${error.message}`);
    }
}
async function loadOriginalHtml(course, week, lectureId) {
    try {
        // Files are stored as /notes/{course}/{lectureId}.html (no week folder)
        const filePath = `/notes/${course}/${encodeURIComponent(lectureId)}.html`;
        const response = await fetch(filePath, {
            cache: 'force-cache'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        return htmlContent;
    } catch (error) {
        console.error('Error loading original HTML:', error);
        throw new Error(`Failed to load original HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
async function listModifiedNotes(userId) {
    try {
        const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
        const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
        const notesCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(firestore, `users/${userId}/notes`);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(notesCol);
        const metadata = [];
        snapshot.forEach((docSnap)=>{
            const data = docSnap.data();
            const lm = data?.lastModified && typeof data.lastModified.toMillis === 'function' ? data.lastModified.toMillis() : Date.now();
            metadata.push({
                userId,
                week: '',
                lectureId: docSnap.id,
                lastModified: lm
            });
        });
        return metadata;
    } catch (error) {
        console.error('Error listing modified notes:', error);
        return [];
    }
}
}),
"[project]/src/hooks/use-note-preview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearOriginalHtmlCache",
    ()=>clearOriginalHtmlCache,
    "loadOriginalHtmlCached",
    ()=>loadOriginalHtmlCached,
    "useNotePreview",
    ()=>useNotePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/firebase/html-storage.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useNotePreview(userId, course, week, lectureId) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        htmlContent: null,
        isModified: false,
        loading: true,
        error: null
    });
    const loadHtmlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!userId) {
            // Don't set error - just stay in loading state until user is available
            setState({
                htmlContent: null,
                isModified: false,
                loading: true,
                error: null
            });
            return;
        }
        setState((prev)=>({
                ...prev,
                loading: true,
                error: null
            }));
        try {
            // Try to load modified version first (will return null if doesn't exist)
            const modifiedHtml = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadModifiedHtml"])(userId, week, lectureId);
            if (modifiedHtml) {
                setState({
                    htmlContent: modifiedHtml,
                    isModified: true,
                    loading: false,
                    error: null
                });
                return;
            }
            // Fall back to original from codebase
            const originalHtml = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadOriginalHtml"])(course, week, lectureId);
            setState({
                htmlContent: originalHtml,
                isModified: false,
                loading: false,
                error: null
            });
        } catch (error) {
            console.error('Error loading note preview:', error);
            setState({
                htmlContent: null,
                isModified: false,
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to load note'
            });
        }
    }, [
        userId,
        course,
        week,
        lectureId
    ]);
    // Load HTML content on mount and when dependencies change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadHtmlContent();
    }, [
        loadHtmlContent
    ]);
    // Function to reload content
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await loadHtmlContent();
    }, [
        loadHtmlContent
    ]);
    // Function to update HTML content in state (without saving)
    const updateHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newHtml)=>{
        setState((prev)=>({
                ...prev,
                htmlContent: newHtml,
                isModified: true
            }));
    }, []);
    return {
        ...state,
        reload,
        updateHtml
    };
}
/**
 * Cache for original HTML files (they never change)
 */ const originalHtmlCache = new Map();
async function loadOriginalHtmlCached(course, week, lectureId) {
    const cacheKey = `${course}/${week}/${lectureId}`;
    // Check cache first
    if (originalHtmlCache.has(cacheKey)) {
        return originalHtmlCache.get(cacheKey);
    }
    // Load from file
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadOriginalHtml"])(course, week, lectureId);
    // Cache it
    originalHtmlCache.set(cacheKey, html);
    return html;
}
function clearOriginalHtmlCache() {
    originalHtmlCache.clear();
}
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/data/notes/ataData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ataNotesData",
    ()=>ataNotesData
]);
const ataNotesData = [
    {
        id: 'ATAW2',
        title: 'Week 2: Algorithmic Thinking Basics',
        description: 'Foundations and first principles of algorithmic thinking.',
        week: 2,
        lesson: 0,
        tags: [
            'ATA',
            'Foundations'
        ],
        dateAdded: '2025-01-02',
        readTime: '18 min',
        htmlFile: '/notes/ata/ATAW2.html'
    },
    {
        id: 'ATAW3',
        title: 'Week 3: Control Flow and Tracing',
        description: 'Understanding program control flow and tracing execution.',
        week: 3,
        lesson: 0,
        tags: [
            'Control Flow'
        ],
        dateAdded: '2025-01-03',
        readTime: '22 min',
        htmlFile: '/notes/ata/ATAW3.html'
    },
    {
        id: 'ATAW4',
        title: 'Week 4: Data Types and Operations',
        description: 'Working with data types and composing operations.',
        week: 4,
        lesson: 0,
        tags: [
            'Data Types'
        ],
        dateAdded: '2025-01-04',
        readTime: '24 min',
        htmlFile: '/notes/ata/ATAW4.html'
    },
    {
        id: 'ATAW5L1&W6L1',
        title: 'Week 5 L1 & Week 6 L1: Functions and Composition',
        description: 'Encapsulation with functions and composing operations.',
        week: 0,
        lesson: 0,
        tags: [
            'Functions'
        ],
        dateAdded: '2025-01-05',
        readTime: '28 min',
        htmlFile: '/notes/ata/ATAW5L1&W6L1.html'
    },
    {
        id: 'ATAW5L2&W5L3',
        title: 'Week 5 L2 & L3: Problem Decomposition',
        description: 'Breaking problems into smaller pieces and patterns.',
        week: 5,
        lesson: 2,
        tags: [
            'Decomposition'
        ],
        dateAdded: '2025-01-06',
        readTime: '26 min',
        htmlFile: '/notes/ata/ATAW5L2&W5L3.html'
    },
    {
        id: 'ATAW6L2',
        title: 'Week 6 - Lecture 2: More on Functions',
        description: 'Local scope, return values, and modularity.',
        week: 6,
        lesson: 2,
        tags: [
            'Functions',
            'Scope'
        ],
        dateAdded: '2025-01-07',
        readTime: '20 min',
        htmlFile: '/notes/ata/ATAW6L2.html'
    },
    {
        id: 'ATAW7L1',
        title: 'Week 7 - Lecture 1: Functions and Modules in Python',
        description: 'Using built-ins, modules, and creating your own.',
        week: 7,
        lesson: 1,
        tags: [
            'Python',
            'Modules'
        ],
        dateAdded: '2025-01-08',
        readTime: '35 min',
        htmlFile: '/notes/ata/ATAW7L1.html'
    },
    {
        id: 'ATAW7L2',
        title: 'Week 7 - Lecture 2: Advanced Functions',
        description: 'Nested functions and program control.',
        week: 7,
        lesson: 2,
        tags: [
            'Functions'
        ],
        dateAdded: '2025-01-09',
        readTime: '18 min',
        htmlFile: '/notes/ata/ATAW7L2.html'
    },
    {
        id: 'ATAW8L1',
        title: 'Week 8 - Lecture 1: Making and Using Modules',
        description: 'Creating modules and understanding program flow.',
        week: 8,
        lesson: 1,
        tags: [
            'Modules'
        ],
        dateAdded: '2025-01-10',
        readTime: '20 min',
        htmlFile: '/notes/ata/ATAW8L1.html'
    },
    {
        id: 'ATAW8L2',
        title: 'Week 8 - Lecture 2: Nested Functions and Scope',
        description: 'Scopes, frames, and nested functions.',
        week: 8,
        lesson: 2,
        tags: [
            'Scope'
        ],
        dateAdded: '2025-01-11',
        readTime: '19 min',
        htmlFile: '/notes/ata/ATAW8L2.html'
    },
    {
        id: 'ATAW9L1',
        title: 'Week 9 - Lecture 1: Program Control and Flow',
        description: 'Tracing execution and mental models.',
        week: 9,
        lesson: 1,
        tags: [
            'Control Flow'
        ],
        dateAdded: '2025-01-12',
        readTime: '16 min',
        htmlFile: '/notes/ata/ATAW9L1.html'
    },
    {
        id: 'ATAW9L2&W10L1',
        title: 'Week 9 L2 & Week 10 L1: Problem Solving Patterns',
        description: 'Combining techniques and patterns.',
        week: 0,
        lesson: 0,
        tags: [
            'Patterns'
        ],
        dateAdded: '2025-01-13',
        readTime: '25 min',
        htmlFile: '/notes/ata/ATAW9L2&W10L1.html'
    },
    {
        id: 'ATAW10L2,W11L1&W11L2',
        title: 'Week 10 L2, Week 11 L1 & L2: Applications Roundup',
        description: 'Applications and extended examples.',
        week: 0,
        lesson: 0,
        tags: [
            'Applications'
        ],
        dateAdded: '2025-01-14',
        readTime: '30 min',
        htmlFile: '/notes/ata/ATAW10L2,W11L1&W11L2.html'
    },
    {
        id: 'ATAW12L1',
        title: 'Week 12 - Lecture 1: Review and Practice',
        description: 'Key concepts and exercises.',
        week: 12,
        lesson: 1,
        tags: [
            'Review'
        ],
        dateAdded: '2025-01-15',
        readTime: '14 min',
        htmlFile: '/notes/ata/ATAW12L1.html'
    },
    {
        id: 'ATAW12L2',
        title: 'Week 12 - Lecture 2: Deeper Dive',
        description: 'More examples and patterns.',
        week: 12,
        lesson: 2,
        tags: [
            'Patterns'
        ],
        dateAdded: '2025-01-16',
        readTime: '17 min',
        htmlFile: '/notes/ata/ATAW12L2.html'
    },
    {
        id: 'ATAW13L1',
        title: 'Week 13 - Lecture 1: Capstone Concepts',
        description: 'Bringing it all together.',
        week: 13,
        lesson: 1,
        tags: [
            'Capstone'
        ],
        dateAdded: '2025-01-17',
        readTime: '18 min',
        htmlFile: '/notes/ata/ATAW13L1.html'
    },
    {
        id: 'ATAW13L2',
        title: 'Week 13 - Lecture 2: Final Applications',
        description: 'End-to-end problem solving.',
        week: 13,
        lesson: 2,
        tags: [
            'Applications'
        ],
        dateAdded: '2025-01-18',
        readTime: '18 min',
        htmlFile: '/notes/ata/ATAW13L2.html'
    }
];
}),
"[project]/src/data/notes/bdaData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bdaNotesData",
    ()=>bdaNotesData
]);
const bdaNotesData = [
    {
        id: 'BDAW3L1',
        title: 'Week 3 - Lecture 1',
        description: 'See lecture notes.',
        week: 3,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-03',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW3L1.html'
    },
    {
        id: 'BDAW3L2',
        title: 'Week 3 - Lecture 2',
        description: 'See lecture notes.',
        week: 3,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-03',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW3L2.html'
    },
    {
        id: 'BDAW3L3',
        title: 'Week 3 - Lecture 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-03',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW3L3.html'
    },
    {
        id: 'BDAW3L4',
        title: 'Week 3 - Lecture 4',
        description: 'See lecture notes.',
        week: 3,
        lesson: 4,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-03',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW3L4.html'
    },
    {
        id: 'BDAW4L1',
        title: 'Week 4 - Lecture 1',
        description: 'See lecture notes.',
        week: 4,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-04',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW4L1.html'
    },
    {
        id: 'BDAW4L2',
        title: 'Week 4 - Lecture 2',
        description: 'See lecture notes.',
        week: 4,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-04',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW4L2.html'
    },
    {
        id: 'BDAW4L3',
        title: 'Week 4 - Lecture 3',
        description: 'See lecture notes.',
        week: 4,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-04',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW4L3.html'
    },
    {
        id: 'BDAW5L1',
        title: 'Week 5 - Lecture 1',
        description: 'See lecture notes.',
        week: 5,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-05',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW5L1.html'
    },
    {
        id: 'BDAW5L2',
        title: 'Week 5 - Lecture 2',
        description: 'See lecture notes.',
        week: 5,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-05',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW5L2.html'
    },
    {
        id: 'BDAW6L1',
        title: 'Week 6 - Lecture 1',
        description: 'See lecture notes.',
        week: 6,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-06',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW6L1.html'
    },
    {
        id: 'BDAW8L1',
        title: 'Week 8 - Lecture 1',
        description: 'See lecture notes.',
        week: 8,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-08',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW8L1.html'
    },
    {
        id: 'BDAW8l2',
        title: 'Week 8 - Lecture 2',
        description: 'See lecture notes.',
        week: 8,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-08',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW8l2.html'
    },
    {
        id: 'BDAW8L3',
        title: 'Week 8 - Lecture 3',
        description: 'See lecture notes.',
        week: 8,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-08',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW8L3.html'
    },
    {
        id: 'BDAW9L1',
        title: 'Week 9 - Lecture 1',
        description: 'See lecture notes.',
        week: 9,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-09',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW9L1.html'
    },
    {
        id: 'BDAW9L2',
        title: 'Week 9 - Lecture 2',
        description: 'See lecture notes.',
        week: 9,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-09',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW9L2.html'
    },
    {
        id: 'BDAW9L3',
        title: 'Week 9 - Lecture 3',
        description: 'See lecture notes.',
        week: 9,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-09',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW9L3.html'
    },
    {
        id: 'BDAW10L1',
        title: 'Week 10 - Lecture 1',
        description: 'See lecture notes.',
        week: 10,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-10',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW10L1.html'
    },
    {
        id: 'BDAW10L2',
        title: 'Week 10 - Lecture 2',
        description: 'See lecture notes.',
        week: 10,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-10',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW10L2.html'
    },
    {
        id: 'BDAW10L3',
        title: 'Week 10 - Lecture 3',
        description: 'See lecture notes.',
        week: 10,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-10',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW10L3.html'
    },
    {
        id: 'BDAW11L1',
        title: 'Week 11 - Lecture 1',
        description: 'See lecture notes.',
        week: 11,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-11',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW11L1.html'
    },
    {
        id: 'BDAW11L2',
        title: 'Week 11 - Lecture 2',
        description: 'See lecture notes.',
        week: 11,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-11',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW11L2.html'
    },
    {
        id: 'BDAW11L3',
        title: 'Week 11 - Lecture 3',
        description: 'See lecture notes.',
        week: 11,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-11',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW11L3.html'
    },
    {
        id: 'BDAW12L1',
        title: 'Week 12 - Lecture 1',
        description: 'See lecture notes.',
        week: 12,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-12',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW12L1.html'
    },
    {
        id: 'BDAW13L1',
        title: 'Week 13 - Lecture 1',
        description: 'See lecture notes.',
        week: 13,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-13',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW13L1.html'
    },
    {
        id: 'BDAW13L2',
        title: 'Week 13 - Lecture 2',
        description: 'See lecture notes.',
        week: 13,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-13',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW13L2.html'
    },
    {
        id: 'BDAW14L1',
        title: 'Week 14 - Lecture 1',
        description: 'See lecture notes.',
        week: 14,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-14',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW14L1.html'
    },
    {
        id: 'BDAW14L2',
        title: 'Week 14 - Lecture 2 (empty)',
        description: 'File exists but appears empty.',
        week: 14,
        lesson: 2,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-14',
        readTime: '0 min',
        htmlFile: '/notes/bda/BDAW14L2.html'
    },
    {
        id: 'BDAW14L3',
        title: 'Week 14 - Lecture 3 (empty)',
        description: 'File exists but appears empty.',
        week: 14,
        lesson: 3,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-14',
        readTime: '0 min',
        htmlFile: '/notes/bda/BDAW14L3.html'
    },
    {
        id: 'BDAW15L1',
        title: 'Week 15 - Lecture 1',
        description: 'See lecture notes.',
        week: 15,
        lesson: 1,
        tags: [
            'BDA'
        ],
        dateAdded: '2025-01-15',
        readTime: '15 min',
        htmlFile: '/notes/bda/BDAW15L1.html'
    }
];
}),
"[project]/src/data/notes/fspData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fspNotesData",
    ()=>fspNotesData
]);
const fspNotesData = [
    {
        id: 'FSPW1L1',
        title: 'Week 1 - Lecture 1',
        description: 'See lecture notes.',
        week: 1,
        lesson: 1,
        tags: [
            'FSP'
        ],
        dateAdded: '2025-01-01',
        readTime: '12 min',
        htmlFile: '/notes/fsp/FSPW1L1.html'
    },
    {
        id: 'FSPW2',
        title: 'Week 2',
        description: 'See lecture notes.',
        week: 2,
        lesson: 0,
        tags: [
            'FSP'
        ],
        dateAdded: '2025-01-02',
        readTime: '14 min',
        htmlFile: '/notes/fsp/FSPW2.html'
    },
    {
        id: 'FSPW3',
        title: 'Week 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 0,
        tags: [
            'FSP'
        ],
        dateAdded: '2025-01-03',
        readTime: '16 min',
        htmlFile: '/notes/fsp/FSPW3.html'
    },
    {
        id: 'FSPW4',
        title: 'Week 4',
        description: 'See lecture notes.',
        week: 4,
        lesson: 0,
        tags: [
            'FSP'
        ],
        dateAdded: '2025-01-04',
        readTime: '18 min',
        htmlFile: '/notes/fsp/FSPW4.html'
    },
    {
        id: 'FSPW5',
        title: 'Week 5',
        description: 'See lecture notes.',
        week: 5,
        lesson: 0,
        tags: [
            'FSP'
        ],
        dateAdded: '2025-01-05',
        readTime: '20 min',
        htmlFile: '/notes/fsp/FSPW5.html'
    }
];
}),
"[project]/src/data/notes/lanaData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lanaNotesData",
    ()=>lanaNotesData
]);
const lanaNotesData = [
    {
        id: 'LANAW2L1&W2L2',
        title: 'Week 2 - L1 & L2',
        description: 'Combined lectures.',
        week: 2,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-02',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW2L1&W2L2.html'
    },
    {
        id: 'LANAW3L1_LANAW3L2_LANAW3L3&LANAW3L4',
        title: 'Week 3 - L1 to L4 (combined)',
        description: 'Combined lectures.',
        week: 3,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-03',
        readTime: '24 min',
        htmlFile: '/notes/lana/LANAW3L1_LANAW3L2_LANAW3L3&LANAW3L4.html'
    },
    {
        id: 'LANAW4L1&LANAW4L2',
        title: 'Week 4 - L1 & L2',
        description: 'Combined lectures.',
        week: 4,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-04',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW4L1&LANAW4L2.html'
    },
    {
        id: 'LANAW5',
        title: 'Week 5',
        description: 'See lecture notes.',
        week: 5,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-05',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW5.html'
    },
    {
        id: 'LANAW5L1',
        title: 'Week 5 - L1',
        description: 'See lecture notes.',
        week: 5,
        lesson: 1,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-05',
        readTime: '15 min',
        htmlFile: '/notes/lana/LANAW5L1.html'
    },
    {
        id: 'LANAW5L2',
        title: 'Week 5 - L2',
        description: 'See lecture notes.',
        week: 5,
        lesson: 2,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-05',
        readTime: '15 min',
        htmlFile: '/notes/lana/LANAW5L2.html'
    },
    {
        id: 'LANAW6&W7',
        title: 'Week 6 & Week 7 (combined)',
        description: 'Combined lectures.',
        week: 6,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-06',
        readTime: '22 min',
        htmlFile: '/notes/lana/LANAW6&W7.html'
    },
    {
        id: 'LANAW8',
        title: 'Week 8',
        description: 'See lecture notes.',
        week: 8,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-08',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW8.html'
    },
    {
        id: 'LANAW9',
        title: 'Week 9',
        description: 'See lecture notes.',
        week: 9,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-09',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW9.html'
    },
    {
        id: 'LANAW10',
        title: 'Week 10',
        description: 'See lecture notes.',
        week: 10,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-10',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW10.html'
    },
    {
        id: 'LANAW11',
        title: 'Week 11',
        description: 'See lecture notes.',
        week: 11,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-11',
        readTime: '18 min',
        htmlFile: '/notes/lana/LANAW11.html'
    },
    {
        id: 'LANAW12&W13',
        title: 'Week 12 & Week 13 (combined)',
        description: 'Combined lectures.',
        week: 12,
        lesson: 0,
        tags: [
            'LANA'
        ],
        dateAdded: '2025-01-12',
        readTime: '24 min',
        htmlFile: '/notes/lana/LANAW12&W13.html'
    }
];
}),
"[project]/src/data/notes/noData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noNotesData",
    ()=>noNotesData
]);
const noNotesData = [
    {
        id: 'NOW1L1',
        title: 'Week 1 - Lecture 1',
        description: 'See lecture notes.',
        week: 1,
        lesson: 1,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-01',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW1L1.html'
    },
    {
        id: 'NOW1L2',
        title: 'Week 1 - Lecture 2',
        description: 'See lecture notes.',
        week: 1,
        lesson: 2,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-01',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW1L2.html'
    },
    {
        id: 'NOW2',
        title: 'Week 2',
        description: 'See lecture notes.',
        week: 2,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-02',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW2.html'
    },
    {
        id: 'NOW3',
        title: 'Week 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-03',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW3.html'
    },
    {
        id: 'NOW4',
        title: 'Week 4',
        description: 'See lecture notes.',
        week: 4,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-04',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW4.html'
    },
    {
        id: 'NOW5L1&W5L2',
        title: 'Week 5 - L1 & L2',
        description: 'Combined lectures.',
        week: 5,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-05',
        readTime: '22 min',
        htmlFile: '/notes/no/NOW5L1&W5L2.html'
    },
    {
        id: 'NOW5L3&W5L4',
        title: 'Week 5 - L3 & L4',
        description: 'Combined lectures.',
        week: 5,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-05',
        readTime: '22 min',
        htmlFile: '/notes/no/NOW5L3&W5L4.html'
    },
    {
        id: 'NOW6',
        title: 'Week 6',
        description: 'See lecture notes.',
        week: 6,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-06',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW6.html'
    },
    {
        id: 'NOW7',
        title: 'Week 7',
        description: 'See lecture notes.',
        week: 7,
        lesson: 0,
        tags: [
            'NO'
        ],
        dateAdded: '2025-01-07',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW7.html'
    }
];
}),
"[project]/src/data/notes/prpData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prpNotesData",
    ()=>prpNotesData
]);
const prpNotesData = [
    {
        id: 'PRPW1',
        title: 'Week 1',
        description: 'See lecture notes.',
        week: 1,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-01',
        readTime: '16 min',
        htmlFile: '/notes/prp/PRPW1.html'
    },
    {
        id: 'PRPW2',
        title: 'Week 2',
        description: 'See lecture notes.',
        week: 2,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-02',
        readTime: '16 min',
        htmlFile: '/notes/prp/PRPW2.html'
    },
    {
        id: 'PRPW3',
        title: 'Week 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-03',
        readTime: '16 min',
        htmlFile: '/notes/prp/PRPW3.html'
    },
    {
        id: 'PRPW3(1)',
        title: 'Week 3 (Part 2)',
        description: 'Supplementary lecture.',
        week: 3,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-03',
        readTime: '12 min',
        htmlFile: '/notes/prp/PRPW3(1).html'
    },
    {
        id: 'PRPW4',
        title: 'Week 4',
        description: 'See lecture notes.',
        week: 4,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-04',
        readTime: '18 min',
        htmlFile: '/notes/prp/PRPW4.html'
    },
    {
        id: 'PRPW5L1',
        title: 'Week 5 - L1',
        description: 'See lecture notes.',
        week: 5,
        lesson: 1,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-05',
        readTime: '12 min',
        htmlFile: '/notes/prp/PRPW5L1.html'
    },
    {
        id: 'PRPW5L2&W5L3',
        title: 'Week 5 - L2 & L3',
        description: 'Combined lectures.',
        week: 5,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-05',
        readTime: '20 min',
        htmlFile: '/notes/prp/PRPW5L2&W5L3.html'
    },
    {
        id: 'PRPW6',
        title: 'Week 6',
        description: 'See lecture notes.',
        week: 6,
        lesson: 0,
        tags: [
            'PRP'
        ],
        dateAdded: '2025-01-06',
        readTime: '18 min',
        htmlFile: '/notes/prp/PRPW6.html'
    }
];
}),
"[project]/src/data/notes/vsdData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "vsdNotesData",
    ()=>vsdNotesData
]);
const vsdNotesData = [
    {
        id: 'VSDW1',
        title: 'Week 1',
        description: 'See lecture notes.',
        week: 1,
        lesson: 0,
        tags: [
            'VSD'
        ],
        dateAdded: '2025-01-01',
        readTime: '14 min',
        htmlFile: '/notes/vsd/VSDW1.html'
    },
    {
        id: 'VSDW3',
        title: 'Week 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 0,
        tags: [
            'VSD'
        ],
        dateAdded: '2025-01-03',
        readTime: '16 min',
        htmlFile: '/notes/vsd/VSDW3.html'
    }
];
}),
"[project]/src/data/notes/faiData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faiNotesData",
    ()=>faiNotesData
]);
const faiNotesData = [
    {
        id: 'FAIW1',
        title: 'Week 1',
        description: 'See lecture notes.',
        week: 1,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-01',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW1.html'
    },
    {
        id: 'FAIW2',
        title: 'Week 2',
        description: 'See lecture notes.',
        week: 2,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-02',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW2.html'
    },
    {
        id: 'FAIW3',
        title: 'Week 3',
        description: 'See lecture notes.',
        week: 3,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-03',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW3.html'
    },
    {
        id: 'FAIW4L1&W4L2',
        title: 'Week 4 - L1 & L2',
        description: 'Combined lectures.',
        week: 4,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-04',
        readTime: '18 min',
        htmlFile: '/notes/fai/FAIW4L1&W4L2.html'
    },
    {
        id: 'FAIW4L3',
        title: 'Week 4 - L3',
        description: 'See lecture notes.',
        week: 4,
        lesson: 3,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-04',
        readTime: '12 min',
        htmlFile: '/notes/fai/FAIW4L3.html'
    },
    {
        id: 'FAIW5L1',
        title: 'Week 5 - L1',
        description: 'See lecture notes.',
        week: 5,
        lesson: 1,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-05',
        readTime: '12 min',
        htmlFile: '/notes/fai/FAIW5L1.html'
    },
    {
        id: 'FAIW5L2',
        title: 'Week 5 - L2',
        description: 'See lecture notes.',
        week: 5,
        lesson: 2,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-05',
        readTime: '12 min',
        htmlFile: '/notes/fai/FAIW5L2.html'
    },
    {
        id: 'FAIW6',
        title: 'Week 6',
        description: 'See lecture notes.',
        week: 6,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-06',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW6.html'
    },
    {
        id: 'FAIW7',
        title: 'Week 7',
        description: 'See lecture notes.',
        week: 7,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-07',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW7.html'
    },
    {
        id: 'FAIW8',
        title: 'Week 8',
        description: 'See lecture notes.',
        week: 8,
        lesson: 0,
        tags: [
            'FAI'
        ],
        dateAdded: '2025-01-08',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW8.html'
    }
];
}),
"[project]/src/components/dashboard/note-preview-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotePreviewLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$sidebar$2d$new$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/assistant-sidebar-new.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2d$guard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/auth-guard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$note$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-note-preview.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/firebase/html-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$ataData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/ataData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$bdaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/bdaData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$fspData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/fspData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$lanaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/lanaData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$noData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/noData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$prpData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/prpData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$vsdData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/vsdData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$faiData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/faiData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function NotePreviewLayout({ courseName, courseTitle, note, coursePath }) {
    const { user, isUserLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [isAssistantOpen, setIsAssistantOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isSaving, setIsSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isFullscreen, setIsFullscreen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const previewContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handler = ()=>setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return ()=>document.removeEventListener('fullscreenchange', handler);
    }, []);
    // Extract course identifier from coursePath (e.g., '/dashboard/fsp' -> 'fsp')
    const courseId = coursePath.split('/').pop() || '';
    const weekId = `week${note?.week || 1}`;
    const lectureId = note?.id || '';
    // Determine previous/next notes for navigation
    const courseNotesMap = {
        ata: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$ataData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ataNotesData"],
        bda: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$bdaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bdaNotesData"],
        fsp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$fspData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fspNotesData"],
        lana: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$lanaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lanaNotesData"],
        no: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$noData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noNotesData"],
        prp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$prpData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prpNotesData"],
        vsd: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$vsdData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vsdNotesData"],
        fai: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$faiData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faiNotesData"]
    };
    const notesArray = courseNotesMap[courseId] || [];
    const currentIdx = notesArray.findIndex((n)=>n.id === note?.id);
    const prevNote = currentIdx > 0 ? notesArray[currentIdx - 1] : undefined;
    const nextNote = currentIdx >= 0 && currentIdx < notesArray.length - 1 ? notesArray[currentIdx + 1] : undefined;
    // Use the new cascading load logic hook - wait for auth to complete
    const { htmlContent, isModified, loading, error, reload, updateHtml } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$note$2d$preview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotePreview"])(isUserLoading ? undefined : user?.uid, courseId, weekId, lectureId);
    // Show error toast if loading failed
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error
            });
        }
    }, [
        error,
        toast
    ]);
    if (!note) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const handleAssistantClick = ()=>{
        // Open assistant directly - using server-side Gemini API key
        setIsAssistantOpen(true);
    };
    const handleToggleFullscreen = ()=>{
        const el = previewContainerRef.current;
        if (!el) return;
        if (document.fullscreenElement) {
            if (document.exitFullscreen) document.exitFullscreen();
        } else {
            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else {
                el.webkitRequestFullscreen?.();
                el.msRequestFullscreen?.();
            }
        }
    };
    const buildExportHtml = (html)=>{
        if (!html) return '';
        if (html.includes('<html')) return html;
        return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${html}</body></html>`;
    };
    const handleDownload = ()=>{
        const content = buildExportHtml(currentHtmlContent || '');
        const blob = new Blob([
            content
        ], {
            type: 'text/html;charset=utf-8'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${lectureId}${isModified ? '-edited' : ''}.html`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };
    const handleHtmlUpdate = async (newHtml)=>{
        if (!user) return;
        setIsSaving(true);
        try {
            // Update local state immediately for instant preview
            updateHtml(newHtml);
            // Save to Firebase Storage
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveModifiedHtml"])(user.uid, weekId, lectureId, newHtml);
            toast({
                title: '✓ Changes saved',
                description: 'Your modified version has been saved to your account.'
            });
        } catch (error) {
            console.error("Failed to save changes:", error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not save your changes. Please try again.'
            });
        } finally{
            setIsSaving(false);
        }
    };
    const handleResetToOriginal = async ()=>{
        if (!user) return;
        try {
            // Delete modified version from Firebase Storage
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteModifiedHtml"])(user.uid, weekId, lectureId);
            // Reload to show original
            await reload();
            toast({
                title: 'Reset Complete',
                description: 'The note has been reset to its original version.'
            });
        } catch (error) {
            console.error("Failed to reset note:", error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not reset the note.'
            });
        }
    };
    const isLoading = isUserLoading || loading;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2d$guard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthGuard"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen w-full bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block w-64 border-r p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-32 mb-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-12 w-1/3 mb-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-10 w-full mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-[60vh] w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this);
    }
    const handlePrint = ()=>{
        // Create a new window with the note content for printing
        const printWindow = window.open('', '_blank');
        if (printWindow && currentHtmlContent) {
            printWindow.document.write(currentHtmlContent);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(()=>{
                printWindow.print();
                printWindow.close();
            }, 250);
        }
    };
    const currentHtmlContent = htmlContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$auth$2d$guard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full relative bg-[#f6d7d7]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 z-0",
                    style: {
                        backgroundImage: `radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.15), transparent 35%), radial-gradient(circle at 85% 25%, rgba(236, 72, 153, 0.18), transparent 45%), radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.12), transparent 45%)`,
                        filter: 'blur(80px)',
                        backgroundRepeat: 'no-repeat'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "sticky top-0 z-30 border-b bg-black text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboard",
                                                className: "font-extrabold tracking-wide text-lg",
                                                children: "Voylearning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                className: "hidden md:flex items-center gap-6 text-sm text-white/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        className: "hover:text-white",
                                                        children: "Home"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: coursePath,
                                                        className: "hover:text-white",
                                                        children: courseName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/60",
                                                        children: [
                                                            "Week ",
                                                            note?.week,
                                                            " - Lesson ",
                                                            note?.lesson
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(auth),
                                        className: "rounded-full border border-red-400/60 bg-transparent px-4 py-1.5 text-sm text-red-100 hover:bg-red-500/10",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "rounded-full bg-black text-white border-0 px-4 py-1.5 hover:bg-black/90",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: coursePath,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Back to Course"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this),
                                                isModified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-xs rounded-full bg-emerald-500/15 text-emerald-900 border-0 px-2 py-1",
                                                    children: "✏️ Your modified version"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "text-xs rounded-full bg-amber-500/20 text-amber-900 border border-amber-300 px-2 py-1",
                                                    children: "📄 Original version"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                isModified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "destructive",
                                                                size: "sm",
                                                                className: "rounded-full px-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    "Reset to Original"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                            children: "Are you sure?"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                            children: "This will discard all your custom changes to this note. This action cannot be undone."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                            lineNumber: 300,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                            children: "Cancel"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                            lineNumber: 305,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                            onClick: handleResetToOriginal,
                                                                            children: "Confirm Reset"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleAssistantClick,
                                                    className: "rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this),
                                                        "AI Assistant"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this),
                                                prevNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/dashboard/${courseId}/${encodeURIComponent(prevNote.id)}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Previous"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    disabled: true,
                                                    className: "rounded-full bg-slate-700 text-white border-0 px-3 disabled:opacity-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Previous"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this),
                                                nextNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "rounded-full bg-slate-800 text-white border-0 px-3 hover:bg-slate-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/dashboard/${courseId}/${encodeURIComponent(nextNote.id)}`,
                                                        children: [
                                                            "Next",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "ml-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    disabled: true,
                                                    className: "rounded-full bg-slate-700 text-white border-0 px-3 disabled:opacity-50",
                                                    children: [
                                                        "Next",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "ml-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handlePrint,
                                                    className: "bg-black text-white border-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handleDownload,
                                                    className: "bg-black text-white border-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handleToggleFullscreen,
                                                    "aria-label": isFullscreen ? 'Exit Full Screen' : 'Full Screen',
                                                    className: "bg-black text-white border-0",
                                                    children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: previewContainerRef,
                                    className: "w-full h-[calc(100vh-12rem)] bg-[#f3f5f7] rounded-xl border-2 border-black/10 shadow-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        id: "note-iframe",
                                        srcDoc: buildExportHtml(currentHtmlContent || ''),
                                        className: "w-full h-full border-0",
                                        sandbox: "allow-scripts allow-same-origin",
                                        title: "Note Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 363,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this),
                currentHtmlContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$assistant$2d$sidebar$2d$new$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isAssistantOpen,
                    onClose: ()=>setIsAssistantOpen(false),
                    note: note,
                    currentHtmlContent: currentHtmlContent,
                    onHtmlContentUpdate: handleHtmlUpdate
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
            lineNumber: 237,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/dashboard/bda/[noteId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BdaNotePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$note$2d$preview$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/note-preview-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$bdaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/bdaData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BdaNotePage({ params }) {
    const { noteId } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"](params);
    const decodedId = decodeURIComponent(noteId);
    const note = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$bdaData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bdaNotesData"].find((n)=>n.id === decodedId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$note$2d$preview$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        courseName: "BDA",
        courseTitle: "Backend Development Approach",
        note: note,
        coursePath: "/dashboard/bda"
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/bda/[noteId]/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c5e50254._.js.map