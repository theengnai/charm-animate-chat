import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HorizontalPin<T>({
  eyebrow,
  title,
  titleEm,
  items,
  renderItem,
}: {
  eyebrow: string;
  title: string;
  titleEm?: string;
  items: T[];
  renderItem: (item: T, i: number) => ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const distance = () => track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={wrapRef} className="relative bg-canvas overflow-hidden">
      <div className="px-5 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title} {titleEm ? <em className="italic text-copper">{titleEm}</em> : null}
          </h2>
        </div>
      </div>
      <div className="mt-16 overflow-hidden">
        <div ref={trackRef} className="flex gap-8 pl-5 md:pl-10 lg:pl-16 pb-16 will-change-transform">
          {items.map((it, i) => (
            <div key={i} className="shrink-0">
              {renderItem(it, i)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
