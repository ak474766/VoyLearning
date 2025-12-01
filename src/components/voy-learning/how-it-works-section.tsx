"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { GlassCard } from "./glass-card";
import { BrainCircuit, FileText, Network, Sparkles, Zap, Map as MapIcon } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";
import { cn } from "@/lib/utils";

// Node Data
const NODES = {
  root: { title: "VoyLearning", icon: Sparkles, color: "from-violet-500 to-fuchsia-500" },
  branches: [
    {
      id: "notes",
      title: "Smart Notes",
      icon: FileText,
      color: "text-blue-400",
      description: "Static syllabus becomes an interactive workspace.",
      detail: "Edit, remix, and ask AI to simplify complex topics instantly."
    },
    {
      id: "quizzes",
      title: "AI Quizzes",
      icon: Zap,
      color: "text-amber-400",
      description: "Instant self-assessment from your materials.",
      detail: "Generate practice questions to test your retention immediately."
    },
    {
      id: "mindmap",
      title: "Mind Maps",
      icon: Network,
      color: "text-emerald-400",
      description: "Visualize connections automatically.",
      detail: "See the big picture and how concepts link together."
    }
  ]
};

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const branchRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // State to store line coordinates
  const [paths, setPaths] = useState<{ start: { x: number, y: number }, end: { x: number, y: number }, id: string }[]>([]);

  // Function to calculate paths based on element positions
  const calculatePaths = () => {
    if (!rootRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rootRect = rootRef.current.getBoundingClientRect();

    // Relative center of root
    const startX = rootRect.right - containerRect.left;
    const startY = rootRect.top - containerRect.top + rootRect.height / 2;

    const newPaths: any[] = [];

    // Level 1 Paths (Root -> Branches)
    branchRefs.current.forEach((branch, i) => {
      if (!branch) return;
      const branchRect = branch.getBoundingClientRect();
      const endX = branchRect.left - containerRect.left;
      const endY = branchRect.top - containerRect.top + branchRect.height / 2;

      newPaths.push({
        id: `path-root-${i}`,
        start: { x: startX, y: startY },
        end: { x: endX, y: endY },
        type: 'curve'
      });

      // Level 2 Paths (Branch -> Detail)
      const detail = detailRefs.current[i];
      if (detail) {
        const detailRect = detail.getBoundingClientRect();
        const dStartX = branchRect.right - containerRect.left;
        const dStartY = endY;
        const dEndX = detailRect.left - containerRect.left;
        const dEndY = detailRect.top - containerRect.top + detailRect.height / 2;

        newPaths.push({
          id: `path-branch-${i}`,
          start: { x: dStartX, y: dStartY },
          end: { x: dEndX, y: dEndY },
          type: 'straight'
        });
      }
    });

    setPaths(newPaths);
  };

  // Recalculate on resize
  useLayoutEffect(() => {
    calculatePaths();
    window.addEventListener('resize', calculatePaths);
    return () => window.removeEventListener('resize', calculatePaths);
  }, []);

  // GSAP Animation - Re-run when paths change to ensure SVG elements exist
  useLayoutEffect(() => {
    if (prefersReducedMotion() || paths.length === 0) return;
    const container = containerRef.current;
    if (!container) return;

    let ctx: gsap.Context;
    let animation: gsap.core.Timeline;

    const init = async () => {
      const { gsap } = await import("gsap/dist/gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        animation = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=150%", // Reduced slightly to feel snappier
            pin: true,
            scrub: 1,
            // Ensure pinned element stays on top
            onRefresh: (self) => {
              if (self.pin) gsap.set(self.pin, { zIndex: 10 });
            }
          }
        });

        // 0. Reveal Header
        animation.fromTo('#how-it-works-header',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );

        // 1. Reveal Branches
        animation.to('.line-level-1', {
          strokeDashoffset: 0,
          duration: 1,
          stagger: 0.2
        }, ">-0.4") // Overlap slightly with header
          .fromTo(branchRefs.current,
            { opacity: 0, scale: 0.8, x: -20 },
            { opacity: 1, scale: 1, x: 0, duration: 0.5, stagger: 0.2 },
            "<0.2"
          );

        // 2. Reveal Details
        animation.to('.line-level-2', {
          strokeDashoffset: 0,
          duration: 1,
          stagger: 0.2
        })
          .fromTo(detailRefs.current,
            { opacity: 0, scale: 0.8, x: -20 },
            { opacity: 1, scale: 1, x: 0, duration: 0.5, stagger: 0.2 },
            "<0.2"
          );

      }, container);
    };

    init();

    return () => {
      ctx?.revert();
      // Kill ScrollTrigger instance if it exists to prevent ghosts
      if (animation) animation.scrollTrigger?.kill();
    };
  }, [paths]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center py-20 z-10"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-background to-background" />
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* SVG Layer for Lines */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {paths.map((p) => {
          // Bezier curve logic
          const midX = (p.start.x + p.end.x) / 2;
          const d = `M ${p.start.x} ${p.start.y} C ${midX} ${p.start.y}, ${midX} ${p.end.y}, ${p.end.x} ${p.end.y}`;

          return (
            <path
              key={p.id}
              d={d}
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              className={cn(
                "transition-all duration-300",
                p.id.includes('root') ? 'line-level-1' : 'line-level-2'
              )}
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          );
        })}
      </svg>

      <div className="container px-4 relative z-10 w-full max-w-7xl flex flex-col gap-16 md:gap-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 opacity-0 translate-y-8" id="how-it-works-header">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
            <BrainCircuit className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-medium text-violet-200 uppercase tracking-wider">Workflow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Overview of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">VoyLearning</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            VoyLearning connects the dots for you. Start with a central concept and watch how our platform automatically branches out into notes, quizzes, and visual aids.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 md:gap-24 items-center">

          {/* Level 0: Root */}
          <div className="flex justify-center md:justify-start">
            <div ref={rootRef} className="relative group z-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <GlassCard className="relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 bg-slate-950/80 backdrop-blur-xl">
                <NODES.root.icon className="w-10 h-10 text-white mb-2" />
                <span className="text-sm font-bold text-white tracking-wide">VoyLearning</span>
              </GlassCard>
            </div>
          </div>

          {/* Level 1: Branches */}
          <div className="flex flex-col gap-8 md:gap-16">
            {NODES.branches.map((node, i) => (
              <div
                key={node.id}
                ref={el => { branchRefs.current[i] = el }}
                className="relative group"
              >
                <GlassCard className="p-5 border-white/5 bg-slate-900/60 hover:bg-slate-800/60 transition-colors w-full max-w-[280px]">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-lg bg-white/5", node.color)}>
                      <node.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{node.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">{node.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Level 2: Details */}
          <div className="flex flex-col gap-8 md:gap-16">
            {NODES.branches.map((node, i) => (
              <div
                key={`${node.id}-detail`}
                ref={el => { detailRefs.current[i] = el }}
                className="relative"
              >
                <GlassCard className="p-6 border-l-4 border-l-violet-500/50 border-y-white/5 border-r-white/5 bg-gradient-to-r from-violet-500/5 to-transparent">
                  <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                    {node.detail}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
