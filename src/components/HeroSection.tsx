"use client";

import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { HeroVisual } from "@/components/HeroVisual";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn } from "@/components/Motion";
import { StoreBadges } from "@/components/StoreBadges";

export function HeroSection() {
  const { t } = useLocale();
  const { openDonation } = useDonation();

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--hero-glow)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-20 lg:py-16">
        <FadeIn className="lg:pr-4">
          <p className="font-display text-[3rem] font-extrabold leading-[0.94] tracking-[-0.04em] text-[var(--ink)] sm:text-[3.5rem] lg:text-[3.85rem]">
            Sip &amp; Pill
          </p>

          <h1 className="font-display mt-3 max-w-xl text-[1.7rem] font-bold leading-snug tracking-[-0.03em] text-[var(--ink)] sm:text-[2.05rem]">
            {t.heroHeadline}
          </h1>

          <p className="mt-3 max-w-lg text-[18px] font-semibold leading-8 text-[var(--ink)] sm:text-[19px]">
            {t.heroSubheadline} {t.trustLine}
          </p>

          <div className="mt-6">
            <Button onClick={openDonation} className="w-full sm:w-auto sm:min-w-[220px]">
              {t.supportProjectCta}
            </Button>
          </div>

          <StoreBadges className="mt-4 justify-center sm:justify-start" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}
