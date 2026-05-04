export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-baseline gap-0.5">
          <span className="text-2xl font-extrabold text-primary">Bingi</span>
          <span className="text-2xl font-extrabold text-primary">.</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How It Works</a>
          <a href="#policies" className="hover:text-foreground">Policies</a>
          <a href="#faqs" className="hover:text-foreground">FAQs</a>
          <a href="#contact" className="hover:text-foreground">Contact Us</a>
        </nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bingi. All rights reserved.</p>
      </div>
    </footer>
  );
}