import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book a car?",
    a: "Browse available cars in your area, select your dates, and confirm the booking through the BINGI app. You'll get instant confirmation and pickup details.",
  },
  {
    q: "How are drivers verified?",
    a: "Every driver and host goes through ID verification, background checks, and documentation validation before being approved on BINGI.",
  },
  {
    q: "How does overtime work?",
    a: "If your trip runs beyond the booked time, overtime charges apply automatically based on the host's hourly rate. You'll be notified in-app before extra fees accrue.",
  },
  {
    q: "Is payment made in the app?",
    a: "Yes. All payments are processed securely inside the BINGI app — no cash, no off-platform transfers. This protects both travelers and hosts.",
  },
  {
    q: "How do earnings work?",
    a: "Hosts and drivers earn from every completed booking. Earnings are tracked in your dashboard and paid out on a regular schedule to your linked account.",
  },
];

export function FAQs() {
  return (
    <section id="faqs" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="pill-tag">FAQs</span>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gradient-light md:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know about using BINGI.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card/40 px-6 backdrop-blur-sm">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border last:border-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}