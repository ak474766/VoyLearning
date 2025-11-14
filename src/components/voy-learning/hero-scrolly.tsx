"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroScrolly() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

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
    const lottieEl = lottieRef.current;
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

      // Apply decreasing blur on the canvas from frame 1..87 (kept below Lottie overlay)
      const blurEndFrame = 50;
      const blurT = Math.max(0, Math.min(1, state.frame / (blurEndFrame - 1)));
      const blurMax = 12; // px
      const blurPx = blurMax * (1 - blurT);
      if (canvas.style.filter !== `blur(${blurPx}px)`) {
        canvas.style.filter = `blur(${blurPx}px)`;
      }

      // Lottie overlay control: visible frames 1..87, scale down and fade out to 0 at 87
      if (lottieEl) {
        const endFrame = 20;
        const t = Math.max(0, Math.min(1, state.frame / (endFrame - 1))); // 0..1 over frames 0..86
        const scaleStart = 1.4; // bigger at start
        const scaleEnd = 0.6;   // smaller by frame 87
        const scaleVal = scaleStart + (scaleEnd - scaleStart) * t;
        const opacityVal = 1 - t;
        lottieEl.style.opacity = String(opacityVal);
        lottieEl.style.transform = `translate(-50%, -50%) scale(${scaleVal})`;
        lottieEl.style.visibility = t >= 1 ? "hidden" : "visible";
      }
    };

    setSize();
    if (images[0]?.complete) render();
    else images[0].onload = render;

    if (ctaRef.current) {
      gsap.set(ctaRef.current, { autoAlpha: 0, y: 12, scale: 0.98, pointerEvents: "none" });
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
    <section id="home" ref={scopeRef as any} className="relative w-full bg-black">
      <div ref={wrapperRef} className="relative h-[100svh] w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />
        {/* Lottie overlay (visible frames 1..87) */}

        <div ref={ctaRef} className="absolute left-1/2 bottom-10 z-20 -translate-x-1/2">
          <Link
            href="/signup"
            aria-label="Explore subjects and sign up"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:from-sky-300 hover:to-violet-400 active:scale-95"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
