import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Monitor, Hand, Cpu, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-display.jpg";

const quickSpecs = [
  { icon: Monitor, label: "4K Ultra HD" },
  { icon: Hand, label: "20 / 40-pt Multi-touch" },
  { icon: Cpu, label: "Android 14" },
  { icon: ShieldCheck, label: "EDLA Certified" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-20 md:pb-28 overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[35rem] h-[35rem] rounded-full bg-primary-glow blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            New · IMPEX xSeries 2026
          </span>
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            AI Interactive Displays
            <span className="block text-gradient">built for what's next.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/75 max-w-xl">
            The IMPEX xSeries combines 4K Ultra HD clarity, AI-powered whiteboarding
            and EDLA-certified Google Workspace — engineered for modern classrooms
            and boardrooms.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 shadow-brand transition-all"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur transition-colors"
            >
              <PlayCircle className="h-4 w-4" />
              Explore Features
            </a>
          </div>

          <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {quickSpecs.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 sm:py-3 backdrop-blur"
              >
                <s.icon className="h-4 w-4 text-primary-glow" />
                <p className="mt-1.5 sm:mt-2 text-xs font-medium text-white/85 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-25 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-3 sm:p-5 lg:p-6 shadow-elegant">
            <img
              src={heroImg}
              alt="IMPEX xSeries 4K interactive display in a modern meeting room"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-xl sm:rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
