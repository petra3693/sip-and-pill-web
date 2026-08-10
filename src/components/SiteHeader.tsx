"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#different", label: t.navValues },
    { href: "#story", label: t.navStory },
    { href: "#roadmap", label: t.navRoadmap },
    { href: "#support", label: t.navSupport },
    { href: "#contact", label: t.contact },
  ];

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--coral)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div ref={menuRef} className="relative flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher controlClassName={`${controlClass} gap-2 px-3`} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? t.darkMode : t.lightMode}
              className={`${controlClass} w-11 shrink-0`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          <button
            type="button"
            onClick={openDonation}
            aria-label={t.supportProjectCta}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--coral)] text-[#0d0e23] shadow-[0_8px_22px_rgba(255,106,90,0.35)] transition hover:brightness-105 active:scale-[0.98]"
          >
            <CoffeeIcon />
          </button>

          <button
            type="button"
            className={`${controlClass} w-11 shrink-0 lg:hidden`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {menuOpen ? (
            <div
              id={menuId}
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(18.5rem,calc(100vw-2.5rem))] rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-3 shadow-[var(--shadow-lift)] animate-fade-in lg:hidden"
            >
              <nav className="space-y-0.5 border-b border-[var(--card-border)] pb-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-[14px] font-bold text-[var(--ink)] transition hover:bg-[var(--bg-peach)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 space-y-2">
                <p className="px-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {t.chooseLanguage}
                </p>
                <LanguageSwitcher
                  controlClassName={`${controlClass} w-full justify-between gap-2 px-3`}
                />
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={theme === "light" ? t.darkMode : t.lightMode}
                  className={`${controlClass} w-full justify-between gap-3 px-3`}
                >
                  <span className="text-[13px] font-bold">
                    {theme === "light" ? t.darkMode : t.lightMode}
                  </span>
                  {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function CoffeeIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 9h11v6.5A3.5 3.5 0 0 1 12.5 19h-4A3.5 3.5 0 0 1 5 15.5V9Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.5h2.2A2.3 2.3 0 0 1 20.5 12.8v0A2.3 2.3 0 0 1 18.2 15H16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M8 5.5c.4.6.4 1.2 0 1.8M11 5.5c.4.6.4 1.2 0 1.8M14 5.5c.4.6.4 1.2 0 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.5 19.5h8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7l10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
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
