"use client";

import { AppleIcon } from "@/components/AppleIcon";
import { Button } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { useLocale } from "@/components/LocaleProvider";
import { formatHeroBody } from "@/lib/i18n";
import { APP_STORE_URL } from "@/lib/links";

export function HeroSection() {
  const { t } = useLocale();
  const body = formatHeroBody(t.heroBody, t.heroBodyHighlight);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--hero-glow)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-24">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 shadow-sm">
            <span className="size-2 rounded-full bg-[var(--coral)]" />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              {t.dailyCompanion}
            </p>
          </div>

          <h1 className="font-display mt-1 max-w-xl text-[3.1rem] font-bold leading-[0.98] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl lg:text-[4.25rem]">
            Sip &amp; Pill
          </h1>

          <p className="font-display mt-5 max-w-xl text-[1.45rem] font-semibold leading-snug tracking-[-0.02em] text-[var(--ink)]/80 sm:text-[1.85rem]">
            {t.tagline}
          </p>

          <p className="mt-4 max-w-lg text-[17px] font-medium leading-7 text-[var(--muted)] sm:text-[18px]">
            {body.before}
            <span className="font-semibold text-[var(--ink)]">{body.highlight}</span>
            {body.after}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[260px]"
            >
              <AppleIcon className="size-[22px]" />
              {t.downloadCta}
            </Button>
          </div>

          <p className="mt-4 text-[14px] font-medium text-[var(--muted)]">
            {t.freeOfflinePrivate}
          </p>
        </div>

        <div className="animate-fade-up delay-200 py-4 sm:py-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
