"use client";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";
import { useLocale } from "@/components/LocaleProvider";

export function StoreBadges({ className = "" }: { className?: string }) {
  const { t } = useLocale();

  return (
    <div
      className={[
        "flex flex-wrap items-center justify-center gap-3",
        className,
      ].join(" ")}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#0d0e23] px-4 text-white shadow-sm transition hover:brightness-125 dark:bg-[#1a1840]"
        aria-label={t.appStoreLabel}
      >
        <AppleGlyph />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80">
            {t.downloadOn}
          </span>
          <span className="block text-[15px] font-bold tracking-tight">
            App Store
          </span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#0d0e23] px-4 text-white shadow-sm transition hover:brightness-125 dark:bg-[#1a1840]"
        aria-label={t.playStoreLabel}
      >
        <PlayGlyph />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80">
            {t.getItOn}
          </span>
          <span className="block text-[15px] font-bold tracking-tight">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}

function AppleGlyph() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.6c1.1 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.2ZM14.4 6.5c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2Z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3.6 2.3 13.2 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Z" />
      <path fill="currentColor" opacity="0.9" d="m13.2 12 2.7-2.7 4.3 2.5c.7.4.7 1.4 0 1.8l-4.3 2.5L13.2 12Z" />
      <path fill="currentColor" opacity="0.75" d="M13.2 12 3.6 2.3c.2-.2.5-.3.8-.3.3 0 .6.1.9.3l10.6 6.1L13.2 12Z" />
      <path fill="currentColor" opacity="0.85" d="m13.2 12 2.7 2.7-10.6 6.1c-.3.2-.6.3-.9.3-.3 0-.6-.1-.8-.3L13.2 12Z" />
    </svg>
  );
}
