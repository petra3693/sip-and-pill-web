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

type DonationContextValue = {
  openDonation: () => void;
};

const DonationContext = createContext<DonationContextValue | null>(null);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDonation = useCallback(() => setOpen(true), []);
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
