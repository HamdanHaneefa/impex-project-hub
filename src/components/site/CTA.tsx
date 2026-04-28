import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-12 sm:py-20 md:py-28 bg-surface-dark text-white" style={{ backgroundColor: "var(--surface-darker)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 sm:p-14 text-center shadow-brand">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              See the IMPEX xSeries in action.
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-2xl mx-auto">
              Book a personalised demo at your campus or office. Our team will walk you through the full xLearnAI and xMeetAI experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Sales
              </a>
              <a
                href="mailto:sales@impex.example"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-xs text-primary-foreground/70">
              Full enquiry form, comparison table & FAQ launching in Phase 2.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
