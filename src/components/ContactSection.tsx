"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";
import { FadeIn } from "@/components/Motion";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const { t, locale } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, locale }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error || t.contactError);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError(t.contactError);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral)]">
            {t.contactEyebrow}
          </p>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[3.25rem]">
            {t.contactTitle}
          </h2>
          <p className="mt-3 text-[18px] font-semibold leading-8 text-[var(--ink)]">
            {t.contactIntro}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mx-auto mt-10 max-w-2xl">
          {status === "success" ? (
            <div
              role="status"
              className="rounded-[2rem] border border-[var(--mint)]/30 bg-[var(--mint-soft)] px-6 py-10 text-center shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-2xl font-extrabold text-[var(--ink)]">
                {t.contactSuccessTitle}
              </p>
              <p className="mt-3 text-[16px] font-semibold leading-7 text-[var(--muted)]">
                {t.contactSuccess}
              </p>
              <Button
                className="mt-6"
                variant="secondary"
                onClick={() => setStatus("idle")}
              >
                {t.contactSendAnother}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
            >
              <div className="space-y-5">
                <Field
                  id="contact-name"
                  label={t.contactNameLabel || "Name"}
                  hint={t.contactNameHint}
                >
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contactNamePlaceholder || "Optional"}
                    className={inputClass}
                  />
                </Field>

                <Field
                  id="contact-email"
                  label={t.contactEmailLabel || "Email"}
                  hint={t.contactEmailHint || "So we can reply."}
                >
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contactEmailPlaceholder || "you@example.com"}
                    className={inputClass}
                  />
                </Field>

                <Field
                  id="contact-message"
                  label={t.contactMessageLabel || "Message"}
                  hint={t.contactMessageHint}
                >
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      t.contactMessagePlaceholder || "Tell us what’s on your mind…"
                    }
                    className={`${inputClass} min-h-[140px] resize-y`}
                  />
                </Field>
              </div>

              {status === "error" ? (
                <p role="alert" className="mt-4 text-[14px] font-semibold text-[var(--coral)]">
                  {error || t.contactError}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full"
              >
                {status === "sending" ? t.contactSending : t.contactSubmit}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-peach)] px-4 py-3.5 text-[16px] font-semibold text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--coral)] focus:ring-2 focus:ring-[var(--coral)]/25 dark:bg-[var(--bg-peach-deep)]";

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-extrabold text-[var(--ink)]">
        {label}
      </label>
      {hint ? (
        <p className="mt-1 text-[13px] font-medium text-[var(--muted)]">{hint}</p>
      ) : null}
      {children}
    </div>
  );
}
