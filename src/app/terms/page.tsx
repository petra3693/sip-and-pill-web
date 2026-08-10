"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLocale } from "@/components/LocaleProvider";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Provider",
    body: [
      "Sip & Pill is provided by Petra Szakacs (operating as Lumen Studio), Germany.",
      "Address: Einbecker Straße 64A, 10315 Berlin, Germany",
      "Email: raving.pascal@gmail.com",
      "Website: https://www.sip-and-pill.app/",
    ],
  },
  {
    title: "2. Acceptance",
    body: [
      "By downloading or using Sip & Pill, or using this website, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the app or this website.",
    ],
  },
  {
    title: "3. License",
    body: [
      "We grant you a personal, non-exclusive, non-transferable, revocable license to use Sip & Pill for your own private, non-commercial wellness tracking on devices you own or control.",
    ],
  },
  {
    title: "4. Not a medical device",
    body: [
      "Sip & Pill is a consumer wellness / reminder tool only. It is not a medical device under applicable law, is not intended for clinical decision-making, and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding medications and health conditions. Do not delay seeking care because of information in the app.",
    ],
  },
  {
    title: "5. Your responsibilities",
    body: [
      "You are responsible for the accuracy of information you enter (including medication names and schedules) and for following your clinician's instructions. Keep the app and your device reasonably secure. Do not misuse the app or this website (e.g. reverse engineering beyond permitted law, unlawful content, or interference with others).",
    ],
  },
  {
    title: "6. Offline nature",
    body: [
      "Core tracking features are designed to work offline on your device. Availability of optional features (mail, share sheet, store rating) depends on your device, OS, and network.",
    ],
  },
  {
    title: "7. Intellectual property",
    body: [
      "Sip & Pill, including name, branding, mascots, and software, is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works except as allowed by mandatory law or with prior written permission.",
    ],
  },
  {
    title: "8. Free service / no warranty",
    body: [
      'The app and this website are provided free of charge, "as is" and "as available," without warranties of any kind to the fullest extent permitted by law, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted or error-free operation.',
    ],
  },
  {
    title: "9. Limitation of liability",
    body: [
      "To the fullest extent permitted by applicable law, Petra Szakacs / Lumen Studio shall not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, arising from use of the app or this website. Mandatory consumer rights in Germany or your country of residence remain unaffected. Nothing in these Terms excludes liability for intent, gross negligence, or injury to life, body, or health where such exclusion is prohibited.",
    ],
  },
  {
    title: "10. Donations",
    body: [
      'Donations made via this website (e.g. "Buy Me a Coffee") are voluntary, one-time, and do not unlock any paid features — every feature of Sip & Pill remains free for everyone. Donations are processed by a third-party payment provider under its own terms; we are not responsible for that provider\'s service.',
    ],
  },
  {
    title: "11. Third-party services",
    body: [
      "Opening Mail, Share, or App Store / Play review interfaces uses Apple, Google, or other third-party services under their terms. We are not responsible for those services.",
    ],
  },
  {
    title: "12. Termination",
    body: [
      "You may stop using the app at any time and delete local data via Settings or by uninstalling. We may discontinue or change the app or this website. Provisions that by nature should survive (IP, disclaimers, liability limits) survive termination.",
    ],
  },
  {
    title: "13. Governing law",
    body: [
      "These Terms are governed by the laws of Germany, excluding conflict-of-law rules, without prejudice to mandatory consumer protection rules of your habitual residence in the EU/EEA.",
    ],
  },
  {
    title: "14. Changes",
    body: [
      'We may update these Terms. The "Last updated" date will change. Material changes may be communicated in-app or on the website where appropriate. Continued use after the effective date constitutes acceptance where permitted by law.',
    ],
  },
  {
    title: "15. Contact",
    body: [
      "Petra Szakacs (operating as Lumen Studio)",
      "Address: Einbecker Straße 64A, 10315 Berlin, Germany",
      "Email: raving.pascal@gmail.com",
    ],
  },
];

export default function TermsPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
          {t.privacyEyebrow}
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.03em] text-[var(--ink)]">
          Terms of Use — Sip &amp; Pill
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

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--coral)] px-6 text-[15px] font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-105"
        >
          {t.backHome}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
