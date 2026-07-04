import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxLayers({
  bg,
  mid,
  fg,
  height = "min-h-[90vh]",
  className,
  children,
}: {
  bg: string;
  mid?: string;
  fg?: string;
  height?: string;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${height} ${className ?? ""}`}
    >
      <motion.img
        src={bg}
        alt=""
        style={{ y: yBg }}
        className="absolute inset-0 h-[130%] w-full object-cover"
      />
      {mid ? (
        <motion.img
          src={mid}
          alt=""
          style={{ y: yMid }}
          className="absolute inset-0 h-[130%] w-full object-cover mix-blend-multiply opacity-70"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
      {fg ? (
        <motion.img
          src={fg}
          alt=""
          style={{ y: yFg }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full object-cover object-bottom"
        />
      ) : null}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
