"use client";

import Image from "next/image";
import { Float } from "@/components/Motion";

/** Composited light + dark home screens for the hero. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] sm:max-w-[620px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,122,108,0.28) 0%, rgba(140,138,214,0.24) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Float amplitude={8} duration={4.2}>
        <Image
          src="/hero-phones.png"
          alt="Sip & Pill home screen in light and dark mode"
          width={975}
          height={1024}
          priority
          className="relative z-[1] h-auto w-full drop-shadow-2xl"
        />
      </Float>
    </div>
  );
}
