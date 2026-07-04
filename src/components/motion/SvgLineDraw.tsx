import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Vertical connector line that draws itself as the wrapping section scrolls.
 * Place inside a `relative` container spanning the full section height.
 */
export function SvgLineDraw({
  className,
  color = "currentColor",
  strokeWidth = 2,
  dashed = false,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
  dashed?: boolean;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 4 1000"
      preserveAspectRatio="none"
      fill="none"
    >
      <motion.line
        x1="2"
        y1="0"
        x2="2"
        y2="1000"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 8" : undefined}
        style={{ pathLength }}
      />
    </svg>
  );
}
