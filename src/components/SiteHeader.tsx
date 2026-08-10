"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { useTheme } from "@/components/ThemeProvider";

const controlClass =
  "inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--ink)] shadow-sm transition active:scale-[0.98]";

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const { openDonation } = useDonation();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 px-5 py-2 sm:min-h-16 sm:px-8">
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

        <nav className="hidden items-center gap-6 text-[14px] font-semibold text-[var(--ink)]/70 lg:flex">
          <a href="#different" className="transition hover:text-[var(--coral)]">
            {t.navValues}
          </a>
          <a href="#story" className="transition hover:text-[var(--coral)]">
            {t.navStory}
          </a>
          <a href="#roadmap" className="transition hover:text-[var(--coral)]">
            {t.navRoadmap}
          </a>
          <a href="#support" className="transition hover:text-[var(--coral)]">
            {t.navSupport}
          </a>
          <a href="#contact" className="transition hover:text-[var(--coral)]">
            {t.contact}
          </a>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <LanguageSwitcher
            controlClassName={`${controlClass} gap-2 px-3`}
          />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.darkMode : t.lightMode}
            className={`${controlClass} w-11 shrink-0`}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <Button onClick={openDonation}>{t.supportProjectCta}</Button>
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
