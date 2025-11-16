"use client";

import { UserPlus, Search, GraduationCap } from 'lucide-react';
import * as React from 'react';
import { GlassCard, CardContent } from './glass-card';
import { useGSAP, prefersReducedMotion } from '@/lib/gsap-utils';


export default function HowItWorksSection() {
  const scopeRef = useGSAP(async (ctx) => {
    if (prefersReducedMotion()) return;
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
    const scopeEl = ctx.scope as Element | null | undefined;
    if (!scopeEl) return;
    const steps = ctx.selector?.('[data-step]') as NodeListOf<Element> | undefined;
    if (!steps || !steps.length) return;
    gsap.fromTo(
      steps,
      { opacity: 0, y: 24, rotateY: 45 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.18,
        scrollTrigger: { trigger: scopeEl, start: 'top 80%' },
      }
    );

    const progressEl = scopeEl.querySelector(
      '[data-timeline-progress]'
    ) as HTMLElement | null;
    if (progressEl) {
      gsap.fromTo(
        progressEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: scopeEl,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: true,
          },
        }
      );
    }
  });

  return (
    <section
      id="how-it-works"
      ref={scopeRef as any}
      className="w-full py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 section-radial-bg" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-muted-foreground">
            How it works
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your learning journey in <span className="text-gradient">three clean beats</span>
          </h2>
          <p className="max-w-[720px] text-muted-foreground md:text-lg">
            From sign-up to confident builds, VoyLearning keeps you on a simple, guided path
            with no clutter and no overwhelm.
          </p>
        </div>
        <div className="relative mx-auto max-w-5xl grid gap-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,1.4fr)]">
          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 rounded-full bg-slate-800/40" />
            <div
              data-timeline-progress
              className="absolute left-1/2 top-2 bottom-2 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-gradient-purple via-gradient-pink to-gradient-blue origin-top scale-y-0"
            />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink shadow-glow-purple" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-gradient-pink to-gradient-blue shadow-glow-blue" />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-gradient-blue to-emerald-400 shadow-glow-blue" />
          </div>
          <div className="relative space-y-6 [perspective:1000px]">
            {[{
              icon: UserPlus,
              title: 'Create your space',
              step: 'Step 1',
              desc: 'Sign up in seconds and pick the subjects you care about first—no huge onboarding, just a clean starting line.',
            },
            {
              icon: Search,
              title: 'Explore curated HTML notes',
              step: 'Step 2',
              desc: 'Browse tidy, syllabus-aligned HTML notes instead of digging through PDFs, screenshots, and random slides.',
            },
            {
              icon: GraduationCap,
              title: 'Edit, learn, and save your version',
              step: 'Step 3',
              desc: 'Ask AI to tweak the note itself, add examples, or simplify concepts—then save the version that finally clicked.',
            }].map((s, i) => (
              <GlassCard
                key={s.title}
                className="relative overflow-hidden border border-white/5 bg-background/40 text-left shadow-premium-md transition-transform hover:-translate-y-1 hover:shadow-premium-lg"
                hover
                gradient
                data-step
              >
                <CardContent className="relative flex gap-4 p-5 sm:p-6">
                  <div className="relative mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-glow-blue motion-safe:animate-float" style={{ backgroundImage: 'var(--gradient-3)' }}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                      {s.step}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute right-4 top-3 text-5xl font-bold tracking-tight text-gradient/60 opacity-10 select-none">
                    {i + 1}
                  </div>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
