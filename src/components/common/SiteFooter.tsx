import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const COLS = [
  {
    h: "Products",
    items: [
      { l: "All Products", to: "/products" as const },
      { l: "Applications", to: "/projects" as const },
      { l: "Samples", to: "/samples" as const },
      { l: "Visualizer (soon)", to: "/visualizer" as const },
    ],
  },
  {
    h: "Support",
    items: [
      { l: "Technical Resources", to: "/resources" as const },
      { l: "Project Support", to: "/design-services" as const },
      { l: "Contact", to: "/contact" as const },
      { l: "About", to: "/about" as const },
    ],
  },
  {
    h: "Company",
    items: [
      { l: "About EcoSmart", to: "/about" as const },
      { l: "Careers", to: "/contact" as const },
      { l: "Technical Data Sheets", to: "/resources" as const },
      { l: "Test Certificates", to: "/resources" as const },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.3fr_2fr] md:px-10 md:py-28">
        <div>
          <img src={logo} alt="EcoSmart" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-6 max-w-sm text-sm text-canvas/70">
            Saudi company delivering construction systems and decoration &amp; finishing products. Build Better. Build Saudi.
          </p>
          <div className="mt-8 space-y-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-canvas/50">
            <div>شركة إيكوسمارت</div>
            <div>Riyadh, Saudi Arabia</div>
            <div>hello@ecosmart.sa · ecosmart.sa</div>
            <div>CR No. 1009200656</div>
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
          <div>© {new Date().getFullYear()} EcoSmart · شركة إيكوسمارت. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-canvas">Instagram</a>
            <a href="#" className="hover:text-canvas">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
