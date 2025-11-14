"use client";

import { useLayoutEffect, useRef, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure plugin is registered only on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGSAP(
  setup: (ctx: gsap.Context) => void | (() => void) | Promise<void | (() => void)>,
  scope?: Element | null
) {
  const scopeRef = useRef<Element | null>(scope ?? null) as MutableRefObject<Element | null>;

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: gsap.Context | null = null;
    let extraCleanup: (() => void) | undefined;
    ctx = gsap.context((self) => {
      const maybe = setup(self);
      if (typeof maybe === "function") {
        return maybe as () => void;
      }
      if (maybe && typeof (maybe as any).then === "function") {
        (maybe as Promise<void | (() => void)>).then((ret) => {
          if (typeof ret === "function") extraCleanup = ret as () => void;
        });
      }
    }, scopeRef);

    return () => {
      try { extraCleanup && extraCleanup(); } catch {}
      ctx && ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scopeRef;
}

export function registerScrollTrigger(defaults?: Partial<ScrollTrigger.Vars>) {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  if (defaults) {
    ScrollTrigger.defaults({ ...defaults });
  }
}

export function splitTextIntoChars(text: string): string[] {
  return Array.from(text);
}

export function createParallaxEffect(
  target: gsap.TweenTarget,
  speed = 0.5,
  options: Partial<ScrollTrigger.Vars> = {}
) {
  if (prefersReducedMotion()) return null;
  return gsap.to(target, {
    yPercent: -speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: target as Element,
      scrub: true,
      ...options,
    },
  });
}

export function createPinnedSection(
  trigger: gsap.TweenTarget,
  pin: ScrollTrigger.Vars["pin"] = true,
  options: Partial<ScrollTrigger.Vars> = {}
) {
  if (typeof window === "undefined") return null;
  return ScrollTrigger.create({
    trigger: trigger as Element,
    pin,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
    ...options,
  });
}

export function createHorizontalScroll(
  container: Element,
  items: Element[],
  options: Partial<ScrollTrigger.Vars> = {}
) {
  if (prefersReducedMotion()) return null;
  const totalWidth = items.reduce((acc, el) => acc + (el.clientWidth || 0), 0);
  const xAmount = -(totalWidth - (container.clientWidth || 0));

  return gsap.to(items, {
    x: xAmount,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => `+=${totalWidth}`,
      ...options,
    },
  });
}
