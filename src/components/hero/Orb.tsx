import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface OrbProps {
  size?: number;
  active?: boolean;
}

export function Orb({ size = 120, active = false }: OrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-10, 10]), { stiffness: 120, damping: 14 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / 400;
      const dy = (e.clientY - cy) / 400;
      mx.set(Math.max(-1, Math.min(1, dx)));
      my.set(Math.max(-1, Math.min(1, dy)));
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{ width: size, height: size, perspective: 600 }}
    >
      {/* outer glow halo */}
      <div
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--copper) 55%, transparent), transparent 70%)",
          animation: "breathe 4.5s ease-in-out infinite",
        }}
      />
      {/* orbiting sparkles */}
      <div className="absolute inset-[-40%] animate-[orbit_14s_linear_infinite]">
        {[0, 90, 180, 270].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-copper-light shadow-[0_0_8px_var(--copper-light)]"
            style={{ transform: `rotate(${deg}deg) translateX(${size * 0.95}px)` }}
          />
        ))}
      </div>
      <div className="absolute inset-[-25%] animate-[spin-reverse_22s_linear_infinite]">
        {[45, 135, 225, 315].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-copper opacity-60"
            style={{ transform: `rotate(${deg}deg) translateX(${size * 0.7}px)` }}
          />
        ))}
      </div>

      <motion.div
        className="relative h-full w-full rounded-full"
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          background:
            "radial-gradient(circle at 32% 28%, #ffe4c8 0%, #f0b988 18%, #d8884e 42%, #a04618 72%, #5a2208 100%)",
          boxShadow:
            "0 30px 60px -20px rgba(180,89,44,0.6), inset -8px -12px 30px rgba(0,0,0,0.45), inset 6px 8px 18px rgba(255,220,180,0.5)",
        }}
        animate={active ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* rotating conic sheen */}
        <div
          className="absolute inset-0 rounded-full mix-blend-screen opacity-50"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(255,220,180,0.6), transparent 40%, transparent 60%, rgba(255,200,140,0.4), transparent)",
            animation: "spin-slow 9s linear infinite",
          }}
        />
        {/* counter-rotating inner ring */}
        <div
          className="absolute inset-2 rounded-full opacity-40"
          style={{
            background:
              "conic-gradient(from 180deg, transparent, rgba(255,255,255,0.4), transparent 50%)",
            animation: "spin-reverse 14s linear infinite",
            mixBlendMode: "overlay",
          }}
        />
        {/* specular highlight */}
        <div
          className="absolute left-[18%] top-[14%] h-[28%] w-[36%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.85), rgba(255,255,255,0) 70%)",
            filter: "blur(2px)",
          }}
        />
        {/* equator band */}
        <div
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, #fff, transparent)" }}
        />
      </motion.div>
    </motion.div>
  );
}
