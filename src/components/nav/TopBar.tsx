import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-6 py-5 transition-all duration-300 md:px-10 ${
        scrolled
          ? "border-b border-line/40 bg-canvas/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <a href="/" className="flex items-center">
          <img src={logoAsset.url} alt="Ecosmart" className="h-8 w-auto md:h-9" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              className="eyebrow text-[0.68rem] transition-colors hover:text-copper"
            >
              {n.label}
            </Link>
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

