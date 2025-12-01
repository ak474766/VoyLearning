module.exports = [
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
    const toBase64 = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=>{
                if (typeof reader.result !== 'string') {
                    return reject('FileReader did not return a string');
                }
                resolve(reader.result);
            };
            reader.onerror = reject;
        });
    };
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
            if (method === 'local') {
                const dataURL = await toBase64(compressedFile);
                setImageUpload((prev)=>prev ? {
                        ...prev,
                        status: 'complete',
                        dataURL
                    } : null);
                return;
            } else {
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
            }
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
    const uploadNow = async (provider)=>{
        if (!imageUpload) return null;
        try {
            setImageUpload((prev)=>prev ? {
                    ...prev,
                    status: 'uploading',
                    progress: 0
                } : null);
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                initialQuality: 0.8
            };
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(imageUpload.file, options);
            let downloadURL;
            if (provider === 'firebase') {
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
            return downloadURL;
        } catch (error) {
            console.error("On-demand upload error:", error);
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
            return null;
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
        uploadNow,
        cancelUpload
    };
}
}),
"[project]/src/services/llm/data:9f5b85 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ff9fe4e6a6d2f4406f7850ce93a516a802be654a":"editHtmlWithLLM"},"src/services/llm/html-editor-agent.ts",""] */ __turbopack_context__.s([
    "editHtmlWithLLM",
    ()=>editHtmlWithLLM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var editHtmlWithLLM = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ff9fe4e6a6d2f4406f7850ce93a516a802be654a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "editHtmlWithLLM"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaHRtbC1lZGl0b3ItYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB7IGdlbmtpdCB9IGZyb20gJ2dlbmtpdCc7XG5pbXBvcnQgeyBnb29nbGVBSSB9IGZyb20gJ0BnZW5raXQtYWkvZ29vZ2xlLWdlbmFpJztcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlcic7XG50eXBlIE1vZGlmaWNhdGlvblR5cGUgPSAncmVwbGFjZScgfCAnaW5zZXJ0QWZ0ZXInIHwgJ2luc2VydEJlZm9yZScgfCAndXBkYXRlVGV4dCcgfCAnYWRkSW1hZ2UnIHwgJ2FwcGVuZENoaWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGl0SW5zdHJ1Y3Rpb24ge1xuICBjdXJyZW50SHRtbDogc3RyaW5nO1xuICB1c2VySW5zdHJ1Y3Rpb246IHN0cmluZztcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gIGFwaUtleT86IHN0cmluZztcbiAgY29udmVyc2F0aW9uSGlzdG9yeT86IHsgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7IGNvbnRlbnQ6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdFJlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbW9kaWZpZWRIdG1sPzogc3RyaW5nO1xuICBjaGFuZ2VEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbW9kaWZpY2F0aW9uPzoge1xuICAgIHRhcmdldFNlbGVjdG9yOiBzdHJpbmc7XG4gICAgbW9kaWZpY2F0aW9uVHlwZTogTW9kaWZpY2F0aW9uVHlwZTtcbiAgICBuZXdDb250ZW50OiBzdHJpbmc7XG4gICAgZXhwbGFuYXRpb246IHN0cmluZztcbiAgICB0ZXh0Q29udGVudD86IHN0cmluZztcbiAgICB0YWdOYW1lPzogc3RyaW5nO1xuICAgIGluZGV4PzogbnVtYmVyO1xuICB9O1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuY29uc3QgSHRtbE1vZGlmaWNhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGFyZ2V0U2VsZWN0b3I6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0NTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudCB0byBtb2RpZnknKSxcbiAgbW9kaWZpY2F0aW9uVHlwZTogei5lbnVtKFsncmVwbGFjZScsICdpbnNlcnRBZnRlcicsICdpbnNlcnRCZWZvcmUnLCAndXBkYXRlVGV4dCcsICdhZGRJbWFnZScsICdhcHBlbmRDaGlsZCddKSxcbiAgbmV3Q29udGVudDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIG5ldyBIVE1MIGNvbnRlbnQgb3IgdGV4dCB0byBpbnNlcnQnKSxcbiAgZXhwbGFuYXRpb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0JyaWVmIGRlc2NyaXB0aW9uIG9mIHdoYXQgd2FzIGNoYW5nZWQnKSxcbiAgdGV4dENvbnRlbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnRmFsbGJhY2s6IGEgc2hvcnQgc25pcHBldCBvZiBuZWFyYnkgdGV4dCB0byBsb2NhdGUgdGhlIGVsZW1lbnQnKSxcbiAgdGFnTmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdGYWxsYmFjazogdGFnIG5hbWUgdG8gbmFycm93IHRoZSBzZWFyY2ggKGUuZy4sIGRpdiwgaDIpJyksXG4gIGluZGV4OiB6Lm51bWJlcigpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0ZhbGxiYWNrOiAxLWJhc2VkIGluZGV4IGFtb25nIGVsZW1lbnRzIHdpdGggdGhlIHRhZ05hbWUnKSxcbn0pO1xuXG4vKipcbiAqIExMTS1wb3dlcmVkIEhUTUwgZWRpdG9yIHRoYXQgaW50ZWxsaWdlbnRseSBpZGVudGlmaWVzIGFuZCBtb2RpZmllcyBzcGVjaWZpYyBwYXJ0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdEh0bWxXaXRoTExNKGluc3RydWN0aW9uOiBFZGl0SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPEVkaXRSZXNwb25zZT4ge1xuICB0cnkge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0IEhUTUxcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVIdG1sU2VydmVyKGluc3RydWN0aW9uLmN1cnJlbnRIdG1sKTtcbiAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEludmFsaWQgSFRNTDogJHt2YWxpZGF0aW9uLmVycm9ycy5qb2luKCcsICcpfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgdGhlIHByb21wdCBmb3IgTExNXG4gICAgY29uc3QgaGlzdG9yeVRleHQgPSBpbnN0cnVjdGlvbi5jb252ZXJzYXRpb25IaXN0b3J5ICYmIGluc3RydWN0aW9uLmNvbnZlcnNhdGlvbkhpc3RvcnkubGVuZ3RoXG4gICAgICA/IGBcXG5Db252ZXJzYXRpb24gSGlzdG9yeTpcXG4ke2luc3RydWN0aW9uLmNvbnZlcnNhdGlvbkhpc3RvcnkubWFwKG0gPT4gYCR7bS5yb2xlfTogJHttLmNvbnRlbnR9YCkuam9pbignXFxuJyl9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBgWW91IGFyZSBhbiBleHBlcnQgSFRNTCBlZGl0b3IgYWdlbnQuIFlvdXIgdGFzayBpcyB0byBhbmFseXplIEhUTUwgY29udGVudCBhbmQgdXNlciBpbnN0cnVjdGlvbnMgdG8gbWFrZSBwcmVjaXNlLCB0YXJnZXRlZCBtb2RpZmljYXRpb25zLlxuXG5DUklUSUNBTCBSVUxFUzpcbjEuIE5FVkVSIHJlZ2VuZXJhdGUgdGhlIGVudGlyZSBIVE1MIGRvY3VtZW50XG4yLiBJZGVudGlmeSB0aGUgRVhBQ1QgZWxlbWVudCB0aGF0IG5lZWRzIG1vZGlmaWNhdGlvblxuMy4gUHJvdmlkZSBPTkxZIHRoZSBzcGVjaWZpYyBjb250ZW50IHRoYXQgbmVlZHMgdG8gY2hhbmdlXG40LiBVc2UgcHJlY2lzZSBDU1Mgc2VsZWN0b3JzIChwcmVmZXIgSUQgb3IgY2xhc3M7IGF2b2lkIG50aC1vZi10eXBlIHVubGVzcyBuZWNlc3NhcnkpXG41LiBQcmVzZXJ2ZSBhbGwgZXhpc3RpbmcgSFRNTCBzdHJ1Y3R1cmUsIHN0eWxpbmcsIGFuZCBmb3JtYXR0aW5nXG42LiBGb3IgaW1hZ2UgaW5zZXJ0aW9uLCBpZiB0aGUgZG9jdW1lbnQgY29udGFpbnMgXCIuZGlhZ3JhbS1wbGFjZWhvbGRlclwiIG9yIFwiLmltYWdlLXBsYWNlaG9sZGVyXCIsIHRhcmdldCB0aGF0IGVsZW1lbnQuIElmIG5laXRoZXIgZXhpc3RzLCBjaG9vc2UgdGhlIG1vc3QgcmVsZXZhbnQgbmVhcmJ5IHNlY3Rpb24gKGUuZy4sIGFmdGVyIGEgcmVsYXRlZCBoZWFkaW5nKS4gVGhlIHJlbmRlcmVyIHdpbGwgd3JhcCB0aGUgaW1hZ2UgVVJMIGluIHRoZSBjb3JyZWN0IHJlc3BvbnNpdmUgY29udGFpbmVyLCBzbyB5b3Ugb25seSBuZWVkIHRvIGNob29zZSB0aGUgaW5zZXJ0aW9uIHBvaW50LlxuNy4gRW5zdXJlIHRoZSBzZWxlY3RvciBleGlzdHMgaW4gdGhlIHByb3ZpZGVkIEhUTUw7IGFkanVzdCB0byBhbiBleGlzdGluZyBjbGFzcy9JRCBpZiBuZWVkZWRcbjguIEFsc28gaW5jbHVkZSBmYWxsYmFjayBmaWVsZHMgKHRleHRDb250ZW50LCB0YWdOYW1lLCBpbmRleCkgdGhhdCBjYW4gaGVscCBsb2NhdGUgdGhlIHRhcmdldCBpZiB0aGUgc2VsZWN0b3IgZmFpbHNcblxuTU9ESUZJQ0FUSU9OIFRZUEVTOlxuLSBcInJlcGxhY2VcIjogUmVwbGFjZSBlbnRpcmUgZWxlbWVudCB3aXRoIG5ldyBIVE1MIHdpdGggcHJvcGVyIGNzcyBpZiB0aGUgY3NzIGlzIG5vdCBleGlzdChmb3IgaW1hZ2UgY3JlYXRlIGNzcyBhbHNvIHNvIGl0cyByZW5kZXIgcHJvcGVybHkgd2l0aCB0aGUgaHRtbCBjb2RlKVxuLSBcInVwZGF0ZVRleHRcIjogQ2hhbmdlIG9ubHkgdGhlIHRleHQgY29udGVudCAocHJlc2VydmVzIHRhZ3MpXG4tIFwiaW5zZXJ0QWZ0ZXJcIjogSW5zZXJ0IG5ldyBjb250ZW50IGFmdGVyIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImluc2VydEJlZm9yZVwiOiBJbnNlcnQgbmV3IGNvbnRlbnQgYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImFkZEltYWdlXCI6IEluc2VydCBhbiBpbWFnZSBhZnRlciB0aGUgdGFyZ2V0IGVsZW1lbnRcbi0gXCJhcHBlbmRDaGlsZFwiOiBBZGQgY29udGVudCBhcyBhIGNoaWxkIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuXG5DdXJyZW50IEhUTUwgRG9jdW1lbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2luc3RydWN0aW9uLmN1cnJlbnRIdG1sfVxuXFxgXFxgXFxgXG5cblVzZXIgSW5zdHJ1Y3Rpb246IFwiJHtpbnN0cnVjdGlvbi51c2VySW5zdHJ1Y3Rpb259XCJcbiR7aW5zdHJ1Y3Rpb24uaW1hZ2VVcmwgPyAoL15odHRwcz86XFwvXFwvLy50ZXN0KGluc3RydWN0aW9uLmltYWdlVXJsKSA/IGBcXG5JbWFnZSBVUkwgdG8gaW5zZXJ0OiAke2luc3RydWN0aW9uLmltYWdlVXJsfWAgOiBgXFxuQW4gaW1hZ2UgaGFzIGJlZW4gYXR0YWNoZWQgZm9yIGNvbnRleHQuIERvIG5vdCBpbnNlcnQgdGhlIGltYWdlIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZC5gKSA6ICcnfVxuJHtoaXN0b3J5VGV4dH1cblxuQW5hbHl6ZSB0aGUgSFRNTCBhbmQgcHJvdmlkZSBhIEpTT04gcmVzcG9uc2Ugd2l0aDpcbjEuIHRhcmdldFNlbGVjdG9yOiBUaGUgQ1NTIHNlbGVjdG9yIGZvciB0aGUgZWxlbWVudCB0byBtb2RpZnlcbjIuIG1vZGlmaWNhdGlvblR5cGU6IE9uZSBvZiB0aGUgdHlwZXMgbGlzdGVkIGFib3ZlXG4zLiBuZXdDb250ZW50OiBUaGUgZXhhY3QgSFRNTC90ZXh0IHRvIGluc2VydCAoa2VlcCBpdCBtaW5pbWFsKS4gRm9yIFwiYWRkSW1hZ2VcIiwgYSBicmllZiBkZXNjcmlwdGlvbiBpcyBmaW5lIGJlY2F1c2UgdGhlIGZpbmFsIHJlbmRlcmVyIHdpbGwgdXNlIHRoZSBwcm92aWRlZCBpbWFnZSBVUkwuXG40LiBleHBsYW5hdGlvbjogQnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIGNoYW5nZVxuXG5FeGFtcGxlIFJlc3BvbnNlOlxue1xuICBcInRhcmdldFNlbGVjdG9yXCI6IFwiaDEubWFpbi10aXRsZVwiLFxuICBcIm1vZGlmaWNhdGlvblR5cGVcIjogXCJ1cGRhdGVUZXh0XCIsXG4gIFwibmV3Q29udGVudFwiOiBcIk5ldyBUaXRsZSBUZXh0XCIsXG4gIFwiZXhwbGFuYXRpb25cIjogXCJDaGFuZ2VkIHRoZSBtYWluIGhlYWRpbmcgdGV4dFwiXG59YDtcblxuICAgIC8vIENhbGwgTExNIHdpdGggcmV0cnkgbG9naWMgKG11bHRpbW9kYWwgaWYgaW1hZ2UgcHJlc2VudClcbiAgICBjb25zdCBjbGllbnQgPSBpbnN0cnVjdGlvbi5hcGlLZXlcbiAgICAgID8gZ2Vua2l0KHsgcGx1Z2luczogW2dvb2dsZUFJKHsgYXBpS2V5OiBpbnN0cnVjdGlvbi5hcGlLZXkgfSldLCBtb2RlbDogJ2dvb2dsZWFpL2dlbWluaS0yLjUtZmxhc2gnIH0pXG4gICAgICA6IGFpO1xuICAgIGNvbnN0IHByb21wdElucHV0OiBhbnkgPSBhd2FpdCBidWlsZFByb21wdFdpdGhPcHRpb25hbEltYWdlKHN5c3RlbVByb21wdCwgaW5zdHJ1Y3Rpb24uaW1hZ2VVcmwpO1xuICAgIGNvbnN0IGxsbVJlc3BvbnNlID0gYXdhaXQgcmV0cnlXaXRoQmFja29mZihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgY2xpZW50LmdlbmVyYXRlKHtcbiAgICAgICAgcHJvbXB0OiBwcm9tcHRJbnB1dCxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgc2NoZW1hOiBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBQYXJzZSBMTE0gcmVzcG9uc2Ugcm9idXN0bHlcbiAgICBsZXQgbW9kaWZpY2F0aW9uOiB6LmluZmVyPHR5cGVvZiBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hPiB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IChsbG1SZXNwb25zZSBhcyBhbnkpPy5vdXRwdXQgPz8gKGxsbVJlc3BvbnNlIGFzIGFueSk/LmRhdGEgPz8gdW5kZWZpbmVkO1xuICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEh0bWxNb2RpZmljYXRpb25TY2hlbWEuc2FmZVBhcnNlKGNhbmRpZGF0ZSk7XG4gICAgICBpZiAocGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgICAgbW9kaWZpY2F0aW9uID0gcGFyc2VkLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kaWZpY2F0aW9uKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gKGxsbVJlc3BvbnNlIGFzIGFueSk/LnRleHQ7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gSHRtbE1vZGlmaWNhdGlvblNjaGVtYS5zYWZlUGFyc2UoanNvbik7XG4gICAgICAgICAgaWYgKHBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBtb2RpZmljYXRpb24gPSBwYXJzZWQuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGlnbm9yZSBKU09OIHBhcnNlIGVycm9yc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtb2RpZmljYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTExNIGRpZCBub3QgcmV0dXJuIGEgdmFsaWQgbW9kaWZpY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYWRkaW5nIGFuIGltYWdlLCB1c2UgdGhlIHByb3ZpZGVkIFVSTFxuICAgIGxldCBjb250ZW50VG9JbnNlcnQgPSBtb2RpZmljYXRpb24ubmV3Q29udGVudDtcbiAgICBpZiAobW9kaWZpY2F0aW9uLm1vZGlmaWNhdGlvblR5cGUgPT09ICdhZGRJbWFnZScgJiYgaW5zdHJ1Y3Rpb24uaW1hZ2VVcmwpIHtcbiAgICAgIGNvbnRlbnRUb0luc2VydCA9IGluc3RydWN0aW9uLmltYWdlVXJsO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBtb2RpZmljYXRpb24gcGxhbjsgY2xpZW50IHdpbGwgYXBwbHkgRE9NIGNoYW5nZXMgYW5kIHNhbml0aXplXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtb2RpZmljYXRpb246IHtcbiAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IG1vZGlmaWNhdGlvbi50YXJnZXRTZWxlY3RvcixcbiAgICAgICAgbW9kaWZpY2F0aW9uVHlwZTogbW9kaWZpY2F0aW9uLm1vZGlmaWNhdGlvblR5cGUsXG4gICAgICAgIG5ld0NvbnRlbnQ6IGNvbnRlbnRUb0luc2VydCxcbiAgICAgICAgZXhwbGFuYXRpb246IG1vZGlmaWNhdGlvbi5leHBsYW5hdGlvbixcbiAgICAgICAgdGV4dENvbnRlbnQ6IChtb2RpZmljYXRpb24gYXMgYW55KS50ZXh0Q29udGVudCxcbiAgICAgICAgdGFnTmFtZTogKG1vZGlmaWNhdGlvbiBhcyBhbnkpLnRhZ05hbWUsXG4gICAgICAgIGluZGV4OiAobW9kaWZpY2F0aW9uIGFzIGFueSkuaW5kZXgsXG4gICAgICB9LFxuICAgICAgY2hhbmdlRGVzY3JpcHRpb246IG1vZGlmaWNhdGlvbi5leHBsYW5hdGlvbixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0hUTUwgZWRpdGluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnLFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXIgcXVlc3Rpb25zIGFib3V0IEhUTUwgY29udGVudCB3aXRob3V0IG1vZGlmeWluZyBpdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5zd2VyUXVlc3Rpb25BYm91dEh0bWwoXG4gIGh0bWxDb250ZW50OiBzdHJpbmcsXG4gIHF1ZXN0aW9uOiBzdHJpbmcsXG4gIG9wdHM/OiB7IGFwaUtleT86IHN0cmluZzsgY29udmVyc2F0aW9uSGlzdG9yeT86IHsgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7IGNvbnRlbnQ6IHN0cmluZyB9W107IGltYWdlVXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaGlzdG9yeVRleHQgPSBvcHRzPy5jb252ZXJzYXRpb25IaXN0b3J5ICYmIG9wdHMuY29udmVyc2F0aW9uSGlzdG9yeS5sZW5ndGhcbiAgICAgID8gYFxcbkNvbnZlcnNhdGlvbiBIaXN0b3J5OlxcbiR7b3B0cy5jb252ZXJzYXRpb25IaXN0b3J5Lm1hcChtID0+IGAke20ucm9sZX06ICR7bS5jb250ZW50fWApLmpvaW4oJ1xcbicpfWBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgaW1hZ2VUZXh0ID0gb3B0cz8uaW1hZ2VVcmwgPyBgXFxuQW4gaW1hZ2UgaGFzIGJlZW4gYXR0YWNoZWQuIENvbnNpZGVyIHRoZSBpbWFnZSB0b2dldGhlciB3aXRoIHRoZSBIVE1MIHdoZW4gYW5zd2VyaW5nLiBBdm9pZCBtYWtpbmcgY2xhaW1zIGJleW9uZCB3aGF0IGlzIHN1cHBvcnRlZCBieSB0aGUgSFRNTCBhbmQgdGhlIHZpc2libGUgY29udGVudCBvZiB0aGUgaW1hZ2UuYCA6ICcnO1xuICAgIGNvbnN0IHByb21wdCA9IGBZb3UgYXJlIGEgaGVscGZ1bCBsZWFybmluZyBhc3Npc3RhbnQuIEFuc3dlciB0aGUgdXNlcidzIHF1ZXN0aW9uIHVzaW5nIHRoZSBwcm92aWRlZCBIVE1MIGRvY3VtZW50IGNvbnRlbnQuJHtvcHRzPy5pbWFnZVVybCA/ICcgQWxzbyBjb25zaWRlciB0aGUgYXR0YWNoZWQgaW1hZ2UuJyA6ICcnfSBBdm9pZCB1c2luZyBleHRlcm5hbCBrbm93bGVkZ2UuXG5cbkhUTUwgRG9jdW1lbnQgQ29udGVudDpcblxcYFxcYFxcYGh0bWxcbiR7aHRtbENvbnRlbnR9XG5cXGBcXGBcXGBcblxuVXNlciBRdWVzdGlvbjogXCIke3F1ZXN0aW9ufVwiXG4ke2hpc3RvcnlUZXh0fVxuJHtpbWFnZVRleHR9XG5cblByb3ZpZGUgYSBjbGVhciwgY29uY2lzZSBhbnN3ZXIgYmFzZWQgb24gdGhlIGRvY3VtZW50IGNvbnRlbnQuIElmIHRoZSBhbnN3ZXIgY2Fubm90IGJlIGZvdW5kIGluIHRoZSBkb2N1bWVudCwgc2F5IHNvLmA7XG5cbiAgICBjb25zdCBjbGllbnQgPSBvcHRzPy5hcGlLZXlcbiAgICAgID8gZ2Vua2l0KHsgcGx1Z2luczogW2dvb2dsZUFJKHsgYXBpS2V5OiBvcHRzLmFwaUtleSB9KV0sIG1vZGVsOiAnZ29vZ2xlYWkvZ2VtaW5pLTIuNS1mbGFzaCcgfSlcbiAgICAgIDogYWk7XG4gICAgY29uc3QgcHJvbXB0SW5wdXQ6IGFueSA9IGF3YWl0IGJ1aWxkUHJvbXB0V2l0aE9wdGlvbmFsSW1hZ2UocHJvbXB0LCBvcHRzPy5pbWFnZVVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBjbGllbnQuZ2VuZXJhdGUoeyBwcm9tcHQ6IHByb21wdElucHV0IH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignUXVlc3Rpb24gYW5zd2VyaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBhbnN3ZXIgcXVlc3Rpb246ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcid9YCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHJ5IGhlbHBlciB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmZcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmV0cnlXaXRoQmFja29mZjxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMpOiBQcm9taXNlPFQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXRyaWVzOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChpID09PSByZXRyaWVzIC0gMSkgdGhyb3cgZXJyb3I7XG4gICAgICBjb25zdCBkZWxheSA9IE1hdGgucG93KDIsIGkpICogMTAwMDtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ01heCByZXRyaWVzIGV4Y2VlZGVkJyk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUh0bWxTZXJ2ZXIoaHRtbDogc3RyaW5nKTogeyB2YWxpZDogYm9vbGVhbjsgZXJyb3JzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAoIWh0bWwgfHwgaHRtbC50cmltKCkubGVuZ3RoID09PSAwKSBlcnJvcnMucHVzaCgnSFRNTCBjb250ZW50IGlzIGVtcHR5Jyk7XG4gIGlmIChodG1sLmxlbmd0aCA+IDUwMDAwMDApIGVycm9ycy5wdXNoKCdIVE1MIGNvbnRlbnQgZXhjZWVkcyBzaXplIGxpbWl0ICg1TUIpJyk7XG4gIGlmICghaHRtbC5pbmNsdWRlcygnPGh0bWwnKSAmJiAhaHRtbC5pbmNsdWRlcygnPGJvZHknKSkgZXJyb3JzLnB1c2goJ0hUTUwgbWlzc2luZyBiYXNpYyBzdHJ1Y3R1cmUnKTtcbiAgcmV0dXJuIHsgdmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDAsIGVycm9ycyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBidWlsZFByb21wdFdpdGhPcHRpb25hbEltYWdlKHRleHRQcm9tcHQ6IHN0cmluZywgaW1hZ2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBpZiAoIWltYWdlVXJsKSByZXR1cm4gdGV4dFByb21wdDtcbiAgY29uc3QgbWVkaWFVcmwgPSBpbWFnZVVybC5zdGFydHNXaXRoKCdkYXRhOicpID8gaW1hZ2VVcmwgOiAoYXdhaXQgdG9EYXRhVXJsRnJvbVVybChpbWFnZVVybCkpIHx8IGltYWdlVXJsO1xuICByZXR1cm4gW1xuICAgIHsgbWVkaWE6IHsgdXJsOiBtZWRpYVVybCB9IH0sXG4gICAgeyB0ZXh0OiB0ZXh0UHJvbXB0IH0sXG4gIF07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRvRGF0YVVybEZyb21VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgMTAwMDApO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLCBoZWFkZXJzOiB7IEFjY2VwdDogJ2ltYWdlLyonIH0gfSk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGlmICghcmVzLm9rKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtaW1lID0gcmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnaW1hZ2UvanBlZyc7XG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCByZXMuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBiYXNlNjQgPSBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIHJldHVybiBgZGF0YToke21pbWV9O2Jhc2U2NCwke2Jhc2U2NH1gO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4U0E2Q3NCIn0=
}),
"[project]/src/services/llm/data:6c0ca5 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70364dc76f720cd99afdb2f862e80a5d8830e52102":"answerQuestionAboutHtml"},"src/services/llm/html-editor-agent.ts",""] */ __turbopack_context__.s([
    "answerQuestionAboutHtml",
    ()=>answerQuestionAboutHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var answerQuestionAboutHtml = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70364dc76f720cd99afdb2f862e80a5d8830e52102", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "answerQuestionAboutHtml"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaHRtbC1lZGl0b3ItYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB7IGdlbmtpdCB9IGZyb20gJ2dlbmtpdCc7XG5pbXBvcnQgeyBnb29nbGVBSSB9IGZyb20gJ0BnZW5raXQtYWkvZ29vZ2xlLWdlbmFpJztcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlcic7XG50eXBlIE1vZGlmaWNhdGlvblR5cGUgPSAncmVwbGFjZScgfCAnaW5zZXJ0QWZ0ZXInIHwgJ2luc2VydEJlZm9yZScgfCAndXBkYXRlVGV4dCcgfCAnYWRkSW1hZ2UnIHwgJ2FwcGVuZENoaWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGl0SW5zdHJ1Y3Rpb24ge1xuICBjdXJyZW50SHRtbDogc3RyaW5nO1xuICB1c2VySW5zdHJ1Y3Rpb246IHN0cmluZztcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gIGFwaUtleT86IHN0cmluZztcbiAgY29udmVyc2F0aW9uSGlzdG9yeT86IHsgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7IGNvbnRlbnQ6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdFJlc3BvbnNlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbW9kaWZpZWRIdG1sPzogc3RyaW5nO1xuICBjaGFuZ2VEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbW9kaWZpY2F0aW9uPzoge1xuICAgIHRhcmdldFNlbGVjdG9yOiBzdHJpbmc7XG4gICAgbW9kaWZpY2F0aW9uVHlwZTogTW9kaWZpY2F0aW9uVHlwZTtcbiAgICBuZXdDb250ZW50OiBzdHJpbmc7XG4gICAgZXhwbGFuYXRpb246IHN0cmluZztcbiAgICB0ZXh0Q29udGVudD86IHN0cmluZztcbiAgICB0YWdOYW1lPzogc3RyaW5nO1xuICAgIGluZGV4PzogbnVtYmVyO1xuICB9O1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuY29uc3QgSHRtbE1vZGlmaWNhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGFyZ2V0U2VsZWN0b3I6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0NTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudCB0byBtb2RpZnknKSxcbiAgbW9kaWZpY2F0aW9uVHlwZTogei5lbnVtKFsncmVwbGFjZScsICdpbnNlcnRBZnRlcicsICdpbnNlcnRCZWZvcmUnLCAndXBkYXRlVGV4dCcsICdhZGRJbWFnZScsICdhcHBlbmRDaGlsZCddKSxcbiAgbmV3Q29udGVudDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIG5ldyBIVE1MIGNvbnRlbnQgb3IgdGV4dCB0byBpbnNlcnQnKSxcbiAgZXhwbGFuYXRpb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0JyaWVmIGRlc2NyaXB0aW9uIG9mIHdoYXQgd2FzIGNoYW5nZWQnKSxcbiAgdGV4dENvbnRlbnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnRmFsbGJhY2s6IGEgc2hvcnQgc25pcHBldCBvZiBuZWFyYnkgdGV4dCB0byBsb2NhdGUgdGhlIGVsZW1lbnQnKSxcbiAgdGFnTmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLmRlc2NyaWJlKCdGYWxsYmFjazogdGFnIG5hbWUgdG8gbmFycm93IHRoZSBzZWFyY2ggKGUuZy4sIGRpdiwgaDIpJyksXG4gIGluZGV4OiB6Lm51bWJlcigpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0ZhbGxiYWNrOiAxLWJhc2VkIGluZGV4IGFtb25nIGVsZW1lbnRzIHdpdGggdGhlIHRhZ05hbWUnKSxcbn0pO1xuXG4vKipcbiAqIExMTS1wb3dlcmVkIEhUTUwgZWRpdG9yIHRoYXQgaW50ZWxsaWdlbnRseSBpZGVudGlmaWVzIGFuZCBtb2RpZmllcyBzcGVjaWZpYyBwYXJ0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdEh0bWxXaXRoTExNKGluc3RydWN0aW9uOiBFZGl0SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPEVkaXRSZXNwb25zZT4ge1xuICB0cnkge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0IEhUTUxcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdmFsaWRhdGVIdG1sU2VydmVyKGluc3RydWN0aW9uLmN1cnJlbnRIdG1sKTtcbiAgICBpZiAoIXZhbGlkYXRpb24udmFsaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYEludmFsaWQgSFRNTDogJHt2YWxpZGF0aW9uLmVycm9ycy5qb2luKCcsICcpfWAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgdGhlIHByb21wdCBmb3IgTExNXG4gICAgY29uc3QgaGlzdG9yeVRleHQgPSBpbnN0cnVjdGlvbi5jb252ZXJzYXRpb25IaXN0b3J5ICYmIGluc3RydWN0aW9uLmNvbnZlcnNhdGlvbkhpc3RvcnkubGVuZ3RoXG4gICAgICA/IGBcXG5Db252ZXJzYXRpb24gSGlzdG9yeTpcXG4ke2luc3RydWN0aW9uLmNvbnZlcnNhdGlvbkhpc3RvcnkubWFwKG0gPT4gYCR7bS5yb2xlfTogJHttLmNvbnRlbnR9YCkuam9pbignXFxuJyl9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBgWW91IGFyZSBhbiBleHBlcnQgSFRNTCBlZGl0b3IgYWdlbnQuIFlvdXIgdGFzayBpcyB0byBhbmFseXplIEhUTUwgY29udGVudCBhbmQgdXNlciBpbnN0cnVjdGlvbnMgdG8gbWFrZSBwcmVjaXNlLCB0YXJnZXRlZCBtb2RpZmljYXRpb25zLlxuXG5DUklUSUNBTCBSVUxFUzpcbjEuIE5FVkVSIHJlZ2VuZXJhdGUgdGhlIGVudGlyZSBIVE1MIGRvY3VtZW50XG4yLiBJZGVudGlmeSB0aGUgRVhBQ1QgZWxlbWVudCB0aGF0IG5lZWRzIG1vZGlmaWNhdGlvblxuMy4gUHJvdmlkZSBPTkxZIHRoZSBzcGVjaWZpYyBjb250ZW50IHRoYXQgbmVlZHMgdG8gY2hhbmdlXG40LiBVc2UgcHJlY2lzZSBDU1Mgc2VsZWN0b3JzIChwcmVmZXIgSUQgb3IgY2xhc3M7IGF2b2lkIG50aC1vZi10eXBlIHVubGVzcyBuZWNlc3NhcnkpXG41LiBQcmVzZXJ2ZSBhbGwgZXhpc3RpbmcgSFRNTCBzdHJ1Y3R1cmUsIHN0eWxpbmcsIGFuZCBmb3JtYXR0aW5nXG42LiBGb3IgaW1hZ2UgaW5zZXJ0aW9uLCBpZiB0aGUgZG9jdW1lbnQgY29udGFpbnMgXCIuZGlhZ3JhbS1wbGFjZWhvbGRlclwiIG9yIFwiLmltYWdlLXBsYWNlaG9sZGVyXCIsIHRhcmdldCB0aGF0IGVsZW1lbnQuIElmIG5laXRoZXIgZXhpc3RzLCBjaG9vc2UgdGhlIG1vc3QgcmVsZXZhbnQgbmVhcmJ5IHNlY3Rpb24gKGUuZy4sIGFmdGVyIGEgcmVsYXRlZCBoZWFkaW5nKS4gVGhlIHJlbmRlcmVyIHdpbGwgd3JhcCB0aGUgaW1hZ2UgVVJMIGluIHRoZSBjb3JyZWN0IHJlc3BvbnNpdmUgY29udGFpbmVyLCBzbyB5b3Ugb25seSBuZWVkIHRvIGNob29zZSB0aGUgaW5zZXJ0aW9uIHBvaW50LlxuNy4gRW5zdXJlIHRoZSBzZWxlY3RvciBleGlzdHMgaW4gdGhlIHByb3ZpZGVkIEhUTUw7IGFkanVzdCB0byBhbiBleGlzdGluZyBjbGFzcy9JRCBpZiBuZWVkZWRcbjguIEFsc28gaW5jbHVkZSBmYWxsYmFjayBmaWVsZHMgKHRleHRDb250ZW50LCB0YWdOYW1lLCBpbmRleCkgdGhhdCBjYW4gaGVscCBsb2NhdGUgdGhlIHRhcmdldCBpZiB0aGUgc2VsZWN0b3IgZmFpbHNcblxuTU9ESUZJQ0FUSU9OIFRZUEVTOlxuLSBcInJlcGxhY2VcIjogUmVwbGFjZSBlbnRpcmUgZWxlbWVudCB3aXRoIG5ldyBIVE1MIHdpdGggcHJvcGVyIGNzcyBpZiB0aGUgY3NzIGlzIG5vdCBleGlzdChmb3IgaW1hZ2UgY3JlYXRlIGNzcyBhbHNvIHNvIGl0cyByZW5kZXIgcHJvcGVybHkgd2l0aCB0aGUgaHRtbCBjb2RlKVxuLSBcInVwZGF0ZVRleHRcIjogQ2hhbmdlIG9ubHkgdGhlIHRleHQgY29udGVudCAocHJlc2VydmVzIHRhZ3MpXG4tIFwiaW5zZXJ0QWZ0ZXJcIjogSW5zZXJ0IG5ldyBjb250ZW50IGFmdGVyIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImluc2VydEJlZm9yZVwiOiBJbnNlcnQgbmV3IGNvbnRlbnQgYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuLSBcImFkZEltYWdlXCI6IEluc2VydCBhbiBpbWFnZSBhZnRlciB0aGUgdGFyZ2V0IGVsZW1lbnRcbi0gXCJhcHBlbmRDaGlsZFwiOiBBZGQgY29udGVudCBhcyBhIGNoaWxkIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuXG5DdXJyZW50IEhUTUwgRG9jdW1lbnQ6XG5cXGBcXGBcXGBodG1sXG4ke2luc3RydWN0aW9uLmN1cnJlbnRIdG1sfVxuXFxgXFxgXFxgXG5cblVzZXIgSW5zdHJ1Y3Rpb246IFwiJHtpbnN0cnVjdGlvbi51c2VySW5zdHJ1Y3Rpb259XCJcbiR7aW5zdHJ1Y3Rpb24uaW1hZ2VVcmwgPyAoL15odHRwcz86XFwvXFwvLy50ZXN0KGluc3RydWN0aW9uLmltYWdlVXJsKSA/IGBcXG5JbWFnZSBVUkwgdG8gaW5zZXJ0OiAke2luc3RydWN0aW9uLmltYWdlVXJsfWAgOiBgXFxuQW4gaW1hZ2UgaGFzIGJlZW4gYXR0YWNoZWQgZm9yIGNvbnRleHQuIERvIG5vdCBpbnNlcnQgdGhlIGltYWdlIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZC5gKSA6ICcnfVxuJHtoaXN0b3J5VGV4dH1cblxuQW5hbHl6ZSB0aGUgSFRNTCBhbmQgcHJvdmlkZSBhIEpTT04gcmVzcG9uc2Ugd2l0aDpcbjEuIHRhcmdldFNlbGVjdG9yOiBUaGUgQ1NTIHNlbGVjdG9yIGZvciB0aGUgZWxlbWVudCB0byBtb2RpZnlcbjIuIG1vZGlmaWNhdGlvblR5cGU6IE9uZSBvZiB0aGUgdHlwZXMgbGlzdGVkIGFib3ZlXG4zLiBuZXdDb250ZW50OiBUaGUgZXhhY3QgSFRNTC90ZXh0IHRvIGluc2VydCAoa2VlcCBpdCBtaW5pbWFsKS4gRm9yIFwiYWRkSW1hZ2VcIiwgYSBicmllZiBkZXNjcmlwdGlvbiBpcyBmaW5lIGJlY2F1c2UgdGhlIGZpbmFsIHJlbmRlcmVyIHdpbGwgdXNlIHRoZSBwcm92aWRlZCBpbWFnZSBVUkwuXG40LiBleHBsYW5hdGlvbjogQnJpZWYgZGVzY3JpcHRpb24gb2YgdGhlIGNoYW5nZVxuXG5FeGFtcGxlIFJlc3BvbnNlOlxue1xuICBcInRhcmdldFNlbGVjdG9yXCI6IFwiaDEubWFpbi10aXRsZVwiLFxuICBcIm1vZGlmaWNhdGlvblR5cGVcIjogXCJ1cGRhdGVUZXh0XCIsXG4gIFwibmV3Q29udGVudFwiOiBcIk5ldyBUaXRsZSBUZXh0XCIsXG4gIFwiZXhwbGFuYXRpb25cIjogXCJDaGFuZ2VkIHRoZSBtYWluIGhlYWRpbmcgdGV4dFwiXG59YDtcblxuICAgIC8vIENhbGwgTExNIHdpdGggcmV0cnkgbG9naWMgKG11bHRpbW9kYWwgaWYgaW1hZ2UgcHJlc2VudClcbiAgICBjb25zdCBjbGllbnQgPSBpbnN0cnVjdGlvbi5hcGlLZXlcbiAgICAgID8gZ2Vua2l0KHsgcGx1Z2luczogW2dvb2dsZUFJKHsgYXBpS2V5OiBpbnN0cnVjdGlvbi5hcGlLZXkgfSldLCBtb2RlbDogJ2dvb2dsZWFpL2dlbWluaS0yLjUtZmxhc2gnIH0pXG4gICAgICA6IGFpO1xuICAgIGNvbnN0IHByb21wdElucHV0OiBhbnkgPSBhd2FpdCBidWlsZFByb21wdFdpdGhPcHRpb25hbEltYWdlKHN5c3RlbVByb21wdCwgaW5zdHJ1Y3Rpb24uaW1hZ2VVcmwpO1xuICAgIGNvbnN0IGxsbVJlc3BvbnNlID0gYXdhaXQgcmV0cnlXaXRoQmFja29mZihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgY2xpZW50LmdlbmVyYXRlKHtcbiAgICAgICAgcHJvbXB0OiBwcm9tcHRJbnB1dCxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgc2NoZW1hOiBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBQYXJzZSBMTE0gcmVzcG9uc2Ugcm9idXN0bHlcbiAgICBsZXQgbW9kaWZpY2F0aW9uOiB6LmluZmVyPHR5cGVvZiBIdG1sTW9kaWZpY2F0aW9uU2NoZW1hPiB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IChsbG1SZXNwb25zZSBhcyBhbnkpPy5vdXRwdXQgPz8gKGxsbVJlc3BvbnNlIGFzIGFueSk/LmRhdGEgPz8gdW5kZWZpbmVkO1xuICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEh0bWxNb2RpZmljYXRpb25TY2hlbWEuc2FmZVBhcnNlKGNhbmRpZGF0ZSk7XG4gICAgICBpZiAocGFyc2VkLnN1Y2Nlc3MpIHtcbiAgICAgICAgbW9kaWZpY2F0aW9uID0gcGFyc2VkLmRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kaWZpY2F0aW9uKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gKGxsbVJlc3BvbnNlIGFzIGFueSk/LnRleHQ7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gSHRtbE1vZGlmaWNhdGlvblNjaGVtYS5zYWZlUGFyc2UoanNvbik7XG4gICAgICAgICAgaWYgKHBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBtb2RpZmljYXRpb24gPSBwYXJzZWQuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGlnbm9yZSBKU09OIHBhcnNlIGVycm9yc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtb2RpZmljYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTExNIGRpZCBub3QgcmV0dXJuIGEgdmFsaWQgbW9kaWZpY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYWRkaW5nIGFuIGltYWdlLCB1c2UgdGhlIHByb3ZpZGVkIFVSTFxuICAgIGxldCBjb250ZW50VG9JbnNlcnQgPSBtb2RpZmljYXRpb24ubmV3Q29udGVudDtcbiAgICBpZiAobW9kaWZpY2F0aW9uLm1vZGlmaWNhdGlvblR5cGUgPT09ICdhZGRJbWFnZScgJiYgaW5zdHJ1Y3Rpb24uaW1hZ2VVcmwpIHtcbiAgICAgIGNvbnRlbnRUb0luc2VydCA9IGluc3RydWN0aW9uLmltYWdlVXJsO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBtb2RpZmljYXRpb24gcGxhbjsgY2xpZW50IHdpbGwgYXBwbHkgRE9NIGNoYW5nZXMgYW5kIHNhbml0aXplXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtb2RpZmljYXRpb246IHtcbiAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IG1vZGlmaWNhdGlvbi50YXJnZXRTZWxlY3RvcixcbiAgICAgICAgbW9kaWZpY2F0aW9uVHlwZTogbW9kaWZpY2F0aW9uLm1vZGlmaWNhdGlvblR5cGUsXG4gICAgICAgIG5ld0NvbnRlbnQ6IGNvbnRlbnRUb0luc2VydCxcbiAgICAgICAgZXhwbGFuYXRpb246IG1vZGlmaWNhdGlvbi5leHBsYW5hdGlvbixcbiAgICAgICAgdGV4dENvbnRlbnQ6IChtb2RpZmljYXRpb24gYXMgYW55KS50ZXh0Q29udGVudCxcbiAgICAgICAgdGFnTmFtZTogKG1vZGlmaWNhdGlvbiBhcyBhbnkpLnRhZ05hbWUsXG4gICAgICAgIGluZGV4OiAobW9kaWZpY2F0aW9uIGFzIGFueSkuaW5kZXgsXG4gICAgICB9LFxuICAgICAgY2hhbmdlRGVzY3JpcHRpb246IG1vZGlmaWNhdGlvbi5leHBsYW5hdGlvbixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0hUTUwgZWRpdGluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnLFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXIgcXVlc3Rpb25zIGFib3V0IEhUTUwgY29udGVudCB3aXRob3V0IG1vZGlmeWluZyBpdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5zd2VyUXVlc3Rpb25BYm91dEh0bWwoXG4gIGh0bWxDb250ZW50OiBzdHJpbmcsXG4gIHF1ZXN0aW9uOiBzdHJpbmcsXG4gIG9wdHM/OiB7IGFwaUtleT86IHN0cmluZzsgY29udmVyc2F0aW9uSGlzdG9yeT86IHsgcm9sZTogJ3VzZXInIHwgJ2Fzc2lzdGFudCc7IGNvbnRlbnQ6IHN0cmluZyB9W107IGltYWdlVXJsPzogc3RyaW5nIH1cbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaGlzdG9yeVRleHQgPSBvcHRzPy5jb252ZXJzYXRpb25IaXN0b3J5ICYmIG9wdHMuY29udmVyc2F0aW9uSGlzdG9yeS5sZW5ndGhcbiAgICAgID8gYFxcbkNvbnZlcnNhdGlvbiBIaXN0b3J5OlxcbiR7b3B0cy5jb252ZXJzYXRpb25IaXN0b3J5Lm1hcChtID0+IGAke20ucm9sZX06ICR7bS5jb250ZW50fWApLmpvaW4oJ1xcbicpfWBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgaW1hZ2VUZXh0ID0gb3B0cz8uaW1hZ2VVcmwgPyBgXFxuQW4gaW1hZ2UgaGFzIGJlZW4gYXR0YWNoZWQuIENvbnNpZGVyIHRoZSBpbWFnZSB0b2dldGhlciB3aXRoIHRoZSBIVE1MIHdoZW4gYW5zd2VyaW5nLiBBdm9pZCBtYWtpbmcgY2xhaW1zIGJleW9uZCB3aGF0IGlzIHN1cHBvcnRlZCBieSB0aGUgSFRNTCBhbmQgdGhlIHZpc2libGUgY29udGVudCBvZiB0aGUgaW1hZ2UuYCA6ICcnO1xuICAgIGNvbnN0IHByb21wdCA9IGBZb3UgYXJlIGEgaGVscGZ1bCBsZWFybmluZyBhc3Npc3RhbnQuIEFuc3dlciB0aGUgdXNlcidzIHF1ZXN0aW9uIHVzaW5nIHRoZSBwcm92aWRlZCBIVE1MIGRvY3VtZW50IGNvbnRlbnQuJHtvcHRzPy5pbWFnZVVybCA/ICcgQWxzbyBjb25zaWRlciB0aGUgYXR0YWNoZWQgaW1hZ2UuJyA6ICcnfSBBdm9pZCB1c2luZyBleHRlcm5hbCBrbm93bGVkZ2UuXG5cbkhUTUwgRG9jdW1lbnQgQ29udGVudDpcblxcYFxcYFxcYGh0bWxcbiR7aHRtbENvbnRlbnR9XG5cXGBcXGBcXGBcblxuVXNlciBRdWVzdGlvbjogXCIke3F1ZXN0aW9ufVwiXG4ke2hpc3RvcnlUZXh0fVxuJHtpbWFnZVRleHR9XG5cblByb3ZpZGUgYSBjbGVhciwgY29uY2lzZSBhbnN3ZXIgYmFzZWQgb24gdGhlIGRvY3VtZW50IGNvbnRlbnQuIElmIHRoZSBhbnN3ZXIgY2Fubm90IGJlIGZvdW5kIGluIHRoZSBkb2N1bWVudCwgc2F5IHNvLmA7XG5cbiAgICBjb25zdCBjbGllbnQgPSBvcHRzPy5hcGlLZXlcbiAgICAgID8gZ2Vua2l0KHsgcGx1Z2luczogW2dvb2dsZUFJKHsgYXBpS2V5OiBvcHRzLmFwaUtleSB9KV0sIG1vZGVsOiAnZ29vZ2xlYWkvZ2VtaW5pLTIuNS1mbGFzaCcgfSlcbiAgICAgIDogYWk7XG4gICAgY29uc3QgcHJvbXB0SW5wdXQ6IGFueSA9IGF3YWl0IGJ1aWxkUHJvbXB0V2l0aE9wdGlvbmFsSW1hZ2UocHJvbXB0LCBvcHRzPy5pbWFnZVVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeVdpdGhCYWNrb2ZmKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBjbGllbnQuZ2VuZXJhdGUoeyBwcm9tcHQ6IHByb21wdElucHV0IH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignUXVlc3Rpb24gYW5zd2VyaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBhbnN3ZXIgcXVlc3Rpb246ICR7ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvcid9YCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHJ5IGhlbHBlciB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmZcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmV0cnlXaXRoQmFja29mZjxUPihmbjogKCkgPT4gUHJvbWlzZTxUPiwgcmV0cmllcyA9IDMpOiBQcm9taXNlPFQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXRyaWVzOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChpID09PSByZXRyaWVzIC0gMSkgdGhyb3cgZXJyb3I7XG4gICAgICBjb25zdCBkZWxheSA9IE1hdGgucG93KDIsIGkpICogMTAwMDtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ01heCByZXRyaWVzIGV4Y2VlZGVkJyk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUh0bWxTZXJ2ZXIoaHRtbDogc3RyaW5nKTogeyB2YWxpZDogYm9vbGVhbjsgZXJyb3JzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAoIWh0bWwgfHwgaHRtbC50cmltKCkubGVuZ3RoID09PSAwKSBlcnJvcnMucHVzaCgnSFRNTCBjb250ZW50IGlzIGVtcHR5Jyk7XG4gIGlmIChodG1sLmxlbmd0aCA+IDUwMDAwMDApIGVycm9ycy5wdXNoKCdIVE1MIGNvbnRlbnQgZXhjZWVkcyBzaXplIGxpbWl0ICg1TUIpJyk7XG4gIGlmICghaHRtbC5pbmNsdWRlcygnPGh0bWwnKSAmJiAhaHRtbC5pbmNsdWRlcygnPGJvZHknKSkgZXJyb3JzLnB1c2goJ0hUTUwgbWlzc2luZyBiYXNpYyBzdHJ1Y3R1cmUnKTtcbiAgcmV0dXJuIHsgdmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDAsIGVycm9ycyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBidWlsZFByb21wdFdpdGhPcHRpb25hbEltYWdlKHRleHRQcm9tcHQ6IHN0cmluZywgaW1hZ2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBpZiAoIWltYWdlVXJsKSByZXR1cm4gdGV4dFByb21wdDtcbiAgY29uc3QgbWVkaWFVcmwgPSBpbWFnZVVybC5zdGFydHNXaXRoKCdkYXRhOicpID8gaW1hZ2VVcmwgOiAoYXdhaXQgdG9EYXRhVXJsRnJvbVVybChpbWFnZVVybCkpIHx8IGltYWdlVXJsO1xuICByZXR1cm4gW1xuICAgIHsgbWVkaWE6IHsgdXJsOiBtZWRpYVVybCB9IH0sXG4gICAgeyB0ZXh0OiB0ZXh0UHJvbXB0IH0sXG4gIF07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRvRGF0YVVybEZyb21VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgMTAwMDApO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLCBoZWFkZXJzOiB7IEFjY2VwdDogJ2ltYWdlLyonIH0gfSk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGlmICghcmVzLm9rKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtaW1lID0gcmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCAnaW1hZ2UvanBlZyc7XG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCByZXMuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBiYXNlNjQgPSBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIHJldHVybiBgZGF0YToke21pbWV9O2Jhc2U2NCwke2Jhc2U2NH1gO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEFpTHNCIn0=
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
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/src/components/dashboard/api-key-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApiKeyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-ssr] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
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
/**
 * Validates the Gemini API key by making a real API call to list models.
 * @param apiKey The Gemini API key to validate
 * @returns Promise that resolves to true if valid, false otherwise
 */ async function validateApiKey(apiKey) {
    if (!apiKey || !apiKey.trim()) return false;
    // Basic format check first
    if (!apiKey.startsWith('AIza') || apiKey.length < 30) {
        return false;
    }
    try {
        // Make a real API call to verify the key works
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models', {
            method: 'GET',
            headers: {
                'x-goog-api-key': apiKey
            }
        });
        return response.ok;
    } catch (error) {
        console.error('API key validation error:', error);
        return false;
    }
}
function ApiKeyModal({ isOpen, onClose, userId, onKeyVerified }) {
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFirestore"])();
    const handleVerify = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const isValid = await validateApiKey(apiKey);
            if (!isValid) {
                setError('Invalid API key. Please verify your Gemini API key and try again.');
                setIsLoading(false);
                return;
            }
            // Save the validated API key to Firestore
            const userSettingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${userId}/settings/gemini`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(userSettingsRef, {
                apiKey,
                updatedAt: new Date().toISOString()
            }, {
                merge: true
            });
            toast({
                title: 'API Key Verified!',
                description: 'Your Gemini API key has been validated and saved securely.'
            });
            onKeyVerified();
        } catch (e) {
            console.error('Error verifying API key:', e);
            if (e.code === 'permission-denied') {
                setError('Permission denied. Please ensure you are logged in.');
                toast({
                    variant: 'destructive',
                    title: 'Permission Error',
                    description: 'You do not have permission to save settings.'
                });
            } else {
                setError('Could not save your API key. Please check your connection and try again.');
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Failed to save API key. Please try again.'
                });
            }
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px] bg-[#0A0A0A] border-white/10 text-white shadow-2xl p-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 pb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                    className: "h-8 w-8 text-indigo-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-semibold text-white",
                                    children: "Connect Gemini AI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-white/60 mt-2",
                                    children: "Enter your Google Gemini API key to unlock AI-powered features. Your key is stored securely."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "apiKey",
                                            placeholder: "AIzaSy...",
                                            value: apiKey,
                                            onChange: (e)=>setApiKey(e.target.value),
                                            type: "password",
                                            disabled: isLoading,
                                            className: "bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-indigo-500/50 pl-10 h-11"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "absolute left-3 top-3 h-5 w-5 text-white/30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-red-400 flex items-center gap-1 animate-in slide-in-from-top-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1 w-1 rounded-full bg-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                            lineNumber: 148,
                                            columnNumber: 114
                                        }, this),
                                        " ",
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-500/10 p-1.5 rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-4 w-4 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-200/80 leading-relaxed",
                                            children: "Don't have a key? You can get one for free from Google AI Studio."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://aistudio.google.com/app/apikey",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline mt-1 inline-block",
                                            children: "Get API Key →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "p-6 pt-2 bg-white/5 border-t border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onClose,
                            disabled: isLoading,
                            className: "text-white/60 hover:text-white hover:bg-white/5",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleVerify,
                            disabled: isLoading || !apiKey,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300", isLoading && "opacity-80"),
                            children: [
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 26
                                }, this) : null,
                                isLoading ? 'Verifying...' : 'Verify & Continue'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/api-key-modal.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-ssr] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$image$2d$uploader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-image-uploader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$9f5b85__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/llm/data:9f5b85 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$6c0ca5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/llm/data:6c0ca5 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$html$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/llm/html-parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$api$2d$key$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/api-key-modal.tsx [app-ssr] (ecmascript)");
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
    const [isApiKeyModalOpen, setIsApiKeyModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [userApiKey, setUserApiKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
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
    const { imageUpload, uploadImage, uploadNow, cancelUpload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$image$2d$uploader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageUploader"])(user?.uid || '', note.id, 'local');
    // Subscribe to user's saved Gemini API key
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!firestore || !user) return;
        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(firestore, `users/${user.uid}/settings/gemini`);
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(ref, (snap)=>{
            const data = snap.data();
            setUserApiKey(data?.apiKey);
        });
        return ()=>unsub();
    }, [
        firestore,
        user
    ]);
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
            // Save user message (only store image if it's an http(s) URL)
            const storedImageUrl = imageUrl && /^https?:\/\//i.test(imageUrl) ? imageUrl : undefined;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatMessage"])(firestore, user.uid, note.id, 'user', question, storedImageUrl);
            // Determine if this is a modification request or a question
            const isModification = isModificationRequest(question);
            let assistantResponse;
            let htmlWasModified = false;
            if (isModification) {
                // Chat memory: include recent context
                const history = messages.slice(-12).map((m)=>({
                        role: m.role,
                        content: m.content
                    }));
                const editResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$9f5b85__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["editHtmlWithLLM"])({
                    currentHtml: currentHtmlRef.current,
                    userInstruction: question,
                    imageUrl,
                    apiKey: userApiKey,
                    conversationHistory: history
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
                const history = messages.slice(-12).map((m)=>({
                        role: m.role,
                        content: m.content
                    }));
                assistantResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$llm$2f$data$3a$6c0ca5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["answerQuestionAboutHtml"])(currentHtmlRef.current, question, {
                    apiKey: userApiKey,
                    conversationHistory: history,
                    imageUrl
                });
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
        if (!instruction.trim() || !imageUpload || imageUpload.status !== 'complete') return;
        const wantsInsert = /\b(add|insert|place|put)\b/i.test(instruction) && /(image|img|picture|photo)/i.test(instruction);
        let imageForModel = undefined;
        if (wantsInsert) {
            // Upload on demand to get a durable URL
            const ensuredUrl = imageUpload.downloadURL || await uploadNow('imgbb');
            if (!ensuredUrl) {
                toast({
                    variant: 'destructive',
                    title: 'Upload failed',
                    description: 'Could not upload image to insert. Please try again.'
                });
                return;
            }
            imageForModel = ensuredUrl;
        } else {
            // Context-only: prefer local data URL (no external upload)
            imageForModel = imageUpload.dataURL || imageUpload.downloadURL;
        }
        const fullQuestion = instruction;
        // Clear card before sending
        cancelUpload();
        await callAssistant(fullQuestion, imageForModel);
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
            className: "w-full sm:max-w-md flex flex-col p-0 border-l border-white/10 bg-[#0A0A0A]/90 backdrop-blur-3xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "p-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-5 w-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                className: "text-white font-display",
                                                children: "AI Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                                className: "text-white/50 text-xs truncate max-w-[180px]",
                                                children: note.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: userApiKey ? 'ghost' : 'outline',
                                size: "sm",
                                onClick: ()=>setIsApiKeyModalOpen(true),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('gap-2 text-xs h-8 transition-all duration-300', userApiKey ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20' : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'),
                                disabled: isChatDisabled,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this),
                                    userApiKey ? 'Key Active' : 'Add Key',
                                    userApiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 362,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "flex-1 bg-transparent",
                    ref: scrollAreaRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 p-6",
                        children: [
                            isHistoryLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-6 w-6 animate-spin text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 372,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            messages.map((message, index)=>{
                                const isWelcome = message.role === 'assistant' && (message.id?.startsWith('welcome') || message.content?.startsWith("Hello! I'm your AI assistant"));
                                if (isWelcome) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        className: "h-9 w-9 border border-white/10 shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                            className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 112
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl rounded-tl-none p-5 bg-white/5 border border-white/10 shadow-xl backdrop-blur-md max-w-[90%]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-white/90 leading-relaxed whitespace-pre-wrap mb-4",
                                                                children: message.content.split('\n\n')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>prefill('What are the key points in this note?'),
                                                                        className: "group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform",
                                                                                children: "🧠"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-white/80 group-hover:text-white",
                                                                                children: "Explain key points"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 392,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>prefill('Modify the section about ... to be clearer.'),
                                                                        className: "group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform",
                                                                                children: "✏️"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-white/80 group-hover:text-white",
                                                                                children: "Modify content"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 396,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>prefill('Add an image illustrating ... and link it appropriately.'),
                                                                        className: "group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform",
                                                                                children: "🖼️"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 399,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-white/80 group-hover:text-white",
                                                                                children: "Add images"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 400,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>prefill('Reorganize sections to improve flow: ...'),
                                                                        className: "group flex items-center gap-3 w-full text-left rounded-xl p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform",
                                                                                children: "🔀"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 403,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-white/80 group-hover:text-white",
                                                                                children: "Reorganize"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                                lineNumber: 404,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 382,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-center text-white/20 mt-2",
                                                children: "AI can make mistakes. Please review generated content."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 409,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, message.id, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 381,
                                        columnNumber: 19
                                    }, this);
                                }
                                const isUser = message.role === 'user';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-end gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300', isUser ? 'justify-end' : 'justify-start'),
                                    children: [
                                        !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8 border border-white/10 shadow-sm mb-1 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 110
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 426,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 425,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative max-w-[80%] rounded-2xl p-4 shadow-md overflow-hidden', isUser ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-sm' : 'bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed whitespace-pre-wrap break-words",
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[10px] mt-2 opacity-50 text-right", isUser ? "text-blue-100" : "text-white/50"),
                                                    children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(message.timestamp.toDate(), 'p') : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8 border border-white/10 shadow-sm mb-1 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: user?.photoURL || ''
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    className: "bg-slate-700 text-white",
                                                    children: getInitials(user?.displayName)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 446,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 417,
                                    columnNumber: 17
                                }, this);
                            }),
                            (isLoading || isChatDisabled) && messages.length > 0 && messages[messages.length - 1].role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-8 w-8 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 458,
                                                columnNumber: 106
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl rounded-tl-none p-4 bg-white/5 border border-white/10 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin text-purple-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 461,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-white/50",
                                                children: "Thinking..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-[#0A0A0A]/90 border-t border-white/10 backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                if (imageUpload && imageUpload.status === 'complete') {
                                    handleImageInstructionSubmit(input);
                                    setInput('');
                                } else {
                                    handleSubmit(e);
                                }
                            },
                            className: "relative flex flex-col gap-2 bg-white/5 p-2 rounded-3xl border border-white/10 focus-within:border-purple-500/50 focus-within:bg-white/10 transition-all duration-300 ring-offset-2 ring-offset-[#0A0A0A]",
                            children: [
                                imageUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-2 pt-2 pb-1 animate-in slide-in-from-bottom-2 fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-12 w-12 rounded-lg overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center",
                                                    children: imageUpload.status === 'compressing' || imageUpload.status === 'uploading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-5 w-5 animate-spin text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 23
                                                    }, this) : imageUpload.status === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-5 w-5 text-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 23
                                                    }, this) : // eslint-disable-next-line @next/next/no-img-element
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imageUpload.dataURL || imageUpload.downloadURL,
                                                        alt: "Preview",
                                                        className: "h-full w-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: cancelUpload,
                                                    className: "absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-white/10 hover:bg-red-500/80 text-white/60 hover:text-white flex items-center justify-center backdrop-blur-sm transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-2.5 w-2.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/80 truncate",
                                                    children: imageUpload.file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-white/40",
                                                    children: imageUpload.status === 'complete' ? 'Ready to send' : imageUpload.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            ref: fileInputRef,
                                            onChange: handleFileChange,
                                            className: "hidden",
                                            accept: "image/*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            disabled: isLoading || isChatDisabled,
                                            className: "h-10 w-10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors mb-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Attach image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onPaste: (e)=>{
                                                const items = e.clipboardData.items;
                                                for(let i = 0; i < items.length; i++){
                                                    if (items[i].type.indexOf('image') !== -1) {
                                                        const file = items[i].getAsFile();
                                                        if (file) uploadImage(file);
                                                    }
                                                }
                                            },
                                            placeholder: imageUpload ? "Add a caption..." : "Ask a question or paste an image...",
                                            disabled: isLoading || isChatDisabled,
                                            className: "flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/30 min-h-[44px] py-3 px-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isLoading || !input.trim() && !imageUpload || isChatDisabled || !!(imageUpload && imageUpload.status !== 'complete'),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10 rounded-full transition-all duration-300 shadow-lg mb-0.5", input.trim() || imageUpload ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 hover:scale-105" : "bg-white/10 text-white/30"),
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 556,
                                                columnNumber: 30
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-4 w-4 ml-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 556,
                                                columnNumber: 77
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        messages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            disabled: isChatDisabled,
                                            className: "text-[10px] text-white/30 hover:text-red-400 hover:bg-red-500/10 h-6 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "mr-1.5 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this),
                                                "Clear Chat"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                        className: "bg-[#111] border-white/10 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                        children: "Clear conversation?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                        className: "text-white/60",
                                                        children: "This will permanently delete the chat history for this note. This action cannot be undone."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 571,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                        className: "bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                        onClick: handleClearHistory,
                                                        className: "bg-red-600 hover:bg-red-700 text-white border-0",
                                                        children: "Clear History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                                lineNumber: 577,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                        lineNumber: 570,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$api$2d$key$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isApiKeyModalOpen,
                    onClose: ()=>setIsApiKeyModalOpen(false),
                    userId: user?.uid || '',
                    onKeyVerified: ()=>setIsApiKeyModalOpen(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
            lineNumber: 332,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/assistant-sidebar-new.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
}),
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
        week: '5 & 6',
        lesson: '1 & 1',
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
        lesson: '2 & 3',
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
        week: '9 & 10',
        lesson: '2 & 1',
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
        week: '10 & 11',
        lesson: '2 & 1 & 2',
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
        title: 'Week 1 - Lecture 1: Introduction to Statistics',
        description: 'Basic concepts, data types, and measurement scales.',
        week: 1,
        lesson: 1,
        tags: [
            'Statistics',
            'Intro'
        ],
        dateAdded: '2025-01-01',
        readTime: '12 min',
        htmlFile: '/notes/fsp/FSPW1L1.html'
    },
    {
        id: 'FSPW2',
        title: 'Week 2: Descriptive Statistics',
        description: 'Measures of central tendency and dispersion.',
        week: 2,
        lesson: 0,
        tags: [
            'Descriptive Stats',
            'Mean/Median/Mode'
        ],
        dateAdded: '2025-01-02',
        readTime: '15 min',
        htmlFile: '/notes/fsp/FSPW2.html'
    },
    {
        id: 'FSPW3',
        title: 'Week 3: Probability Basics',
        description: 'Sample spaces, events, and probability axioms.',
        week: 3,
        lesson: 0,
        tags: [
            'Probability',
            'Axioms'
        ],
        dateAdded: '2025-01-03',
        readTime: '18 min',
        htmlFile: '/notes/fsp/FSPW3.html'
    },
    {
        id: 'FSPW4',
        title: 'Week 4: Conditional Probability',
        description: 'Independence, Bayes theorem, and conditional probability.',
        week: 4,
        lesson: 0,
        tags: [
            'Probability',
            'Bayes'
        ],
        dateAdded: '2025-01-04',
        readTime: '20 min',
        htmlFile: '/notes/fsp/FSPW4.html'
    },
    {
        id: 'FSPW5',
        title: 'Week 5: Random Variables',
        description: 'Discrete and continuous random variables.',
        week: 5,
        lesson: 0,
        tags: [
            'Random Variables',
            'Distributions'
        ],
        dateAdded: '2025-01-05',
        readTime: '25 min',
        htmlFile: '/notes/fsp/FSPW5.html'
    },
    {
        id: 'FSPW6L1&W6L2',
        title: 'Week 6 L1 & L2: Discrete Distributions',
        description: 'Bernoulli, Binomial, and Poisson distributions.',
        week: 6,
        lesson: '1 & 2',
        tags: [
            'Distributions',
            'Discrete'
        ],
        dateAdded: '2025-01-06',
        readTime: '22 min',
        htmlFile: '/notes/fsp/FSPW6L1&W6L2.html'
    },
    {
        id: 'FSPW6L3',
        title: 'Week 6 L3: More Discrete Distributions',
        description: 'Geometric and Hypergeometric distributions.',
        week: 6,
        lesson: 3,
        tags: [
            'Distributions',
            'Discrete'
        ],
        dateAdded: '2025-01-06',
        readTime: '15 min',
        htmlFile: '/notes/fsp/FSPW6L3.html'
    },
    {
        id: 'FSPW7L1',
        title: 'Week 7 L1: Continuous Distributions',
        description: 'Uniform and Exponential distributions.',
        week: 7,
        lesson: 1,
        tags: [
            'Distributions',
            'Continuous'
        ],
        dateAdded: '2025-01-07',
        readTime: '18 min',
        htmlFile: '/notes/fsp/FSPW7L1.html'
    },
    {
        id: 'FSPW7L2',
        title: 'Week 7 L2: The Normal Distribution',
        description: 'Properties and applications of the Normal distribution.',
        week: 7,
        lesson: 2,
        tags: [
            'Normal Distribution'
        ],
        dateAdded: '2025-01-07',
        readTime: '12 min',
        htmlFile: '/notes/fsp/FSPW7L2.html'
    },
    {
        id: 'FSPW8L1&W8L2&W8L3',
        title: 'Week 8 L1-L3: Joint Distributions',
        description: 'Joint probability mass and density functions.',
        week: 8,
        lesson: '1, 2 & 3',
        tags: [
            'Joint Distributions'
        ],
        dateAdded: '2025-01-08',
        readTime: '28 min',
        htmlFile: '/notes/fsp/FSPW8L1&W8L2&W8L3.html'
    },
    {
        id: 'FSPW8L4',
        title: 'Week 8 L4: Covariance and Correlation',
        description: 'Measuring relationships between variables.',
        week: 8,
        lesson: 4,
        tags: [
            'Covariance',
            'Correlation'
        ],
        dateAdded: '2025-01-08',
        readTime: '16 min',
        htmlFile: '/notes/fsp/FSPW8L4.html'
    },
    {
        id: 'FSPW9L1W9L2&W9L3',
        title: 'Week 9 L1-L3: Sampling Distributions',
        description: 'CLT and sampling distributions of the mean.',
        week: 9,
        lesson: '1, 2 & 3',
        tags: [
            'Sampling',
            'CLT'
        ],
        dateAdded: '2025-01-09',
        readTime: '30 min',
        htmlFile: '/notes/fsp/FSPW9L1W9L2&W9L3.html'
    },
    {
        id: 'FSPW10L1&L2',
        title: 'Week 10 L1 & L2: Estimation',
        description: 'Point estimation and confidence intervals.',
        week: 10,
        lesson: '1 & 2',
        tags: [
            'Estimation',
            'Inference'
        ],
        dateAdded: '2025-01-10',
        readTime: '24 min',
        htmlFile: '/notes/fsp/FSPW10L1&L2.html'
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
        title: 'Week 1 - Lecture 1: Introduction to Optimization',
        description: 'Basic concepts, formulation, and examples.',
        week: 1,
        lesson: 1,
        tags: [
            'Optimization',
            'Intro'
        ],
        dateAdded: '2025-01-01',
        readTime: '18 min',
        htmlFile: '/notes/no/NOW1L1.html'
    },
    {
        id: 'NOW1L2',
        title: 'Week 1 - Lecture 2: Convex Sets and Functions',
        description: 'Properties of convex sets and convex functions.',
        week: 1,
        lesson: 2,
        tags: [
            'Convexity',
            'Sets'
        ],
        dateAdded: '2025-01-01',
        readTime: '20 min',
        htmlFile: '/notes/no/NOW1L2.html'
    },
    {
        id: 'NOW2',
        title: 'Week 2: Unconstrained Optimization',
        description: 'Optimality conditions and gradient descent.',
        week: 2,
        lesson: 0,
        tags: [
            'Unconstrained',
            'Gradient Descent'
        ],
        dateAdded: '2025-01-02',
        readTime: '22 min',
        htmlFile: '/notes/no/NOW2.html'
    },
    {
        id: 'NOW3',
        title: 'Week 3: Line Search Methods',
        description: 'Step size selection and convergence analysis.',
        week: 3,
        lesson: 0,
        tags: [
            'Line Search',
            'Convergence'
        ],
        dateAdded: '2025-01-03',
        readTime: '20 min',
        htmlFile: '/notes/no/NOW3.html'
    },
    {
        id: 'NOW4',
        title: 'Week 4: Newton and Quasi-Newton Methods',
        description: 'Newton\'s method, BFGS, and DFP updates.',
        week: 4,
        lesson: 0,
        tags: [
            'Newton',
            'Quasi-Newton'
        ],
        dateAdded: '2025-01-04',
        readTime: '25 min',
        htmlFile: '/notes/no/NOW4.html'
    },
    {
        id: 'NOW5L1&W5L2',
        title: 'Week 5 L1 & L2: Conjugate Gradient Methods',
        description: 'Linear and nonlinear conjugate gradient methods.',
        week: 5,
        lesson: '1 & 2',
        tags: [
            'Conjugate Gradient'
        ],
        dateAdded: '2025-01-05',
        readTime: '24 min',
        htmlFile: '/notes/no/NOW5L1&W5L2.html'
    },
    {
        id: 'NOW5L3&W5L4',
        title: 'Week 5 L3 & L4: Least Squares Problems',
        description: 'Linear and nonlinear least squares.',
        week: 5,
        lesson: '3 & 4',
        tags: [
            'Least Squares'
        ],
        dateAdded: '2025-01-05',
        readTime: '22 min',
        htmlFile: '/notes/no/NOW5L3&W5L4.html'
    },
    {
        id: 'NOW6',
        title: 'Week 6: Constrained Optimization Basics',
        description: 'Lagrange multipliers and KKT conditions.',
        week: 6,
        lesson: 0,
        tags: [
            'Constrained',
            'KKT'
        ],
        dateAdded: '2025-01-06',
        readTime: '28 min',
        htmlFile: '/notes/no/NOW6.html'
    },
    {
        id: 'NOW7',
        title: 'Week 7: Linear Programming',
        description: 'Simplex method and duality.',
        week: 7,
        lesson: 0,
        tags: [
            'Linear Programming',
            'Simplex'
        ],
        dateAdded: '2025-01-07',
        readTime: '30 min',
        htmlFile: '/notes/no/NOW7.html'
    },
    {
        id: 'NOW8L2&W9',
        title: 'Week 8 L2 & Week 9: Quadratic Programming',
        description: 'Active set methods and interior point methods.',
        week: '8 & 9',
        lesson: '2 & 0',
        tags: [
            'Quadratic Programming'
        ],
        dateAdded: '2025-01-08',
        readTime: '35 min',
        htmlFile: '/notes/no/NOW8L2&W9.html'
    },
    {
        id: 'NOW10',
        title: 'Week 10: Penalty and Barrier Methods',
        description: 'Exterior penalty and interior barrier functions.',
        week: 10,
        lesson: 0,
        tags: [
            'Penalty Methods',
            'Barrier Methods'
        ],
        dateAdded: '2025-01-09',
        readTime: '26 min',
        htmlFile: '/notes/no/NOW10.html'
    },
    {
        id: 'NOW11',
        title: 'Week 11: Advanced Topics',
        description: 'Stochastic gradient descent and other modern techniques.',
        week: 11,
        lesson: 0,
        tags: [
            'SGD',
            'Advanced'
        ],
        dateAdded: '2025-01-10',
        readTime: '24 min',
        htmlFile: '/notes/no/NOW11.html'
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
        title: 'Week 1: Introduction to Pattern Recognition',
        description: 'Basic concepts, feature vectors, and classifiers.',
        week: 1,
        lesson: 0,
        tags: [
            'PRP',
            'Intro'
        ],
        dateAdded: '2025-01-01',
        readTime: '16 min',
        htmlFile: '/notes/prp/PRPW1.html'
    },
    {
        id: 'PRPW2',
        title: 'Week 2: Bayesian Decision Theory',
        description: 'Bayes rule, minimum error rate classification.',
        week: 2,
        lesson: 0,
        tags: [
            'Bayes',
            'Decision Theory'
        ],
        dateAdded: '2025-01-02',
        readTime: '20 min',
        htmlFile: '/notes/prp/PRPW2.html'
    },
    {
        id: 'PRPW3',
        title: 'Week 3: Maximum Likelihood Estimation',
        description: 'Parameter estimation and Gaussian classifiers.',
        week: 3,
        lesson: 0,
        tags: [
            'MLE',
            'Estimation'
        ],
        dateAdded: '2025-01-03',
        readTime: '22 min',
        htmlFile: '/notes/prp/PRPW3.html'
    },
    {
        id: 'PRPW3(1)',
        title: 'Week 3 (Part 2): Advanced Estimation',
        description: 'Bayesian estimation and sufficient statistics.',
        week: 3,
        lesson: '0 (Part 2)',
        tags: [
            'Estimation',
            'Bayesian'
        ],
        dateAdded: '2025-01-03',
        readTime: '18 min',
        htmlFile: '/notes/prp/PRPW3(1).html'
    },
    {
        id: 'PRPW4',
        title: 'Week 4: Non-parametric Techniques',
        description: 'Parzen windows and k-nearest neighbor estimation.',
        week: 4,
        lesson: 0,
        tags: [
            'Non-parametric',
            'k-NN'
        ],
        dateAdded: '2025-01-04',
        readTime: '24 min',
        htmlFile: '/notes/prp/PRPW4.html'
    },
    {
        id: 'PRPW5L1',
        title: 'Week 5 L1: Linear Discriminant Functions',
        description: 'Linear decision boundaries and geometry.',
        week: 5,
        lesson: 1,
        tags: [
            'Linear',
            'Discriminant'
        ],
        dateAdded: '2025-01-05',
        readTime: '18 min',
        htmlFile: '/notes/prp/PRPW5L1.html'
    },
    {
        id: 'PRPW5L2&W5L3',
        title: 'Week 5 L2 & L3: Perceptron and Gradient Descent',
        description: 'Perceptron algorithm and relaxation procedures.',
        week: 5,
        lesson: '2 & 3',
        tags: [
            'Perceptron',
            'Learning'
        ],
        dateAdded: '2025-01-05',
        readTime: '25 min',
        htmlFile: '/notes/prp/PRPW5L2&W5L3.html'
    },
    {
        id: 'PRPW6',
        title: 'Week 6: Support Vector Machines',
        description: 'Optimal separating hyperplane and kernels.',
        week: 6,
        lesson: 0,
        tags: [
            'SVM',
            'Kernels'
        ],
        dateAdded: '2025-01-06',
        readTime: '28 min',
        htmlFile: '/notes/prp/PRPW6.html'
    },
    {
        id: 'PRPW7',
        title: 'Week 7: Neural Networks',
        description: 'Multilayer perceptrons and backpropagation.',
        week: 7,
        lesson: 0,
        tags: [
            'Neural Networks',
            'Deep Learning'
        ],
        dateAdded: '2025-01-07',
        readTime: '30 min',
        htmlFile: '/notes/prp/PRPW7.html'
    },
    {
        id: 'PRPW8',
        title: 'Week 8: Unsupervised Learning',
        description: 'Clustering algorithms: k-means and hierarchical.',
        week: 8,
        lesson: 0,
        tags: [
            'Clustering',
            'Unsupervised'
        ],
        dateAdded: '2025-01-08',
        readTime: '26 min',
        htmlFile: '/notes/prp/PRPW8.html'
    },
    {
        id: 'PRPW9',
        title: 'Week 9: Dimensionality Reduction',
        description: 'PCA, LDA, and feature selection.',
        week: 9,
        lesson: 0,
        tags: [
            'PCA',
            'LDA'
        ],
        dateAdded: '2025-01-09',
        readTime: '28 min',
        htmlFile: '/notes/prp/PRPW9.html'
    },
    {
        id: 'PRPW10',
        title: 'Week 10: Ensemble Methods',
        description: 'Bagging, boosting, and random forests.',
        week: 10,
        lesson: 0,
        tags: [
            'Ensemble',
            'Boosting'
        ],
        dateAdded: '2025-01-10',
        readTime: '24 min',
        htmlFile: '/notes/prp/PRPW10.html'
    },
    {
        id: 'PRPW11',
        title: 'Week 11: Applications and Ethics',
        description: 'Real-world applications and ethical considerations.',
        week: 11,
        lesson: 0,
        tags: [
            'Applications',
            'Ethics'
        ],
        dateAdded: '2025-01-11',
        readTime: '20 min',
        htmlFile: '/notes/prp/PRPW11.html'
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
        title: 'Week 1: Introduction to AI',
        description: 'Overview of Artificial Intelligence concepts and history.',
        week: 1,
        lesson: 0,
        tags: [
            'FAI',
            'Intro'
        ],
        dateAdded: '2025-01-01',
        readTime: '15 min',
        htmlFile: '/notes/fai/FAIW1.html'
    },
    {
        id: 'FAIW2',
        title: 'Week 2: Problem Solving and Search',
        description: 'Uninformed and informed search strategies.',
        week: 2,
        lesson: 0,
        tags: [
            'Search',
            'Problem Solving'
        ],
        dateAdded: '2025-01-02',
        readTime: '18 min',
        htmlFile: '/notes/fai/FAIW2.html'
    },
    {
        id: 'FAIW3',
        title: 'Week 3: Adversarial Search',
        description: 'Game playing, Minimax, and Alpha-Beta pruning.',
        week: 3,
        lesson: 0,
        tags: [
            'Games',
            'Search'
        ],
        dateAdded: '2025-01-03',
        readTime: '20 min',
        htmlFile: '/notes/fai/FAIW3.html'
    },
    {
        id: 'FAIW4L1&W4L2',
        title: 'Week 4 L1 & L2: Constraint Satisfaction',
        description: 'CSP formulation and backtracking search.',
        week: 4,
        lesson: '1 & 2',
        tags: [
            'CSP',
            'Search'
        ],
        dateAdded: '2025-01-04',
        readTime: '22 min',
        htmlFile: '/notes/fai/FAIW4L1&W4L2.html'
    },
    {
        id: 'FAIW4L3',
        title: 'Week 4 L3: Local Search',
        description: 'Hill climbing, simulated annealing, and genetic algorithms.',
        week: 4,
        lesson: 3,
        tags: [
            'Local Search',
            'Optimization'
        ],
        dateAdded: '2025-01-04',
        readTime: '15 min',
        htmlFile: '/notes/fai/FAIW4L3.html'
    },
    {
        id: 'FAIW5L1',
        title: 'Week 5 L1: Knowledge Representation',
        description: 'Propositional logic and inference.',
        week: 5,
        lesson: 1,
        tags: [
            'Logic',
            'Knowledge'
        ],
        dateAdded: '2025-01-05',
        readTime: '16 min',
        htmlFile: '/notes/fai/FAIW5L1.html'
    },
    {
        id: 'FAIW5L2',
        title: 'Week 5 L2: First-Order Logic',
        description: 'Syntax, semantics, and inference in FOL.',
        week: 5,
        lesson: 2,
        tags: [
            'Logic',
            'FOL'
        ],
        dateAdded: '2025-01-05',
        readTime: '18 min',
        htmlFile: '/notes/fai/FAIW5L2.html'
    },
    {
        id: 'FAIW6',
        title: 'Week 6: Uncertainty and Probability',
        description: 'Probabilistic reasoning and Bayesian networks.',
        week: 6,
        lesson: 0,
        tags: [
            'Probability',
            'Uncertainty'
        ],
        dateAdded: '2025-01-06',
        readTime: '25 min',
        htmlFile: '/notes/fai/FAIW6.html'
    },
    {
        id: 'FAIW7',
        title: 'Week 7: Machine Learning Basics',
        description: 'Supervised learning, regression, and classification.',
        week: 7,
        lesson: 0,
        tags: [
            'ML',
            'Basics'
        ],
        dateAdded: '2025-01-07',
        readTime: '24 min',
        htmlFile: '/notes/fai/FAIW7.html'
    },
    {
        id: 'FAIW8',
        title: 'Week 8: Neural Networks',
        description: 'Perceptrons, multi-layer networks, and backpropagation.',
        week: 8,
        lesson: 0,
        tags: [
            'Neural Networks',
            'Deep Learning'
        ],
        dateAdded: '2025-01-08',
        readTime: '28 min',
        htmlFile: '/notes/fai/FAIW8.html'
    },
    {
        id: 'FAIW9&W10',
        title: 'Week 9 & 10: Advanced Learning & Ethics',
        description: 'Clustering, reinforcement learning, and AI ethics.',
        week: '9 & 10',
        lesson: 0,
        tags: [
            'RL',
            'Ethics'
        ],
        dateAdded: '2025-01-09',
        readTime: '30 min',
        htmlFile: '/notes/fai/FAIW9&W10.html'
    },
    {
        id: 'FAIW11',
        title: 'Week 11: Future of AI',
        description: 'Trends, challenges, and future directions.',
        week: 11,
        lesson: 0,
        tags: [
            'Future',
            'Trends'
        ],
        dateAdded: '2025-01-10',
        readTime: '20 min',
        htmlFile: '/notes/fai/FAIW11.html'
    }
];
}),
"[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
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
function NotePreviewLayout({ courseName, courseTitle, note, coursePath }) {
    const { user, isUserLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const firstName = user?.displayName?.split(' ')[0] || 'Student';
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
            updateHtml(newHtml);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$html$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteModifiedHtml"])(user.uid, weekId, lectureId);
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
                className: "flex h-screen w-full bg-slate-950 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-300 animate-pulse",
                            children: "Loading your note..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                    lineNumber: 180,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, this);
    }
    const handlePrint = ()=>{
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen w-full relative bg-slate-950 text-white overflow-hidden selection:bg-purple-500/30 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-blob mix-blend-screen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-slate-950/90 backdrop-blur-md border-b border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "ghost",
                                            size: "sm",
                                            className: "text-gray-400 hover:text-white hover:bg-white/10 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: coursePath,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Back"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-px bg-white/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-sm font-semibold text-white leading-none",
                                                    children: note.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: [
                                                        note.week != 0 && `Week ${note.week}`,
                                                        note.week != 0 && note.lesson != 0 && " • ",
                                                        note.lesson != 0 && `Lecture ${note.lesson}`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        isModified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-0.5",
                                            children: "Edited"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "text-xs rounded-full bg-white/5 text-gray-400 border border-white/10 px-3 py-0.5",
                                            children: "Original"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[1px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full w-full rounded-full bg-slate-900 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-white",
                                                    children: firstName[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 relative z-10 flex flex-col items-center justify-center p-0 sm:p-2 pt-20 pb-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: previewContainerRef,
                                className: `w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-50 h-screen rounded-none' : 'h-[calc(100vh-6rem)] max-w-[98%] sm:rounded-2xl border border-white/10 ring-1 ring-white/20'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    id: "note-iframe",
                                    srcDoc: buildExportHtml(currentHtmlContent || ''),
                                    className: "w-full h-full border-0",
                                    sandbox: "allow-scripts allow-same-origin",
                                    title: "Note Preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 pr-2 border-r border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: prevNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            asChild: true,
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/${courseId}/${encodeURIComponent(prevNote.id)}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            disabled: true,
                                                            className: "h-10 w-10 rounded-xl text-gray-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: "Previous Lecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: nextNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            asChild: true,
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/${courseId}/${encodeURIComponent(nextNote.id)}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            disabled: true,
                                                            className: "h-10 w-10 rounded-xl text-gray-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: "Next Lecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: handleAssistantClick,
                                                            className: "h-10 w-10 rounded-xl text-purple-400 hover:text-purple-300 hover:bg-purple-500/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-5 w-5 fill-current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: "AI Assistant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            isModified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-10 w-10 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                                                        className: "bg-slate-900 border border-white/10 text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                                                        children: "Reset Changes?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                                                        className: "text-gray-400",
                                                                        children: "This will revert the note to its original state. Custom edits will be lost."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                        lineNumber: 335,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                                                        className: "bg-white/5 border-white/10 text-white hover:bg-white/10",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                        lineNumber: 340,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                                                        onClick: handleResetToOriginal,
                                                                        className: "bg-red-600 hover:bg-red-700",
                                                                        children: "Reset"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: handleToggleFullscreen,
                                                            className: "h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10",
                                                            children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 75
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 pl-2 border-l border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: handlePrint,
                                                            className: "h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: "Print"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: handleDownload,
                                                            className: "h-10 w-10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: "Download HTML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
                    lineNumber: 207,
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
                    lineNumber: 383,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
            lineNumber: 206,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/note-preview-layout.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/dashboard/ata/[noteId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AtaNotePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$note$2d$preview$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/note-preview-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$ataData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/notes/ataData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AtaNotePage({ params }) {
    const { noteId } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"](params);
    const decodedId = decodeURIComponent(noteId);
    const note = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$notes$2f$ataData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ataNotesData"].find((n)=>n.id === decodedId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$note$2d$preview$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        courseName: "ATA",
        courseTitle: "Advanced Topics in Algorithms",
        note: note,
        coursePath: "/dashboard/ata"
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/ata/[noteId]/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5867ccff._.js.map