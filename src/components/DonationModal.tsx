"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";

const KOFI_EMBED_SRC =
  "https://ko-fi.com/lumenappstudio/?hidefeed=true&widget=true&embed=true&preview=true";

type DonationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonationModal({ open, onClose }: DonationModalProps) {
  const { t } = useLocale();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(26,20,40,0.55)] p-3 animate-fade-in sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm your support"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-md flex-col rounded-[28px] bg-white p-4 shadow-2xl animate-fade-up sm:p-5"
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="shrink-0 text-center font-display text-[20px] font-bold text-[#2d2a2a]">
          Confirm your support
        </h2>
        <p className="mt-2 shrink-0 text-center text-[14px] font-medium leading-5 text-[#8a807e]">
          Thank you for helping keep Sip &amp; Pill free and accessible to all!
        </p>

        <div
          className="mt-4 w-full shrink-0 rounded-2xl"
          style={{
            width: "100%",
            height: "600px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
            background: "#f9f9f9",
          }}
        >
          <iframe
            id="kofiframe"
            src={KOFI_EMBED_SRC}
            title="lumenappstudio"
            scrolling="yes"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              minHeight: "712px",
              padding: "4px",
              background: "#f9f9f9",
            }}
          />
        </div>

        <div className="mt-4 shrink-0">
          <Button variant="secondary" onClick={onClose} className="w-full">
            {t.cancel}
          </Button>
        </div>
      </div>
    </div>
  );
}
