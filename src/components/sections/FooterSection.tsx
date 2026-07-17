import { motion } from "framer-motion";
import { Brain, Layers, Wrench, FileText, Factory, ShieldCheck } from "lucide-react";

const SERVICES = [
  { icon: Brain, label: "Ecosmart AI Product Assistant" },
  { icon: Layers, label: "Construction Systems + Finishing" },
  { icon: Wrench, label: "Technical & Project Support" },
  { icon: FileText, label: "TDS + Installation Manuals" },
  { icon: Factory, label: "Manufactured in Sudair, KSA" },
  { icon: ShieldCheck, label: "Test Certificates on Request" },
];

export function FooterSection({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col justify-between px-8 pb-12 pt-28 md:px-20"
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow"
        >
          Build Better.
          <span className="text-copper"> Build Saudi.</span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-serifish mt-6 max-w-3xl text-3xl md:text-5xl lg:text-[4.5rem]"
        >
          Let&apos;s build something
          <br />
          <span className="text-copper-deep" style={{ fontWeight: 400 }}>
            worth standing on.
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
          className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-5"
        >
          {SERVICES.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-canvas/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-copper/40"
            >
              <Icon className="h-6 w-6 text-copper" strokeWidth={1.4} />
              <span className="text-center text-[0.78rem] leading-tight text-ink">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 md:flex-row"
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft">
          © 2026 EcoSmart · مصنع إنتيجرا بيلد للتصنيع · CR No. 1009200656
        </span>
        <div className="flex items-center gap-5 text-ink-soft">
          {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
            <a key={s} href="#" className="text-xs hover:text-copper">
              {s}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
