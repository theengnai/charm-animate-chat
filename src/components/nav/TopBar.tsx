import { Menu } from "lucide-react";

const NAV = ["Products", "Services", "Projects", "Resources", "About Us"];

export function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10">
      <div className="flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <div
            className="grid h-9 w-9 place-items-center rounded-md font-mono text-sm font-bold text-canvas"
            style={{ background: "linear-gradient(135deg, var(--copper-deep), var(--copper))" }}
          >
            E
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-medium tracking-[0.15em]">ECOSMART</div>
            <div className="eyebrow text-[0.55rem]">Engineered Within</div>
          </div>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href="#"
              className="eyebrow text-[0.68rem] transition-colors hover:text-copper"
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            className="hidden rounded-full border border-copper/50 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-copper md:inline-block"
          >
            Launching Soon
          </span>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-canvas/80 backdrop-blur"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
