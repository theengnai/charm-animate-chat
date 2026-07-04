import type { ReactNode } from "react";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  subcopy,
  right,
  align = "left",
  minH = "min-h-[92vh]",
  children,
}: {
  eyebrow: string;
  title: string;
  subcopy?: string;
  right?: ReactNode;
  align?: "left" | "center";
  minH?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`relative ${minH} px-6 pb-16 pt-32 md:px-10 md:pt-40`}>
      <div
        className={`relative mx-auto grid w-full max-w-7xl gap-10 lg:gap-16 ${
          right ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-end" : ""
        }`}
      >
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <Reveal y={20}>
            <span className="eyebrow text-copper">{eyebrow}</span>
          </Reveal>
          <SplitHeading
            text={title}
            className="display-serifish mt-6 text-4xl leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-[5rem]"
          />
          {subcopy ? (
            <Reveal y={20} delay={0.2}>
              <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">{subcopy}</p>
            </Reveal>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {right ? <div className="relative">{right}</div> : null}
      </div>
    </section>
  );
}
