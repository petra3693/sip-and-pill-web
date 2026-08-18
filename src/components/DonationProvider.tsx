"use client";

import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { DONATION_URL } from "@/lib/links";

type DonationContextValue = {
  openDonation: () => void;
};

const DonationContext = createContext<DonationContextValue | null>(null);

const KOFI_PAGE_ID = "lumenappstudio";

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (pageId: string, config: Record<string, string>) => void;
    };
  }
}

function drawKofiWidget() {
  window.kofiWidgetOverlay?.draw(KOFI_PAGE_ID, {
    type: "floating-chat",
    "floating-chat.donateButton.text": "Support me",
    "floating-chat.donateButton.background-color": "#00b9fe",
    "floating-chat.donateButton.text-color": "#fff",
  });
}

function isShown(el: Element | null): el is HTMLElement {
  if (!(el instanceof HTMLElement)) return false;
  const style = window.getComputedStyle(el);
  return style.display !== "none" && style.visibility !== "hidden";
}

function clickKofiOverlayButton(): boolean {
  const wraps = [
    document.querySelector(".floatingchat-container-wrap-mobi"),
    document.querySelector(".floatingchat-container-wrap"),
  ];
  const visible = wraps.find(isShown) ?? wraps.find((el) => el instanceof HTMLElement);
  const iframe = visible?.querySelector("iframe");
  const button = iframe?.contentDocument?.querySelector<HTMLElement>(
    "[id$='-donate-button']",
  );
  if (!button) return false;
  button.click();
  return true;
}

export function DonationProvider({ children }: { children: ReactNode }) {
  const openDonation = useCallback(() => {
    if (clickKofiOverlayButton()) return;
    window.open(DONATION_URL, "_blank", "noopener,noreferrer");
  }, []);

  const value = useMemo(() => ({ openDonation }), [openDonation]);

  return (
    <DonationContext.Provider value={value}>
      {children}
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="afterInteractive"
        onLoad={drawKofiWidget}
      />
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const ctx = useContext(DonationContext);
  if (!ctx) {
    throw new Error("useDonation must be used within DonationProvider");
  }
  return ctx;
}
