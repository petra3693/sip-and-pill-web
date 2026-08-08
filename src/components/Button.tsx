import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex h-14 items-center justify-center gap-2.5 rounded-full px-6 text-[17px] font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--coral)] text-white shadow-[var(--shadow-soft)] hover:brightness-105",
  secondary:
    "bg-[var(--card)] text-[var(--purple)] border border-[var(--border)] shadow-sm hover:bg-[var(--coral-muted)]",
  ghost: "bg-transparent text-[var(--purple)] hover:bg-[var(--coral-muted)]",
  dark: "bg-[var(--ink)] text-white shadow-[var(--shadow-soft)] hover:brightness-110 dark:bg-white dark:text-[var(--bg-peach)]",
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
