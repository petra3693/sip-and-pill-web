"use client";

import { Button } from "@/components/Button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLocale } from "@/components/LocaleProvider";

export default function ImpressumPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
          {t.privacyEyebrow}
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-[var(--ink)]">
          Impressum
        </h1>
        <p className="mt-3 text-[15px] font-medium text-[var(--muted)]">
          Legal notice (Germany)
        </p>

        <div className="mt-8 space-y-6 rounded-[28px] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              Service provider
            </h2>
            <div className="space-y-2 text-[15px] font-medium leading-7 text-[var(--muted)]">
              <p>Petra Szakacs (operating as Lumen Studio)</p>
              <p>Einbecker Straße 64A</p>
              <p>10315 Berlin</p>
              <p>Germany</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:raving.pascal@gmail.com"
                  className="text-[var(--ink)] underline decoration-[var(--coral)]/50 underline-offset-2 transition hover:decoration-[var(--coral)]"
                >
                  raving.pascal@gmail.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.sip-and-pill.app/"
                  className="text-[var(--ink)] underline decoration-[var(--coral)]/50 underline-offset-2 transition hover:decoration-[var(--coral)]"
                >
                  https://www.sip-and-pill.app/
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              Responsible for content
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              Petra Szakacs is solely responsible for the content of this
              website pursuant to § 18 Abs. 2 MStV (where applicable).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
              Business registration / insurance
            </h2>
            <p className="text-[15px] font-medium leading-7 text-[var(--muted)]">
              {/* TODO: confirm business registration status */}
              No professional liability insurance is stated here. Confirm and
              complete Gewerbeanmeldung / Handelsregister details (or note that
              none apply) before publishing as final legal copy.
            </p>
          </section>
        </div>

        <Button href="/" className="mt-8">
          {t.backHome}
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}
