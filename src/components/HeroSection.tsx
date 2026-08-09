"use client";

import { AppleIcon } from "@/components/AppleIcon";
import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { HeroVisual } from "@/components/HeroVisual";
import { useLocale } from "@/components/LocaleProvider";
import { APP_STORE_URL, APP_WEB_URL } from "@/lib/links";

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

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 shadow-sm">
            <span className="size-2 rounded-full bg-[var(--coral)]" />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              {t.dailyCompanion}
            </p>
          </div>

          <p className="font-display text-[2.65rem] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-5xl lg:text-[3.75rem]">
            Sip &amp; Pill
          </p>

          <h1 className="font-display mt-5 max-w-xl text-[1.55rem] font-semibold leading-snug tracking-[-0.03em] text-[var(--ink)] sm:text-[1.85rem] lg:text-[2.05rem]">
            {t.heroHeadline}
          </h1>

          <p className="mt-4 max-w-lg text-[17px] font-medium leading-7 text-[var(--muted)] sm:text-[18px]">
            {t.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={APP_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[220px]"
            >
              {t.openAppCta}
            </Button>
            <Button
              variant="secondary"
              onClick={openDonation}
              className="w-full sm:w-auto sm:min-w-[220px]"
            >
              <CoffeeIcon />
              {t.buyCoffee}
            </Button>
          </div>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--purple)] transition hover:brightness-110"
          >
            <AppleIcon className="size-4" />
            {t.downloadCta}
          </a>

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
