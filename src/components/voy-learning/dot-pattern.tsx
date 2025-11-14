"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type DotPatternProps = {
  density?: 'sparse' | 'normal' | 'dense';
  color?: string;
  opacity?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function DotPattern({ density = 'normal', color, opacity = 0.2, className, ...props }: DotPatternProps) {
  const densityClass = density === 'dense' ? 'dot-pattern dot-pattern-dense' : 'dot-pattern';
  const style: React.CSSProperties = {
    // Override default via CSS custom properties if provided
    ...(color ? ({ ['--dot-color' as any]: color } as React.CSSProperties) : {}),
    opacity,
  };

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 z-0', densityClass, className)}
      style={style}
      {...props}
    />
  );
}
