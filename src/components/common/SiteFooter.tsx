import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const COLS = [
  {
    h: "Explore",
    items: [
      { l: "Products", to: "/products" },
      { l: "Projects", to: "/projects" },
      { l: "Design Services", to: "/design-services" },
      { l: "Visualizer", to: "/visualizer" },
    ],
  },
  {
    h: "Support",
    items: [
      { l: "Resources", to: "/resources" },
      { l: "Samples", to: "/samples" },
      { l: "Contact", to: "/contact" },
      { l: "About", to: "/about" },
    ],
  },
  {
    h: "Company",
    items: [
      { l: "Careers", to: "/contact" },
      { l: "Press", to: "/contact" },
      { l: "Certifications", to: "/resources" },
      { l: "Warranty", to: "/resources" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.3fr_2fr] md:px-10 md:py-28">
        <div>
          <img src={logo} alt="Ecosmart" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-6 max-w-sm text-sm text-canvas/70">
            Façade systems, architectural surfaces, and design-driven materials for the way
            buildings actually live.
          </p>
          <div className="mt-8 space-y-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-canvas/50">
            <div>Dubai · Al Quoz Industrial 3</div>
            <div>hello@ecosmart.ae · +971 4 000 0000</div>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {COLS.map((c) => (
            <div key={c.h}>
              <div className="eyebrow text-copper-light">{c.h}</div>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i.l}>
                    <Link
                      to={i.to}
                      className="group inline-flex items-center gap-2 text-sm text-canvas/80 transition-colors hover:text-canvas"
                    >
                      <span className="h-px w-0 bg-copper transition-all group-hover:w-4" />
                      {i.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-canvas/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-canvas/50 md:flex-row md:items-center md:px-10">
          <div>© {new Date().getFullYear()} Ecosmart Trading LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-canvas">Instagram</a>
            <a href="#" className="hover:text-canvas">LinkedIn</a>
            <a href="#" className="hover:text-canvas">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
