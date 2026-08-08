"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { DONATION_URL, SUPPORT_EMAIL } from "@/lib/links";

export function SiteFooter() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-4 bg-[var(--footer-bg)] text-[var(--footer-fg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Image
              src="/icon.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-2xl"
            />
            <span className="font-display text-[17px] font-bold tracking-tight">
              Sip &amp; Pill
            </span>
          </div>
          <p className="mt-3 text-[14px] font-medium leading-6 text-[var(--footer-muted)]">
            {t.footerTagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-semibold">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-[var(--footer-muted)] transition hover:text-white"
          >
            {t.contact}
          </a>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--footer-muted)] transition hover:text-white"
          >
            {t.support}
          </a>
          <Link
            href="/privacy"
            className="text-[var(--footer-muted)] transition hover:text-white"
          >
            {t.privacy}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[13px] font-medium text-[var(--footer-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} Sip &amp; Pill. {t.rightsReserved}
          </p>
          <p>{t.freeOfflinePrivate}</p>
        </div>
      </div>
    </footer>
  );
}
