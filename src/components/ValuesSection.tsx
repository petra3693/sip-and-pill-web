"use client";

import { useLocale } from "@/components/LocaleProvider";

export function ValuesSection() {
  const { t } = useLocale();

  const values = [
    {
      title: t.valueFreeTitle,
      description: t.valueFreeDesc,
      iconBg: "bg-[var(--cream)]",
      icon: <HeartIcon />,
    },
    {
      title: t.valuePrivateTitle,
      description: t.valuePrivateDesc,
      iconBg: "bg-[var(--privacy)]",
      icon: <ShieldIcon />,
    },
    {
      title: t.valueSimpleTitle,
      description: t.valueSimpleDesc,
      iconBg: "bg-[var(--tip)]",
      icon: <AccessIcon />,
    },
    {
      title: t.valueOfflineTitle,
      description: t.valueOfflineDesc,
      iconBg: "bg-[var(--coral-muted)]",
      icon: <OfflineIcon />,
    },
  ];

  return (
    <section id="values" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
            {t.valuesEyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            {t.valuesTitle}
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-7 text-[var(--muted)]">
            {t.valuesIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="animate-fade-up rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div
                className={[
                  "mb-4 flex size-12 items-center justify-center rounded-2xl text-[var(--ink)]",
                  value.iconBg,
                ].join(" ")}
              >
                {value.icon}
              </div>
              <h3 className="font-display text-[17px] font-bold tracking-tight text-[var(--ink)]">
                {value.title}
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-6 text-[var(--muted)]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
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

function AccessIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 19c1.6-3.2 4-4.8 7-4.8S17.4 15.8 19 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 4.5 19 6l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfflineIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="3.5"
        width="12"
        height="17"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 17.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 9.5h6M9 12.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
