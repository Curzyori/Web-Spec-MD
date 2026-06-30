import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Code2, Copy, Save, Share2, Languages, Moon, Smartphone, Cpu, Monitor, Battery } from "lucide-react";
import { OutputPreview } from "@/components/OutputPreview";

async function getGitHubStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/spec-md");

  const navProps = {
    locale,
    logo: "/logo.png",
    name: "SpecMD",
    githubRepo: "Curzyori/spec-md",
    stars,
    brandColor: "blue" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "SpecMD",
    tagline: locale === "id"
      ? "One tap. Device specs to Markdown."
      : "One tap. Device specs to Markdown.",
    brandColor: "blue" as const,
    ctaPrimary: locale === "id" ? "Unduh APK" : "Download APK",
    ctaSecondary: locale === "id" ? "Lihat di GitHub" : "View on GitHub",
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/spec-md/releases/tag/V1.0.0",
  };

  const featuresProps = {
    title: locale === "id" ? "Fitur Utama" : "Key Features",
    features: [
      {
        title: locale === "id" ? "One-Tap Copy" : "One-Tap Copy",
        description: locale === "id"
          ? "Salin Markdown terformat ke clipboard secara instan."
          : "Copy formatted Markdown to clipboard instantly.",
        icon: Copy,
      },
      {
        title: locale === "id" ? "Simpan ke File" : "Save to File",
        description: locale === "id"
          ? "Export sebagai file .md ke folder Downloads."
          : "Export as .md file to Downloads folder.",
        icon: Save,
      },
      {
        title: locale === "id" ? "Bagikan Kemana Saja" : "Share Anywhere",
        description: locale === "id"
          ? "Kirim ke aplikasi lain lewat Android share sheet."
          : "Send to any app via Android share sheet.",
        icon: Share2,
      },
      {
        title: locale === "id" ? "Live Preview" : "Live Preview",
        description: locale === "id"
          ? "Lihat preview Markdown sebelum export."
          : "Preview Markdown before exporting.",
        icon: Monitor,
      },
      {
        title: locale === "id" ? "Dukungan Dua Bahasa" : "Bilingual Support",
        description: locale === "id"
          ? "Mudah beralih antara Bahasa Indonesia dan Bahasa Inggris."
          : "Easily toggle between English and Bahasa Indonesia.",
        icon: Languages,
      },
      {
        title: locale === "id" ? "Dark Theme" : "Dark Theme",
        description: locale === "id"
          ? "UI gelap yang nyaman di mata secara default."
          : "Eye-friendly dark UI by default.",
        icon: Moon,
      },
    ],
    brandColor: "blue" as const,
  };

  const installationProps = {
    title: locale === "id" ? "Instalasi" : "Installation",
    subtitle: locale === "id" ? "Build dari Source" : "Build from Source",
    code: "git clone https://github.com/Curzyori/spec-md.git\ncd spec-md\n./gradlew assembleDebug",
    brandColor: "blue" as const,
  };

  const downloadProps = {
    title: locale === "id" ? "Unduh" : "Download",
    latestVersion: "v1.0.0",
    versionLabel: locale === "id" ? "Versi Terbaru" : "Latest Version",
    files: [{ name: "SpecMD-V1.0.0.apk", url: "https://github.com/Curzyori/spec-md/releases/download/V1.0.0/SpecMD-V1.0.0.apk" }],
    sourceCodeLabel: "Source Code",
    sourceUrl: "https://github.com/Curzyori/spec-md",
    githubRepo: navProps.githubRepo,
    brandColor: "blue" as const,
  };

  const previewProps = {
    images: [
      { src: "/images/dashboard.jpg", alt: "SpecMD Dashboard" },
    ],
  };

  const footerProps = {
    copyright: "© 2026 Curzyori",
    githubRepo: navProps.githubRepo,
    licenseName: "Apache-2.0",
    licenseUrl: "https://github.com/Curzyori/spec-md/blob/main/LICENSE",
  };

  const outputPreviewProps = {
    title: locale === "id" ? "Contoh Output" : "Example Output",
    subtitle: locale === "id"
      ? "Ini yang kamu dapat setelah satu tap:"
      : "What you get after one tap:",
    brandColor: "blue" as const,
  };

  return (
    <>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <OutputPreview {...outputPreviewProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </>
  );
}
