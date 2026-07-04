import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ClipReveal({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });
  const p = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useTransform(p, (v) => {
    switch (direction) {
      case "down":
        return `inset(0 0 ${v}% 0)`;
      case "left":
        return `inset(0 ${v}% 0 0)`;
      case "right":
        return `inset(0 0 0 ${v}%)`;
      default:
        return `inset(${v}% 0 0 0)`;
    }
  });

  return (
    <motion.div ref={ref} style={{ clipPath: clip }} className={className}>
      {children}
    </motion.div>
  );
}
