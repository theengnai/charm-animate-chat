import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouter } from "@tanstack/react-router";
import darkLogoAsset from "@/assets/dark-logo.svg.asset.json";
import lightLogo from "@/assets/logo.png";
import { LangSwitcher } from "@/components/nav/LangSwitcher";
import { ThemeToggle } from "@/components/nav/ThemeToggle";

const NAV: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Design Services", href: "/design-services" },
  { label: "Visualizer", href: "/visualizer" },
  { label: "Resources", href: "/resources" },
  { label: "Samples", href: "/samples" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const isHome = pathname === "/";
  // Product detail pages have a light hero, so force dark nav text
  const isLightPage = /^\/products\/[^/]+\/[^/]+/.test(pathname);
  const useDarkNav = scrolled || open || (isHome ? false : isLightPage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 px-6 py-5 transition-all duration-300 md:px-10 ${
          scrolled || open
            ? "border-b border-line/40 bg-canvas/85 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex items-center">
            {scrolled || open || !isHome ? (
              <>
                <img src={darkLogoAsset.url} alt="Ecosmart" className="block h-8 w-auto min-w-[156px] dark:hidden md:h-9 md:min-w-[176px]" />
                <img src={lightLogo} alt="Ecosmart" className="hidden h-8 w-auto dark:block md:h-9" />
              </>
            ) : (
              <img src={lightLogo} alt="Ecosmart" className="h-8 w-auto md:h-9" />
            )}
          </a>

          <nav className="hidden items-center gap-5 xl:flex xl:gap-7">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className={`eyebrow whitespace-nowrap text-[0.75rem] transition-colors hover:text-copper ${
                  scrolled || open || !isHome
                    ? "text-ink dark:text-white"
                    : "text-white dark:text-white"
                }`}
                activeProps={{ className: "text-copper" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/samples"
              className="hidden rounded-full bg-copper px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-canvas transition-colors hover:bg-copper-deep md:inline-block"
            >
              Order Samples
            </Link>
            <LangSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition-colors lg:hidden ${
                scrolled || open
                  ? "border-line bg-canvas/80 text-ink dark:text-white"
                  : isHome
                    ? "border-ink/20 bg-white/20 text-ink dark:border-white/20 dark:bg-black/20 dark:text-white"
                    : "border-white/20 bg-black/20 text-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 flex flex-col justify-between overflow-y-auto bg-canvas px-6 pb-16 pt-28 md:px-10">
          <nav className="flex flex-col gap-2">
            {NAV.map((n, i) => (
              <Link
                key={n.label}
                to={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-6 border-b border-line/60 py-5 text-4xl font-medium text-ink transition-colors hover:text-copper md:text-6xl"
                style={{ animation: `fade-in .5s ease-out ${i * 60}ms both` }}
              >
                <span className="font-mono text-xs text-ink-soft">0{i + 1}</span>
                <span className="display-serifish">{n.label}</span>
              </Link>
            ))}
            <Link
              to="/samples"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-copper px-6 py-4 text-sm font-medium text-canvas hover:bg-copper-deep"
            >
              Order Sample Kit
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-ink/25 px-6 py-4 text-sm font-medium text-ink hover:bg-ink hover:text-canvas"
            >
              Contact Ecosmart
            </Link>
          </nav>
          <div className="mt-10 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
            hello@ecosmart.ae · Dubai · Riyadh · Doha
          </div>
        </div>
      ) : null}
    </>
  );
}
