"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";
import { DONATION_URL } from "@/lib/links";

export function SupportSection() {
  const { t } = useLocale();

  return (
    <section id="support" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-[#f2e8e4] bg-[#fff8f6] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#5c4d9a]">
                {t.supportEyebrow}
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[#2d2a2a] sm:text-4xl">
                {t.supportTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] font-medium leading-7 text-[#8a807e]">
                {t.supportBody}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <CoffeeIcon />
                  {t.buyCoffee}
                </Button>
                <p className="text-center text-[13px] font-medium text-[#8a807e] sm:text-left">
                  {t.supportNote}
                </p>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px]">
              <div
                className="absolute inset-[18%] rounded-full bg-[#ffece6] blur-2xl"
                aria-hidden="true"
              />
              <Image
                src="/mascots/both-dancing.png"
                alt=""
                width={360}
                height={360}
                className="relative z-10 w-full object-contain animate-float drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoffeeIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 9h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 19h10M8 4.5c.4.6.4 1.4 0 2M11 4.5c.4.6.4 1.4 0 2M14 4.5c.4.6.4 1.4 0 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
