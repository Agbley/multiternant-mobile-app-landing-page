import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Policies", href: "#policies" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="flex items-baseline gap-0.5 rounded-full border border-border/60 bg-card/60 px-5 py-2 backdrop-blur-md"
        >
          <span className="text-2xl font-extrabold tracking-tight text-primary">Bingi</span>
          <span className="text-2xl font-extrabold text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-2 py-2 backdrop-blur-md">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="hidden md:inline-flex rounded-full border border-primary/40 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow backdrop-blur-md transition-transform hover:scale-105"
        >
          Download App
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/60 text-foreground backdrop-blur-md"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="rounded-2xl border border-border/60 bg-card/95 p-3 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Download App
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}