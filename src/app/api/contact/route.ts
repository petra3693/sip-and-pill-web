import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  locale?: string;
};

const MAX_MESSAGE = 4000;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 200);
  const message = (body.message ?? "").trim().slice(0, MAX_MESSAGE);
  const locale = (body.locale ?? "en").trim().slice(0, 8);

  if (!message || message.length < 5) {
    return NextResponse.json(
      { error: "Please write a short message." },
      { status: 400 },
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required so we can reply." },
      { status: 400 },
    );
  }

  const inbox =
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.SUPPORT_EMAIL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();

  if (!resendKey || !inbox) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "Sip & Pill <onboarding@resend.dev>",
        to: [inbox],
        reply_to: email,
        subject: "Sip & Pill — Contact / Feedback",
        text: `From: ${name || "Anonymous"} <${email}>\nLocale: ${locale}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submit failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
