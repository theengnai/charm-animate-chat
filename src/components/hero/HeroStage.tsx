import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function HeroStage({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF8EC 0%, #FAF7F1 50%, #F1E7D4 100%)",
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

      {/* blueprint grid — soft, faded to center */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #D8C9AC 1px, transparent 1px), linear-gradient(to bottom, #D8C9AC 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 55%, transparent 25%, black 95%)",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 55%, transparent 25%, black 95%)",
          opacity: 0.35,
        }}
      />

      {/* dimension lines top + bottom */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto opacity-30"
        width="100%"
        height="14"
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
      >
        <line x1="120" y1="7" x2="1080" y2="7" stroke="#7A3A1B" strokeWidth="0.5" strokeDasharray="2 5" />
        <line x1="120" y1="1" x2="120" y2="13" stroke="#7A3A1B" strokeWidth="0.5" />
        <line x1="1080" y1="1" x2="1080" y2="13" stroke="#7A3A1B" strokeWidth="0.5" />
      </svg>

      {/* GIANT HOUSE SILHOUETTE — echoing the logo */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="1100"
        height="780"
        viewBox="0 0 1100 780"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="houseFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B4592C" stopOpacity="0.10" />
            <stop offset="55%" stopColor="#B4592C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#B4592C" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="houseEdge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7A3A1B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#B4592C" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* ground line */}
        <line x1="50" y1="730" x2="1050" y2="730" stroke="#7A3A1B" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="50" y1="734" x2="1050" y2="734" stroke="#7A3A1B" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 6" />

        {/* main house: rectangular body + pitched roof + door cutout (logo motif) */}
        <motion.path
          d="M 270 730 L 270 320 L 550 130 L 830 320 L 830 730 Z"
          fill="url(#houseFill)"
          stroke="url(#houseEdge)"
          strokeWidth="1.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* door cutout — the negative-space mark from the logo */}
        <motion.rect
          x="520"
          y="500"
          width="60"
          height="230"
          fill="#FAF7F1"
          stroke="#7A3A1B"
          strokeOpacity="0.35"
          strokeWidth="1"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "550px 730px" }}
        />

        {/* roof ridge marker */}
        <circle cx="550" cy="130" r="3" fill="#B4592C" />

        {/* eave annotation — left */}
        <line x1="270" y1="320" x2="180" y2="320" stroke="#7A3A1B" strokeOpacity="0.4" strokeWidth="0.6" strokeDasharray="2 4" />
        <text x="175" y="316" fill="#7A3A1B" fillOpacity="0.55" fontSize="9" textAnchor="end" letterSpacing="3" fontFamily="ui-monospace, monospace">FAÇADE · 01</text>

        {/* eave annotation — right */}
        <line x1="830" y1="320" x2="920" y2="320" stroke="#7A3A1B" strokeOpacity="0.4" strokeWidth="0.6" strokeDasharray="2 4" />
        <text x="925" y="316" fill="#7A3A1B" fillOpacity="0.55" fontSize="9" letterSpacing="3" fontFamily="ui-monospace, monospace">ROOF · 02</text>

        {/* ground annotation */}
        <line x1="200" y1="730" x2="200" y2="755" stroke="#7A3A1B" strokeOpacity="0.4" strokeWidth="0.6" />
        <text x="200" y="767" fill="#7A3A1B" fillOpacity="0.55" fontSize="9" textAnchor="middle" letterSpacing="3" fontFamily="ui-monospace, monospace">GROUND · 00</text>
      </motion.svg>

      {/* left-rail vertical monogram */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-1/2 z-[1] -translate-y-1/2 origin-left -rotate-90 font-mono text-[0.55rem] uppercase tracking-[0.5em] text-ink-soft/45"
      >
        ECOSMART · ELEVATION 01 · 2026
      </div>

      {/* right-rail scale */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 z-[1] -translate-y-1/2 origin-right rotate-90 font-mono text-[0.55rem] uppercase tracking-[0.5em] text-ink-soft/45"
      >
        SCALE · 1:100 · INTELLIGENT MATERIALS
      </div>

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
