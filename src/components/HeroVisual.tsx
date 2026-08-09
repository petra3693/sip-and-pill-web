"use client";

import Image from "next/image";
import { AppMockup } from "@/components/AppMockup";

/**
 * Drop (left) + Pill (right) hug the phone exactly.
 * Both mascot layers sit ABOVE the app so their hands rest on the screen.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,126,112,0.28) 0%, rgba(126,200,245,0.2) 40%, rgba(92,77,154,0.16) 60%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Sparkles />

      <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center animate-float py-2 sm:max-w-[320px]">
        {/* Phone — under the mascots */}
        <div className="relative z-[1] w-full">
          <div className="overflow-hidden rounded-[34px] bg-[#1a1428] p-[6px] shadow-[0_28px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <div className="aspect-[9/19] overflow-hidden rounded-[28px] bg-[#fff8f6]">
              <AppMockup fill />
            </div>
          </div>
        </div>

        {/* Drop — left, above app; flat edge on phone left, hand overlaps onto screen */}
        <Image
          src="/mascots/drop-peek-left.png"
          alt=""
          width={421}
          height={620}
          priority
          unoptimized
          className="pointer-events-none absolute top-[7%] right-full z-[2] h-[86%] w-auto max-w-none translate-x-[16%] select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]"
        />

        {/* Pill — right, above app; flat edge on phone right, hand overlaps onto screen */}
        <Image
          src="/mascots/pill-peek-right.png"
          alt=""
          width={425}
          height={664}
          priority
          unoptimized
          className="pointer-events-none absolute top-[5%] left-full z-[2] h-[90%] w-auto max-w-none -translate-x-[16%] select-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]"
        />
      </div>
    </div>
  );
}

function Sparkles() {
  const dots = [
    "left-[6%] top-[14%]",
    "right-[8%] top-[10%]",
    "left-[2%] bottom-[18%]",
    "right-[4%] bottom-[14%]",
    "left-[14%] top-[40%]",
    "right-[12%] top-[36%]",
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
