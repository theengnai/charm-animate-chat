import { useEffect, useState } from "react";

type Lang = "EN" | "AR";

export function LangSwitcher() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "EN";
    return (window.localStorage.getItem("lang") as Lang) || "EN";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang === "AR" ? "ar" : "en";
    html.dir = lang === "AR" ? "rtl" : "ltr";
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div
      className="hidden items-center rounded-full border border-line bg-canvas/70 p-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] backdrop-blur sm:inline-flex"
      role="group"
      aria-label="Language"
    >
      {(["EN", "AR"] as Lang[]).map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? "bg-copper text-canvas" : "text-ink-soft hover:text-ink"
            }`}
            aria-pressed={active}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
