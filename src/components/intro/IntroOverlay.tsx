import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
    }, 2400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          style={{ background: "#B06E48" }}
        >
          {/* The "door" — a cream vertical slit that opens */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ width: 0, height: "70vh" }}
            animate={{ width: ["0px", "60px", "60px"] }}
            transition={{
              duration: 1.6,
              times: [0, 0.35, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              background: "#FAF7F1",
              boxShadow: "0 0 80px rgba(255, 220, 180, 0.6)",
            }}
          />

          {/* Logo icon emerging from the door, zooming toward viewer */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 0.15, 1.4, 8],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.35, 0.75, 1],
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 49 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.1357 53H40.0264V18.4951H33.125V53H0V0H49.1357V53Z"
                fill="#FAF7F1"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
