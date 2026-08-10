"use client";

import { Float } from "@/components/Motion";
import { PhoneFrame } from "@/components/PhoneFrame";

/** Large light + dark device mockups — no mascot overlay. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,122,108,0.28) 0%, rgba(140,138,214,0.24) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-end justify-center gap-0 px-1 sm:gap-2">
        <Float
          className="relative z-[1] w-[52%] -translate-x-1 sm:-translate-x-2"
          amplitude={8}
          duration={4}
          delay={0.15}
        >
          <div className="origin-bottom -rotate-[8deg]">
            <PhoneFrame
              src="/screenshots/home-dark.png"
              alt="Sip & Pill home screen in dark mode"
              priority
              className="rounded-[1.75rem] sm:rounded-[2rem]"
            />
          </div>
        </Float>

        <Float
          className="relative z-[2] -ml-[12%] w-[56%] translate-y-2 sm:-ml-[10%] sm:translate-y-3"
          amplitude={10}
          duration={4.3}
          delay={0.4}
        >
          <div className="origin-bottom rotate-[7deg]">
            <PhoneFrame
              src="/screenshots/home-light.png"
              alt="Sip & Pill home screen in light mode"
              priority
              className="rounded-[1.75rem] sm:rounded-[2rem] shadow-[0_28px_60px_rgba(13,14,35,0.4)]"
            />
          </div>
        </Float>
      </div>
    </div>
  );
}
