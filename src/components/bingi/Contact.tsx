import { Mail, Phone, MapPin } from "lucide-react";

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

          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card/40 p-10 text-center backdrop-blur-sm shadow-card-dark">
            <h3 className="text-2xl font-bold">Let&apos;s start a conversation</h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Fill out our quick form and our team will get back to you shortly.
            </p>
            <a
              href="https://forms.gle/DTXoougqiJqLbxFT8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}