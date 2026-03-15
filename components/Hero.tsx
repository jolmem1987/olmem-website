"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

/**
 * Next.js SSR-safe layout effect:
 * - useLayoutEffect in the browser
 * - useEffect on the server
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function safeSessionGet(key: string): string | null {
  try {
    return typeof window !== "undefined" ? window.sessionStorage.getItem(key) : null;
  } catch {
    return null;
  }
}

function safeSessionSet(key: string, value: string): void {
  try {
    if (typeof window !== "undefined") window.sessionStorage.setItem(key, value);
  } catch {
    // blocked storage / privacy mode: ignore
  }
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const trailMainRef = useRef<HTMLDivElement | null>(null);
  const trailGlowRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  // Avoid stale refs if React re-renders the list
  const sparkRefs = useRef<Array<HTMLDivElement | null>>([]);

  const sessionKey = useMemo(() => "olmem-hero-v3-played", []);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const logo = logoRef.current;
    const trailMain = trailMainRef.current;
    const trailGlow = trailGlowRef.current;
    const ring = ringRef.current;
    const headline = headlineRef.current;
    const sub = subRef.current;
    const buttons = buttonsRef.current;

    if (!root || !logo || !trailMain || !trailGlow || !ring || !headline || !sub || !buttons) return;

    const sparks = sparkRefs.current.filter(Boolean) as HTMLDivElement[];
    const headlineSpans = headline.querySelectorAll("span");

    const setEndState = () => {
      gsap.set(logo, { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 });
      gsap.set([trailMain, trailGlow], { opacity: 0, scaleX: 0 });
      gsap.set(ring, { opacity: 0, scale: 1 });
      gsap.set(sparks, { opacity: 0, scale: 0, x: 0, y: 0 });
      gsap.set(headlineSpans, { opacity: 1, y: 0 });
      gsap.set([sub, buttons], { opacity: 1, y: 0 });
    };

    const reduced = prefersReducedMotion();
    const alreadyPlayed = safeSessionGet(sessionKey) === "true";

    if (reduced || alreadyPlayed) {
      setEndState();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(logo, { x: -760, y: -300, scale: 0.25, rotate: -28, opacity: 0 });

      gsap.set([trailMain, trailGlow], {
        opacity: 0,
        scaleX: 0.04,
        transformOrigin: "left center",
      });

      gsap.set(ring, { opacity: 0, scale: 0.3 });
      gsap.set(sparks, { opacity: 0, scale: 0, x: 0, y: 0 });
      gsap.set(headlineSpans, { opacity: 0, y: 28 });
      gsap.set([sub, buttons], { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => safeSessionSet(sessionKey, "true"),
      });

      tl.to([trailMain, trailGlow], { opacity: 1, scaleX: 1, duration: 0.14, ease: "power1.out" }, 0)
        .to(logo, { x: -120, y: -120, scale: 0.75, opacity: 1, rotate: -10, duration: 0.42, ease: "power3.out" }, 0)
        .to(logo, { x: 100, y: -18, scale: 1.08, rotate: 4, duration: 0.5, ease: "power4.out" }, 0.38)
        .to(logo, { x: 0, y: 0, scale: 1, rotate: 0, duration: 0.34, ease: "elastic.out(1, 0.7)" }, 0.88)
        .to(ring, { opacity: 0.8, scale: 1, duration: 0.18, ease: "power2.out" }, 0.95)
        .to(ring, { opacity: 0, scale: 1.45, duration: 0.35, ease: "power2.out" }, 1.05)
        .to(sparks, { opacity: 1, scale: 1, duration: 0.04, stagger: 0.012 }, 0.9)
        .to(
          sparks,
          {
            x: () => gsap.utils.random(-95, 95),
            y: () => gsap.utils.random(-55, 55),
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.015,
            ease: "power2.out",
          },
          0.98
        )
        .to([trailMain, trailGlow], { opacity: 0, scaleX: 1.12, duration: 0.24, ease: "power2.out" }, 1)
        .to(headlineSpans, { opacity: 1, y: 0, duration: 0.28, stagger: 0.06, ease: "power2.out" }, 1.05)
        .to([sub, buttons], { opacity: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power2.out" }, 1.22);
    }, root);

    return () => ctx.revert();
  }, [sessionKey]);

  return (
    <section ref={rootRef} className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-16 top-24 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-10 flex h-52 w-full max-w-lg items-center justify-center">
          <div
            ref={trailMainRef}
            className="absolute left-[4%] top-1/2 h-2.5 w-[78%] -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 via-blue-400 to-transparent blur-sm"
          />
          <div
            ref={trailGlowRef}
            className="absolute left-[6%] top-1/2 h-8 w-[76%] -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/25 via-blue-500/25 to-transparent blur-2xl"
          />

          <div
            ref={ringRef}
            className="absolute h-32 w-32 rounded-full border border-blue-400/60 shadow-[0_0_35px_rgba(59,130,246,0.35)] md:h-40 md:w-40"
          />

          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                sparkRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(251,191,36,0.95)]"
            />
          ))}

          <div ref={logoRef} className="relative flex items-center justify-center drop-shadow-[0_0_40px_rgba(37,99,235,0.35)]">
            <Image
              src="/olmem-tech-logo.png"
              alt="Olmem Technical Solutions logo"
              width={160}
              height={160}
              className="h-32 w-auto select-none md:h-40"
              priority
              draggable={false}
            />
          </div>
        </div>

        <h1 ref={headlineRef} className="mb-5 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl">
          <span className="inline-block">$999</span>{" "}
          <span className="inline-block">Setup.</span>{" "}
          <span className="inline-block">$35/mo</span>{" "}
          <span className="inline-block">Hosting.</span>
          <br />
          <span className="inline-block text-orange-500">Optional</span>{" "}
          <span className="inline-block text-orange-500">Maintenance</span>{" "}
          <span className="inline-block text-orange-500">+</span>{" "}
          <span className="inline-block text-orange-500">Security</span>{" "}
          <span className="inline-block text-orange-500">$100/mo.</span>
        </h1>

        <p ref={subRef} className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          Every site includes SEO support: use any WordPress SEO plugin plus our SEO plugin at no extra cost to manage SEO yourself.
        </p>

        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/subscription"
            className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Start Setup Intake
          </Link>
          <Link
            href="/products/themes"
            className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-white transition hover:border-blue-400"
          >
            View What's Included
          </Link>
        </div>
      </div>
    </section>
  );
}