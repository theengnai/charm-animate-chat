import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/ecosmart-logo.svg.asset.json";

export function LogoTransition({ trigger }: { trigger: number }) {
  const [show, setShow] = useState(false);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setShow(true);
    const id = window.setTimeout(() => setShow(false), 900);
    return () => window.clearTimeout(id);
  }, [trigger]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`tr-${trigger}`}
          className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(ellipse at center, #b4592c 0%, #7a3a1b 70%, #4a2210 100%)",
          }}
        >
          <motion.img
            src={logoAsset.url}
            alt=""
            aria-hidden
            initial={{ scale: 0.15, opacity: 0, filter: "blur(12px)" }}
            animate={{ scale: 14, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 28, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="h-12 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
