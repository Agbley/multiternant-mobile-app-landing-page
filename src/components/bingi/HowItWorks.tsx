import { useState } from "react";
import { Search, CalendarCheck, Car, Star } from "lucide-react";
import phoneDashboard from "@/assets/phone-dashboard.png";

const tabs = ["Customer", "Provider"] as const;
type Tab = (typeof tabs)[number];

const steps: Record<Tab, { icon: any; title: string; desc: string }[]> = {
  Customer: [
    { icon: Search, title: "Discover", desc: "Search verified cars, stays, and drivers across Africa in seconds." },
    { icon: CalendarCheck, title: "Book", desc: "Reserve instantly with transparent pricing and secure payments." },
    { icon: Car, title: "Travel", desc: "Enjoy a smooth, verified experience backed by 24/7 support." },
    { icon: Star, title: "Review", desc: "Rate your experience to help the Bingi community grow stronger." },
  ],
  Provider: [
    { icon: Search, title: "List", desc: "Create your listing for a car, property, or driver service in minutes." },
    { icon: CalendarCheck, title: "Get Booked", desc: "Receive verified bookings with built-in identity checks." },
    { icon: Car, title: "Deliver", desc: "Provide the service and let Bingi handle payments and logistics." },
    { icon: Star, title: "Earn", desc: "Get paid securely with transparent commissions and fast payouts." },
  ],
};

const journey: Record<Tab, { title: string; desc: string }[]> = {
  Customer: [
    { title: "Search", desc: "Find cars, stays, or drivers based on your location and specific needs. Filter by luxury grade, availability, and verified ratings." },
    { title: "Book", desc: "Choose verified options and confirm your booking with ease. Our transparent pricing ensures no hidden fees, ever." },
    { title: "Travel Safely", desc: "Enjoy secure and reliable services with verified providers. Real-time tracking and 24/7 concierge support are at your fingertips." },
  ],
  Provider: [
    { title: "List", desc: "Create your listing for a car, property, or driver service in minutes with our guided onboarding." },
    { title: "Get Booked", desc: "Receive verified bookings backed by built-in identity checks and secure payments." },
    { title: "Earn Safely", desc: "Deliver the service and get paid securely with transparent commissions and fast payouts." },
  ],
};

export function HowItWorks() {
  const [active, setActive] = useState<Tab>("Customer");
  const data = steps[active];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="pill-tag">How Bingi Works</span>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          <span className="text-gradient-light">Simple, Safe, and</span>
          <br />
          <span className="text-primary">Seamlessly Connected</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Whether you're traveling or earning, BINGI makes every step effortless. Experience a world
          of premium mobility and stays.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 p-1.5 backdrop-blur-md">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                active === t
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-3xl border border-border/60 bg-card/60 p-6 text-left shadow-card-dark backdrop-blur-md"
              >
                <div className="absolute right-5 top-5 text-5xl font-black text-primary/15">
                  0{i + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid items-center gap-12 text-left md:grid-cols-2">
          <ol className="space-y-10">
            {journey[active].map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/40 text-lg font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.235_25/0.18),transparent_70%)]" />
            <img
              src={phoneDashboard}
              alt="Bingi app preview"
              loading="lazy"
              className="relative h-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
