"use client";

import Image from "next/image";
import Link from "next/link";
import { useDonation } from "@/components/DonationProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { useTheme } from "@/components/ThemeProvider";

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const { openDonation } = useDonation();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-2xl shadow-sm"
            priority
          />
          <span className="font-display text-[17px] font-bold tracking-tight text-[var(--ink)]">
            Sip &amp; Pill
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-semibold text-[var(--muted)] md:flex">
          <a href="#features" className="transition hover:text-[var(--purple)]">
            {t.navFeatures}
          </a>
          <a href="#about" className="transition hover:text-[var(--purple)]">
            {t.navAbout}
          </a>
          <button
            type="button"
            onClick={openDonation}
            className="transition hover:text-[var(--purple)]"
          >
            {t.navSupport}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.darkMode : t.lightMode}
            className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--ink)] shadow-sm transition active:scale-[0.98]"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M6.2 6.2 4.8 4.8M19.2 19.2l-1.4-1.4M17.8 6.2l1.4-1.4M6.2 17.8l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
