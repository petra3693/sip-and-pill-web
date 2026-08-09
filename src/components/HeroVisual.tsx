"use client";

import Image from "next/image";

/** Full hero composite: Drop + phone + Pill in one illustration. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[540px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,126,112,0.28) 0%, rgba(126,200,245,0.2) 40%, rgba(92,77,154,0.16) 60%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative animate-float">
        <Image
          src="/mascots/hero-hug-composite.png"
          alt="Sip & Pill app with Drop and Pill mascots"
          width={884}
          height={1024}
          priority
          unoptimized
          className="relative z-[1] h-auto w-full select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  );
}
