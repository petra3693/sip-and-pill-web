"use client";

import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { useLocale } from "@/components/LocaleProvider";
import { DONATION_URL } from "@/lib/links";

export function SupportSection() {
  const { t } = useLocale();
  const { openDonation } = useDonation();

  return (
    <section id="support" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--tip)] px-6 py-12 shadow-[var(--shadow-soft)] sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[var(--coral)]/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-[var(--sip-blue)]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
              {t.supportEyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
              {t.supportTitle}
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-7 text-[var(--muted)] sm:text-[17px]">
              {t.supportBody}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button onClick={openDonation} className="w-full sm:w-auto sm:min-w-[240px]">
                <CoffeeIcon />
                {t.buyCoffee}
              </Button>
              <Button
                variant="secondary"
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto sm:min-w-[240px]"
              >
                {t.inviteCoffee}
              </Button>
            </div>

            <p className="mt-5 text-[14px] font-medium text-[var(--muted)]">
              {t.supportNote}
            </p>
            <p className="mt-6 font-display text-[1.05rem] font-semibold leading-snug text-[var(--ink)] sm:text-[1.15rem]">
              {t.supportThanks}
            </p>
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
