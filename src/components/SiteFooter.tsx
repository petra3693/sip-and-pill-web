"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { useLocale } from "@/components/LocaleProvider";

export function SiteFooter() {
  const { t } = useLocale();
  const { openDonation } = useDonation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-2 border-t border-white/10 bg-[var(--footer-bg)] text-[var(--footer-fg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-2xl"
          />
          <span className="font-display text-[16px] font-bold tracking-tight">
            Sip &amp; Pill
          </span>
        </div>

        <p className="max-w-md text-[14px] font-semibold text-white">
          {t.footerTagline}
        </p>

        <Button onClick={openDonation}>{t.supportProjectCta}</Button>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] font-semibold">
          <Link href="/privacy" className="text-white/75 transition hover:text-white">
            {t.privacy}
          </Link>
          <Link href="/terms" className="text-white/75 transition hover:text-white">
            {t.terms}
          </Link>
          <Link href="/impressum" className="text-white/75 transition hover:text-white">
            Impressum
          </Link>
          <Link href="/#contact" className="text-white/75 transition hover:text-white">
            {t.contact}
          </Link>
        </nav>

        <div className="space-y-1 text-[12px] font-medium text-white/70">
          <p>{t.footerPrivacyLine}</p>
          <p>
            © {year} Sip &amp; Pill · {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
