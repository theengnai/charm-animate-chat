import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");
  return (
    <div
      ref={ref}
      className={`display-serifish border-l-2 border-copper pl-8 text-2xl italic leading-[1.3] md:text-3xl lg:text-4xl ${className}`}
    >
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const color = useTransform(scrollYProgress, [start, end], ["rgba(64,58,50,0.25)", "rgba(24,22,20,1)"]);
        return (
          <motion.span key={i} style={{ color }} className="inline">
            {w}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}
