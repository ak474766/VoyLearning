"use client";

import * as React from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(Number.isFinite(pct) ? pct : 0);
      setVisible(pct > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const strokeDasharray = 2 * Math.PI * 22; // r=22
  const dashOffset = strokeDasharray - (progress / 100) * strokeDasharray;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full glass shadow-premium-lg transition-transform duration-200",
        "hover:scale-110 hover:shadow-premium-xl",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      style={{ width: 56, height: 56 }}
    >
      <svg width={56} height={56} viewBox="0 0 56 56" className="absolute inset-0">
        <defs>
          <linearGradient id="sp-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <circle cx={28} cy={28} r={22} stroke="#e5e7eb" strokeWidth={4} fill="none" />
        <circle
          cx={28}
          cy={28}
          r={22}
          stroke="url(#sp-grad)"
          strokeWidth={4}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 28 28)"
        />
      </svg>
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <ChevronUp className="h-5 w-5" />
      </div>
    </button>
  );
}
