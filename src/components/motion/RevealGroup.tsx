import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function RevealGroup({
  children,
  stagger = 0.08,
  y = 30,
  className,
  selector = "[data-reveal-item]",
}: {
  children: ReactNode;
  stagger?: number;
  y?: number;
  className?: string;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(selector);
      if (!items.length) return;
      gsap.from(items, {
        y,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [stagger, y, selector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
