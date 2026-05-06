import { Phone, Mail } from "lucide-react";
import logo from "@/assets/impex-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="IMPEX" className="h-7 w-auto" />
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                xSeries
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                AI Interactive Displays · Built for what's next.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact Us
            </p>
            <a
              href="tel:+919778665499"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 97786 65499
            </a>
            <a
              href="mailto:ifpd@impexappliances.com"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              ifpd@impexappliances.com
            </a>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} IMPEX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
