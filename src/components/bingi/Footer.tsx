import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl font-extrabold text-primary">Bingi</span>
              <span className="text-3xl font-extrabold text-primary">.</span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              BINGI is Africa&apos;s integrated travel ecosystem connecting cars, stays, and professional drivers in one trusted platform
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary">Menu</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#how" className="hover:text-foreground">How it Works</a></li>
              <li><a href="#policies" className="hover:text-foreground">Policies</a></li>
              <li><a href="#faqs" className="hover:text-foreground">FAQs</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary">Contact</h4>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> Email</div>
                <div className="mt-1 font-medium"> Info@bingiplatform.com / eben@bingiplatform.com </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> Phone</div>
                <div className="mt-1 font-medium"> +233 24 392 7807 / +233 24 775 4642 </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> East Legon, Greater Accra, Ghana </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border py-8 text-center">
          <p className="text-xs text-muted-foreground">©{new Date().getFullYear()} Bingi LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}