"use client";

import * as React from "react";
import Image from "next/image";
import DotPattern from "./dot-pattern";
import { GlassCard, CardContent } from "./glass-card";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";
import { cn } from "@/lib/utils";

const subjectImages = [
  "/images/subject_image/ATA_content.jpg",
  "/images/subject_image/BDA_content.jpg",
  "/images/subject_image/FAI_content.jpg",
  "/images/subject_image/FSP_content.jpg",
  "/images/subject_image/LANA_content.jpg",
  "/images/subject_image/NO_content.jpg",
  "/images/subject_image/PRP_content.jpg",
  "/images/subject_image/VSD_content.jpg",
];

export default function ProblemSolutionSection() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const root = containerRef.current;
    const scroller = scrollerRef.current;
    if (!root || !scroller) return;

    import("gsap/dist/gsap").then(({ gsap }) => {
      import("gsap/dist/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Entrance Animations
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: root, start: "top 70%" },
        });

        tl.fromTo(
          root.querySelectorAll('[data-anim="chip"]'),
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        )
          .fromTo(
            root.querySelector('[data-anim="heading"]'),
            { opacity: 0, y: 30, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
            "-=0.4"
          )
          .fromTo(
            root.querySelectorAll('[data-anim="card"]'),
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.15 },
            "-=0.4"
          )
          .fromTo(
            root.querySelector('[data-anim="visual"]'),
            { opacity: 0, scale: 0.95, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.2)" },
            "-=0.6"
          );

        // Infinite Vertical Scroll Animation
        // We clone the list so we have enough content to loop
        const totalHeight = scroller.scrollHeight / 2;

        gsap.to(scroller, {
          y: -totalHeight,
          duration: 40, // Adjust speed here (seconds)
          ease: "none",
          repeat: -1,
          modifiers: {
            y: gsap.utils.unitize((y) => parseFloat(y) % totalHeight) // Seamless loop
          }
        });
      });
    });
  });

  return (
    <section
      id="why"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 section-radial-bg opacity-80" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <DotPattern className="opacity-[0.15]" />

      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] xl:gap-20">

          {/* Left Column: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 shadow-premium-sm backdrop-blur-md transition-transform hover:scale-105"
                data-anim="chip"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-500/90">
                  The Problem
                </span>
              </div>

              <div className="space-y-4" data-anim="heading">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                  Static notes are <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
                    dead ends.
                  </span>
                </h2>
                <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                  PDFs and screenshots lock your knowledge away. VoyLearning transforms them into a
                  <span className="text-foreground font-medium"> living workspace </span>
                  where you can edit, question, and master every concept.
                </p>
              </div>
            </div>

            <div className="grid gap-5" data-anim="copy">
              {/* Problem Card */}
              <div data-anim="card" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <GlassCard
                  className="relative border-white/5 bg-background/40 p-6 transition-all duration-300 hover:bg-background/60"
                >
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <XCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground/90">The Old Way</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Staring at unchangeable PDFs. Copy-pasting into separate docs just to add a note. Losing context between your questions and the source material.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Solution Card */}
              <div data-anim="card" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
                <GlassCard
                  className="relative border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-6 shadow-glow-blue"
                >
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">The Voy Way</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Directly interact with the syllabus. Ask AI to <span className="text-emerald-400 font-medium">simplify complex paragraphs</span> or insert diagrams right where you need them. Save <i>your</i> perfect version.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals (Infinite Scroll) */}
          <div className="relative h-[500px] lg:h-[600px] w-full mx-auto lg:ml-auto" data-anim="visual">
            {/* Browser Window Frame */}
            <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden z-10">
              {/* Browser Header Bar */}
              <div className="absolute top-0 inset-x-0 h-10 bg-slate-900/95 backdrop-blur-md z-20 border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex-1">
                  <div className="h-6 w-full max-w-sm mx-auto bg-slate-800/50 rounded flex items-center justify-center border border-white/5">
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                      voylearning.com/notes
                    </span>
                  </div>
                </div>
                <div className="w-10" /> {/* Spacer */}
              </div>

              {/* Gradient Masks for smooth fade in/out */}
              <div className="absolute top-10 left-0 right-0 h-20 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />

              {/* Scrolling Content */}
              <div ref={scrollerRef} className="absolute top-0 left-0 w-full pt-16 pb-10 px-4 space-y-6">
                {/* Render Double List for Infinite Loop */}
                {[...subjectImages, ...subjectImages].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg bg-slate-900 group"
                  >
                    <Image
                      src={src}
                      alt={`Subject preview ${i}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-medium text-white px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
                        View Note
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements behind the frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 rounded-[2rem] blur-2xl -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
