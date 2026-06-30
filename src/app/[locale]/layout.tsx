import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpecMD — One Tap. Device Specs to Markdown.",
  description:
    "Extract Android device specifications and export to clean Markdown format. Perfect for bug reports, tech reviews, forum posts, and seller listings.",
  metadataBase: new URL("https://spec-md.curzy.dev"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
  },
  keywords: [
    "specmd",
    "device specifications",
    "markdown",
    "android specs",
    "device info",
    "bug report template",
    "tech review",
    "spec sheet",
  ],
  authors: [{ name: "Curzyori" }],
  openGraph: {
    title: "SpecMD — One Tap. Device Specs to Markdown.",
    description:
      "Extract Android device specifications and export to clean Markdown format.",
    type: "website",
    locale: "en_US",
    siteName: "SpecMD",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpecMD — One Tap. Device Specs to Markdown.",
    description:
      "Extract Android device specifications and export to clean Markdown format.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
