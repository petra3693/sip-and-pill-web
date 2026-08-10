"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";

const KOFI_SCRIPT_ID = "kofi-widget-2-script";
const KOFI_SCRIPT_SRC = "https://storage.ko-fi.com/cdn/widget/Widget_2.js";
const KOFI_BUTTON_TEXT = "Support me on Ko-fi";
const KOFI_BUTTON_COLOR = "#FF7E70";
const KOFI_PAGE_ID = "A8Y124TIG4";

type KofiWidgetApi = {
  init: (text: string, color: string, id: string) => void;
  getHTML?: () => string;
  draw: () => void;
};

declare global {
  interface Window {
    kofiwidget2?: KofiWidgetApi;
  }
}

type DonationModalProps = {
  open: boolean;
  onClose: () => void;
};

function loadKofiScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.kofiwidget2) return Promise.resolve();

  const existing = document.getElementById(KOFI_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.kofiwidget2) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Ko-fi script failed")), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = KOFI_SCRIPT_ID;
    script.src = KOFI_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Ko-fi script failed"));
    document.body.appendChild(script);
  });
}

function renderKofiWidget(container: HTMLElement) {
  const api = window.kofiwidget2;
  if (!api) return;

  api.init(KOFI_BUTTON_TEXT, KOFI_BUTTON_COLOR, KOFI_PAGE_ID);

  if (typeof api.getHTML === "function") {
    container.innerHTML = api.getHTML();
    return;
  }

  // Fallback: draw() historically uses document.writeln — capture into a temp host.
  const host = document.createElement("div");
  const previousWrite = document.write.bind(document);
  document.write = ((markup: string) => {
    host.innerHTML = markup;
  }) as typeof document.write;

  try {
    api.draw();
  } finally {
    document.write = previousWrite;
  }

  container.innerHTML = host.innerHTML;
}

export function DonationModal({ open, onClose }: DonationModalProps) {
  const { t } = useLocale();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !widgetRef.current) return;

    let cancelled = false;
    const container = widgetRef.current;
    container.innerHTML = "";

    loadKofiScript()
      .then(() => {
        if (cancelled || !widgetRef.current) return;
        renderKofiWidget(widgetRef.current);
      })
      .catch(() => {
        if (cancelled || !widgetRef.current) return;
        widgetRef.current.innerHTML = `
          <a
            href="https://ko-fi.com/${KOFI_PAGE_ID}"
            target="_blank"
            rel="noopener noreferrer"
            style="display:inline-flex;align-items:center;justify-content:center;gap:8px;background:${KOFI_BUTTON_COLOR};color:#fff;border-radius:999px;padding:12px 20px;font-weight:700;text-decoration:none;"
          >${KOFI_BUTTON_TEXT}</a>
        `;
      });

    return () => {
      cancelled = true;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(26,20,40,0.55)] p-4 animate-fade-in sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={t.confirmDonation}
      onClick={onClose}
    >
      <div
        className="max-h-[min(92dvh,720px)] w-full max-w-sm overflow-y-auto rounded-[28px] bg-white p-5 shadow-2xl animate-fade-up scrollbar-hide"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mb-2 flex justify-center">
          <Image
            src="/mascots/drop-thumbs-up.png"
            alt=""
            width={140}
            height={140}
            className="w-[140px] object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        <h2 className="text-center font-display text-[20px] font-bold text-[#2d2a2a]">
          Confirm your support
        </h2>
        <p className="mt-3 text-center text-[14px] font-medium leading-5 text-[#8a807e]">
          Thank you for helping keep Sip &amp; Pill free and accessible to all!
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <div
            ref={widgetRef}
            className="flex min-h-12 w-full items-center justify-center [&_a]:mx-auto"
          />
          <Button variant="secondary" onClick={onClose} className="w-full">
            {t.cancel}
          </Button>
        </div>
      </div>
    </div>
  );
}
