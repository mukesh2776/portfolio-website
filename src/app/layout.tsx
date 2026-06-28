import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ClientProviders } from "@/components/layout/client-providers";
import "./globals.css";

// ──────────────────────────────────────────────
// SEO Metadata
// ──────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Mukesh S — Freelance Web Developer",
    template: "%s | Mukesh S",
  },
  description:
    "I build fast, scalable and modern web applications that help businesses grow. Freelance MERN Stack & Next.js developer based in Tamil Nadu, India.",
  keywords: [
    "Mukesh S",
    "Freelance Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Mukesh S" }],
  creator: "Mukesh S",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mukesh S — Freelance Web Developer",
    description:
      "I build fast, scalable and modern web applications that help businesses grow.",
    siteName: "Mukesh S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukesh S — Freelance Web Developer",
    description:
      "I build fast, scalable and modern web applications that help businesses grow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ──────────────────────────────────────────────
// Root Layout (Server Component)
//
// This remains a Server Component.
// Client-side providers are isolated in ClientProviders.
// ──────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSans.variable, fontMono.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
