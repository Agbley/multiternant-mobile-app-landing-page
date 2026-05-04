import { Zap, Wallet, MapPin, ShieldCheck, Headphones, Star } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Booking", desc: "Book cars, stays and drivers in seconds." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden fees, ever. See the full price upfront." },
  { icon: MapPin, title: "Pan-African Coverage", desc: "Operating in 50+ countries across the continent." },
  { icon: ShieldCheck, title: "Verified Network", desc: "Every host, driver and listing is identity-verified." },
  { icon: Headphones, title: "24/7 Support", desc: "Real humans ready to help, day or night." },
  { icon: Star, title: "Reviews You Trust", desc: "Authentic ratings from real travelers." },
];

export function KeyFeatures() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="pill-tag">Key Features</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-gradient-light">Built for Every Part of Your</span>
            <br />
            <span className="text-primary">Journey</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it
            seamlessly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}