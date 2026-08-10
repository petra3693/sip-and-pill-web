"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn, Float } from "@/components/Motion";

export function StorySection() {
  const { t } = useLocale();

  const beats = [
    { title: t.storyTriggerTitle, body: t.storyTriggerBody },
    { title: t.storyFrustrationTitle, body: t.storyFrustrationBody },
    { title: t.storySolutionTitle, body: t.storySolutionBody },
  ];

  return (
    <section id="story" className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral)]">
            {t.storyEyebrow}
          </p>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[3.25rem]">
            {t.storyTitle}
          </h2>
          <p className="mt-4 text-[18px] font-semibold leading-8 text-[var(--ink)] sm:text-[19px]">
            {t.storyIntro}
          </p>
        </FadeIn>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <FadeIn className="relative mx-auto w-full max-w-[540px]">
            <Float amplitude={10} duration={4}>
              <Image
                src="/mascots/both-reading-together.png"
                alt={t.aboutMascotAlt}
                width={640}
                height={640}
                className="mascot-cutout mx-auto w-full object-contain"
              />
            </Float>
          </FadeIn>

          <div className="space-y-8 sm:space-y-10">
            {beats.map((beat, index) => (
              <FadeIn key={beat.title} delay={0.05 * index}>
                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-[var(--lavender-deep)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-1.5 text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-[1.85rem]">
                    {beat.title}
                  </h3>
                  <p className="mt-3 text-[17px] font-semibold leading-8 text-[var(--ink)] sm:text-[18px]">
                    {beat.body}
                  </p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.2}>
              <blockquote className="border-l-[3px] border-[var(--coral)] pl-5 text-[17px] font-semibold italic leading-8 text-[var(--ink)] sm:text-[18px]">
                “{t.trustQuote}”
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
