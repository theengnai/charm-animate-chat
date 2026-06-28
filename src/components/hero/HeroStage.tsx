import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BLOB_PATHS = [
  "M421,310 C421,400 343,475 256,475 C169,475 91,400 91,310 C91,220 169,135 256,135 C343,135 421,220 421,310 Z",
  "M438,290 C455,395 348,495 251,475 C141,452 78,365 95,272 C111,178 188,118 282,142 C376,167 421,185 438,290 Z",
  "M412,322 C428,418 332,492 240,478 C137,463 70,378 99,278 C124,193 213,118 309,148 C397,176 396,226 412,322 Z",
  "M425,300 C442,392 358,488 258,478 C150,467 82,393 92,290 C102,188 188,128 287,140 C386,152 408,208 425,300 Z",
];

const PRODUCTS = [
  "Wall Panel",
  "Flooring",
  "Flexible Stone",
  "MCM",
  "WPC Decking",
  "SPC",
  "EPS Systems",
];

export function HeroStage({ children }: { children: ReactNode }) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(true);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = parallaxRef.current;
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (isMobile) {
    return (
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--canvas-2) 0%, var(--canvas) 50%, var(--canvas-2) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(227,220,205,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(227,220,205,0.55) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.45,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[48%] h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #D89060 0%, rgba(216,144,96,0.35) 42%, transparent 72%)",
          }}
        />
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--canvas-2) 0%, var(--canvas) 50%, var(--canvas-2) 100%)",
      }}
    >
      {/* paper grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-multiply"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.12  0 0 0 0 0.06  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* architectural grid, masked to edges */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #E3DCCD 1px, transparent 1px), linear-gradient(to bottom, #E3DCCD 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, black 90%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, black 90%)",
          opacity: 0.45,
        }}
      />


      {/* parallax stage: blob + rings */}
      <div
        ref={parallaxRef}
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* liquid copper blob */}
          <motion.svg
            width="640"
            height="640"
            viewBox="0 0 512 512"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.55, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 0.32, rotate: -360 }}
            transition={{
              scale: { duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 1.2, delay: 0.15 },
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            }}
            style={{ filter: "blur(80px)" }}
          >
            <defs>
              <linearGradient id="copperBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0C79A" />
                <stop offset="55%" stopColor="#D89060" />
                <stop offset="100%" stopColor="#B4592C" />
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#copperBlob)"
              animate={{ d: [...BLOB_PATHS, BLOB_PATHS[0]] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* secondary smaller blob */}
          <motion.svg
            width="380"
            height="380"
            viewBox="0 0 512 512"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.6, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 0.22, rotate: 360 }}
            transition={{
              scale: { duration: 1.2, delay: 0.25 },
              opacity: { duration: 1.2, delay: 0.25 },
              rotate: { duration: 44, repeat: Infinity, ease: "linear" },
            }}
            style={{ filter: "blur(40px)", mixBlendMode: "multiply" }}
          >
            <motion.path
              fill="#D89060"
              animate={{ d: [BLOB_PATHS[2], BLOB_PATHS[0], BLOB_PATHS[3], BLOB_PATHS[1], BLOB_PATHS[2]] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* dashed orbiting rings */}
          <svg
            width="780"
            height="540"
            viewBox="0 0 780 540"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "spin-slow 28s linear infinite" }}
          >
            <motion.ellipse
              cx="390"
              cy="270"
              rx="370"
              ry="240"
              fill="none"
              stroke="#B4592C"
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
            />
            <circle cx="760" cy="270" r="4" fill="#B4592C" />
          </svg>
          <svg
            width="620"
            height="420"
            viewBox="0 0 620 420"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "spin-reverse 44s linear infinite" }}
          >
            <motion.ellipse
              cx="310"
              cy="210"
              rx="290"
              ry="180"
              fill="none"
              stroke="#7A3A1B"
              strokeOpacity="0.25"
              strokeWidth="0.8"
              strokeDasharray="2 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
            />
            <circle cx="20" cy="210" r="3" fill="#D89060" />
          </svg>
        </div>
      </div>

      {/* left-rail vertical monogram */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-1/2 z-[1] hidden -translate-y-1/2 origin-left -rotate-90 font-mono text-[0.55rem] uppercase tracking-[0.5em] text-ink-soft/45 md:block"
      >
        ECOSMART AI · 2026 · ENGINEERED WITHIN
      </div>

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
