import { ShieldCheck, Layers, Sparkles, Wallet } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Uncompromised Security",
    desc: "Every property host, vehicle owner, and professional driver undergoes rigorous identity verification and background checks before joining our network.",
  },
  {
    icon: Layers,
    title: "Unified Ecosystem",
    desc: "Say goodbye to fragmented travel planning. Book your ideal vehicle, your verified stay, and your professional driver all in one unified application.",
  },
  {
    icon: Sparkles,
    title: "Smart Technology",
    desc: "Powered by AI matching and smart pricing to ensure travelers receive optimal value while maximizing revenue for our partners.",
  },
  {
    icon: Wallet,
    title: "Financial Protection",
    desc: "Complete peace of mind with our secure wallet architecture and escrow-based payment systems, ensuring funds are always protected.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="pill-tag">About Us</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="text-gradient-light">Africa's Integrated</span>
            <br />
            <span className="text-primary">Travel & Mobility</span>{" "}
            <span className="text-gradient-light">Ecosystem</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            Welcome to BINGI, the premier integrated travel and mobility ecosystem built for
            Africa. Born in Ghana and designed for the continent, BINGI bridges the gap between
            premium mobility and secure accommodations through a unified, asset-light
            infrastructure that connects travelers, corporate clients, and the diaspora with
            verified vehicle owners, premium short-stay properties, and elite professional drivers.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            We don't just facilitate bookings — we engineer trust. By leveraging advanced AI,
            strict identity verification, and secure payment protection, BINGI removes uncertainty
            from travel and empowers local hosts, owners, and drivers to scale their businesses
            securely.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-md shadow-card-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Mission
              </span>
              <p className="mt-4 text-lg leading-relaxed">
                To make travel across Africa safer, more reliable, and seamlessly connected by
                creating a secure digital marketplace that empowers local property hosts, vehicle
                owners, and professional drivers while delivering exceptional service to every
                traveler.
              </p>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-md shadow-card-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Vision
              </span>
              <p className="mt-4 text-lg leading-relaxed">
                To become the ultimate trusted infrastructure layer powering travel, accommodation,
                and mobility across the African continent — setting the global standard for
                security, convenience, and premium hospitality.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">
            The <span className="text-primary">BINGI</span> Advantage
          </h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <a.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-5 text-lg font-semibold">{a.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}