"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLocale } from "@/components/LocaleProvider";

export default function PrivacyPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
          {t.privacyEyebrow}
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-[var(--ink)]">
          {t.privacyTitle}
        </h1>
        <p className="mt-3 text-[15px] font-medium text-[var(--muted)]">
          {t.privacyUpdated}
        </p>

        <div className="mt-8 space-y-6 rounded-[28px] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              {t.privacyWhatTitle}
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              {t.privacyWhatBody}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              {t.privacyNoTitle}
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              {t.privacyNoBody}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              {t.privacyDeleteTitle}
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              {t.privacyDeleteBody}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              {t.privacyMedicalTitle}
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              {t.privacyMedicalBody}
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--coral)] px-6 text-[15px] font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-105"
        >
          {t.backHome}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
