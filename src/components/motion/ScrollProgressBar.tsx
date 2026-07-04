import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar({
  color = "bg-copper",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className={`fixed left-0 right-0 top-0 z-[60] h-[2px] ${color} ${className ?? ""}`}
    />
  );
}
