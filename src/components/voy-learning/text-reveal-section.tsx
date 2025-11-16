"use client";

import * as React from "react";
import DotPattern from "./dot-pattern";
import { useGSAP, prefersReducedMotion } from "@/lib/gsap-utils";
type FallingTextTrigger = 'auto' | 'scroll' | 'click' | 'hover';
interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: FallingTextTrigger;
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

function FallingText({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem',
}: FallingTextProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = React.useState(false);

  React.useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map((word) => {
        const isHighlighted = highlightWords.some((hw) => word.startsWith(hw));
        return `<span class="inline-block mx-[2px] select-none ${isHighlighted ? 'text-cyan-500 font-bold' : ''}">${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const el = containerRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [trigger]);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!effectStarted) return;
    let mounted = true;
    let cleanup: (() => void) | undefined;
    (async () => {
      let Matter: any;
      try {
        const matterModule = await import('matter-js');
        Matter = (matterModule as any).default ?? matterModule;
      } catch {
        return;
      }
      if (!mounted) return;
      const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;
      if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height || 240;
      if (width <= 0 || height <= 0) return;
      const engine = Engine.create();
      engine.world.gravity.y = gravity;
      const render = Render.create({
        element: canvasContainerRef.current,
        engine,
        options: { width, height, background: backgroundColor, wireframes },
      });
      const boundaryOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
      const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
      const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
      const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
      const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);
      const wordSpans = textRef.current.querySelectorAll('span');
      const wordBodies = Array.from(wordSpans).map((elem) => {
        const rect = elem.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        const body = Bodies.rectangle(x, y, rect.width, rect.height, {
          render: { fillStyle: 'transparent' },
          restitution: 0.8,
          frictionAir: 0.01,
          friction: 0.2,
        });
        Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
        return { elem: elem as HTMLElement, body };
      });
      wordBodies.forEach(({ elem }) => {
        elem.style.position = 'absolute';
        elem.style.left = `0px`;
        elem.style.top = `0px`;
        elem.style.transform = 'translate(-50%, -50%)';
      });
      const mouse = Mouse.create(containerRef.current);
      const mouseConstraint = MouseConstraint.create(engine, { mouse, constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } } });
      render.mouse = mouse;
      World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map((w) => w.body)]);
      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);
      const updateLoop = () => {
        wordBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          elem.style.left = `${x}px`;
          elem.style.top = `${y}px`;
          elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        Matter.Engine.update(engine);
        requestAnimationFrame(updateLoop);
      };
      updateLoop();
      cleanup = () => {
        Render.stop(render);
        Runner.stop(runner);
        if (render.canvas && canvasContainerRef.current) {
          try { canvasContainerRef.current.removeChild(render.canvas); } catch {}
        }
        World.clear(engine.world, false);
        Engine.clear(engine);
      };
    })();
    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-[min(22vh,280px)] cursor-pointer text-center pt-2 overflow-hidden"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      aria-live="polite"
    >
      <div
        ref={textRef}
        className="inline-block text-foreground font-bold tracking-tight"
        style={{ fontSize, lineHeight: 1.25 }}
      />
      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
}

export default function TextRevealSection() {
  const scopeRef = useGSAP(async (ctx) => {
    if (prefersReducedMotion()) return;
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const container = ctx.scope as Element;
    const lines = (ctx.selector?.('[data-line]') as NodeListOf<Element>) || [];
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isDesktop ? 'top center' : 'top 80%',
        end: isDesktop ? '+=60%' : 'top center',
        pin: isDesktop,
        scrub: isDesktop,
      },
      defaults: { ease: 'power2.out' },
    });
    tl.fromTo(
      lines,
      { opacity: 0, y: 40, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.25 }
    );
  });

  return (
    <section
      ref={scopeRef as any}
      className="relative w-full overflow-hidden bg-background py-32 md:py-40"
    >
      <div className="absolute inset-0 -z-10 section-radial-bg" />
      <DotPattern className="opacity-10" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center text-foreground space-y-8">
          <p data-line className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Learning shouldn't be <span className="text-gradient">passive</span>.
          </p>
          <div data-line>
            <FallingText
              text={"Your notes should grow with you."}
              highlightWords={["grow"]}
              trigger={"hover"}
              backgroundColor={"transparent"}
              wireframes={false}
              gravity={0.56}
              fontSize={"clamp(2rem,6vw,3.6rem)"}
              mouseConstraintStiffness={0.9}
            />
          </div>
          <p data-line className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-gradient-pink">AI</span> makes it possible.
          </p>
        </div>
      </div>
    </section>
  );
}
