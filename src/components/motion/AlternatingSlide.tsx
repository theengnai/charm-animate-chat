import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function AlternatingSlide({
  children,
  className,
  index = 0,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  distance?: number;
}) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromLeft ? -distance : distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      {children}
    </motion.div>
  );
}
