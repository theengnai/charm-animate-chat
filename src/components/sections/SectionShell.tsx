import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export interface SectionMeta {
  index: number;
  total: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  image?: string;
  flavor?: ReactNode;
  imageAlt?: string;
}

export function SectionShell({
  active,
  meta,
}: {
  active: boolean;
  meta: SectionMeta;
}) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={meta.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid h-full w-full grid-cols-1 items-center gap-10 px-8 pt-24 pb-28 md:px-20 lg:grid-cols-2 lg:gap-16"
        >
          {/* text column */}
          <div className="relative flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-copper">
                {String(meta.index).padStart(2, "0")} / {String(meta.total).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 max-w-[6rem] bg-line" />
              <span className="eyebrow">{meta.eyebrow}</span>
            </motion.div>

            <div className="mt-6 overflow-hidden">
              {meta.title.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="display-serifish mr-3 inline-block text-5xl md:text-6xl lg:text-7xl"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {meta.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="display-serifish mt-3 text-2xl italic text-copper md:text-3xl"
                style={{ fontStyle: "italic", fontWeight: 400 }}
              >
                {meta.subtitle}
              </motion.p>
            )}

            {meta.body && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-soft"
              >
                {meta.body}
              </motion.p>
            )}

            {meta.bullets && (
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } } }}
                className="mt-8 space-y-3"
              >
                {meta.bullets.map((b) => (
                  <motion.li
                    key={b}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink"
                  >
                    <span className="h-px w-6 bg-copper" />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* image column */}
          {meta.image && (
            <div className="relative h-[55vh] w-full">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 40px 80px -30px rgba(60,30,10,0.4)" }}
              >
                <img
                  src={meta.image}
                  alt={meta.imageAlt ?? meta.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* copper overlay peel */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 1.2, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--copper) 0%, var(--copper-deep) 100%)",
                  }}
                />
                {/* scan line */}
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: "120%", opacity: [0, 1, 0] }}
                  transition={{ duration: 1.4, delay: 1.0, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, color-mix(in oklab, var(--copper-light) 60%, transparent), transparent)",
                  }}
                />
              </motion.div>
              {meta.flavor}
              {/* corner monogram */}
              <div className="absolute -top-3 right-4 font-mono text-[0.65rem] tracking-[0.25em] text-ink-soft">
                ECOSMART · {meta.eyebrow}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
