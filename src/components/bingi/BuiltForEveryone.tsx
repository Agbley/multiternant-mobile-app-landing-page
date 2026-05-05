import { useState } from "react";
import { ShieldCheck, LayoutGrid, CalendarDays, Receipt } from "lucide-react";
import phonesVerify from "@/assets/phones-verify.png";
import phoneDashboard from "@/assets/phone-dashboard.png";
import phonesCalendar from "@/assets/phones-calendar.png";

const roles = ["Customer", "Car Owner", "Property Host", "Driver"] as const;
type Role = (typeof roles)[number];

const content: Record<Role, { title: string; subtitle: string; cards: { icon: any; title: string; desc: string; image: string; alt: string }[] }> = {
  Customer: {
    title: "Built for Everyone",
    subtitle: "Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it seamlessly.",
    cards: [
      { icon: ShieldCheck, title: "Verified network for trust", desc: "Identity verification and background checks for peace of mind.", image: phonesVerify, alt: "Verification screens" },
      { icon: LayoutGrid, title: "Powerful customer dashboard", desc: "Centralized control for bookings, trips, and saved listings.", image: phoneDashboard, alt: "Customer dashboard" },
    ],
  },
  "Car Owner": {
    title: "Built for Everyone",
    subtitle: "Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it seamlessly.",
    cards: [
      { icon: ShieldCheck, title: "Verified renter system", desc: "Identity verification and background checks before every rental.", image: phonesVerify, alt: "Verification screens" },
      { icon: LayoutGrid, title: "Powerful fleet dashboard", desc: "Manage listings, earnings, and bookings in one place.", image: phoneDashboard, alt: "Fleet dashboard" },
    ],
  },
  "Property Host": {
    title: "Built for Everyone",
    subtitle: "Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it seamlessly.",
    cards: [
      { icon: ShieldCheck, title: "Verified host system for trust", desc: "Built-in identity verification and background checks for peace of mind.", image: phonesVerify, alt: "Host verification" },
      { icon: LayoutGrid, title: "Powerful property dashboard", desc: "Centralized control for multiple properties, analytics, and revenue tracking.", image: phoneDashboard, alt: "Property dashboard" },
    ],
  },
  Driver: {
    title: "Built for Everyone",
    subtitle: "Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it seamlessly.",
    cards: [
      { icon: ShieldCheck, title: "Verified driver system", desc: "Background checks and identity verification to build rider trust.", image: phonesVerify, alt: "Driver verification" },
      { icon: LayoutGrid, title: "Powerful earnings dashboard", desc: "Track trips, earnings, and ratings — all in one place.", image: phoneDashboard, alt: "Driver dashboard" },
    ],
  },
};

export function BuiltForEveryone() {
  const [active, setActive] = useState<Role>("Property Host");
  const data = content[active];

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-border bg-card/50 p-1.5 backdrop-blur">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setActive(r)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === r
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-md shadow-card-dark"
            >
              <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-background/40 to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.235_25/0.15),transparent_70%)]" />
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="relative mx-auto h-full object-contain"
                />
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-md shadow-card-dark">
            <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-background/40 to-background">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.235_25/0.15),transparent_70%)]" />
              <img
                src={phonesCalendar}
                alt="Calendar and booking control"
                loading="lazy"
                className="relative mx-auto h-full object-contain"
              />
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Calendar &amp; booking control</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your funds are held securely and only released to providers after your successful trip.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-md shadow-card-dark">
            <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-background/40 to-background flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.235_25/0.15),transparent_70%)]" />
              <div className="relative w-full max-w-sm rounded-2xl border border-border bg-card/90 p-5 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Receipt className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Price Summary</span>
                  </div>
                  <button className="text-sm font-medium text-primary">Edit</button>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Nightly Rate</span>
                    <span className="font-medium">₵1200.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bingi Commission (15%)</span>
                    <span className="font-medium text-primary">-₵180.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Service Fee</span>
                    <span className="font-medium text-primary">-₵30.00</span>
                  </div>
                </div>
                <div className="my-4 h-px bg-border" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Your estimated nightly earnings</span>
                  <span className="text-lg font-bold text-[oklch(0.78_0.20_145)]">₵990.00</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Transparent commission structure</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Know exactly what you earn with no hidden fees or complex payout cycles.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
