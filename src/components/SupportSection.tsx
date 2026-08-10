"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useDonation } from "@/components/DonationProvider";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn, Float } from "@/components/Motion";

/** Emotional support CTA — placed directly after the story. */
export function SupportSection() {
  const { t } = useLocale();
  const { openDonation } = useDonation();

  return (
    <section id="support" className="scroll-mt-24 px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#0d0e23] via-[#161836] to-[#1a1840] px-6 py-10 shadow-[var(--shadow-lift)] sm:px-10 sm:py-12 lg:px-12">
            <div
              className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[var(--coral)]/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-16 size-80 rounded-full bg-[var(--lavender)]/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
              <Float className="mx-auto w-full max-w-[420px] lg:max-w-none" amplitude={8}>
                <Image
                  src="/mascots/both-waving-hello.png"
                  alt=""
                  width={640}
                  height={640}
                  className="mx-auto h-auto w-full object-contain drop-shadow-2xl"
                />
              </Float>

              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-[2.4rem]">
                  {t.supportTitle}
                </h2>
                <p className="mt-3 text-[17px] font-semibold leading-7 text-white sm:text-[18px]">
                  {t.supportBody}
                </p>
                <div className="mt-7 flex justify-center lg:justify-start">
                  <Button
                    onClick={openDonation}
                    className="w-full sm:w-auto sm:min-w-[240px]"
                  >
                    {t.supportProjectCta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
