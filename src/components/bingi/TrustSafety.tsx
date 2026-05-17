import { CalendarX, CalendarCheck, CheckCircle2, ShieldCheck, ShieldAlert } from "lucide-react";

const policies = [
  {
    icon: CalendarX,
    title: "Flexible Cancellation",
    desc: "Cancel bookings based on time windows with clear penalty structures.",
    bullets: [
      "Free cancellation within designated windows for all concierge services.",
      "Automated penalties for late cancellations to protect service providers.",
      "Frequent no-shows impact account standing and priority booking status.",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Booking Guidelines",
    desc: "Clear rules for safe and fair usage across our global fleet and stays.",
    bullets: [
      "8-hour maximum shift duration for drivers to ensure safe transport.",
      "Mandatory overtime approval via platform for extended concierge runs.",
      "Strict adherence to booking timelines and location drop-off points.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Verified Users Only",
    desc: "Rigorous identity checks to ensure safety for our entire community.",
    bullets: [
      "Mandatory government-issued ID verification for all accounts.",
      "Comprehensive background checks for all drivers and on-site staff.",
      "Continuous validation of documentation for property hosts and owners.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Platform Integrity",
    desc: "Institutional rules that protect all users and financial transactions.",
    bullets: [
      "Strict prohibition of off-platform transactions to ensure insurance coverage.",
      "Respect mutual agreements and platform service-level standards.",
      "Immediate suspension for violations of trust or safety protocols.",
    ],
  },
];

const trustBadges = [
  "Verified Drivers & Hosts",
  "Transparent Booking Rules",
  "Secure Record-Based Transactions",
];

export function TrustSafety() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="pill-tag">Trust &amp; Safety</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-gradient-light">Clear </span>
            <span className="text-primary">Policies</span>
            <span className="text-gradient-light">. Safer Travel. Trusted Experiences.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            Our commitment to safety is built into every mile. We enforce strict verification
            protocols and clear behavioral guidelines to ensure peace of mind for every host,
            driver, and guest.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {policies.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-md transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>

              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Read Full Policy
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {trustBadges.map((b) => (
            <div key={b} className="flex items-center gap-3 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-semibold">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
