import { Apple, Play } from "lucide-react";
import phone from "@/assets/phone-dashboard.png";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="pill-tag">Get the App</span>
            <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient-light">Start Your Journey with </span>
              <span className="text-primary">BINGI</span>
              <span className="text-gradient-light"> Today</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Book cars, stays, and verified drivers — all in one secure app. Manage bookings,
              track earnings, and travel with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <img
              src={phone}
              alt="Bingi app preview"
              className="relative mx-auto w-full max-w-md rotate-6 drop-shadow-[0_30px_60px_rgba(220,40,40,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
