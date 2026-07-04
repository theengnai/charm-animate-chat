import { useEffect, useState, type ReactNode } from "react";

export type TOCItem = { id: string; label: string };

export function StickyTOC({
  items,
  children,
  eyebrow,
}: {
  items: TOCItem[];
  children: ReactNode;
  eyebrow?: string;
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(it.id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <section className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(220px,260px)_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          {eyebrow ? (
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              {eyebrow}
            </div>
          ) : null}
          <nav className="mt-6 flex flex-col gap-1">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={`group flex items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors ${
                    isActive
                      ? "border-copper text-ink"
                      : "border-line/60 text-ink-soft hover:text-ink"
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full transition-all ${
                      isActive ? "w-4 bg-copper" : "bg-ink-soft/50"
                    }`}
                  />
                  {it.label}
                </a>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0 space-y-32">{children}</div>
      </div>
    </section>
  );
}
