"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";

type AppMockupProps = {
  /** Tighter shell for the hugged hero composition. */
  compact?: boolean;
  /** Fill a parent phone-slot (no outer device chrome). */
  fill?: boolean;
};

/** Phone mock always uses the app’s peach UI — not the website theme. */
export function AppMockup({ compact = false, fill = false }: AppMockupProps) {
  const { t } = useLocale();

  return (
    <div
      className={[
        "relative mx-auto w-full",
        fill ? "h-full" : "",
        compact || fill ? "max-w-none" : "max-w-[300px] sm:max-w-[320px]",
      ].join(" ")}
    >
      {!compact && !fill ? (
        <div
          className="pointer-events-none absolute -inset-8 rounded-full opacity-70 blur-2xl"
          style={{ background: "var(--hero-glow)" }}
          aria-hidden="true"
        />
      ) : null}

      <div
        className={[
          "relative overflow-hidden bg-[#fff8f6]",
          fill
            ? "flex h-full min-h-0 flex-col"
            : "rounded-[32px] border border-[#2a2438] shadow-[0_24px_50px_rgba(0,0,0,0.45)]",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between font-bold text-[#2d2a2a]",
            fill ? "px-3 pb-1 pt-3 text-[10px]" : "px-5 pb-2 pt-4 text-[11px]",
          ].join(" ")}
        >
          <span>9:41</span>
          <span className="opacity-50">●●●</span>
        </div>

        <div
          className={
            fill
              ? "min-h-0 flex-1 space-y-2 overflow-hidden px-3 pb-3"
              : "space-y-3 px-4 pb-5"
          }
        >
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p
                className={[
                  "font-semibold text-[#8a807e]",
                  fill ? "text-[10px]" : "text-[12px]",
                ].join(" ")}
              >
                {t.mockWelcome}
              </p>
              <p
                className={[
                  "font-display font-bold leading-tight tracking-tight text-[#2d2a2a]",
                  fill ? "text-[15px]" : "text-[20px]",
                ].join(" ")}
              >
                {t.mockHi}
              </p>
            </div>
            <div
              className={[
                "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ffc72c] p-0.5",
                fill ? "size-8" : "size-11",
              ].join(" ")}
            >
              <div className="relative size-full overflow-hidden rounded-full bg-[#fff9db]">
                <Image
                  src="/mascots/both-waving-hello.png"
                  alt=""
                  width={44}
                  height={44}
                  className="size-full object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          <section
            className={[
              "bg-[#5c4d9a] text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
              fill ? "rounded-[18px] p-3" : "rounded-[24px] p-5",
            ].join(" ")}
          >
            <p
              className={[
                "font-semibold text-white/75",
                fill ? "text-[10px]" : "text-[12px]",
              ].join(" ")}
            >
              {t.mockHydration}
            </p>
            <div className={["flex items-end justify-between gap-2", fill ? "mt-2" : "mt-3"].join(" ")}>
              <div>
                <p
                  className={[
                    "font-display font-bold leading-none tracking-tight",
                    fill ? "text-[26px]" : "text-[34px]",
                  ].join(" ")}
                >
                  62%
                </p>
                <p
                  className={[
                    "font-medium text-white/80",
                    fill ? "mt-0.5 text-[10px]" : "mt-1 text-[12px]",
                  ].join(" ")}
                >
                  {t.mockGlasses}
                </p>
              </div>
              <div
                className={[
                  "relative flex items-center justify-center",
                  fill ? "size-12" : "size-[72px]",
                ].join(" ")}
              >
                <svg viewBox="0 0 72 72" className="size-full -rotate-90">
                  <circle
                    cx="36"
                    cy="36"
                    r="28"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="28"
                    fill="none"
                    stroke="#ffc72c"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${0.62 * 176} 176`}
                  />
                </svg>
              </div>
            </div>
            <div className={["flex justify-between", fill ? "mt-2.5" : "mt-4"].join(" ")}>
              <span
                className={[
                  "flex items-center justify-center bg-[#ffece6] text-[#2d2a2a]",
                  fill ? "size-8 rounded-[14px] text-sm" : "size-10 rounded-[18px]",
                ].join(" ")}
              >
                −
              </span>
              <span
                className={[
                  "flex items-center justify-center bg-[#ffece6] text-[#2d2a2a]",
                  fill ? "size-8 rounded-[14px] text-sm" : "size-10 rounded-[18px]",
                ].join(" ")}
              >
                +
              </span>
            </div>
          </section>

          <section
            className={[
              "border border-[#d1cfce] bg-white",
              fill ? "rounded-[18px] p-2.5" : "rounded-[24px] p-3.5",
            ].join(" ")}
          >
            <p
              className={[
                "font-extrabold text-[#2d2a2a]",
                fill ? "mb-1.5 text-[11px]" : "mb-2.5 text-[13px]",
              ].join(" ")}
            >
              {t.mockMeds}
            </p>
            <div className="space-y-1.5">
              <MedRow name="D-vitamin" time={t.mockMedMorning} done compact={fill} />
              <MedRow name="Magnézium" time={t.mockMedEvening} compact={fill} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MedRow({
  name,
  time,
  done = false,
  compact = false,
}: {
  name: string;
  time: string;
  done?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center bg-[#fff8f6]",
        compact ? "gap-2 rounded-[12px] p-1.5" : "gap-3 rounded-[16px] p-2.5",
      ].join(" ")}
    >
      <span
        className={[
          "flex items-center justify-center rounded-lg",
          compact ? "size-6" : "size-8",
          done ? "bg-[#eef8f2] text-[#78c193]" : "bg-[#e6e0ff] text-[#5c4d9a]",
        ].join(" ")}
      >
        {done ? (
          <span className={compact ? "text-[11px] font-bold" : "text-[13px] font-bold"}>
            ✓
          </span>
        ) : (
          <span className="block size-2.5 rounded-full bg-current opacity-80" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={[
            "truncate font-bold text-[#2d2a2a]",
            compact ? "text-[11px]" : "text-[13px]",
          ].join(" ")}
        >
          {name}
        </p>
        <p
          className={[
            "font-medium text-[#8a807e]",
            compact ? "text-[9px]" : "text-[11px]",
          ].join(" ")}
        >
          {time}
        </p>
      </div>
      <span
        className={[
          "flex items-center justify-center rounded-[20px] font-bold",
          compact ? "size-6 text-[10px]" : "size-[30px] text-[12px]",
          done ? "bg-[#78c193] text-white" : "bg-[#ffece6] text-[#2d2a2a]",
        ].join(" ")}
      >
        {done ? "✓" : ""}
      </span>
    </div>
  );
}
