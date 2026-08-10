import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { DonationProvider } from "@/components/DonationProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Sip & Pill — Free medication & water reminder app for families",
  description:
    "A free forever hydration and medication tracker for elderly parents and families. Offline, private, no account, no ads — built simple enough for first-time use at any age.",
  applicationName: "Sip & Pill",
  keywords: [
    "free hydration tracker",
    "medication reminder app",
    "water reminder for elderly",
    "offline medication tracker",
    "family health app free",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e23" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sip-theme");if(t!=="light"){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}var l=localStorage.getItem("sip-locale");if(l){document.documentElement.lang=l}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${syne.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LocaleProvider>
            <DonationProvider>{children}</DonationProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
