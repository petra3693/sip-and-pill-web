"use client";

import { Button } from "@/components/Button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLocale } from "@/components/LocaleProvider";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Controller",
    body: [
      "The data controller for Sip & Pill is Petra Szakacs (operating as Lumen Studio), established in Germany.",
      "Address: Einbecker Straße 64A, 10315 Berlin, Germany",
      "Email: raving.pascal@gmail.com",
      "Website: https://www.sip-and-pill.app/",
      "This notice is provided under the EU General Data Protection Regulation (GDPR / DSGVO) and applicable German law (including the Telemediengesetz / Digitale-Dienste-Gesetz where relevant).",
    ],
  },
  {
    title: "2. What the app stores",
    body: [
      "Sip & Pill is designed as an offline wellness companion. On your device it may store:",
      "• the display name you enter;",
      "• language and theme preferences;",
      "• water goals, glass size, and daily water logs;",
      "• medication names, schedules, and taken/not-taken status;",
      "• reminder preferences and celebration flags;",
      "• other settings you configure in the app.",
      "This information is stored locally (for example in the app's local storage / device storage). It is not uploaded to our servers as part of normal app use.",
    ],
  },
  {
    title: "3. Purpose of processing",
    body: [
      "We process the data listed above solely to provide the app's features on your device (personalization, tracking, reminders, and settings). There is no advertising profile and no sale of personal data.",
    ],
  },
  {
    title: "4. Legal basis",
    body: [
      "Where GDPR applies, processing is based on Art. 6(1)(b) GDPR (performance of the service you request) and, where needed, Art. 6(1)(f) GDPR (legitimate interest in operating a local app experience). You choose what to enter; you can delete it at any time.",
    ],
  },
  {
    title: "5. No account, no cloud sync",
    body: [
      'Sip & Pill does not require an account. We do not operate a cloud backend for your water or medication logs. If you use the "Contact support" feature, your device mail app may send a message you compose to our support address; that is handled by your mail provider, not by uploading app content from within Sip & Pill.',
    ],
  },
  {
    title: "6. Analytics, ads, and tracking",
    body: [
      "The app does not include third-party advertising SDKs or analytics trackers that profile you for marketing. Platform services (Apple / Google) may collect diagnostic or store-related data under their own terms when you install or rate the app.",
    ],
  },
  {
    title: "7. Children",
    body: [
      "Sip & Pill is a general wellness tool. It is not directed at children under 13 (or the higher age required in your country). Do not enter another person's health information without a lawful basis.",
    ],
  },
  {
    title: "8. Retention and deletion",
    body: [
      'Data remains on your device until you change or delete it, uninstall the app, or use "Reset All Data" in Settings, which erases local app preferences and logs stored by Sip & Pill.',
    ],
  },
  {
    title: "9. Your rights (EEA / UK / similar)",
    body: [
      "Depending on applicable law, you may have rights of access, rectification, erasure, restriction, objection, and data portability regarding personal data. Because data is stored on your device, you can exercise many of these rights directly in the app (edit or reset). For other requests, contact raving.pascal@gmail.com. You may lodge a complaint with a supervisory authority in Germany or your place of residence.",
    ],
  },
  {
    title: "10. Medical disclaimer",
    body: [
      "Sip & Pill is not a medical device and does not provide medical advice, diagnosis, or treatment. Always follow guidance from qualified healthcare professionals for medications and health decisions.",
    ],
  },
  {
    title: "11. This website",
    body: [
      "This site (sip-and-pill.app) also processes the message and reply email you submit via the Contact form. Submissions are relayed through a third-party form-processing service (Web3Forms or FormSubmit, depending on configuration) solely so we can reply to you; they are not shared for marketing.",
    ],
  },
  {
    title: "12. Changes",
    body: [
      'We may update this Privacy Policy when the app or legal requirements change. The "Last updated" date will be revised accordingly. Continued use after an update constitutes acknowledgment of the revised notice where permitted by law.',
    ],
  },
  {
    title: "13. Contact",
    body: [
      "Petra Szakacs (operating as Lumen Studio)",
      "Address: Einbecker Straße 64A, 10315 Berlin, Germany",
      "Email: raving.pascal@gmail.com",
      "Jurisdiction: Germany",
    ],
  },
];

export default function PrivacyPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
          {t.privacyEyebrow}
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-[var(--ink)]">
          Privacy Policy — Sip &amp; Pill
        </h1>
        <p className="mt-3 text-[15px] font-medium text-[var(--muted)]">
          Last updated: August 2026
        </p>

        <div className="mt-8 space-y-6 rounded-[28px] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
                {section.title}
              </h2>
              <div className="space-y-2 text-[15px] font-medium leading-7 text-[var(--muted)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Button href="/" className="mt-8">
          {t.backHome}
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}
