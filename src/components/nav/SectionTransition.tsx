import { motion, AnimatePresence } from "framer-motion";

/**
 * Portal-style section transition.
 *
 * Phase 1 — the small copper icon scales up smoothly to fill the screen
 *           (so the copper panels + cream doorway cover everything).
 * Phase 2 — the two copper panels slide apart like double doors,
 *           revealing the next section behind.
 */
export function SectionTransition({ activeKey }: { activeKey: number }) {
  // Proportions taken from the logo icon path (viewBox 49 x 53):
  //   left block:  0      -> 33.125   (width 33.125  ≈ 67.6%)
  //   slit:        33.125 -> 40.0264  (width  6.901  ≈ 14.1%)
  //   right block: 40.0264-> 49       (width  8.974  ≈ 18.3%)
  //   top of slit at y = 18.4951 / 53 ≈ 34.9%
  const COPPER = "#B4592C";
  const COPPER_DEEP = "#9c4a23";
  const CREAM = "#F6EEDF";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        className="pointer-events-none fixed inset-0 z-[60] grid place-items-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Stage scales the whole icon up from small -> fullscreen */}
        <motion.div
          className="relative"
          style={{ width: "min(40vmin, 360px)", aspectRatio: "49 / 53" }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1, 6], opacity: [0, 1, 1] }}
          transition={{
            duration: 1.0,
            times: [0, 0.55, 1],
            ease: [0.65, 0, 0.35, 1],
          }}
        >
          {/* Left copper panel (the big block of the icon) */}
          <motion.div
            className="absolute top-0 left-0 h-full"
            style={{
              width: "67.6%",
              background: `linear-gradient(180deg, ${COPPER} 0%, ${COPPER_DEEP} 100%)`,
              boxShadow: "inset -1px 0 0 rgba(0,0,0,0.08)",
            }}
            initial={{ x: 0 }}
            animate={{ x: ["0%", "0%", "-110%"] }}
            transition={{
              duration: 1.9,
              times: [0, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Cream doorway slit (bottom 65% only, matching the icon shape) */}
          <motion.div
            className="absolute"
            style={{
              left: "67.6%",
              width: "14.1%",
              top: "34.9%",
              height: "65.1%",
              background: CREAM,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 1.9, times: [0, 0.55, 0.75] }}
          >
            {/* warm light bloom spilling out of the doorway */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, rgba(255,235,200,0.95), rgba(255,210,170,0) 70%)",
                filter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 0.4] }}
              transition={{ duration: 1.9, times: [0, 0.4, 0.6, 0.8] }}
            />
          </motion.div>

          {/* Right copper panel — top portion above the slit + thin column right of it.
              We split it into two pieces so the doorway shape reads correctly,
              then slide both off to the right together. */}
          <motion.div
            className="absolute"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "0%", "120%"] }}
            transition={{
              duration: 1.9,
              times: [0, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ left: "67.6%", top: 0, width: "32.4%", height: "100%" }}
          >
            {/* top bar covering above the slit (full width of right portion) */}
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "34.9%",
                background: `linear-gradient(180deg, ${COPPER} 0%, ${COPPER_DEEP} 100%)`,
              }}
            />
            {/* thin column to the right of the slit */}
            <div
              className="absolute top-0 right-0 h-full"
              style={{
                width: "56.5%", // 18.3 / 32.4
                background: `linear-gradient(180deg, ${COPPER} 0%, ${COPPER_DEEP} 100%)`,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
