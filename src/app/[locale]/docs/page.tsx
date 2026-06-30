import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Settings, Download, Smartphone } from "lucide-react";

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

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/spec-md");

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/spec-md",
    stars,
    brandColor: "blue" as const,
  };

  const isIndo = locale === "id";

  return (
    <>
      <Navbar {...navProps} />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            {isIndo ? "Dokumentasi SpecMD" : "SpecMD Documentation"}
          </h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              {isIndo ? "Pendahuluan" : "Introduction"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo 
                ? "SpecMD adalah tools satu-tap untuk mengekstrak spesifikasi perangkat Android ke format Markdown yang rapi. Dirancang untuk developer yang bikin bug report, tech blogger yang bikin review, atau seller yang kasih detail barang dagangan di forum dan marketplace."
                : "SpecMD is a one-tap utility to extract Android device specifications into clean Markdown format. Designed for developers writing bug reports, tech bloggers writing reviews, or sellers providing product details on forums and marketplaces."}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-500" />
              {isIndo ? "Fitur" : "Features"}
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>One-Tap Copy</strong> — 
                  {isIndo 
                    ? " Salin Markdown terformat ke clipboard secara instan."
                    : " Copy formatted Markdown to clipboard instantly."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Save to File</strong> — 
                  {isIndo
                    ? " Export sebagai file .md ke folder Downloads."
                    : " Export as .md file to Downloads folder."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Share Anywhere</strong> — 
                  {isIndo
                    ? " Kirim ke aplikasi lain lewat Android share sheet."
                    : " Send to any app via Android share sheet."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Live Preview</strong> — 
                  {isIndo
                    ? " Lihat preview Markdown sebelum export."
                    : " Preview Markdown before exporting."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Bilingual Support</strong> — 
                  {isIndo
                    ? " Beralih antara Bahasa Indonesia dan Bahasa Inggris."
                    : " Easily toggle between English and Bahasa Indonesia."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Dark Theme</strong> — 
                  {isIndo
                    ? " UI gelap yang nyaman di mata secara default."
                    : " Eye-friendly dark UI by default."}
                </span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6 text-blue-500" />
              {isIndo ? "Instalasi" : "Installation"}
            </h2>
            <p className="text-foreground/70 mb-4">
              {isIndo 
                ? "Unduh APK versi terbaru langsung dari halaman rilis GitHub:"
                : "Download the latest APK from the GitHub releases page:"}
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/spec-md/releases" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  https://github.com/Curzyori/spec-md/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">{isIndo ? "Build dari Source" : "Build from Source"}</h3>
            <div className="bg-secondary/50 rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/Curzyori/spec-md.git
cd spec-md

# Build the APK
./gradlew assembleDebug`}
              </pre>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-500" />
              {isIndo ? "Spesifikasi Teknologi" : "Tech Stack"}
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>Platform:</strong> Android (Min SDK 26, Target SDK 35)</li>
              <li><strong>Language:</strong> Kotlin</li>
              <li><strong>UI Framework:</strong> Jetpack Compose with Material Design 3</li>
              <li><strong>Architecture:</strong> MVVM + Clean Architecture</li>
              <li><strong>DI:</strong> Hilt</li>
              <li><strong>License:</strong> Apache-2.0</li>
            </ul>
          </section>

          {/* Use Cases */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-blue-500" />
              {isIndo ? "Use Case" : "Use Cases"}
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>
                  <strong>Bug Reports</strong> — 
                  {isIndo
                    ? " Sertakan device specs di issue tracker tanpa ketik manual."
                    : " Include device specs in issue trackers without typing manually."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>
                  <strong>Tech Reviews</strong> — 
                  {isIndo
                    ? " Bikin spec sheet rapi untuk blog atau video review."
                    : " Create clean spec sheets for blog posts or video reviews."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>
                  <strong>Forum & Marketplace</strong> — 
                  {isIndo
                    ? " Kasih detail barang dagangan yang kredibel."
                    : " Provide credible product details on forums and marketplaces."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>
                  <strong>Reddit & XDA</strong> — 
                  {isIndo
                    ? " Flex hardware dengan spec sheet yang professional."
                    : " Flex your hardware with a professional spec sheet."}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer 
        copyright="© 2026 Curzyori"
        githubRepo="Curzyori/spec-md"
        licenseName="Apache-2.0"
        licenseUrl="https://github.com/Curzyori/spec-md/blob/main/LICENSE"
      />
    </>
  );
}
