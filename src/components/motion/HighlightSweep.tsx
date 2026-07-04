import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A rounded background sweeps behind inline text as the element enters view.
 */
export function HighlightSweep({
  children,
  color = "bg-copper/25",
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ""}`}>
      <motion.span
        aria-hidden
        style={{ width }}
        className={`absolute inset-y-0 left-0 -z-0 rounded-md ${color}`}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
