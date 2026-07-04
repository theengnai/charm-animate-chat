import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type CTA = { label: string; to: string };

export function StoryHero({
  eyebrow,
  n = "01",
  title,
  emphasis,
  subcopy,
  image,
  video,
  primary,
  secondary,
}: {
  eyebrow: string;
  n?: string;
  title: ReactNode;
  emphasis?: string;
  subcopy: string;
  image: string;
  video?: string;
  primary?: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center md:px-10 md:pt-32">
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={image}
          className="animate-hero-kenburns absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt=""
          className="animate-hero-kenburns absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/70">
          <span>{n}</span>
          <span className="h-px w-8 bg-canvas/30" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="display-serifish mt-8 text-4xl leading-[1.02] tracking-tight text-canvas sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
          {emphasis ? (
            <>
              <br />
              <em className="italic text-copper">{emphasis}</em>
            </>
          ) : null}
        </h1>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-canvas/80 md:text-base">
          {subcopy}
        </p>

        {(primary || secondary) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {primary ? (
              <Link
                to={primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="font-medium tracking-wide">{primary.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
            ) : null}
            {secondary ? (
              <Link
                to={secondary.to}
                className="group inline-flex items-center gap-2 rounded-full border border-canvas/40 px-6 py-3 text-sm text-canvas transition-all hover:border-canvas"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
