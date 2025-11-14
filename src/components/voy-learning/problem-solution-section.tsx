"use client";

import * as React from "react";
import DotPattern from "./dot-pattern";
import { GlassCard, CardContent } from "./glass-card";
import { AlertCircle, Lightbulb } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";


export default function ProblemSolutionSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const sceneRef = React.useRef<HTMLDivElement | null>(null);

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

        const scene = sceneRef.current;
        if (scene) {
          
          gsap.to(scene.querySelectorAll('[data-scene-layer]'), {
            y: (i) => (i % 2 === 0 ? -8 : -4),
            rotate: (i) => (i % 2 === 0 ? 1.2 : -0.8),
            duration: 3.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: 0.2,
          });
        }
      });
    });
  });

  
  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const scene = sceneRef.current;
    if (!scene) return;
    let cleanup: (() => void) | undefined;
    let mounted = true;
    import("gsap/dist/gsap").then(({ gsap }) => {
      if (!mounted) return;
      const lerpTo = {
        rx: gsap.quickTo(scene, "rotateX", { duration: 0.6, ease: "power3.out" }),
        ry: gsap.quickTo(scene, "rotateY", { duration: 0.6, ease: "power3.out" }),
        tx: gsap.quickTo(scene, "x", { duration: 0.6, ease: "power3.out" }),
        ty: gsap.quickTo(scene, "y", { duration: 0.6, ease: "power3.out" }),
      } as const;
      const onMove = (e: MouseEvent) => {
        const rect = scene.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const maxTilt = 8;
        lerpTo.ry(dx * maxTilt);
        lerpTo.rx(-dy * maxTilt);
        lerpTo.tx(dx * 6);
        lerpTo.ty(dy * 6);
      };
      const onLeave = () => {
        gsap.to(scene, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.8, ease: "power3.out" });
      };
      scene.addEventListener("mousemove", onMove);
      scene.addEventListener("mouseleave", onLeave);
      cleanup = () => {
        scene.removeEventListener("mousemove", onMove);
        scene.removeEventListener("mouseleave", onLeave);
      };
    });
    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="why"
      className="relative w-full py-24 md:py-32 bg-secondary overflow-hidden"
      style={{
        background:
          '#000000',
      }}
    >

      
      <DotPattern className="opacity-20" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[100px]" />
      </div>
      <div className="container px-4 md:px-6" ref={ref}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          <div className="relative" data-anim="scene">
            <div className="absolute inset-0 -z-10 rounded-2xl blur-3xl" style={{ backgroundImage: 'var(--gradient-hero)' }} />
            <div
              ref={sceneRef}
              className="relative h-72 sm:h-80 lg:h-96 w-full [transform-style:preserve-3d] rounded-3xl shadow-premium-lg bg-white/40 dark:bg-white/5 glass flex items-center justify-center overflow-hidden will-change-transform"
            >
              
              <div
                data-scene-layer
                className="absolute inset-x-8 top-10 h-40 rounded-2xl bg-gradient-to-br from-white/70 to-white/20 dark:from-white/10 dark:to-white/5 shadow-premium-lg border border-white/40 dark:border-white/10 backdrop-blur-xl"
                style={{ transform: "translateZ(38px) rotate(-3deg)" }}
              />
              <div
                data-scene-layer
                className="absolute inset-x-12 top-24 h-44 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 shadow-premium-lg border border-white/30 dark:border-white/10 backdrop-blur-xl"
                style={{ transform: "translateZ(62px) rotate(2.5deg)" }}
              />
              <div
                data-scene-layer
                className="absolute inset-x-16 top-36 h-40 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 shadow-premium-lg border border-white/20 dark:border-white/10 backdrop-blur-xl"
                style={{ transform: "translateZ(86px) rotate(-1.5deg)" }}
              />
              
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative grid place-items-center rounded-2xl bg-white/70 dark:bg-white/10 p-6 shadow-premium-lg ring-1 ring-white/40 dark:ring-white/10">
                  <Lightbulb className="h-14 w-14 text-primary drop-shadow" />
                </div>
              </div>
              
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl" />
            </div>
          </div>

          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 w-fit ring-1 ring-white/20" data-anim="chip">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Why VoyLearning?</span>
            </div>
            <h2
              data-anim="heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.1]"
            >
              Static notes are limiting. <span className="text-gradient">Edit them</span> and make them yours.
            </h2>
            <div className="space-y-4 text-muted-foreground md:text-lg" data-anim="copy">
              <p>
                As a junior, you learn fastest when you can change things. VoyLearning ships clean, curated HTML notes and lets you <span className="text-foreground font-medium text-gradient">edit them directly</span> with AI assistance.
              </p>
              <p className="text-foreground font-medium">
                Pick a subject (ATA, BDA, FSP, LANA), open a note, ask the assistant to modify a section, add examples, or simplify concepts—then save your personalized version.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Too passive",
                  desc: "Static notes don't adapt to your understanding.",
                },
                {
                  title: "Hard to remember",
                  desc: "Without examples, concepts don't stick.",
                },
                {
                  title: "Time-consuming",
                  desc: "Hunting for the right explanation slows you down.",
                },
              ].map((p) => (
                <GlassCard
                  key={p.title}
                  className="group relative p-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-premium-lg"
                  hover
                  data-anim="card"
                >
                  <CardContent className="p-0">
                    <div className="text-lg font-semibold tracking-tight">{p.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                  </CardContent>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)" }} />
                  <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-fuchsia-400/10 to-transparent blur-[2px] transition-opacity duration-300" />
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

