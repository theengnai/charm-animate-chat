import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ParallaxSplit({
  eyebrow,
  title,
  titleEm,
  body,
  image,
  reverse = false,
  children,
}: {
  eyebrow: string;
  title: string;
  titleEm?: string;
  body: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={ref} className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 lg:gap-20 ${
          reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
        }`}
      >
        <div className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${reverse ? "lg:order-2" : ""}`}>
          <motion.img
            src={image}
            alt=""
            style={{ y, scale }}
            className="absolute inset-0 h-[110%] w-full object-cover"
          />
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </div>
          <h2 className="display-serifish mt-6 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title} {titleEm ? <em className="italic text-copper">{titleEm}</em> : null}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">{body}</p>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
