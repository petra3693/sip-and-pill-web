"use client";

import Image from "next/image";
import { AppMockup } from "@/components/AppMockup";

/**
 * Drop + Pill hug-frame with the live app UI sitting in the transparent
 * phone slot (measured from the illustration’s white placeholder).
 */
const PHONE_SLOT = {
  left: "22.3%",
  top: "15.7%",
  width: "60.2%",
  height: "65.8%",
};

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] sm:max-w-[580px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,126,112,0.28) 0%, rgba(126,200,245,0.2) 40%, rgba(92,77,154,0.22) 55%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Sparkles />

      <div className="relative aspect-square w-full animate-float">
        {/* App sits in the phone hole, under the illustrated frame */}
        <div
          className="absolute z-[1] overflow-hidden bg-[#fff8f6] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          style={{
            ...PHONE_SLOT,
            borderRadius: "18% / 14%",
          }}
        >
          <AppMockup fill />
        </div>

        <Image
          src="/mascots/hero-hug-frame.png?v=2"
          alt=""
          width={1024}
          height={1024}
          priority
          unoptimized
          className="pointer-events-none relative z-[2] h-auto w-full select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  );
}

function Sparkles() {
  const dots = [
    "left-[10%] top-[10%]",
    "right-[12%] top-[8%]",
    "left-[6%] bottom-[18%]",
    "right-[8%] bottom-[14%]",
    "left-[18%] top-[34%]",
    "right-[16%] top-[38%]",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {dots.map((pos) => (
        <span
          key={pos}
          className={`absolute size-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.55)] ${pos}`}
        />
      ))}
    </div>
  );
}
