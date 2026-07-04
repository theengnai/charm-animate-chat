import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Two panels start meeting in the middle and slide apart as the section
 * scrolls, revealing the content behind them.
 */
export function SplitPanels({
  behind,
  leftPanel,
  rightPanel,
  className,
  height = "min-h-[110vh]",
}: {
  behind: ReactNode;
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
  className?: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "-100%"]);
  const xRight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${height} ${className ?? ""}`}
    >
      <div className="absolute inset-0">{behind}</div>
      <motion.div
        style={{ x: xLeft }}
        className="absolute inset-y-0 left-0 w-1/2 bg-ink text-canvas"
      >
        {leftPanel}
      </motion.div>
      <motion.div
        style={{ x: xRight }}
        className="absolute inset-y-0 right-0 w-1/2 bg-canvas-2"
      >
        {rightPanel}
      </motion.div>
    </section>
  );
}
