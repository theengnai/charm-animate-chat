import { motion } from "framer-motion";

const PHONE = "971500000000"; // update with real number

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-20 right-5 z-40 grid h-14 w-14 place-items-center rounded-full md:bottom-24 md:right-7 md:h-16 md:w-16"
      style={{
        background: "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
        boxShadow:
          "0 18px 40px -12px rgba(180,89,44,0.6), 0 6px 14px -6px rgba(26,23,20,0.25), inset 0 1px 0 rgba(255,255,255,0.35)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70 blur-xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(216,144,96,0.55), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.43 1.65 6.3L3 29l6.86-1.62A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm7.5 18.46c-.32.9-1.86 1.72-2.6 1.78-.7.06-1.55.34-5.22-1.18-4.4-1.84-7.18-6.36-7.39-6.65-.21-.29-1.74-2.36-1.74-4.5 0-2.14 1.1-3.18 1.5-3.62.4-.43.87-.55 1.16-.55l.83.02c.27.01.62-.1.97.76.36.86 1.21 2.99 1.32 3.21.11.22.18.48.04.77-.14.29-.21.46-.43.72-.21.25-.45.56-.64.75-.21.21-.43.45-.18.87.25.43 1.1 1.86 2.36 3.01 1.62 1.46 2.99 1.92 3.42 2.14.43.21.68.18.93-.11.25-.29 1.07-1.25 1.36-1.68.29-.43.57-.36.96-.21.4.14 2.51 1.19 2.94 1.4.43.21.71.32.82.5.11.18.11 1.04-.21 2.04Z"
          fill="#ffffff"
        />
      </svg>
    </motion.a>
  );
}
