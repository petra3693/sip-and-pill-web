"use client";

import { useLocale } from "@/components/LocaleProvider";

export function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    {
      title: t.featureHydrationTitle,
      description: t.featureHydrationDesc,
      iconBg: "bg-[var(--tip)]",
      accent: "var(--sip-blue)",
      icon: <DropIcon />,
    },
    {
      title: t.featureMedsTitle,
      description: t.featureMedsDesc,
      iconBg: "bg-[var(--coral-muted)]",
      accent: "var(--coral)",
      icon: <PillIcon />,
    },
    {
      title: t.featureStatsTitle,
      description: t.featureStatsDesc,
      iconBg: "bg-[var(--privacy)]",
      accent: "var(--success)",
      icon: <StatsIcon />,
    },
  ];

  return (
    <section
      id="features"
      className="scroll-mt-24 border-y border-[var(--card-border)] bg-[var(--bg-peach-deep)]/55 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
            {t.featuresEyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            {t.featuresTitle}
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-7 text-[var(--muted)]">
            {t.featuresIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="animate-fade-up relative px-1 text-center sm:text-left lg:px-4"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div
                className={[
                  "mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl text-[var(--ink)] sm:mx-0",
                  feature.iconBg,
                ].join(" ")}
              >
                {feature.icon}
              </div>
              <div
                className="mx-auto mb-4 h-1 w-12 rounded-full sm:mx-0"
                style={{ background: feature.accent }}
                aria-hidden="true"
              />
              <h3 className="font-display text-[1.2rem] font-bold tracking-tight text-[var(--ink)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] font-medium leading-7 text-[var(--muted)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DropIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c2.8 3.6 6 7.2 6 11a6 6 0 1 1-12 0c0-3.8 3.2-7.4 6-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="8"
        width="17"
        height="8"
        rx="4"
        transform="rotate(-35 12 12)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 9.5 15 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatsIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19V11M12 19V5M19 19v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
