import { motion } from "framer-motion";

export function LetterReveal({
  text,
  className,
  em,
  emClassName = "italic text-copper",
}: {
  text: string;
  em?: string;
  className?: string;
  emClassName?: string;
}) {
  const parts: { s: string; em: boolean }[] = em
    ? text.split(em).flatMap((chunk, i, arr) =>
        i < arr.length - 1
          ? [
              { s: chunk, em: false },
              { s: em, em: true },
            ]
          : [{ s: chunk, em: false }],
      )
    : [{ s: text, em: false }];

  const letters = parts.flatMap((p, pi) =>
    Array.from(p.s).map((ch, ci) => ({
      ch,
      em: p.em,
      key: `${pi}-${ci}`,
    })),
  );

  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.018 }}
      className={className}
      aria-label={text}
    >
      {letters.map((l) => (
        <motion.span
          key={l.key}
          variants={{
            hidden: { opacity: 0, y: "40%" },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${l.em ? emClassName : ""}`}
        >
          {l.ch === " " ? "\u00A0" : l.ch}
        </motion.span>
      ))}
    </motion.h2>
  );
}
