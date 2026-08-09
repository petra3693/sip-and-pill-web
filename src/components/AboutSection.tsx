"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
            {t.aboutEyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-8 text-[var(--muted)] sm:text-[18px]">
            {t.aboutIntro}
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
          <AboutBlock
            eyebrow="01"
            title={t.aboutStoryTitle}
            body={t.aboutStoryBody}
            image="/mascots/both-reading-together.png"
            imageAlt={t.aboutMascotAlt}
            reverse={false}
            glow="rgba(126,200,245,0.22)"
          />

          <AboutBlock
            eyebrow="02"
            title={t.aboutFreeTitle}
            body={t.aboutFreeBody}
            image="/mascots/pill-holding-heart.png"
            imageAlt=""
            reverse
            glow="rgba(255,126,112,0.22)"
          />

          <AboutBlock
            eyebrow="03"
            title={t.aboutPrivacyTitle}
            body={t.aboutPrivacyBody}
            image="/mascots/drop-thumbs-up.png"
            imageAlt=""
            reverse={false}
            glow="rgba(120,193,147,0.22)"
          />

          <AboutBlock
            eyebrow="04"
            title={t.aboutTogetherTitle}
            body={t.aboutTogetherBody}
            image="/mascots/both-dancing.png"
            imageAlt=""
            reverse
            glow="rgba(255,199,44,0.2)"
          />
        </div>
      </div>
    </section>
  );
}

function AboutBlock({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse,
  glow,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
  glow: string;
}) {
  return (
    <div
      className={[
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
        reverse ? "lg:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center lg:max-w-[400px]">
        <div
          className="absolute inset-[12%] rounded-full blur-3xl"
          style={{ background: glow }}
          aria-hidden="true"
        />
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
          className="mascot-cutout relative z-10 w-full object-contain animate-float"
        />
      </div>

      <div>
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
          {eyebrow}
        </p>
        <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-[16px] font-medium leading-8 text-[var(--muted)] sm:text-[17px]">
          {body}
        </p>
      </div>
    </div>
  );
}
