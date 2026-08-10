"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DonationModal } from "@/components/DonationModal";
import { DONATION_URL } from "@/lib/links";

type DonationContextValue = {
  openDonation: () => void;
};

const DonationContext = createContext<DonationContextValue | null>(null);

const MOBILE_QUERY = "(max-width: 767px)";

export function DonationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDonation = useCallback(() => {
    // Mobile Safari often can't scroll third-party donation iframes — open Ko-fi directly.
    if (typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches) {
      window.open(DONATION_URL, "_blank", "noopener,noreferrer");
      return;
    }
    setOpen(true);
  }, []);

  const closeDonation = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openDonation }), [openDonation]);

  return (
    <DonationContext.Provider value={value}>
      {children}
      <DonationModal open={open} onClose={closeDonation} />
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
