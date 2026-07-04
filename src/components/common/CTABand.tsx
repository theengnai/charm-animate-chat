import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function CTABand({
  eyebrow,
  title,
  href,
  cta,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  href: string;
  cta: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`relative px-6 py-24 md:px-10 md:py-32 ${
        dark ? "bg-ink text-canvas" : "bg-canvas-2 text-ink"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-2xl">
          {eyebrow ? (
            <span className={`eyebrow ${dark ? "text-copper-light" : "text-copper"}`}>
              {eyebrow}
            </span>
          ) : null}
          <h2 className="display-serifish mt-4 text-3xl leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to={href}
            className={`group inline-flex items-center gap-3 rounded-full border px-6 py-4 text-sm font-medium transition-colors ${
              dark
                ? "border-canvas/30 text-canvas hover:bg-canvas hover:text-ink"
                : "border-ink/25 text-ink hover:bg-ink hover:text-canvas"
            }`}
          >
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
