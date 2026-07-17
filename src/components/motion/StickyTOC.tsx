import { useEffect, useState, type ReactNode, type MouseEvent } from "react";

function scrollToId(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
  if (history.replaceState) history.replaceState(null, "", `#${id}`);
}

export type TOCItem = { id: string; label: string; subItems?: TOCItem[] };

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
    const allItems = items.flatMap(it => [it, ...(it.subItems || [])]);
    allItems.forEach((it) => {
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
        <aside className="lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
          {eyebrow ? (
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              {eyebrow}
            </div>
          ) : null}
          <nav className="mt-6 flex flex-col gap-0">
            {items.map((it) => {
              const isSectionActive = active === it.id || (it.subItems?.some(sub => sub.id === active));
              return (
                <div key={it.id} className="flex flex-col">
                  <a
                    href={`#${it.id}`}
                    className={`group flex items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors ${
                      isSectionActive
                        ? "border-copper text-ink"
                        : "border-line/60 text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full transition-all ${
                        isSectionActive ? "w-4 bg-copper" : "bg-ink-soft/50"
                      }`}
                    />
                    {it.label}
                  </a>
                  {it.subItems && it.subItems.length > 0 && (
                    <div className={`flex flex-col border-l-2 py-1 pb-2 ${isSectionActive ? "border-copper/30" : "border-line/60"}`}>
                      {it.subItems.map((sub) => {
                        const isSubActive = active === sub.id;
                        return (
                          <a
                            key={sub.id}
                            href={`#${sub.id}`}
                            className={`group flex items-center gap-3 py-1.5 pl-4 text-xs transition-colors ${
                              isSubActive ? "text-ink" : "text-ink-soft hover:text-ink"
                            }`}
                          >
                            <span
                              className={`h-1 w-1 rounded-full transition-all ${
                                isSubActive ? "bg-copper" : "bg-transparent group-hover:bg-ink-soft/30"
                              }`}
                            />
                            {sub.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0 space-y-32">{children}</div>
      </div>
    </section>
  );
}
