import { Reveal } from "./Reveal";
import { Building2, GraduationCap, Stethoscope, Landmark } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, colleges, and training centers can transform classrooms with interactive learning and AI tools.",
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Enhance boardrooms and huddle spaces with seamless conferencing and collaborative whiteboarding.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Ideal for telemedicine, medical training, and displaying high-resolution medical imagery.",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Perfect for control rooms, command centers, and secure briefings with reliable performance.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Use Cases
            </p>
            <h2 className="mt-2 sm:mt-4 text-xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Industries that use IMPEX xSeries.
            </h2>
            <p className="mt-2.5 sm:mt-6 text-xs sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Engineered to meet the rigorous demands of various sectors, providing intelligent solutions for every environment.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.1}>
              <div className="group relative rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-brand">
                  <ind.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-foreground">{ind.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
