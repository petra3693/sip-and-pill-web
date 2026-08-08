"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[32px] border border-[var(--card-border)] bg-[var(--card)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:py-14">
        <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center">
          <Image
            src="/mascots/both-reading-together.png"
            alt={t.aboutMascotAlt}
            width={320}
            height={320}
            className="mascot-cutout w-full object-contain animate-float"
            priority
          />
        </div>

        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
            {t.aboutEyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            {t.aboutTitle}
          </h2>
          <div className="mt-5 space-y-4 text-[16px] font-medium leading-7 text-[var(--muted)]">
            <p>{t.aboutP1}</p>
            <p>
              {t.aboutP2Before}
              <span className="font-semibold text-[var(--ink)]">
                {t.aboutP2Highlight}
              </span>
              {t.aboutP2After}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
