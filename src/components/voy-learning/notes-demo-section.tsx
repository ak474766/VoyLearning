"use client";

import * as React from "react";
import { Sparkles, Send } from "lucide-react";
import { GlassCard, CardContent } from "./glass-card";
import DotPattern from "./dot-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";


export default function NotesDemoSection() {
  const scopeRef = useGSAP(async (ctx) => {
    if (prefersReducedMotion()) return;
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const items = ctx.selector?.('[data-animate]') as NodeListOf<Element> | undefined;
    if (!items || !items.length) return;
    gsap.set(items, { opacity: 0, y: 12 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ctx.scope as Element,
        start: "top 80%",
      },
    });
  });

  return (
    <section
      ref={scopeRef as any}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 section-radial-bg" />
      <DotPattern className="opacity-40" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12" data-animate>
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-muted-foreground">
            Live AI note demo
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            See how a static note becomes <span className="text-gradient">your note</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Compare the original HTML explanation with an AI-augmented version, side by side.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2" data-animate>
          <GlassCard className="relative overflow-hidden border border-white/8 bg-background/60 p-0">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-2 font-medium tracking-wide uppercase">Original</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground/80">Before AI</span>
            </div>
            <CardContent className="p-4 sm:p-5">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <h3 className="m-0 text-foreground/90">Semantic HTML</h3>
                <p>
                  Semantic HTML provides meaning to the structure of web content. Elements like
                  <code> &lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code> help both
                  users and search engines understand the layout.
                </p>
                <pre className="overflow-auto rounded-lg bg-muted p-4 text-xs"><code>{`<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>`}</code></pre>
              </div>
            </CardContent>
          </GlassCard>

          <GlassCard className="relative overflow-hidden border border-white/10 bg-background/70 p-0" data-animate>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-2 inline-flex items-center gap-1 font-medium tracking-wide uppercase text-gradient">
                  <Sparkles className="h-3 w-3" /> AI-enhanced
                </span>
              </div>
              <span className="text-xs font-medium text-gradient">After AI</span>
            </div>
            <CardContent className="p-4 sm:p-5">
              <div className="prose prose-sm max-w-none">
                <h3 className="m-0 text-gradient">Semantic HTML (improved)</h3>
                <p>
                  Semantic HTML
                  <mark className="rounded bg-gradient-to-r from-purple-100/80 to-pink-100/80 px-1">
                    improves accessibility and SEO
                  </mark>
                  by giving structure real meaning. Use elements like
                  <code> &lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code> to describe
                  the purpose of each section.
                </p>
                <pre
                  className="overflow-auto rounded-lg p-4 text-xs text-slate-900 shadow-premium-md"
                  style={{ backgroundImage: 'var(--gradient-hero)' }}
                ><code>{`<header aria-label="Site header">
  <nav aria-label="Primary navigation">...</nav>
</header>
<main id="content">
  <article role="article" aria-label="Semantic HTML article">...</article>
</main>`}</code></pre>
              </div>
            </CardContent>
          </GlassCard>
        </div>

        <div className="mx-auto mt-8 grid gap-4 md:grid-cols-3 max-w-4xl" data-animate>
          <GlassCard className="border border-white/10 bg-background/60 p-3">
            <CardContent className="p-0 space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                Structure
              </p>
              <p className="text-sm font-medium text-foreground">Cleaner document outline</p>
              <p className="text-xs text-muted-foreground">
                Landmarks and roles make notes easier to navigate with assistive tech.
              </p>
            </CardContent>
          </GlassCard>
          <GlassCard className="border border-white/10 bg-background/60 p-3">
            <CardContent className="p-0 space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                Clarity
              </p>
              <p className="text-sm font-medium text-foreground">Key ideas highlighted</p>
              <p className="text-xs text-muted-foreground">
                Important phrases are surfaced so revision is faster.
              </p>
            </CardContent>
          </GlassCard>
          <GlassCard className="border border-white/10 bg-background/60 p-3">
            <CardContent className="p-0 space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                Reuse
              </p>
              <p className="text-sm font-medium text-foreground">Ready to remix</p>
              <p className="text-xs text-muted-foreground">
                Save this improved version or keep iterating with new prompts.
              </p>
            </CardContent>
          </GlassCard>
        </div>

        <div className="mx-auto mt-10 max-w-3xl" data-animate>
          <div
            className={cn(
              "glass rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-3"
            )}
          >
            <label htmlFor="ai-modify-input" className="sr-only">
              Ask AI to modify this note
            </label>
            <input
              id="ai-modify-input"
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-3 text-sm md:text-base"
              placeholder="Ask AI to modify this note..."
              aria-label="Ask AI to modify this note"
            />
            <div className="flex flex-wrap gap-2">
              {['Add examples', 'Simplify', 'Add diagrams'].map((s) => (
                <button
                  key={s}
                  className="hidden sm:inline-flex rounded-full px-3 py-1 text-xs md:text-sm text-foreground/80 hover:text-foreground transition-colors glass"
                >
                  {s}
                </button>
              ))}
            </div>
            <Button size="icon" className="ml-0 md:ml-2 shrink-0" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
