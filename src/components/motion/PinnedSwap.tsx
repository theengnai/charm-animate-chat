import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Section pins in place while the inner frame swaps between panels based on
 * scroll segments. Each panel is stacked absolutely and cross-faded.
 */
export function PinnedSwap<T>({
  items,
  renderItem,
  eyebrow,
  title,
  titleEm,
}: {
  items: T[];
  renderItem: (item: T, i: number) => ReactNode;
  eyebrow: string;
  title: string;
  titleEm?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  panelsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!panels.length) return;
      gsap.set(panels, { opacity: 0, y: 40 });
      gsap.set(panels[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${panels.length * 80}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      panels.forEach((p, i) => {
        if (i === 0) return;
        tl.to(panels[i - 1], { opacity: 0, y: -40, ease: "power2.inOut" }, "+=0.3")
          .fromTo(p, { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.out" }, "<");
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={wrapRef} className="relative h-screen w-full overflow-hidden bg-canvas">
      <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-8 px-5 pt-24 pb-10 md:px-10 lg:px-16">
        <div>
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title} {titleEm ? <em className="italic text-copper">{titleEm}</em> : null}
          </h2>
        </div>
        <div className="relative">
          {items.map((it, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) panelsRef.current[i] = el;
              }}
              className="absolute inset-0 flex items-center"
            >
              {renderItem(it, i)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
