import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BlurFocus({
  children,
  className,
  amount = 14,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });
  const blur = useTransform(scrollYProgress, [0, 1], [amount, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div ref={ref} style={{ filter, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
