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
    const steps = ctx.selector?.('[data-step]') as NodeListOf<Element> | undefined;
    if (!steps || !steps.length) return;
    gsap.fromTo(
      steps,
      { opacity: 0, y: 24, rotateY: 45 },
      { opacity: 1, y: 0, rotateY: 0, duration: 0.6, ease: 'power2.out', stagger: 0.2, scrollTrigger: { trigger: ctx.scope as Element, start: 'top 80%' } }
    );
  });

  return (
    <section
      id="how-it-works"
      ref={scopeRef as any}
      className="w-full py-24 md:py-32 bg-secondary relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%), radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%), radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%), radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%), #000000',
      }}
    >

      <div className="absolute left-1/2 top-[40%] hidden h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 md:block animate-shimmer bg-[length:200%_100%]" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gradient">Your Learning Journey in 3 Simple Steps</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Getting started with VoyLearning is as easy as one, two, three.
          </p>
        </div>
        <div className="relative mx-auto grid max-w-5xl items-stretch gap-y-10 gap-x-8 md:grid-cols-3 [perspective:1000px]">
          {[{ icon: UserPlus, title: '1. Sign Up', desc: 'Create your free account in just a few seconds to unlock all notes.' },
            { icon: Search, title: '2. Browse Notes', desc: 'Explore our extensive and neatly organized library of HTML notes.' },
            { icon: GraduationCap, title: '3. Learn & Grow', desc: 'Study at your own pace and gain the confidence to build websites.' }].map((s, i) => (
            <GlassCard key={s.title} className="text-center hover:rotate-[5deg] transition-transform" hover gradient data-step>
              <CardContent>
                <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-glow-blue motion-safe:animate-float" style={{ backgroundImage: 'var(--gradient-3)' }}>
                  <s.icon className="h-10 w-10 text-white" />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute right-2 top-2 text-6xl font-bold opacity-20 text-gradient select-none">{i + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
