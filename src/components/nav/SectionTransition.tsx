import { motion, AnimatePresence } from "framer-motion";

export function SectionTransition({ activeKey }: { activeKey: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        className="pointer-events-none fixed inset-0 z-[60] grid place-items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          viewBox="0 0 49 53"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[28vh] w-auto"
          style={{ filter: "drop-shadow(0 30px 60px rgba(60,20,5,0.35))" }}
          initial={{ scale: 0.25, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: [0.25, 1, 8], opacity: [0, 1, 0], filter: ["blur(10px)", "blur(0px)", "blur(14px)"] }}
          transition={{ duration: 0.75, times: [0, 0.4, 1], ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            d="M49.1357 53H40.0264V18.4951H33.125V53H0V0H49.1357V53Z"
            fill="#B4592C"
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
}
