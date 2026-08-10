"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn, Float } from "@/components/Motion";

export function ShowcaseSection() {
  const { t } = useLocale();

  const topItems = [
    {
      id: "free",
      eyebrow: "01",
      title: t.valueFreeTitle,
      body: t.valueFreeDesc,
    },
    {
      id: "private",
      eyebrow: "02",
      title: t.valuePrivateTitle,
      body: t.valuePrivateDesc,
    },
  ];

  const rows = [
    {
      id: "simple",
      eyebrow: "03",
      title: t.valueSimpleTitle,
      body: t.valueSimpleDesc,
      reverse: false,
      visual: {
        src: "/screenshots/reminders-about.png",
        alt: "Sip & Pill reminders and About screens",
        width: 993,
        height: 1024,
      },
    },
    {
      id: "languages",
      eyebrow: "04",
      title: t.roadmapLanguagesTitle,
      body: t.roadmapLanguagesDesc,
      reverse: true,
      visual: {
        src: "/screenshots/language-welcome.png",
        alt: "Sip & Pill language picker and welcome screens",
        width: 952,
        height: 1024,
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

        <FadeIn delay={0.05} className="mt-10 sm:mt-12">
          <Float amplitude={6} duration={4}>
            <Image
              src="/screenshots/setup-flow.png"
              alt="Sip & Pill setup screens for water and medication goals"
              width={1024}
              height={766}
              className="mx-auto h-auto w-full max-w-4xl object-contain drop-shadow-2xl"
              priority
            />
          </Float>
        </FadeIn>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          {topItems.map((item, index) => (
            <FadeIn key={item.id} delay={0.06 + index * 0.04}>
              <article>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[var(--lavender-deep)]">
                  {item.eyebrow}
                </p>
                <h3 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[2.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-[17px] font-semibold leading-8 text-[var(--ink)]">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {rows.map((row, index) => (
            <FadeIn key={row.id} delay={0.05 * index}>
              <article
                className={[
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                  row.reverse ? "lg:[&>*:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center sm:max-w-[560px]">
                  <Float amplitude={8} duration={3.8} delay={index * 0.12}>
                    <Image
                      src={row.visual.src}
                      alt={row.visual.alt}
                      width={row.visual.width}
                      height={row.visual.height}
                      className="mx-auto h-auto w-full object-contain drop-shadow-2xl"
                    />
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
