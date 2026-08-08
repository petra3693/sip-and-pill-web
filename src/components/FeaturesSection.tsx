"use client";

import { useLocale } from "@/components/LocaleProvider";

export function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    {
      title: t.featureWaterTitle,
      description: t.featureWaterDesc,
      iconBg: "bg-[var(--tip)]",
      icon: <DropIcon />,
    },
    {
      title: t.featureMedsTitle,
      description: t.featureMedsDesc,
      iconBg: "bg-[var(--coral-muted)]",
      icon: <PillIcon />,
    },
    {
      title: t.featurePrivacyTitle,
      description: t.featurePrivacyDesc,
      iconBg: "bg-[var(--privacy)]",
      icon: <ShieldIcon />,
    },
    {
      title: t.featureFreeTitle,
      description: t.featureFreeDesc,
      iconBg: "bg-[var(--cream)]",
      icon: <HeartIcon />,
    },
  ];

  return (
    <section id="features" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl animate-fade-up">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div
                className={[
                  "mb-4 flex size-12 items-center justify-center rounded-2xl text-[var(--ink)]",
                  feature.iconBg,
                ].join(" ")}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-[17px] font-bold tracking-tight text-[var(--ink)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-6 text-[var(--muted)]">
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
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function ShieldIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function HeartIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.3-7-9.2C5 7.6 6.8 6 8.8 6c1.3 0 2.4.6 3.2 1.6C12.8 6.6 13.9 6 15.2 6 17.2 6 19 7.6 19 10.8 19 15.7 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
