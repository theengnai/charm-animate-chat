import { motion, AnimatePresence } from "framer-motion";

/**
 * Portal transition — the logo icon scales up from small, the doorway
 * (cream slit) grows until it covers the viewport, revealing the next
 * section through it. The logo is never split: a single masked SVG
 * scales around the slit's center point.
 *
 * Geometry (icon viewBox 49 x 53):
 *   slit x: 33.125 → 40.0264   → center 36.5757 → 74.65% of width
 *   slit y: 18.4951 → 53       → center 35.7476 → 67.45% of height
 */
export function SectionTransition({ activeKey }: { activeKey: number }) {
  const maskId = `door-mask-${activeKey}`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="absolute"
          style={{
            width: "26vmin",
            height: "calc(26vmin * 53 / 49)",
            // Anchor the slit's center at the viewport center.
            left: "calc(50vw - 26vmin * 0.7465)",
            top: "calc(50vh - 26vmin * 53 / 49 * 0.6745)",
            transformOrigin: "74.6531% 67.4528%",
            filter: "drop-shadow(0 40px 80px rgba(60,20,5,0.35))",
          }}
          initial={{ scale: 0.12, opacity: 0 }}
          animate={{ scale: [0.12, 1, 60], opacity: [0, 1, 1] }}
          transition={{
            duration: 2.2,
            times: [0, 0.45, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <svg
            viewBox="0 0 49 53"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id={maskId}>
                {/* white = visible copper, black = transparent doorway */}
                <rect width="49" height="53" fill="white" />
                <rect
                  x="33.125"
                  y="18.4951"
                  width="6.9014"
                  height="34.5049"
                  fill="black"
                />
              </mask>
              <linearGradient id={`copper-${activeKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B4592C" />
                <stop offset="100%" stopColor="#9c4a23" />
              </linearGradient>
            </defs>
            <rect
              width="49"
              height="53"
              fill={`url(#copper-${activeKey})`}
              mask={`url(#${maskId})`}
            />
          </svg>
        </motion.div>

        {/* warm light bloom from the doorway, anchored at viewport center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "10vmin",
            height: "10vmin",
            background:
              "radial-gradient(circle, rgba(255,235,200,0.9), rgba(255,210,170,0) 70%)",
            filter: "blur(8px)",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0, 0.9, 0], scale: [0.4, 0.8, 4, 10] }}
          transition={{ duration: 2.2, times: [0, 0.35, 0.7, 1], ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
