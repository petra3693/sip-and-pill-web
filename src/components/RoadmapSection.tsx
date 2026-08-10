"use client";

import { useLocale } from "@/components/LocaleProvider";
import { FadeIn } from "@/components/Motion";

export function RoadmapSection() {
  const { t } = useLocale();

  const items = [
    {
      status: t.roadmapPlanned,
      title: t.roadmapWidgetsTitle,
      body: t.roadmapWidgetsDesc,
      icon: <WidgetIcon />,
    },
    {
      status: t.roadmapPlanned,
      title: t.roadmapWatchTitle,
      body: t.roadmapWatchDesc,
      icon: <WatchIcon />,
    },
  ];

  return (
    <section
      id="roadmap"
      className="scroll-mt-24 bg-[#e6e0ff] px-5 py-14 text-[#0d0e23] sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--indigo)]">
            {t.roadmapEyebrow}
          </p>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-[-0.03em] text-[#0d0e23] sm:text-[3.25rem]">
            {t.roadmapTitle}
          </h2>
          <p className="mt-3 text-[18px] font-semibold leading-8 text-[#2d2a2a]">
            {t.roadmapIntro}
          </p>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-12">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={0.06 * index}>
              <article className="text-center md:text-left">
                <div className="mx-auto mb-4 text-[#0d0e23] md:mx-0">
                  {item.icon}
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[var(--indigo)]">
                  {item.status}
                </p>
                <h3 className="font-display mt-2 text-[1.35rem] font-extrabold tracking-tight text-[#0d0e23]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] font-semibold leading-7 text-[#2d2a2a]">
                  {item.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WidgetIcon() {
  return (
    <svg className="size-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function WatchIcon() {
  return (
    <svg className="size-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="5.5" width="10" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 5.5V3.8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V5.5M9 18.5v1.7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 9.5v3l1.8 1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
