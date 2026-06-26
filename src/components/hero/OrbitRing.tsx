import { motion } from "framer-motion";
import { Pencil, Layers, Eye, Box, ImageIcon, FileText } from "lucide-react";

const ITEMS = [
  { icon: Pencil, label: "Design", note: "Intelligent design support", angle: 200, target: 1 },
  { icon: Layers, label: "Materials", note: "Curated material selection", angle: 250, target: 2 },
  { icon: Eye, label: "Visualizer", note: "Visualize your project", angle: 300, target: 3 },
  { icon: Box, label: "Samples", note: "Request physical samples", angle: 20, target: 4 },
  { icon: ImageIcon, label: "Gallery", note: "Inspiring projects", angle: 70, target: 5 },
  { icon: FileText, label: "Technical", note: "Specs & documentation", angle: 120, target: 6 },
];

export function OrbitRing({ onPick }: { onPick: (i: number) => void }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* ellipse path */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ring" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--copper)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--copper)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--copper)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="40%"
          ry="38%"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          strokeDasharray="2 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>

      {ITEMS.map((it, idx) => {
        const rad = (it.angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 40;
        const y = 50 + Math.sin(rad) * 38;
        const Icon = it.icon;
        return (
          <motion.button
            type="button"
            key={it.label}
            onClick={() => onPick(it.target)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-canvas/80 backdrop-blur transition-all group-hover:-translate-y-1 group-hover:border-copper/50"
                style={{ boxShadow: "0 10px 24px -12px rgba(60,30,10,0.25)" }}
              >
                <Icon className="h-5 w-5 text-copper" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <div className="eyebrow text-[0.62rem]">{it.label}</div>
                <div className="mt-0.5 max-w-[8rem] text-[0.68rem] leading-tight text-ink-soft">
                  {it.note}
                </div>
              </div>
            </div>
          </motion.button>
        );
      })}

      {/* traveling spark on the ring */}
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-copper-light shadow-[0_0_12px_var(--copper-light)]"
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        style={{
          offsetPath: "path('M 50% 12% A 40% 38% 0 1 1 49.99% 12%')",
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}
