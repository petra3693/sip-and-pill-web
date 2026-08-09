"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";
import {
  clampDonationEur,
  COFFEE_EUR,
  DONATION_PRESETS_EUR,
  fillAmount,
  formatEuro,
  MAX_DONATION_EUR,
  MIN_DONATION_EUR,
} from "@/lib/donations";

type Step = "story" | "custom" | "confirm" | "thanks";
type SupportMode = "coffee" | "custom";

type DonationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonationModal({ open, onClose }: DonationModalProps) {
  const { t } = useLocale();
  const [step, setStep] = useState<Step>("story");
  const [mode, setMode] = useState<SupportMode>("coffee");
  const [amount, setAmount] = useState(COFFEE_EUR);
  const [draft, setDraft] = useState(String(5));

  useEffect(() => {
    if (!open) return;
    setStep("story");
    setMode("coffee");
    setAmount(COFFEE_EUR);
    setDraft(String(5));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const goCoffee = () => {
    setMode("coffee");
    setAmount(COFFEE_EUR);
    setStep("confirm");
  };

  const goCustom = () => {
    setMode("custom");
    setDraft(String(5));
    setStep("custom");
  };

  const continueFromCustom = () => {
    const next = clampDonationEur(Number(draft.replace(/[^\d]/g, "")));
    setAmount(next);
    setDraft(String(next));
    setStep("confirm");
  };

  const confirmDonation = () => {
    setStep("thanks");
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(26,20,40,0.55)] p-4 animate-fade-in sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={t.supportDeveloper}
      onClick={onClose}
    >
      <div
        className="max-h-[min(92dvh,720px)] w-full max-w-sm overflow-y-auto rounded-[28px] bg-white p-5 shadow-2xl animate-fade-up scrollbar-hide"
        onClick={(event) => event.stopPropagation()}
      >
        {step === "story" ? (
          <>
            <div className="mx-auto mb-2 flex justify-center">
              <Image
                src="/mascots/pill-holding-heart.png"
                alt=""
                width={160}
                height={160}
                className="w-[160px] object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <h2 className="text-center font-display text-[22px] font-bold leading-7 text-[#2d2a2a]">
              {t.supportDeveloper}
            </h2>
            <p className="mt-3 text-center text-[14px] font-medium leading-5 text-[#8a807e]">
              {t.supportCharityBlurb}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button onClick={goCoffee} className="w-full">
                {t.inviteCoffee}
              </Button>
              <Button variant="secondary" onClick={goCustom} className="w-full">
                {t.giveAsYouLike}
              </Button>
              <button
                type="button"
                onClick={onClose}
                className="py-2 text-center text-[14px] font-bold text-[#8a807e]"
              >
                {t.cancel}
              </button>
            </div>
          </>
        ) : null}

        {step === "custom" ? (
          <>
            <h2 className="font-display text-[20px] font-bold text-[#2d2a2a]">
              {t.chooseAmount}
            </h2>
            <p className="mt-1 text-[13px] font-medium text-[#8a807e]">
              {t.giveAsYouLike}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {DONATION_PRESETS_EUR.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setDraft(String(preset))}
                  className={[
                    "rounded-full px-4 py-2 text-[14px] font-extrabold outline outline-1 outline-offset-[-1px] transition-colors",
                    draft === String(preset)
                      ? "bg-[#5c4d9a] text-white outline-[#5c4d9a]"
                      : "bg-[#fff8f6] text-[#2d2a2a] outline-[#d1cfce]",
                  ].join(" ")}
                >
                  {formatEuro(preset)}
                </button>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-[12px] font-bold text-[#8a807e]">
                {t.customAmountLabel}
              </span>
              <div className="flex h-14 items-center gap-2 rounded-3xl border border-[#d1cfce] bg-[#fff8f6] px-4">
                <span className="text-[18px] font-extrabold text-[#5c4d9a]">€</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={MIN_DONATION_EUR}
                  max={MAX_DONATION_EUR}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-[20px] font-extrabold text-[#2d2a2a] outline-none"
                />
              </div>
            </label>

            <div className="mt-5 flex gap-2">
              <Button
                variant="secondary"
                onClick={() => setStep("story")}
                className="flex-1"
              >
                {t.back}
              </Button>
              <Button onClick={continueFromCustom} className="flex-1">
                {t.continue}
              </Button>
            </div>
          </>
        ) : null}

        {step === "confirm" ? (
          <>
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
              {t.confirmDonation}
            </h2>
            <p className="mt-3 text-center text-[14px] font-medium leading-5 text-[#8a807e]">
              {fillAmount(t.supportConfirmBlurb, formatEuro(amount))}
            </p>
            <p className="mt-4 text-center font-display text-[36px] font-bold text-[#5c4d9a]">
              {formatEuro(amount)}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button onClick={confirmDonation} className="w-full">
                {fillAmount(t.donateAmount, formatEuro(amount))}
              </Button>
              <Button
                variant="secondary"
                onClick={() => setStep(mode === "custom" ? "custom" : "story")}
                className="w-full"
              >
                {t.back}
              </Button>
            </div>
          </>
        ) : null}

        {step === "thanks" ? (
          <>
            <div className="mx-auto mb-2 flex justify-center">
              <Image
                src="/mascots/both-high-five.png"
                alt=""
                width={180}
                height={180}
                className="w-[180px] object-contain animate-float"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <h2 className="text-center font-display text-[24px] font-bold text-[#5c4d9a]">
              {t.hurrah}
            </h2>
            <p className="mt-2 text-center text-[15px] font-semibold leading-5 text-[#2d2a2a]">
              {t.thankYouSupport}
            </p>
            <div className="mt-5">
              <Button onClick={onClose} className="w-full">
                {t.keepGoing}
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
