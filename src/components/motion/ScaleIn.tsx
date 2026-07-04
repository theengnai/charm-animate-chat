import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function ScaleIn({
  children,
  className,
  delay = 0,
  from = 0.9,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
