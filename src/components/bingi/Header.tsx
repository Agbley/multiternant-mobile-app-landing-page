import { Link } from "@tanstack/react-router";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Policies", href: "#policies" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-baseline gap-0.5">
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
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Download App
        </a>
      </div>
    </header>
  );
}