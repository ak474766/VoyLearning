"use client";

import * as React from "react";
import DotPattern from "./dot-pattern";
import { GlassCard, CardContent } from "./glass-card";
import { AlertCircle } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";


export default function ProblemSolutionSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const root = ref.current;
    if (!root) return;
    import("gsap/dist/gsap").then(({ gsap }) => {
      import("gsap/dist/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: { trigger: root, start: "top 78%" },
        });

        tl.fromTo(
          root.querySelectorAll('[data-anim="chip"]'),
          { opacity: 0, y: 10, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.1 }
        )
          .fromTo(
            root.querySelector('[data-anim="heading"]'),
            { opacity: 0, y: 18, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
            "-=0.1"
          )
          .fromTo(
            root.querySelectorAll('[data-anim="copy"] p'),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
            "-=0.2"
          )
          .fromTo(
            root.querySelectorAll('[data-anim="card"]'),
            { opacity: 0, y: 20, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 }
          );
      });
    });
  });

  return (
    <section
      id="why"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 section-radial-bg" />
      <DotPattern className="opacity-20" />
      <div className="container px-4 md:px-6" ref={ref}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:gap-16">
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 w-fit ring-1 ring-white/20"
              data-anim="chip"
            >
              <AlertCircle className="h-4 w-4" />
              <span className="text-xs font-medium tracking-[0.24em] uppercase">
                Why VoyLearning?
              </span>
            </div>
            <div className="space-y-3" data-anim="heading">
              <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Notes shouldn&apos;t be <span className="text-gradient">read-only</span>.
              </h2>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                VoyLearning turns static HTML notes into a workspace you can actually edit, remix,
                and make your own—without losing the clean structure of the original.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2" data-anim="copy">
              <GlassCard
                className="relative p-4 shadow-premium-md"
                hover
                data-anim="card"
              >
                <CardContent className="p-0 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                    The usual way
                  </p>
                  <p className="text-sm font-semibold">
                    Copy-paste from PDFs and hope it sticks.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Disconnected notes, no safe place to experiment or ask follow-up questions
                    in context.
                  </p>
                </CardContent>
              </GlassCard>
              <GlassCard
                className="relative p-4 shadow-premium-md"
                hover
                data-anim="card"
              >
                <CardContent className="p-0 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gradient">
                    With VoyLearning
                  </p>
                  <p className="text-sm font-semibold">
                    Edit the note itself, not just your notebook.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ask AI to tweak, simplify, or extend the HTML in front of you—then save your
                    personalized version per subject.
                  </p>
                </CardContent>
              </GlassCard>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-gradient-purple/40 via-gradient-pink/25 to-gradient-blue/30 blur-3xl opacity-80" />
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="mb-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink" />
                  Live note previews
                </span>
                <span className="text-xs text-foreground/60">16:9 vertical slider</span>
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/12 bg-slate-950/80 shadow-premium-lg">
                <div className="absolute inset-x-4 top-3 flex items-center justify-between text-[10px] font-medium text-white/65">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ATA · BDA · FSP · LANA
                  </span>
                  <span className="rounded-full border border-white/14 bg-white/5 px-2 py-0.5">
                    Editing
                  </span>
                </div>
                <div className="absolute inset-0 flex h-[300%] flex-col animate-vertical-slider">
                  <div className="flex h-1/3 items-center justify-center px-4">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-premium-lg">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.45),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.45),transparent_55%)] opacity-80" />
                      <div className="relative flex h-full flex-col justify-between p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-200/80">
                          Original note
                        </p>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Semantic HTML straight from the syllabus.
                          </p>
                          <p className="mt-1 text-[11px] text-slate-200/85">
                            Clean, well-structured HTML you can inspect and understand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-1/3 items-center justify-center px-4">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-premium-lg">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.5),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.55),transparent_55%)] opacity-80" />
                      <div className="relative flex h-full flex-col justify-between p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-200/80">
                          AI-tuned
                        </p>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Ask for examples, diagrams, or simpler wording.
                          </p>
                          <p className="mt-1 text-[11px] text-slate-200/85">
                            The note updates in place instead of sending you to a new tab.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-1/3 items-center justify-center px-4">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-premium-lg">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.5),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.6),transparent_55%)] opacity-80" />
                      <div className="relative flex h-full flex-col justify-between p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-200/80">
                          Your saved version
                        </p>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Keep a personalized copy for each subject.
                          </p>
                          <p className="mt-1 text-[11px] text-slate-200/85">
                            Revisit the exact explanations that finally clicked for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

