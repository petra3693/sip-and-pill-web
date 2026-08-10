# Sip & Pill — Landing

Marketing landing page for the Sip & Pill water & medication companion.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Outfit (same typeface as the main app)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Links to update

Edit `src/lib/links.ts` before launch:

- `APP_STORE_URL` — Apple App Store product page
- `DONATION_URL` — Buy Me a Coffee / Donably / tip jar

## Contact form (server env)

The contact form never exposes an email in the browser. Set one of these in `.env.local` / Vercel:

- `WEB3FORMS_ACCESS_KEY` — free key from [web3forms.com](https://web3forms.com) (recommended)
- or `CONTACT_TO_EMAIL` / `SUPPORT_EMAIL` — FormSubmit delivery (confirm the first email)
