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
    <section id="contact" className="scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral)]">
            {t.contactEyebrow}
          </p>
          <h2 className="font-display mt-1.5 text-3xl font-extrabold tracking-[-0.03em] text-[var(--ink)] sm:text-[2.6rem]">
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-[16px] font-semibold leading-7 text-[var(--ink)]">
            {t.contactIntro}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mx-auto mt-6 max-w-3xl">
          {status === "success" ? (
            <div
              role="status"
              className="rounded-[1.75rem] border border-[var(--mint)]/30 bg-[var(--mint-soft)] px-5 py-7 text-center shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-xl font-extrabold text-[var(--ink)]">
                {t.contactSuccessTitle}
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-6 text-[var(--muted)]">
                {t.contactSuccess}
              </p>
              <Button
                className="mt-5"
                variant="secondary"
                onClick={() => setStatus("idle")}
              >
                {t.contactSendAnother}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] sm:p-6"
            >
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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

                <div className="sm:col-span-2">
                  <Field
                    id="contact-message"
                    label={t.contactMessageLabel || "Message"}
                    hint={t.contactMessageHint}
                  >
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        t.contactMessagePlaceholder || "Tell us what’s on your mind…"
                      }
                      className={`${inputClass} min-h-[96px] resize-y`}
                    />
                  </Field>
                </div>
              </div>

              {status === "error" ? (
                <p role="alert" className="mt-3 text-[14px] font-semibold text-[var(--coral)]">
                  {error || t.contactError}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 w-full sm:w-auto sm:min-w-[200px]"
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
  "mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-peach)] px-3.5 py-2.5 text-[15px] font-semibold text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--coral)] focus:ring-2 focus:ring-[var(--coral)]/25 dark:bg-[var(--bg-peach-deep)]";

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
      <label htmlFor={id} className="text-[13px] font-extrabold text-[var(--ink)]">
        {label}
      </label>
      {hint ? (
        <p className="mt-0.5 text-[12px] font-medium text-[var(--muted)]">{hint}</p>
      ) : null}
      {children}
    </div>
  );
}
