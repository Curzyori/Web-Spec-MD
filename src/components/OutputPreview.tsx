import { Copy, Share2, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface OutputPreviewProps {
  title: string;
  subtitle: string;
  brandColor: "blue" | "purple";
}

const brandStyles = {
  blue: {
    border: "border-blue-500/20",
    codeBorder: "border-blue-500/30",
    text: "text-blue-500",
    bg: "bg-blue-500/5",
    button: "bg-blue-600 hover:bg-blue-700",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  purple: {
    border: "border-purple-500/20",
    codeBorder: "border-purple-500/30",
    text: "text-purple-500",
    bg: "bg-purple-500/5",
    button: "bg-purple-600 hover:bg-purple-700",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
};

const sampleMarkdown = `## 📱 Device Specifications

**Generated:** 2024-01-15 14:30:00

| Property        | Value              |
|-----------------|--------------------|
| Model           | Pixel 8 Pro        |
| Processor       | Google Tensor G3   |
| RAM             | 12 GB              |
| Storage         | 256 GB             |
| Android         | 14 (API 34)        |
| Resolution      | 1344 x 2992 px     |

*Exported via SpecMD*`;

export function OutputPreview({ title, subtitle, brandColor }: OutputPreviewProps) {
  const styles = brandStyles[brandColor];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-foreground/60">{subtitle}</p>
        </div>

        {/* Code Preview Card */}
        <div className={`rounded-xl border ${styles.border} overflow-hidden`}>
          {/* Header bar */}
          <div className={`flex items-center justify-between px-4 py-3 border-b ${styles.codeBorder} bg-background`}>
            <div className="flex items-center gap-2">
              <span className="text-foreground/40 text-sm font-mono">output.md</span>
              <span className={`px-2 py-0.5 rounded-full text-xs border ${styles.badge}`}>
                Markdown
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Code content */}
          <div className={`bg-zinc-950 ${styles.bg} p-6 overflow-x-auto`}>
            <pre className="font-mono text-sm leading-relaxed text-zinc-300">
              <code>{sampleMarkdown}</code>
            </pre>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button size="sm" variant="outline" className="gap-2">
            <Copy className="h-4 w-4" />
            Copy
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>
    </section>
  );
}
