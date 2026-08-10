"use client";

import { useLocale } from "@/components/LocaleProvider";
import { FadeIn } from "@/components/Motion";
import { StoreBadges } from "@/components/StoreBadges";

export function BenefitsSection() {
  const { t } = useLocale();

  const items = [
    { title: t.benefitFreeTitle, body: t.benefitFreeDesc, icon: <GiftIcon /> },
    { title: t.benefitPrivateTitle, body: t.benefitPrivateDesc, icon: <ShieldIcon /> },
    { title: t.benefitSimpleTitle, body: t.benefitSimpleDesc, icon: <SparkIcon /> },
    { title: t.benefitRemindersTitle, body: t.benefitRemindersDesc, icon: <BellIcon /> },
  ];

  return (
    <section id="benefits" className="scroll-mt-24 px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral)]">
            {t.benefitsEyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            {t.benefitsTitle}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={0.04 * index}>
              <article className="h-full text-center sm:text-left">
                <div className="mx-auto mb-4 text-[var(--ink)] sm:mx-0">
                  {item.icon}
                </div>
                <h3 className="font-display text-[1.05rem] font-extrabold tracking-tight text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] font-semibold leading-6 text-[var(--ink)]">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-10">
          <StoreBadges />
        </FadeIn>
      </div>
    </section>
  );
}

function GiftIcon() {
  return (
    <svg className="size-14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 8v13M4.5 11h15v8.5a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5V11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 8h17v3H3.5V8ZM12 8c-2 0-3.5-1.6-3.5-3.2S10 2.5 12 4.8C14 2.5 15.5 3.2 15.5 4.8S14 8 12 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="size-14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v6c0 4.5 2.8 7.4 7 9 4.2-1.6 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.8 1.8 3.7-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="size-14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 13.2 9l5.3 1.2L13.2 11.4 12 16.5l-1.2-5.1L5.5 10.2 10.8 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m18 15.5.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="size-14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 10.5a5.5 5.5 0 0 1 11 0c0 4.2 1.3 5.5 1.3 5.5H5.2s1.3-1.3 1.3-5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.5a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
