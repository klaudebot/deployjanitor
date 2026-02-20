import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://deployjanitor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deploy Janitor — Your AI Wrote the Code. We Make It Actually Work.",
    template: "%s | Deploy Janitor",
  },
  description:
    "Professional code review and fixing service for AI-generated codebases. Security audits, performance optimization, refactoring, and test coverage. One-time pricing from $499.",
  keywords: [
    "AI code review",
    "AI code fixing",
    "AI-generated code",
    "code audit",
    "security audit",
    "code refactoring",
    "ChatGPT code fix",
    "Copilot code review",
    "Claude code review",
    "production-ready code",
    "code quality",
    "AI code security",
  ],
  authors: [{ name: "Deploy Janitor" }],
  creator: "Deploy Janitor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Deploy Janitor",
    title: "Deploy Janitor — Your AI Wrote the Code. We Make It Actually Work.",
    description:
      "Professional code review and fixing for AI-generated codebases. Security audits, performance optimization, refactoring, and test coverage.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Deploy Janitor — Fix AI-Generated Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Janitor — Your AI Wrote the Code. We Make It Actually Work.",
    description:
      "Professional code review and fixing for AI-generated codebases. Security audits, performance optimization, refactoring, and test coverage.",
    images: ["/og.png"],
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
