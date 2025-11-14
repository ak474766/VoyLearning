(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(param) {
    let { ...props } = param;
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function(param) {
                let { id, title, description, action, ...props } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseConfig",
    ()=>firebaseConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBWC6NljjgRFL6SJNr2fIAkABRNTZgxKb4"),
    authDomain: ("TURBOPACK compile-time value", "studio-592524934-61bd5.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "studio-592524934-61bd5"),
    storageBucket: ("TURBOPACK compile-time value", "studio-592524934-61bd5.appspot.com"),
    messagingSenderId: ("TURBOPACK compile-time value", "560554873277"),
    appId: ("TURBOPACK compile-time value", "1:560554873277:web:fb810e8dfdf6dacb5502d4"),
    measurementId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ""
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorEmitter",
    ()=>errorEmitter
]);
'use client';
/**
 * A strongly-typed pub/sub event emitter.
 * It uses a generic type T that extends a record of event names to payload types.
 */ function createEventEmitter() {
    // The events object stores arrays of callbacks, keyed by event name.
    // The types ensure that a callback for a specific event matches its payload type.
    const events = {};
    return {
        /**
     * Subscribe to an event.
     * @param eventName The name of the event to subscribe to.
     * @param callback The function to call when the event is emitted.
     */ on (eventName, callback) {
            var _events_eventName;
            if (!events[eventName]) {
                events[eventName] = [];
            }
            (_events_eventName = events[eventName]) === null || _events_eventName === void 0 ? void 0 : _events_eventName.push(callback);
        },
        /**
     * Unsubscribe from an event.
     * @param eventName The name of the event to unsubscribe from.
     * @param callback The specific callback to remove.
     */ off (eventName, callback) {
            var _events_eventName;
            if (!events[eventName]) {
                return;
            }
            events[eventName] = (_events_eventName = events[eventName]) === null || _events_eventName === void 0 ? void 0 : _events_eventName.filter((cb)=>cb !== callback);
        },
        /**
     * Publish an event to all subscribers.
     * @param eventName The name of the event to emit.
     * @param data The data payload that corresponds to the event's type.
     */ emit (eventName, data) {
            var _events_eventName;
            if (!events[eventName]) {
                return;
            }
            (_events_eventName = events[eventName]) === null || _events_eventName === void 0 ? void 0 : _events_eventName.forEach((callback)=>callback(data));
        }
    };
}
const errorEmitter = createEventEmitter();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FirebaseErrorListener.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseErrorListener",
    ()=>FirebaseErrorListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FirebaseErrorListener() {
    _s();
    // Use the specific error type for the state for type safety.
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirebaseErrorListener.useEffect": ()=>{
            // The callback now expects a strongly-typed error, matching the event payload.
            const handleError = {
                "FirebaseErrorListener.useEffect.handleError": (error)=>{
                    // Set error in state to trigger a re-render.
                    setError(error);
                }
            }["FirebaseErrorListener.useEffect.handleError"];
            // The typed emitter will enforce that the callback for 'permission-error'
            // matches the expected payload type (FirestorePermissionError).
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"].on('permission-error', handleError);
            // Unsubscribe on unmount to prevent memory leaks.
            return ({
                "FirebaseErrorListener.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"].off('permission-error', handleError);
                }
            })["FirebaseErrorListener.useEffect"];
        }
    }["FirebaseErrorListener.useEffect"], []);
    // On re-render, if an error exists in state, throw it.
    if (error) {
        throw error;
    }
    // This component renders nothing.
    return null;
}
_s(FirebaseErrorListener, "JfhGochNIqPkY17zyDsXnSE7zLQ=");
_c = FirebaseErrorListener;
var _c;
__turbopack_context__.k.register(_c, "FirebaseErrorListener");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseContext",
    ()=>FirebaseContext,
    "FirebaseProvider",
    ()=>FirebaseProvider,
    "useAuth",
    ()=>useAuth,
    "useFirebase",
    ()=>useFirebase,
    "useFirebaseApp",
    ()=>useFirebaseApp,
    "useFirestore",
    ()=>useFirestore,
    "useMemoFirebase",
    ()=>useMemoFirebase,
    "useStorage",
    ()=>useStorage,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FirebaseErrorListener$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FirebaseErrorListener.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
'use client';
;
;
;
const FirebaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FirebaseProvider = (param)=>{
    let { children, firebaseApp, firestore, auth, storage } = param;
    _s();
    const [userAuthState, setUserAuthState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user: null,
        isUserLoading: true,
        userError: null
    });
    // Effect to subscribe to Firebase auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirebaseProvider.useEffect": ()=>{
            if (!auth) {
                setUserAuthState({
                    user: null,
                    isUserLoading: false,
                    userError: new Error("Auth service not provided.")
                });
                return;
            }
            // Don't reset to loading if we already have a user (prevents flashing)
            setUserAuthState({
                "FirebaseProvider.useEffect": (prev)=>({
                        ...prev,
                        isUserLoading: true,
                        userError: null
                    })
            }["FirebaseProvider.useEffect"]);
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, {
                "FirebaseProvider.useEffect.unsubscribe": (firebaseUser)=>{
                    setUserAuthState({
                        user: firebaseUser,
                        isUserLoading: false,
                        userError: null
                    });
                }
            }["FirebaseProvider.useEffect.unsubscribe"], {
                "FirebaseProvider.useEffect.unsubscribe": (error)=>{
                    console.error("Auth state change error:", error);
                    setUserAuthState({
                        user: null,
                        isUserLoading: false,
                        userError: error
                    });
                }
            }["FirebaseProvider.useEffect.unsubscribe"]);
            return ({
                "FirebaseProvider.useEffect": ()=>unsubscribe()
            })["FirebaseProvider.useEffect"];
        }
    }["FirebaseProvider.useEffect"], [
        auth
    ]);
    // Memoize the context value
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FirebaseProvider.useMemo[contextValue]": ()=>{
            const servicesAvailable = !!(firebaseApp && firestore && auth && storage);
            return {
                areServicesAvailable: servicesAvailable,
                firebaseApp: servicesAvailable ? firebaseApp : null,
                firestore: servicesAvailable ? firestore : null,
                auth: servicesAvailable ? auth : null,
                storage: servicesAvailable ? storage : null,
                user: userAuthState.user,
                isUserLoading: userAuthState.isUserLoading,
                userError: userAuthState.userError
            };
        }
    }["FirebaseProvider.useMemo[contextValue]"], [
        firebaseApp,
        firestore,
        auth,
        storage,
        userAuthState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FirebaseContext.Provider, {
        value: contextValue,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FirebaseErrorListener$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseErrorListener"], {}, void 0, false, {
                fileName: "[project]/src/firebase/provider.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/firebase/provider.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FirebaseProvider, "OHe6bVjVSw9ThvW0Yh4MUWnvKSA=");
_c = FirebaseProvider;
const useFirebase = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FirebaseContext);
    if (context === undefined) {
        throw new Error('useFirebase must be used within a FirebaseProvider.');
    }
    if (!context.areServicesAvailable || !context.firebaseApp || !context.firestore || !context.auth || !context.storage) {
        throw new Error('Firebase core services not available. Check FirebaseProvider props.');
    }
    return {
        firebaseApp: context.firebaseApp,
        firestore: context.firestore,
        auth: context.auth,
        storage: context.storage,
        user: context.user,
        isUserLoading: context.isUserLoading,
        userError: context.userError
    };
};
_s1(useFirebase, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const useAuth = ()=>{
    _s2();
    const { auth } = useFirebase();
    return auth;
};
_s2(useAuth, "OT++aEmwDNADnnUbJWMr+/+OlXk=", false, function() {
    return [
        useFirebase
    ];
});
const useFirestore = ()=>{
    _s3();
    const { firestore } = useFirebase();
    return firestore;
};
_s3(useFirestore, "qhfb8rRcOGdBgKRv/FCwwKsZ/wI=", false, function() {
    return [
        useFirebase
    ];
});
const useStorage = ()=>{
    _s4();
    const { storage } = useFirebase();
    return storage;
};
_s4(useStorage, "HJaIOWNzf28i4ymZz//2uO4zzGU=", false, function() {
    return [
        useFirebase
    ];
});
const useFirebaseApp = ()=>{
    _s5();
    const { firebaseApp } = useFirebase();
    return firebaseApp;
};
_s5(useFirebaseApp, "D6Olf0BZyJfxRd0p3osYAvkHH+4=", false, function() {
    return [
        useFirebase
    ];
});
function useMemoFirebase(factory, deps) {
    _s6();
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(factory, deps);
    if (typeof memoized !== 'object' || memoized === null) return memoized;
    memoized.__memo = true;
    return memoized;
}
_s6(useMemoFirebase, "KMI6DIONdD7isGYT+tL7kc0anjg=");
const useUser = ()=>{
    _s7();
    const { user, isUserLoading, userError } = useFirebase(); // Leverages the main hook
    return {
        user,
        isUserLoading,
        userError
    };
};
_s7(useUser, "huZTQEv0vojfA8ahUwgbOjgU01Y=", false, function() {
    return [
        useFirebase
    ];
});
var _c;
__turbopack_context__.k.register(_c, "FirebaseProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Lottiefiles/LOADING 3D TEXT.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.7.4\",\"fr\":60,\"ip\":0,\"op\":151,\"w\":500,\"h\":500,\"nm\":\"LOADING plain colour\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"LOADING 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[246.292,306.632,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[223.27,-45.171,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[5.945,-144],[47.597,-144],[47.597,-163.934],[31.847,-163.934],[31.847,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":30,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.847,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.33,-79.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.231,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":90,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.847,-243.606]],\"c\":true}]},{\"t\":120,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[5.945,-144],[47.597,-144],[47.597,-163.934],[31.847,-163.934],[31.847,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"L\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"L\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":5,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.755,-185.282],[55.493,-163.749],[60.107,-152.367],[70.351,-144.523],[84.716,-141.908],[99.482,-144.677],[109.541,-152.613],[113.971,-164.026],[114.678,-185.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":65,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.063,-38.324],[113.325,-59.857],[108.711,-71.239],[98.467,-79.083],[84.101,-81.698],[69.336,-78.93],[59.277,-70.993],[54.847,-59.581],[54.139,-38.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"t\":125,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.755,-185.282],[55.493,-163.749],[60.107,-152.367],[70.351,-144.523],[84.716,-141.908],[99.482,-144.677],[109.541,-152.613],[113.971,-164.026],[114.678,-185.282]],\"c\":true}]}],\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":5,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[88.777,-172.239],[88.039,-161.104],[84.655,-158.766],[81.363,-160.796],[80.656,-171.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":65,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.041,-54.013],[81.117,-63.272],[84.224,-64.841],[87.393,-62.903],[88.162,-54.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"t\":125,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[88.777,-172.239],[88.039,-161.104],[84.655,-158.766],[81.363,-160.796],[80.656,-171.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]}],\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"O\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.49,-144.197],[146.768,-144.197],[147.075,-162.075],[162.466,-162.075],[162.481,-144.197],[184.951,-144.197],[184.639,-243.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.639,-243.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":70,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[123.837,-79.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.024,-79.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":100,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.639,-243.856]],\"c\":true}]},{\"t\":130,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.49,-144.197],[146.768,-144.197],[147.075,-162.075],[162.466,-162.075],[162.481,-144.197],[184.951,-144.197],[184.639,-243.856]],\"c\":true}]}],\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.996,-179.765],[147.238,-228.312],[162.646,-228.358],[162.412,-179.765]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[147.238,-228.312],[162.646,-228.358],[162.034,-13.265]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":70,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[146.622,-64.312],[162.03,-64.358],[162.034,-13.265]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":100,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[147.238,-228.312],[162.646,-228.358],[162.034,-13.265]],\"c\":true}]},{\"t\":130,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.996,-179.765],[147.238,-228.312],[162.646,-228.358],[162.412,-179.765]],\"c\":true}]}],\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"A\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.378,-144],[228.047,-144],[241.951,-145.015],[249.703,-148.583],[254.102,-155.659],[255.363,-173.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":45,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":75,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[254.748,-44.477],[253.887,-63.457],[249.58,-72.224],[239.521,-77.884],[214.143,-79.606],[194.763,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":105,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"t\":135,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.378,-144],[228.047,-144],[241.951,-145.015],[249.703,-148.583],[254.102,-155.659],[255.363,-173.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":15,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.462,-175.5],[228.17,-163.288],[221.279,-161.042],[221.279,-226.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":45,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[221.279,-226.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[226.447,-61.672],[228.416,-58.873],[228.847,-50.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[220.664,-62.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":105,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[221.279,-226.564]],\"c\":true}]},{\"t\":135,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.462,-175.5],[228.17,-163.288],[221.279,-161.042],[221.279,-226.564]],\"c\":true}]}],\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"D\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.55,-144],[294.452,-144],[294.452,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":50,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.79,22],[294.691,22],[294.452,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[267.935,-79.606],[268.79,22],[294.691,22],[293.837,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":110,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.79,22],[294.691,22],[294.452,-243.606]],\"c\":true}]},{\"t\":140,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.55,-144],[294.452,-144],[294.452,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"I\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"I\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":25,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.377,-144],[330.034,-144],[330.034,-189.281],[343.507,-144],[366.209,-144],[366.209,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":55,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[366.209,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":85,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.938,-79.606],[343.938,-34.756],[329.418,-79.606],[307.762,-79.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[365.594,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":115,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[366.209,-243.606]],\"c\":true}]},{\"t\":145,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.377,-144],[330.034,-144],[330.034,-189.281],[343.507,-144],[366.209,-144],[366.209,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"N\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"N\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":30,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.118],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.397,-178.146],[380.135,-162.734],[383.829,-152.921],[392.48,-145.077],[404.702,-141.908],[414.214,-144.215],[420.894,-151.137],[423.29,-144],[439.566,-144],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.465,-170.517],[413.45,-161.165],[409.605,-158.766],[406.159,-160.888],[405.298,-169.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":90,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[438.951,-47.245],[436.675,-65.917],[426.893,-77.022],[408.005,-81.698],[389.148,-76.315],[380.319,-64.472],[378.781,-43.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[438.951,-33.464],[408.62,-33.464],[408.62,-18.329],[413.85,-18.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[404.683,-53.521],[405.544,-62.995],[408.805,-64.841],[412.312,-62.688],[413.05,-51.982],[413.05,-42.938],[438.951,-42.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":120,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"t\":150,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.118],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.397,-178.146],[380.135,-162.734],[383.829,-152.921],[392.48,-145.077],[404.702,-141.908],[414.214,-144.215],[420.894,-151.137],[423.29,-144],[439.566,-144],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.465,-170.517],[413.45,-161.165],[409.605,-158.766],[406.159,-160.888],[405.298,-169.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]}],\"ix\":2},\"nm\":\"G\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450999092,0.133333004222,0.152940996955,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705882353,0.447058823529,0.501960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"G\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":240,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"LOADING shade\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[256.292,306.632,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[223.27,-45.171,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[5.945,-144],[47.597,-144],[47.597,-163.934],[31.847,-163.934],[31.847,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":30,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.847,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.33,-79.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.231,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":90,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[6.185,22],[47.836,22],[47.836,2.066],[32.086,2.066],[31.847,-243.606]],\"c\":true}]},{\"t\":120,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.945,-243.606],[5.945,-144],[47.597,-144],[47.597,-163.934],[31.847,-163.934],[31.847,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"L\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"L\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":5,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.755,-185.282],[55.493,-163.749],[60.107,-152.367],[70.351,-144.523],[84.716,-141.908],[99.482,-144.677],[109.541,-152.613],[113.971,-164.026],[114.678,-185.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":65,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.063,-38.324],[113.325,-59.857],[108.711,-71.239],[98.467,-79.083],[84.101,-81.698],[69.336,-78.93],[59.277,-70.993],[54.847,-59.581],[54.139,-38.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.994,-19.282],[55.732,2.251],[60.347,13.633],[70.59,21.477],[84.956,24.092],[99.722,21.323],[109.781,13.387],[114.21,1.974],[114.918,-19.282]],\"c\":true}]},{\"t\":125,\"s\":[{\"i\":[[0,0],[0.492,4.102],[2.584,3.487],[4.245,1.744],[5.331,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,-10.007],[0,0],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.332,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,10.008]],\"o\":[[0,-10.253],[-0.492,-4.101],[-2.584,-3.486],[-4.245,-1.743],[-5.62,0],[-4.225,1.846],[-2.482,3.445],[-0.472,4.163],[0,0],[0,10.254],[0.492,4.102],[2.584,3.487],[4.245,1.743],[5.619,0],[4.224,-1.846],[2.481,-3.445],[0.471,-4.162],[0,0]],\"v\":[[114.678,-202.324],[113.94,-223.857],[109.326,-235.239],[99.082,-243.083],[84.716,-245.698],[69.951,-242.93],[59.892,-234.993],[55.462,-223.581],[54.755,-202.324],[54.755,-185.282],[55.493,-163.749],[60.107,-152.367],[70.351,-144.523],[84.716,-141.908],[99.482,-144.677],[109.541,-152.613],[113.971,-164.026],[114.678,-185.282]],\"c\":true}]}],\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":5,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[88.777,-172.239],[88.039,-161.104],[84.655,-158.766],[81.363,-160.796],[80.656,-171.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":35,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":65,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.041,-54.013],[81.117,-63.272],[84.224,-64.841],[87.393,-62.903],[88.162,-54.013]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":95,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[89.016,-6.239],[88.278,4.896],[84.894,7.234],[81.603,5.204],[80.895,-5.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]},{\"t\":125,\"s\":[{\"i\":[[0,0],[0.492,-1.558],[1.763,0],[0.471,1.354],[0,5.783],[0,0],[-0.718,1.046],[-1.354,0],[-0.513,-1.292],[0,-4.634]],\"o\":[[0,5.866],[-0.492,1.559],[-1.723,0],[-0.472,-1.354],[0,0],[0,-5.127],[0.717,-1.046],[1.6,0],[0.512,1.292],[0,0]],\"v\":[[88.777,-172.239],[88.039,-161.104],[84.655,-158.766],[81.363,-160.796],[80.656,-171.501],[80.656,-218.013],[81.733,-227.272],[84.84,-228.841],[88.008,-226.903],[88.777,-218.013]],\"c\":true}]}],\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"O\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.49,-144.197],[146.768,-144.197],[147.075,-162.075],[162.466,-162.075],[162.481,-144.197],[184.951,-144.197],[184.639,-243.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.639,-243.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":70,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[123.837,-79.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.024,-79.856]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":100,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.112,22.303],[146.39,22.303],[146.697,4.425],[162.087,4.425],[162.103,22.303],[184.573,22.303],[184.639,-243.856]],\"c\":true}]},{\"t\":130,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.452,-243.856],[124.49,-144.197],[146.768,-144.197],[147.075,-162.075],[162.466,-162.075],[162.481,-144.197],[184.951,-144.197],[184.639,-243.856]],\"c\":true}]}],\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.996,-179.765],[147.238,-228.312],[162.646,-228.358],[162.412,-179.765]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":40,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[147.238,-228.312],[162.646,-228.358],[162.034,-13.265]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":70,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[146.622,-64.312],[162.03,-64.358],[162.034,-13.265]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":100,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.618,-13.265],[147.238,-228.312],[162.646,-228.358],[162.034,-13.265]],\"c\":true}]},{\"t\":130,\"s\":[{\"i\":[[0,0],[0.012,0.124],[0.041,-0.079],[0.067,0.14]],\"o\":[[-0.017,-0.11],[0.012,0.031],[-0.041,0.079],[0,0]],\"v\":[[146.996,-179.765],[147.238,-228.312],[162.646,-228.358],[162.412,-179.765]],\"c\":true}]}],\"ix\":2},\"nm\":\"A\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"A\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":15,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.378,-144],[228.047,-144],[241.951,-145.015],[249.703,-148.583],[254.102,-155.659],[255.363,-173.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":45,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":75,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[254.748,-44.477],[253.887,-63.457],[249.58,-72.224],[239.521,-77.884],[214.143,-79.606],[194.763,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":105,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.617,22],[228.286,22],[242.191,20.985],[249.943,17.417],[254.341,10.341],[255.603,-7.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]},{\"t\":135,\"s\":[{\"i\":[[0,0],[0,0],[-3.076,0.677],[-2.092,1.702],[-0.841,3.015],[0,8.942],[0,0],[0.574,3.22],[2.297,2.625],[4.409,1.149],[12.509,0],[0,0]],\"o\":[[0,0],[6.193,0],[3.076,-0.677],[2.092,-1.702],[0.84,-3.015],[0,0],[0,-9.433],[-0.575,-3.219],[-2.298,-2.624],[-4.41,-1.148],[0,0],[0,0]],\"v\":[[195.378,-144],[228.047,-144],[241.951,-145.015],[249.703,-148.583],[254.102,-155.659],[255.363,-173.593],[255.363,-208.477],[254.502,-227.457],[250.195,-236.224],[240.136,-241.884],[214.758,-243.606],[195.378,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":15,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.462,-175.5],[228.17,-163.288],[221.279,-161.042],[221.279,-226.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":45,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[221.279,-226.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[226.447,-61.672],[228.416,-58.873],[228.847,-50.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[220.664,-62.564]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":105,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.701,-9.5],[228.409,2.712],[221.519,4.958],[221.279,-226.564]],\"c\":true}]},{\"t\":135,\"s\":[{\"i\":[[-1.026,-0.594],[-0.287,-1.271],[0,-4.511],[0,0],[0.861,-1.497],[3.732,0],[0,0]],\"o\":[[1.025,0.595],[0.286,1.272],[0,0],[0,6.645],[-0.861,1.498],[0,0],[2.83,0]],\"v\":[[227.063,-225.672],[229.031,-222.873],[229.462,-214.198],[229.462,-175.5],[228.17,-163.288],[221.279,-161.042],[221.279,-226.564]],\"c\":true}]}],\"ix\":2},\"nm\":\"D\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"D\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.55,-144],[294.452,-144],[294.452,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":50,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.79,22],[294.691,22],[294.452,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":80,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[267.935,-79.606],[268.79,22],[294.691,22],[293.837,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":110,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.79,22],[294.691,22],[294.452,-243.606]],\"c\":true}]},{\"t\":140,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[268.55,-243.606],[268.55,-144],[294.452,-144],[294.452,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"I\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"I\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":25,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.377,-144],[330.034,-144],[330.034,-189.281],[343.507,-144],[366.209,-144],[366.209,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":55,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[366.209,-243.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":85,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[343.938,-79.606],[343.938,-34.756],[329.418,-79.606],[307.762,-79.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[365.594,-79.606]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":115,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.617,22],[330.273,22],[330.273,-23.281],[343.747,22],[366.449,22],[366.209,-243.606]],\"c\":true}]},{\"t\":145,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[344.553,-243.606],[344.553,-198.756],[330.034,-243.606],[308.377,-243.606],[308.377,-144],[330.034,-144],[330.034,-189.281],[343.507,-144],[366.209,-144],[366.209,-243.606]],\"c\":true}]}],\"ix\":2},\"nm\":\"N\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"N\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":30,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.118],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.397,-178.146],[380.135,-162.734],[383.829,-152.921],[392.48,-145.077],[404.702,-141.908],[414.214,-144.215],[420.894,-151.137],[423.29,-144],[439.566,-144],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.465,-170.517],[413.45,-161.165],[409.605,-158.766],[406.159,-160.888],[405.298,-169.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":60,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":90,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[438.951,-47.245],[436.675,-65.917],[426.893,-77.022],[408.005,-81.698],[389.148,-76.315],[380.319,-64.472],[378.781,-43.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[438.951,-33.464],[408.62,-33.464],[408.62,-18.329],[413.85,-18.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[404.683,-53.521],[405.544,-62.995],[408.805,-64.841],[412.312,-62.688],[413.05,-51.982],[413.05,-42.938],[438.951,-42.938]],\"c\":true}]},{\"i\":{\"x\":0.17,\"y\":1},\"o\":{\"x\":0.782,\"y\":0},\"t\":120,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.117],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.636,-12.145],[380.374,3.266],[384.069,13.079],[392.719,20.923],[404.941,24.092],[414.453,21.785],[421.133,14.863],[423.529,22],[439.806,22],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.704,-4.517],[413.689,4.835],[409.844,7.234],[406.399,5.112],[405.537,-3.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]},{\"t\":150,\"s\":[{\"i\":[[0,0],[1.517,4.286],[5.004,3.118],[7.588,0],[4.86,-3.589],[1.025,-4.307],[0,-9.515],[0,0],[-0.492,-3.424],[-1.971,-3.117],[-3.797,-2.112],[-4.352,0],[-2.689,1.538],[-1.765,3.076],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.677,-1.6],[1.886,0],[0.574,1.415],[0,4.471],[0,0],[-0.575,1.23],[-1.6,0],[-0.492,-1.435],[0,-5.701],[0,0],[0,0]],\"o\":[[0,-8.161],[-1.518,-4.285],[-5.005,-3.117],[-7.712,0],[-4.86,3.59],[-1.026,4.307],[0,0],[0,6.85],[0.492,3.425],[1.971,3.118],[3.796,2.112],[3.653,0],[2.688,-1.538],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,4.635],[-0.677,1.6],[-1.723,0],[-0.575,-1.415],[0,0],[0,-5.085],[0.574,-1.23],[1.846,0],[0.492,1.436],[0,0],[0,0],[0,0]],\"v\":[[439.566,-211.245],[437.29,-229.917],[427.508,-241.022],[408.62,-245.698],[389.763,-240.315],[380.935,-228.472],[379.397,-207.738],[379.397,-178.146],[380.135,-162.734],[383.829,-152.921],[392.48,-145.077],[404.702,-141.908],[414.214,-144.215],[420.894,-151.137],[423.29,-144],[439.566,-144],[439.566,-197.464],[409.235,-197.464],[409.235,-182.329],[414.465,-182.329],[414.465,-170.517],[413.45,-161.165],[409.605,-158.766],[406.159,-160.888],[405.298,-169.717],[405.298,-217.521],[406.159,-226.995],[409.42,-228.841],[412.927,-226.688],[413.665,-215.982],[413.665,-206.938],[439.566,-206.938]],\"c\":true}]}],\"ix\":2},\"nm\":\"G\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.027450980392,0.133333333333,0.152941176471,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.176737736721,0.387490844727,0.5658203125,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"G\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":240,\"st\":0,\"bm\":0}],\"markers\":[]}"));}),
"[project]/src/firebase/client-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseClientProvider",
    ()=>FirebaseClientProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Lottiefiles$2f$LOADING__3D__TEXT$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Lottiefiles/LOADING 3D TEXT.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FirebaseClientProvider(param) {
    let { children } = param;
    _s();
    const [firebaseServices, setFirebaseServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initError, setInitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirebaseClientProvider.useEffect": ()=>{
            // Initialize Firebase only once on mount
            try {
                const services = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeFirebase"])();
                setFirebaseServices(services);
            } catch (error) {
                console.error('FirebaseClientProvider: Failed to initialize Firebase', error);
                setInitError(error);
            }
        }
    }["FirebaseClientProvider.useEffect"], []);
    // Show error state if initialization failed
    if (initError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-destructive mb-2",
                        children: "Firebase Initialization Error"
                    }, void 0, false, {
                        fileName: "[project]/src/firebase/client-provider.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: initError.message
                    }, void 0, false, {
                        fileName: "[project]/src/firebase/client-provider.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/firebase/client-provider.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/firebase/client-provider.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    // Show loading state while initializing
    if (!firebaseServices) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full relative bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    style: {
                        background: 'radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%), radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%), radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%), radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%), #000000'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/firebase/client-provider.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex min-h-screen items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                        animationData: __TURBOPACK__imported__module__$5b$project$5d2f$Lottiefiles$2f$LOADING__3D__TEXT$2e$json__$28$json$29$__["default"],
                        loop: true,
                        autoplay: true
                    }, void 0, false, {
                        fileName: "[project]/src/firebase/client-provider.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/firebase/client-provider.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/firebase/client-provider.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseProvider"], {
        firebaseApp: firebaseServices.firebaseApp,
        auth: firebaseServices.auth,
        firestore: firebaseServices.firestore,
        storage: firebaseServices.storage,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/firebase/client-provider.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(FirebaseClientProvider, "BnmsywMDB18XMSW4Psdv+cCH/XA=");
_c = FirebaseClientProvider;
var _c;
__turbopack_context__.k.register(_c, "FirebaseClientProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/errors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirestorePermissionError",
    ()=>FirestorePermissionError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
'use client';
;
;
/**
 * Builds a security-rule-compliant auth object from the Firebase User.
 * @param currentUser The currently authenticated Firebase user.
 * @returns An object that mirrors request.auth in security rules, or null.
 */ function buildAuthObject(currentUser) {
    var _currentUser_providerData_;
    if (!currentUser) {
        return null;
    }
    const token = {
        name: currentUser.displayName,
        email: currentUser.email,
        email_verified: currentUser.emailVerified,
        phone_number: currentUser.phoneNumber,
        sub: currentUser.uid,
        firebase: {
            identities: currentUser.providerData.reduce((acc, p)=>{
                if (p.providerId) {
                    acc[p.providerId] = [
                        p.uid
                    ];
                }
                return acc;
            }, {}),
            sign_in_provider: ((_currentUser_providerData_ = currentUser.providerData[0]) === null || _currentUser_providerData_ === void 0 ? void 0 : _currentUser_providerData_.providerId) || 'custom',
            tenant: currentUser.tenantId
        }
    };
    return {
        uid: currentUser.uid,
        token: token
    };
}
/**
 * Builds the complete, simulated request object for the error message.
 * It safely tries to get the current authenticated user.
 * @param context The context of the failed Firestore operation.
 * @returns A structured request object.
 */ function buildRequestObject(context) {
    let authObject = null;
    try {
        // Safely attempt to get the current user.
        const firebaseAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
        const currentUser = firebaseAuth.currentUser;
        if (currentUser) {
            authObject = buildAuthObject(currentUser);
        }
    } catch (e) {
    // This will catch errors if the Firebase app is not yet initialized.
    // In this case, we'll proceed without auth information.
    }
    return {
        auth: authObject,
        method: context.operation,
        path: "/databases/(default)/documents/".concat(context.path),
        resource: context.requestResourceData ? {
            data: context.requestResourceData
        } : undefined
    };
}
/**
 * Builds the final, formatted error message for the LLM.
 * @param requestObject The simulated request object.
 * @returns A string containing the error message and the JSON payload.
 */ function buildErrorMessage(requestObject) {
    return "Missing or insufficient permissions: The following request was denied by Firestore Security Rules:\n".concat(JSON.stringify(requestObject, null, 2));
}
class FirestorePermissionError extends Error {
    constructor(context){
        const requestObject = buildRequestObject(context);
        super(buildErrorMessage(requestObject)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "request", void 0);
        this.name = 'FirebaseError';
        this.request = requestObject;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/firestore/use-collection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollection",
    ()=>useCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useCollection(memoizedTargetRefOrQuery) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCollection.useEffect": ()=>{
            if (!memoizedTargetRefOrQuery) {
                setData(null);
                setIsLoading(false);
                setError(null);
                return;
            }
            setIsLoading(true);
            setError(null);
            // Directly use memoizedTargetRefOrQuery as it's assumed to be the final query
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(memoizedTargetRefOrQuery, {
                "useCollection.useEffect.unsubscribe": (snapshot)=>{
                    const results = [];
                    for (const doc of snapshot.docs){
                        results.push({
                            ...doc.data(),
                            id: doc.id
                        });
                    }
                    setData(results);
                    setError(null);
                    setIsLoading(false);
                }
            }["useCollection.useEffect.unsubscribe"], {
                "useCollection.useEffect.unsubscribe": (error)=>{
                    // Handle permission errors gracefully
                    if (error.code === 'permission-denied') {
                        // Extract path for logging
                        const path = memoizedTargetRefOrQuery.type === 'collection' ? memoizedTargetRefOrQuery.path : memoizedTargetRefOrQuery._query.path.canonicalString();
                        console.warn('Permission denied for collection:', path);
                        setError(error);
                        setData(null);
                        setIsLoading(false);
                    } else {
                        // For other errors, create contextual error
                        const path = memoizedTargetRefOrQuery.type === 'collection' ? memoizedTargetRefOrQuery.path : memoizedTargetRefOrQuery._query.path.canonicalString();
                        const contextualError = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"]({
                            operation: 'list',
                            path
                        });
                        setError(contextualError);
                        setData(null);
                        setIsLoading(false);
                        // Only emit critical errors, not permission errors
                        console.error('Firestore error:', error);
                    }
                }
            }["useCollection.useEffect.unsubscribe"]);
            return ({
                "useCollection.useEffect": ()=>unsubscribe()
            })["useCollection.useEffect"];
        }
    }["useCollection.useEffect"], [
        memoizedTargetRefOrQuery
    ]); // Re-run if the target query/reference changes.
    if (memoizedTargetRefOrQuery && !memoizedTargetRefOrQuery.__memo) {
        throw new Error(memoizedTargetRefOrQuery + ' was not properly memoized using useMemoFirebase');
    }
    return {
        data,
        isLoading,
        error
    };
}
_s(useCollection, "Qxb2xEOOegLE3UwVAsDMiTNANhw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/firestore/use-doc.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDoc",
    ()=>useDoc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useDoc(memoizedDocRef) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDoc.useEffect": ()=>{
            if (!memoizedDocRef) {
                setData(null);
                setIsLoading(false);
                setError(null);
                return;
            }
            setIsLoading(true);
            setError(null);
            // Optional: setData(null); // Clear previous data instantly
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(memoizedDocRef, {
                "useDoc.useEffect.unsubscribe": (snapshot)=>{
                    if (snapshot.exists()) {
                        setData({
                            ...snapshot.data(),
                            id: snapshot.id
                        });
                    } else {
                        // Document does not exist
                        setData(null);
                    }
                    setError(null); // Clear any previous error on successful snapshot (even if doc doesn't exist)
                    setIsLoading(false);
                }
            }["useDoc.useEffect.unsubscribe"], {
                "useDoc.useEffect.unsubscribe": (error)=>{
                    // Handle permission errors gracefully
                    if (error.code === 'permission-denied') {
                        // For permission errors, just set error state without crashing
                        console.warn('Permission denied for document:', memoizedDocRef.path);
                        setError(error);
                        setData(null);
                        setIsLoading(false);
                    } else {
                        // For other errors, create contextual error
                        const contextualError = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"]({
                            operation: 'get',
                            path: memoizedDocRef.path
                        });
                        setError(contextualError);
                        setData(null);
                        setIsLoading(false);
                        // Only emit critical errors, not permission errors
                        console.error('Firestore error:', error);
                    }
                }
            }["useDoc.useEffect.unsubscribe"]);
            return ({
                "useDoc.useEffect": ()=>unsubscribe()
            })["useDoc.useEffect"];
        }
    }["useDoc.useEffect"], [
        memoizedDocRef
    ]); // Re-run if the memoizedDocRef changes.
    return {
        data,
        isLoading,
        error
    };
}
_s(useDoc, "Qxb2xEOOegLE3UwVAsDMiTNANhw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSdks",
    ()=>getSdks,
    "initializeFirebase",
    ()=>initializeFirebase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$client$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/client-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-collection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-doc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function initializeFirebase() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length) {
        // Important! initializeApp() is called without any arguments because Firebase App Hosting
        // integrates with the initializeApp() function to provide the environment variables needed to
        // populate the FirebaseOptions in production. It is critical that we attempt to call initializeApp()
        // without arguments.
        let firebaseApp;
        try {
            // Attempt to initialize via Firebase App Hosting environment variables
            firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])();
        } catch (e) {
            // Fall back to config object for development
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseConfig"]);
        }
        return getSdks(firebaseApp);
    }
    // If already initialized, return the SDKs with the already initialized App
    return getSdks((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])());
}
function getSdks(firebaseApp) {
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(firebaseApp);
    const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(firebaseApp);
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(firebaseApp);
    // Set auth persistence to local storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPersistence"])(auth, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserLocalPersistence"]).catch((error)=>{
        console.error('Failed to set auth persistence:', error);
    });
    return {
        firebaseApp,
        auth,
        firestore,
        storage
    };
}
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/firebase/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseClientProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$client$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseClientProvider"],
    "FirebaseContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseContext"],
    "FirebaseProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseProvider"],
    "FirestorePermissionError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"],
    "errorEmitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"],
    "getSdks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSdks"],
    "initializeFirebase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeFirebase"],
    "useAuth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
    "useCollection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollection"],
    "useDoc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDoc"],
    "useFirebase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"],
    "useFirebaseApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebaseApp"],
    "useFirestore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"],
    "useMemoFirebase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"],
    "useStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStorage"],
    "useUser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$client$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/client-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-collection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$doc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-doc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)");
}),
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b548fc77._.js.map