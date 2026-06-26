import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoUrl from "@/assets/ecosmart-logo.svg";

const KEY = "ecosmart_intro_seen";

export function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    setShow(true);
    const t = window.setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      setShow(false);
    }, 2600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* copper sweep panels */}
          <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ background: "linear-gradient(180deg,#B4592C 0%,#9c4a23 100%)" }}
          />
          {/* subtle radial glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(255,210,170,0.35), transparent 60%)",
            }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={logoUrl}
              alt="ECOSMART"
              className="h-12 md:h-16 w-auto invert brightness-0"
              style={{ filter: "brightness(0) invert(1)" }}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.25 }}
            />
            <motion.span
              className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Engineered Within
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
