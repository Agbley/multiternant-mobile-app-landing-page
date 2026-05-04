import { Apple, Play } from "lucide-react";

export function CTA() {
  return (
    <section id="download" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-12 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              <span className="text-gradient-light">Your journey starts with </span>
              <span className="text-primary">Bingi</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Download the app today and join thousands of travelers exploring Africa the smart way.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-transform hover:scale-105">
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-70">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-glow transition-transform hover:scale-105">
                <Play className="h-7 w-7 fill-primary-foreground" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Play Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}