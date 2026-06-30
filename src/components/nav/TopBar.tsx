import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ecosmart-logo.svg.asset.json";
import { LangSwitcher } from "@/components/nav/LangSwitcher";
import { ThemeToggle } from "@/components/nav/ThemeToggle";

const NAV: { label: string; href: string }[] = [
  { label: "Products", href: "/" },
  { label: "Services", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Resources", href: "/" },
  { label: "About Us", href: "/about" },
];

export function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10">
      <div className="flex items-center justify-between gap-6">
        <a href="/" className="flex items-center">
          <img src={logoAsset.url} alt="Ecosmart" className="h-8 w-auto md:h-9" />
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

        <div className="flex items-center gap-2 md:gap-3">
          <span
            className="hidden rounded-full border border-copper/50 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-copper md:inline-block"
          >
            Launching Soon
          </span>
          <LangSwitcher />
          <ThemeToggle />
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

