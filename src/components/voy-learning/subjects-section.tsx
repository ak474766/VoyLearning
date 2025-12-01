"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { prefersReducedMotion } from "@/lib/gsap-utils";
import ScrollFloat from '@/components/ui/Scrollfloat';


const subjects = [
  { id: "ata", title: "ATA", name: "Algorithmic Thinking and its Applications", href: "/dashboard/ata" },
  { id: "bda", title: "BDA", name: "Basics Of Data Analytics", href: "/dashboard/bda" },
  { id: "fsp", title: "FSP", name: "Foundations Of Statistics and Probability", href: "/dashboard/fsp" },
  { id: "lana", title: "LANA", name: "Linear Algebra and Numerical Analysis", href: "/dashboard/lana" },
];

// Front and back images for the 4 subjects. Files live under public/New folder
const subjectImagesFront = [
  "/New folder/image.png",
  "/New folder/image (1).png",
  "/New folder/image (2).png",
  "/New folder/image (3).png",
];
const subjectImagesBack = [
  "/New folder/image (4).png",
  "/New folder/image (5).png",
  "/New folder/image (6).png",
  "/New folder/image (7).png",
];

export default function SubjectsSectionClient() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [semester, setSemester] = useState<1 | 2>(1);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    if (!section) return;
    let ctx: any | undefined;
    let mounted = true;
    (async () => {
      const { gsap } = await import("gsap/dist/gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;
      ctx = gsap.context(() => {
        const stage = section.querySelector("[data-stage]") as HTMLElement | null;
        const grid = section.querySelector("[data-grid]") as HTMLElement | null;
        const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"));
        const faces = Array.from(section.querySelectorAll<HTMLElement>("[data-card3d]"));
        if (!stage || !grid || cards.length === 0) return;
        gsap.set(stage, { perspective: 1000 });
        gsap.set([grid, cards], { transformStyle: "preserve-3d", willChange: "transform" });
        gsap.set(grid, { autoAlpha: 1 });
        const cols = 4;
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2400",
            scrub: 0.75,
            pin: true,
          },
        });
        tl.fromTo(
          grid,
          { xPercent: -15, rotateY: -5, scale: 0.975 },
          { xPercent: 0, rotateY: -3, scale: 1, duration: 0.45 }
        );
        tl.to(
          cards,
          {
            y: (i, _el, arr) => gsap.utils.mapRange(0, (arr as any).length - 1, -16, 72, i as number),
            rotationZ: (i, _el, arr) => gsap.utils.mapRange(0, (arr as any).length - 1, 5, -5, i as number),
            rotationY: -6,
            z: (i, _el, arr) => gsap.utils.mapRange(0, (arr as any).length - 1, 0, 64, i as number),
            stagger: { each: 0.03 },
            duration: 0.45,
            ease: "sine.inOut",
          },
          ">-0.1"
        );
        tl.to(
          grid,
          { rotateY: -12, transformOrigin: "left center", duration: 0.4 },
          ">-0.08"
        );
        // Ensure label shows Sem 1 prior to flip when scrubbing back and forth
        tl.call(() => setSemester(1));
        tl.to(
          cards,
          {
            x: (i) => {
              const col = (i as number) % cols;
              return (col - (cols - 1) / 2) * 24;
            },
            z: (i) => {
              const col = (i as number) % cols;
              const depth = (cols - 1) / 2 - Math.abs(col - (cols - 1) / 2);
              return depth * 54;
            },
            rotationY: (i) => {
              const col = (i as number) % cols;
              return gsap.utils.mapRange(0, cols - 1, -10, 10, col);
            },
            duration: 0.5,
          },
          "<"
        );
        tl.to(
          faces,
          {
            rotateY: "+=180",
            transformOrigin: "center center",
            stagger: { each: 0.18 },
            duration: 0.55,
          }
        );
        // After flip, switch to Sem 2
        tl.call(() => setSemester(2));

        // Step 1: Reduce angle and go back to center (Reset to initial grid state)
        tl.to(
          cards,
          {
            x: 0,
            y: 0,
            z: 0,
            rotationY: 0,
            rotationZ: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          }
        );
        tl.to(
          grid,
          {
            rotateY: 0, // Reset grid rotation to 0 (flat)
            xPercent: 0, // Ensure grid is centered
            transformOrigin: "center center",
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          },
          "<"
        );

        // Step 2: Slide to right corner
        tl.to(
          grid,
          {
            xPercent: 25, // Slide significantly to right
            duration: 1,
            ease: "power2.inOut"
          }
        );
      }, section);
    })();
    return () => {
      mounted = false;
      ctx?.revert?.();
    };
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    if (!section) return;
    let cleanup: (() => void) | undefined;
    let mounted = true;
    (async () => {
      const { gsap } = await import("gsap/dist/gsap");
      if (!mounted) return;
      const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"));
      const tiltTo = new Map<HTMLElement, { rx: any; ry: any }>();
      const moveHandlers = new Map<HTMLElement, (e: PointerEvent) => void>();
      const leaveHandlers = new Map<HTMLElement, () => void>();
      cards.forEach((card) => {
        const rx = gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power3.out" });
        const ry = gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power3.out" });
        tiltTo.set(card, { rx, ry });
        const onMove = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const px = (x / rect.width) * 100;
          const py = (y / rect.height) * 100;
          const dx = x / rect.width - 0.5;
          const dy = y / rect.height - 0.5;
          const max = 6;
          ry(dx * max * 2);
          rx(-dy * max * 2);
          card.style.setProperty("--px", `${px}%`);
          card.style.setProperty("--py", `${py}%`);
        };
        const onLeave = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
        };
        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        moveHandlers.set(card, onMove);
        leaveHandlers.set(card, onLeave);
      });
      cleanup = () => {
        cards.forEach((card) => {
          const onMove = moveHandlers.get(card);
          const onLeave = leaveHandlers.get(card);
          if (onMove) card.removeEventListener("pointermove", onMove);
          if (onLeave) card.removeEventListener("pointerleave", onLeave);
        });
      };
    })();
    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  if (prefersReducedMotion()) {
    return (
      <section
        id="subjects"
        className="relative w-full py-24 md:py-32 mt-12 bg-background"
      >
        <div className="absolute inset-0 z-0 section-radial-bg" />
        <div className="container px-4 md:px-6 mt-12 relative z-10">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="mb-12 text-center flex justify-center"
            textClassName="text-foreground font-extrabold tracking-tight text-[clamp(2.4rem,6vw,4rem)] whitespace-nowrap"
          >
            Explore Subjects
          </ScrollFloat>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((s) => (
              <li key={s.id} className="rounded-xl border border-slate-200 bg-white shadow-md p-6">
                <Link href={s.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 rounded-lg">
                  <div className="text-2xl font-semibold text-slate-900">{s.title}</div>
                  <div className="text-sm text-slate-600">{s.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      id="subjects"
      ref={sectionRef}
      aria-label="Explore Subjects"
      className="relative w-full bg-background"
    >
      <div className="absolute inset-0 z-0 section-radial-bg" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div data-stage className="relative h-[100svh] w-full flex items-center justify-center overflow-visible [perspective:1000px]">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full text-center z-10 pointer-events-none space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/90 border border-violet-200/50 px-5 py-1.5 shadow-sm backdrop-blur-md transition-transform hover:scale-105 duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-violet-700 uppercase">
                Curated Syllabus
              </span>
            </div>
            <ScrollFloat
              animationDuration={3}
              ease='back.inOut(2)'
              scrollStart='top center'
              scrollEnd='center center'
              stagger={0.03}
              containerClassName="my-0 mb-0 text-center"
              textClassName="text-foreground font-extrabold tracking-tight text-[clamp(3rem,7vw,5rem)] whitespace-nowrap drop-shadow-sm"
            >
              Explore Subjects
            </ScrollFloat>
            <div className="max-w-2xl mx-auto space-y-2">
              <ScrollFloat
                animationDuration={3}
                ease='back.inOut(2)'
                scrollStart='top center'
                scrollEnd='center center'
                stagger={0.02}
                containerClassName="my-0 mb-0 text-center"
                textClassName="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed"
              >
                Dive into AI-enhanced notes for your semester.
              </ScrollFloat>
              <ScrollFloat
                animationDuration={3}
                ease='back.inOut(2)'
                scrollStart='top center'
                scrollEnd='center center'
                stagger={0.02}
                containerClassName="my-0 mb-0 text-center"
                textClassName="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500"
              >
                Select a card to start learning.
              </ScrollFloat>
            </div>
          </div>
          <div
            data-grid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl origin-left will-change-transform [transform-style:preserve-3d] mt-24"
          >
            {subjects.map((s, i) => (
              <Link
                key={s.id}
                href={s.href}
                data-card
                className="group relative block rounded-2xl border border-white/20 bg-background/50 backdrop-blur-xl shadow-premium-lg overflow-hidden will-change-transform [transform-style:preserve-3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-glow-purple h-64 sm:h-72 lg:h-80"
              >
                <div
                  data-card3d
                  className="relative h-full w-full [transform-style:preserve-3d] will-change-transform"
                >
                  <div className="absolute inset-0 z-10 [backface-visibility:hidden]">
                    <Image
                      src={subjectImagesFront[i % subjectImagesFront.length]}
                      alt={s.title}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  <div
                    className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(80%_80%_at_80%_20%,rgba(56,189,248,0.25),transparent)]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-sky-400/10 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 z-10 [backface-visibility:hidden]"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <Image
                      src={subjectImagesBack[i % subjectImagesBack.length]}
                      alt={`${s.title} back`}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 mix-blend-overlay" />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(200px 200px at var(--px,50%) var(--py,50%), rgba(255,255,255,0.08), transparent 60%)" }} />
              </Link>
            ))}
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-white/20 shadow-premium-md">
              <span className={`text-sm font-bold transition-colors duration-300 ${semester === 1 ? 'text-violet-500' : 'text-muted-foreground'}`}>Semester 1</span>
              <div className="w-10 h-5 bg-muted rounded-full relative border border-white/10">
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shadow-sm transition-all duration-500 ${semester === 1 ? 'left-0.5' : 'left-[22px]'}`} />
              </div>
              <span className={`text-sm font-bold transition-colors duration-300 ${semester === 2 ? 'text-pink-500' : 'text-muted-foreground'}`}>Semester 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
