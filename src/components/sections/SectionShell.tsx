import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export interface SectionCta {
  label: string;
  onClick?: () => void;
}

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
  primaryCta?: SectionCta;
  secondaryCta?: SectionCta;
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
          className="grid h-full w-full grid-cols-1 items-center gap-6 overflow-y-auto px-6 pt-20 pb-20 md:gap-10 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-2 lg:gap-16 lg:px-20"
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
                className="display-serifish mt-3 text-2xl text-copper md:text-3xl"
                style={{ fontWeight: 400 }}
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

            {(meta.primaryCta || meta.secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                {meta.primaryCta && (
                  <motion.button
                    type="button"
                    onClick={meta.primaryCta.onClick}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-canvas"
                    style={{
                      background:
                        "linear-gradient(135deg,#d89060 0%,#b4592c 100%)",
                      boxShadow: "0 14px 30px -10px rgba(180,89,44,0.5)",
                    }}
                  >
                    <span className="font-medium tracking-wide">{meta.primaryCta.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </motion.button>
                )}
                {meta.secondaryCta && (
                  <button
                    type="button"
                    onClick={meta.secondaryCta.onClick}
                    className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-canvas/40 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40 hover:bg-ink/[0.04]"
                  >
                    <span className="relative">
                      {meta.secondaryCta.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                    </span>
                  </button>
                )}
              </motion.div>
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
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
