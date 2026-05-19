import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="pill-tag">Contact Us</span>
            <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient-light">Get in Touch with </span>
              <span className="text-primary">BINGI</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Have questions, need support, or want to partner with us? We&apos;re here to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-semibold">bingi@email.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-semibold">+ 235 000 000 000</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Office</div>
                  <div className="font-semibold">N&apos;Djamena, Chad</div>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm shadow-card-dark">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">First Name</label>
                <Input placeholder="Enter first name" className="h-12 rounded-xl bg-secondary/60 border-border" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" className="h-12 rounded-xl bg-secondary/60 border-border" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">How can we help you?</label>
                <Textarea placeholder="Enter your message" rows={5} className="rounded-xl bg-secondary/60 border-border" />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}