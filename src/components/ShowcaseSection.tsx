"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn, Float } from "@/components/Motion";
import { PhoneFrame } from "@/components/PhoneFrame";

export function ShowcaseSection() {
  const { t } = useLocale();

  const rows = [
    {
      id: "free",
      eyebrow: "01",
      title: t.valueFreeTitle,
      body: t.valueFreeDesc,
      reverse: false,
      visual: {
        kind: "phone" as const,
        src: "/screenshots/splash.png",
        alt: "Sip & Pill splash screen",
      },
    },
    {
      id: "private",
      eyebrow: "02",
      title: t.valuePrivateTitle,
      body: t.valuePrivateDesc,
      reverse: true,
      visual: {
        kind: "phone" as const,
        src: "/screenshots/settings-privacy.png",
        alt: "Sip & Pill privacy settings",
      },
    },
    {
      id: "simple",
      eyebrow: "03",
      title: t.valueSimpleTitle,
      body: t.valueSimpleDesc,
      reverse: false,
      visual: {
        kind: "illustration" as const,
        src: "/mascots/both-high-five.png",
        alt: "",
      },
    },
    {
      id: "languages",
      eyebrow: "04",
      title: t.roadmapLanguagesTitle,
      body: t.roadmapLanguagesDesc,
      reverse: true,
      visual: {
        kind: "phone" as const,
        src: "/screenshots/language.png",
        alt: "Sip & Pill language picker",
      },
    },
  ];

  return (
    <section id="different" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral)]">
            {t.valuesEyebrow}
          </p>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[3.25rem]">
            {t.valuesTitle}
          </h2>
          <p className="mt-3 text-[18px] font-semibold leading-8 text-[var(--ink)]">
            {t.valuesIntro}
          </p>
        </FadeIn>

        <div className="mt-12 space-y-14 sm:mt-14 sm:space-y-16">
          {rows.map((row, index) => (
            <FadeIn key={row.id} delay={0.05 * index}>
              <article
                className={[
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                  row.reverse ? "lg:[&>*:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center sm:max-w-[480px]">
                  <Float amplitude={8} duration={3.8} delay={index * 0.12}>
                    {row.visual.kind === "phone" ? (
                      <PhoneFrame
                        src={row.visual.src}
                        alt={row.visual.alt}
                        className="mx-auto w-full max-w-[280px] sm:max-w-[300px]"
                      />
                    ) : (
                      <Image
                        src={row.visual.src}
                        alt={row.visual.alt}
                        width={560}
                        height={560}
                        className="mascot-cutout mx-auto h-auto w-full max-w-[420px] object-contain drop-shadow-xl sm:max-w-[460px]"
                      />
                    )}
                  </Float>
                </div>

                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[var(--lavender-deep)]">
                    {row.eyebrow}
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[2.35rem]">
                    {row.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[17px] font-semibold leading-8 text-[var(--ink)]">
                    {row.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
