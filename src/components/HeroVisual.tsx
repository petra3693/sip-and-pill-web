"use client";

import Image from "next/image";
import { AppMockup } from "@/components/AppMockup";

/**
 * Brand-style hero huddle: Drop behind left, phone center, Pill in front right.
 * One floating group — no mismatched phone-frame composites.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[520px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,126,112,0.3) 0%, rgba(126,200,245,0.2) 40%, rgba(92,77,154,0.18) 60%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Sparkles />

      <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] animate-float sm:max-w-[460px]">
        {/* Drop — larger, sits behind the phone */}
        <Image
          src="/mascots/drop-hugging.png"
          alt=""
          width={480}
          height={480}
          priority
          className="pointer-events-none absolute -left-[12%] top-[6%] z-[1] w-[58%] select-none drop-shadow-[0_18px_36px_rgba(0,0,0,0.35)] sm:-left-[14%] sm:w-[60%]"
        />

        {/* Phone */}
        <div className="absolute left-1/2 top-[4%] z-[2] w-[58%] max-w-[270px] -translate-x-1/2 sm:w-[56%] sm:max-w-[290px]">
          <div className="overflow-hidden rounded-[34px] bg-[#1a1428] p-[6px] shadow-[0_28px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <div className="aspect-[9/19] overflow-hidden rounded-[28px] bg-[#fff8f6]">
              <AppMockup fill />
            </div>
          </div>
        </div>

        {/* Pill — larger, in front on the right */}
        <Image
          src="/mascots/pill-hugging.png"
          alt=""
          width={480}
          height={480}
          priority
          className="pointer-events-none absolute -right-[12%] top-[10%] z-[3] w-[56%] select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] sm:-right-[14%] sm:w-[58%]"
        />
      </div>
    </div>
  );
}

function Sparkles() {
  const dots = [
    "left-[8%] top-[12%]",
    "right-[10%] top-[8%]",
    "left-[4%] bottom-[20%]",
    "right-[6%] bottom-[16%]",
    "left-[20%] top-[40%]",
    "right-[18%] top-[36%]",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {dots.map((pos) => (
        <span
          key={pos}
          className={`absolute size-1.5 rounded-full bg-white/75 shadow-[0_0_12px_rgba(255,255,255,0.55)] ${pos}`}
        />
      ))}
    </div>
  );
}
