"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";

export default function HeroScrolly() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const frameCount = 192; // 00001.jpg ... 00192.jpg
  const srcFor = (i: number) => `/image/${String(i).padStart(5, "0")}.jpg`;

  const images = useMemo(() => {
    return Array.from({ length: frameCount }, (_, idx) => {
      const img = new Image();
      img.src = srcFor(idx + 1);
      return img;
    });
  }, []);

  const scopeRef = useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const contentEl = contentRef.current;

    if (!canvas || !wrapper) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = { frame: 0 };
    let ctaVisible = false;

    const setSize = () => {
      const w = wrapper.clientWidth;
      const h = window.innerHeight;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    };

    const render = () => {
      const img = images[state.frame];
      if (!img || !img.complete) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = Math.floor(iw * scale);
      const dh = Math.floor(ih * scale);
      const dx = Math.floor((cw - dw) / 2);
      const dy = Math.floor((ch - dh) / 2);
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);

      // Apply subtle blur that fades quickly
      const blurEndFrame = 30;
      const blurT = Math.max(0, Math.min(1, state.frame / (blurEndFrame - 1)));
      const blurMax = 8; // px - reduced for cleaner look
      const blurPx = blurMax * (1 - blurT);
      if (canvas.style.filter !== `blur(${blurPx}px)`) {
        canvas.style.filter = `blur(${blurPx}px)`;
      }
    };

    setSize();
    if (images[0]?.complete) render();
    else images[0].onload = render;

    if (ctaRef.current) {
      gsap.set(ctaRef.current, { autoAlpha: 0, y: 12, scale: 0.98, pointerEvents: "none" });
    }

    // Initial content animation
    if (contentEl) {
      gsap.fromTo(contentEl.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }

    const tween = gsap.to(state, {
      frame: frameCount - 1,
      ease: "none",
      snap: "frame",
      onUpdate: () => {
        render();
        const show = state.frame >= 129;
        if (show && !ctaVisible && ctaRef.current) {
          ctaVisible = true;
          gsap.to(ctaRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", onStart: () => { if (ctaRef.current) ctaRef.current.style.pointerEvents = "auto"; } });
        } else if (!show && ctaVisible && ctaRef.current) {
          ctaVisible = false;
          gsap.to(ctaRef.current, { autoAlpha: 0, y: 12, scale: 0.98, duration: 0.35, ease: "power3.inOut", onComplete: () => { if (ctaRef.current) ctaRef.current.style.pointerEvents = "none"; } });
        }

        // Fade out content on scroll with smooth parallax
        if (contentEl) {
          const contentOpacity = Math.max(0, 1 - state.frame / 40); // Fade out by frame 40 (slower)
          contentEl.style.opacity = String(contentOpacity);
          contentEl.style.transform = `translate(-50%, -50%) translateY(${-state.frame * 1.5}px)`; // Gentler parallax
          contentEl.style.pointerEvents = contentOpacity <= 0.1 ? 'none' : 'auto';
        }
      },
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=2000",
        scrub: 0.5,
        pin: true,
      },
    });

    const onResize = () => {
      setSize();
      render();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tween.kill();
    };
  });

  return (
    <section id="home" ref={scopeRef as any} className="relative w-full bg-white overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(255, 140, 60, 0.5), transparent 70%)",
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div ref={wrapperRef} className="relative h-[100svh] w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />

        {/* Hero Content Overlay - Enhanced */}
        <div
          ref={contentRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-5xl px-6 text-center flex flex-col items-center gap-8"
        >
          {/* Eyebrow text */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-xl border border-white/50 px-5 py-2.5 shadow-premium-sm hover:bg-white/40 transition-colors duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
            </span>
            <span className="text-sm font-bold tracking-wide text-slate-800 uppercase text-[11px]">
              AI-Powered Learning Platform
            </span>
          </div>

          {/* Main Heading */}
          <div className="relative max-w-6xl mx-auto">
            <h1 className="relative z-20 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
              Master Engineering
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 animate-gradient pb-4">
                with AI-Powered Notes
              </span>
            </h1>

            {/* Floating Elements */}
            <div className="absolute -top-16 -right-4 md:-right-16 w-24 md:w-40 aspect-square pointer-events-none animate-float hidden sm:block z-30 opacity-90">
              <img
                src="/images/pencil_and_book.png"
                alt="Learning illustration"
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-8 md:-left-23 w-20 md:w-36 aspect-square pointer-events-none animate-float hidden sm:block z-10 opacity-90" style={{ animationDelay: '2s' }}>
              <img
                src="/images/3d_notebook.png"
                alt="Notebook illustration"
                className="w-full h-full object-contain drop-shadow-2xl hover:rotate-12 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 max-w-3xl font-medium leading-relaxed tracking-tight">
            Transform static syllabus notes into
            <span className="text-slate-900 font-semibold"> interactive, personalized </span>
            learning workspaces.
            <span className="block mt-1 text-slate-600">Edit, ask, and master concepts faster.</span>
          </p>

          {/* CTA Buttons - Glassmorphic Design */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 items-center justify-center">
            <Link
              href="/signup"
              className="group relative inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-12 text-lg font-bold text-white shadow-glow-purple transition-all duration-300 hover:shadow-premium-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="#subjects"
              className="group inline-flex h-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/40 px-12 text-lg font-bold text-slate-800 shadow-premium-md transition-all duration-300 hover:bg-white/30 hover:shadow-premium-lg hover:scale-105 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              <span className="flex items-center gap-3">
                Explore Subjects
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div ref={ctaRef} className="absolute left-1/2 bottom-10 z-20 -translate-x-1/2">
          <Link
            href="#subjects"
            aria-label="Explore subjects"
            className="group relative inline-flex h-14 items-center gap-3 rounded-full bg-white/50 backdrop-blur-md border-2 border-white/60 px-6 pr-8 text-base md:text-lg font-semibold text-slate-800 shadow-xl transition-all duration-300 ease-out hover:bg-white/70 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <span className="drop-shadow-sm">Explore Subjects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
