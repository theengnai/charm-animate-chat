import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function HeroStage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = particlesRef.current;
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 50%, #241510 0%, #170D08 55%, #0E0705 100%)",
      }}
    >
      {/* grain */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* copper aurora blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-20%] top-[10%] h-[60vh] w-[60vh] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(180,89,44,0.35), transparent 65%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-15%] bottom-[5%] h-[55vh] w-[55vh] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(216,144,96,0.3), transparent 65%)" }}
        animate={{ x: [0, -70, 50, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* particle field with parallax */}
      <div ref={particlesRef} className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out">
        {Array.from({ length: 32 }).map((_, i) => {
          const size = 0.5 + (i % 4) * 0.35;
          const top = (i * 137) % 100;
          const left = (i * 73) % 100;
          const delay = (i % 8) * 0.4;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-[#f0c79a]"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                boxShadow: "0 0 6px rgba(240,199,154,0.6)",
              }}
              animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -10, 0] }}
              transition={{ duration: 4 + (i % 5), delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {/* giant orb halo behind chat */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative h-[420px] w-[420px] rounded-full"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 38% 32%, rgba(255,210,170,0.55) 0%, rgba(216,144,96,0.35) 25%, rgba(180,89,44,0.25) 50%, rgba(122,58,27,0.1) 75%, transparent 100%)",
            filter: "blur(8px)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(255,200,150,0.25), transparent 40%, transparent 60%, rgba(255,180,120,0.2), transparent)",
            animation: "spin-slow 18s linear infinite",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
