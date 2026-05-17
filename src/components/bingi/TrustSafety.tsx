import { ShieldCheck, BadgeCheck, Lock, Headphones } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    desc: "Every host, driver, and car owner passes identity and document checks before going live.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Policies",
    desc: "Clear cancellation, refund, and dispute rules — no hidden terms, ever.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "Funds are held safely and only released once your service is delivered as promised.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "A dedicated trust team is always one tap away, wherever your journey takes you.",
  },
];

export function TrustSafety() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="pill-tag">Trust &amp; Safety</span>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          <span className="text-gradient-light">Clear </span>
          <span className="text-primary">Policies</span>
          <span className="text-gradient-light">. Safer Travel. Trusted Experiences.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Bingi is built on a foundation of trust — from verified listings to secure payments and
          24/7 support, every booking is protected end to end.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur-md transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
