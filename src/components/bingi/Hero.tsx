import heroPhones from "@/assets/hero-phones.png";
import { Apple, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          <span className="text-gradient-light">Africa's Smart Travel Ecosystem </span>
          <span className="text-muted-foreground">—</span>{" "}
          <span className="text-gradient-light">Cars, Stays &amp; Drivers in </span>
          <span className="text-primary">One App</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Travel across Africa with confidence, knowing your journey is safe and verified. Our
          service ensures seamless connections between destinations. Experience hassle-free travel
          with trusted support every step of the way.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-5 py-3 transition-colors hover:bg-card"
          >
            <Apple className="h-7 w-7" />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-muted-foreground">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-5 py-3 transition-colors hover:bg-card"
          >
            <Play className="h-7 w-7 fill-foreground" />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-muted-foreground">Get it on</div>
              <div className="text-sm font-semibold">Play Store</div>
            </div>
          </a>
        </div>

        <div className="relative mt-16">
          {/* floating cards */}
          <div className="absolute left-2 top-12 z-10 hidden rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-md shadow-card-dark md:block">
            <div className="text-xs text-muted-foreground">Happy Customers</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/40?img=12",
                  "https://i.pravatar.cc/40?img=32",
                  "https://i.pravatar.cc/40?img=47",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-card object-cover"
                  />
                ))}
                <span className="flex h-7 items-center rounded-full bg-primary px-2 text-[10px] font-bold text-primary-foreground">
                  100+
                </span>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <span className="text-primary">★</span>{" "}
              <span className="font-semibold">4.8</span>{" "}
              <span className="text-muted-foreground">20k Reviews</span>
            </div>
          </div>

          <div className="absolute right-2 top-24 z-10 hidden rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-md shadow-card-dark md:flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Customer Support</div>
              <div className="text-xs text-muted-foreground">24/7 Service Available</div>
            </div>
          </div>

          <img
            src={heroPhones}
            alt="Bingi mobile app on three phones"
            width={1600}
            height={1280}
            className="relative z-0 mx-auto w-full max-w-4xl drop-shadow-[0_30px_60px_rgba(220,40,40,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}