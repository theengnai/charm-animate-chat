import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

export function SlideFromSide({
  image,
  eyebrow,
  title,
  titleEm,
  body,
  reverse = false,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  titleEm?: string;
  body: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const ease = [0.16, 1, 0.3, 1] as const;
  const imgX = reverse ? 140 : -140;
  const textX = reverse ? -140 : 140;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 90 : -90 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.85, ease }}
      className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 lg:gap-20 ${
          reverse ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1fr]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: imgX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
          className={`relative aspect-[4/3] overflow-hidden ${reverse ? "lg:order-2" : ""}`}
        >
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: textX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.9, ease, delay: 0.12 }}
          className={reverse ? "lg:order-1" : ""}
        >
          {eyebrow ? (
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              {eyebrow}
            </div>
          ) : null}
          <h3 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
            {title}{" "}
            {titleEm ? <em className="italic text-copper">{titleEm}</em> : null}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{body}</p>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
