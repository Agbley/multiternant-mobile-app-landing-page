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
    q: "Is my payment secure?",
    a: "Yes. All transactions are processed securely through our platform with encrypted payment gateways and full record-keeping for your protection.",
  },
  {
    q: "What if I need to cancel my booking?",
    a: "You can cancel through the app. Refund eligibility follows our flexible cancellation policy based on how close to the trip you cancel.",
  },
  {
    q: "How are drivers and hosts verified?",
    a: "Every driver and host goes through ID verification, background checks, and documentation validation before being approved on BINGI.",
  },
  {
    q: "Can I list my own car or service?",
    a: "Absolutely. Sign up as a host or driver, complete verification, and start earning by sharing your vehicle or services with verified travelers.",
  },
  {
    q: "What support is available if something goes wrong?",
    a: "Our 24/7 support team is available in-app to help resolve any issue — from booking changes to on-trip emergencies.",
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