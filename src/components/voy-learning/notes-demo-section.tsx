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
      className="relative w-full py-24 md:py-32 bg-secondary overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%), radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%), radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%), radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%), #000000',
      }}
    >

      <DotPattern className="opacity-40" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">See the Difference</h2>
          <p className="text-muted-foreground md:text-lg">Transform static notes into personalized learning materials</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2" data-animate>
          <GlassCard className="relative p-0">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm text-muted-foreground">Original Note</span>
              <div />
            </div>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <h3 className="m-0">Semantic HTML</h3>
                <p>
                  Semantic HTML provides meaning to the structure of web content. Elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code> help both users and search engines understand the layout.
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

          <GlassCard className="relative p-0 ring-1 ring-transparent" data-animate>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm text-gradient flex items-center gap-1"><Sparkles className="h-4 w-4" /> AI-Enhanced Note</span>
              <div />
            </div>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <h3 className="m-0 text-gradient">Semantic HTML</h3>
                <p>
                  Semantic HTML <mark className="rounded bg-gradient-to-r from-purple-100 to-pink-100 px-1">improves accessibility and SEO</mark> by providing meaningful structure. Use elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;article&gt;</code> to describe sections of your page.
                </p>
                <pre className="overflow-auto rounded-lg p-4 text-xs" style={{ backgroundImage: 'var(--gradient-hero)', color: '#111' }}><code>{`<header aria-label="Site header">
  <nav aria-label="Primary navigation">...</nav>
</header>
<main id="content">
  <article role="article">...</article>
</main>`}</code></pre>
              </div>
            </CardContent>
          </GlassCard>
        </div>

        <div className="mx-auto mt-10 max-w-3xl" data-animate>
          <div className={cn("glass rounded-2xl p-3 md:p-4 flex items-center gap-2")}
          >
            <label htmlFor="ai-modify-input" className="sr-only">Ask AI to modify this note</label>
            <input
              id="ai-modify-input"
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70 px-3"
              placeholder="Ask AI to modify this note..."
              aria-label="Ask AI to modify this note"
            />
            <div className="flex gap-2">
              {['Add examples', 'Simplify', 'Add diagrams'].map((s) => (
                <button key={s} className="hidden sm:inline-flex rounded-full px-3 py-1 text-sm text-foreground/80 hover:text-foreground transition-colors glass">
                  {s}
                </button>
              ))}
            </div>
            <Button size="icon" className="ml-2" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
