"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { LANGUAGES } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.chooseLanguage}
        className="flex h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 text-[var(--ink)] shadow-sm transition active:scale-[0.98]"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {current.flag}
        </span>
        <span className="hidden text-[13px] font-bold sm:inline">
          {current.label}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t.chooseLanguage}
          className="absolute right-0 z-50 mt-2 w-[220px] overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-1.5 shadow-[var(--shadow-lift)] animate-fade-in"
        >
          {LANGUAGES.map((lang) => {
            const selected = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={[
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                  selected
                    ? "bg-[var(--purple)] text-white"
                    : "text-[var(--ink)] hover:bg-[var(--bg-peach)]",
                ].join(" ")}
              >
                <span className="text-lg leading-none" aria-hidden="true">
                  {lang.flag}
                </span>
                <span className="flex-1 text-[14px] font-bold">{lang.label}</span>
                {selected ? (
                  <span className="flex size-6 items-center justify-center rounded-[10px] bg-[var(--coral-soft)] text-white">
                    <CheckIcon />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={[
        "size-3.5 text-[var(--muted)] transition",
        open ? "rotate-180" : "",
      ].join(" ")}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m3.5 8.2 2.8 2.8 6.2-6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
