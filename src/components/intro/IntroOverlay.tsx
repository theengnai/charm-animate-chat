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
    }, 2800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          style={{ background: "linear-gradient(180deg,#B4592C 0%,#9c4a23 100%)" }}
        >
          {/* radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,210,170,0.35), transparent 60%)",
            }}
          />

          {/* The door — a copper block with a cream vertical slit that opens.
              The logo icon emerges out of the slit and zooms toward the viewer. */}
          <motion.div
            className="relative"
            initial={{ scale: 0.85 }}
            animate={{ scale: [0.85, 1, 1, 6] }}
            exit={{ scale: 8, opacity: 0 }}
            transition={{
              duration: 2.6,
              times: [0, 0.25, 0.7, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ width: 220, height: 240 }}
          >
            {/* door frame (the icon silhouette in cream/canvas) */}
            <svg
              viewBox="0 0 49 53"
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* outer copper block */}
              <rect x="0" y="0" width="49" height="53" fill="#B4592C" />
              {/* doorway opening — animates from closed to open */}
              <motion.rect
                x="33.125"
                y="18.4951"
                width="6.9014"
                height="34.5049"
                fill="#F6EEDF"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: "36.576px 35.7475px" }}
              />
            </svg>

            {/* light bloom from the doorway */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: "67%",
                top: "32%",
                width: "16%",
                height: "68%",
                background:
                  "radial-gradient(ellipse at center, rgba(255,240,215,0.95), rgba(255,220,180,0) 70%)",
                filter: "blur(6px)",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 0.6], scale: [0.4, 1.4, 1.1] }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            />

            {/* the logo icon itself — emerges OUT of the doorway slit toward us */}
            <motion.svg
              viewBox="0 0 49 53"
              className="absolute"
              style={{
                left: "55%",
                top: "20%",
                width: "30%",
                height: "auto",
                color: "#B4592C",
                filter: "drop-shadow(0 12px 24px rgba(60,20,5,0.45))",
              }}
              initial={{ scale: 0.1, opacity: 0, y: 20 }}
              animate={{
                scale: [0.1, 0.4, 2.2],
                opacity: [0, 1, 1],
                y: [20, 0, -40],
                left: ["67%", "50%", "12%"],
                top: ["32%", "20%", "-8%"],
              }}
              transition={{
                duration: 1.7,
                delay: 0.85,
                times: [0, 0.45, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <path
                d="M49.1357 53H40.0264V18.4951H33.125V53H0V0H49.1357V53Z"
                fill="currentColor"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
