import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-bold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:text-[16px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--coral)] text-[#0d0e23] shadow-[0_10px_28px_rgba(255,106,90,0.35)] hover:brightness-105",
  secondary:
    "bg-[#0d0e23] text-white shadow-[var(--shadow-soft)] hover:brightness-125 dark:bg-[#1a1840] dark:text-white dark:hover:brightness-110",
  ghost: "bg-transparent text-[var(--ink)] hover:bg-[var(--coral-muted)]",
  dark: "bg-[#0d0e23] text-white shadow-[var(--shadow-soft)] hover:brightness-125",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const classes = [base, variants[variant], className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
