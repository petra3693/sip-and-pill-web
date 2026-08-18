"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn, Float } from "@/components/Motion";

export function ShowcaseSection() {
  const { t } = useLocale();

  const stackedItems = [
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
    {
      id: "simple",
      eyebrow: "03",
      title: t.valueSimpleTitle,
      body: t.valueSimpleDesc,
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

        <FadeIn delay={0.08} className="mt-14 sm:mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[560px]">
              <div className="relative aspect-[4/5] w-full">
                <iframe
                  src="https://my.spline.design/iphoneanimatedmockupdepthoffield-rUvf6uZN9ct5eDSAbXzBeIYs/"
                  title="Sip & Pill iPhone mockup"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay"
                />
              </div>
            </div>

            <div className="space-y-10 sm:space-y-12">
              {stackedItems.map((item, index) => (
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
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 sm:mt-16">
          <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 lg:[&>*:first-child]:order-2">
            <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center sm:max-w-[560px]">
              <Float amplitude={8} duration={3.8} delay={0.12}>
                <Image
                  src="/screenshots/language-welcome.png"
                  alt="Sip & Pill language picker and welcome screens"
                  width={952}
                  height={1024}
                  className="mx-auto h-auto w-full object-contain drop-shadow-2xl"
                />
              </Float>
            </div>

            <div>
              <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[var(--lavender-deep)]">
                04
              </p>
              <h3 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[2.35rem]">
                {t.roadmapLanguagesTitle}
              </h3>
              <p className="mt-3 max-w-md text-[17px] font-semibold leading-8 text-[var(--ink)]">
                {t.roadmapLanguagesDesc}
              </p>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
