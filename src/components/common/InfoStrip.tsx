import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function InfoStrip({
  eyebrow,
  lead,
  children,
}: {
  eyebrow: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </span>
        </Reveal>
        <div>
          <Reveal>
            <p className="display-serifish text-2xl leading-[1.25] text-ink md:text-3xl lg:text-4xl">
              {lead}
            </p>
          </Reveal>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
