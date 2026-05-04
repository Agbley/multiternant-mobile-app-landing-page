import { Car, Building2, UserRound, Search, ShieldCheck, Calendar, BadgeCheck, Receipt, Clock, UserCheck, AlarmClock, HelpCircle } from "lucide-react";

const cards = [
  {
    icon: Car,
    title: "Cars",
    desc: "Rent vehicles near you with verified owners.",
    items: [
      { icon: Search, label: "Smart search" },
      { icon: ShieldCheck, label: "Verified listings" },
      { icon: Calendar, label: "Flexible booking" },
    ],
  },
  {
    icon: Building2,
    title: "Stays",
    desc: "Book secure short-stay apartments.",
    items: [
      { icon: BadgeCheck, label: "Verified hosts" },
      { icon: Receipt, label: "Transparent pricing" },
      { icon: Clock, label: "Flexible check-in" },
    ],
  },
  {
    icon: UserRound,
    title: "Drivers",
    desc: "Hire professional, verified drivers near you.",
    items: [
      { icon: UserCheck, label: "Hire professional, verified drivers." },
      { icon: AlarmClock, label: "Overtime request support" },
      { icon: HelpCircle, label: "8-hour safety compliance" },
    ],
  },
];

export function Ecosystem() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="pill-tag">Everything you need in one app</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-gradient-light">A Complete Travel</span>
            <br />
            <span className="text-primary">Ecosystem</span>{" "}
            <span className="text-gradient-light">Built for Africa</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Whether you're traveling, earning, or hosting — BINGI gives you the tools to do it
            seamlessly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {c.items.map((it) => {
                      const I = it.icon;
                      return (
                        <li key={it.label} className="flex items-center gap-3 text-sm">
                          <I className="h-4 w-4 text-primary" />
                          <span>{it.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}