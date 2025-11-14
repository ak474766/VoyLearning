"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card as BaseCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'dark';
  hover?: boolean;
  gradient?: boolean;
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = false, gradient = false, children, ...props }, ref) => {
    return (
      <BaseCard
        ref={ref}
        className={cn(
          variant === 'dark' ? 'glass-dark' : 'glass-card',
          'group relative overflow-hidden transition-all duration-300',
          hover && 'hover:scale-105 hover:shadow-premium-lg',
          className
        )}
        {...props}
      >
        <div className={cn('relative')}
        >
          {gradient && (
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                 style={{ backgroundImage: 'var(--gradient-accent)', mixBlendMode: 'overlay', filter: 'blur(12px)' }}
            />
          )}
          {children}
        </div>
      </BaseCard>
    );
  }
);
GlassCard.displayName = 'GlassCard';

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
