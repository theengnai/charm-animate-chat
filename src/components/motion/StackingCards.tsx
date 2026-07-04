import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
      <span>{n}</span>
      <span className="h-px w-8 bg-ink/20" />
      <span>{children}</span>
    </div>
  );
}

export function StackingCards<T>({
  labelN,
  labelText,
  title,
  titleEm,
  description,
  items,
  renderItem,
  sectionId,
}: {
  labelN: string;
  labelText: string;
  title: string;
  titleEm: string;
  description: string;
  items: T[];
  renderItem: (item: T, i: number) => ReactNode;
  sectionId?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  cardsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      gsap.set(cards, { transformOrigin: "center top" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        const previousCards = cards.slice(0, index);

        tl.add(`card${index}-enter`);
        tl.fromTo(card, { y: "100vh" }, { y: "0vh", ease: "none" }, `card${index}-enter`);

        previousCards.forEach((prevCard, pIndex) => {
          const targetScale = 1 - (index - pIndex) * 0.05;
          const targetOpacity = 1 - (index - pIndex) * 0.15;
          tl.to(
            prevCard,
            { scale: targetScale, opacity: targetOpacity, ease: "none" },
            `card${index}-enter`,
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="relative w-full h-auto min-h-[84vh] lg:h-screen bg-canvas overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl h-full px-5 pt-24 pb-4 md:px-10 lg:px-16 flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
        <div className="lg:w-1/3">
          <SectionLabel n={labelN}>{labelText}</SectionLabel>
          <h2 className="display-serifish mt-4 lg:mt-8 max-w-3xl text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title} <em className="italic text-copper">{titleEm}</em>
          </h2>
          <p className="mt-3 lg:mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        </div>

        <div className="relative mt-4 lg:mt-0 w-full lg:w-2/3 h-[45vh] lg:h-[60vh] flex items-center">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ zIndex: i }}
            >
              <div className="w-full">{renderItem(item, i)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
