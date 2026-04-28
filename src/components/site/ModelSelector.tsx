import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Video, Check } from "lucide-react";
import classroom from "@/assets/classroom.jpg";
import meeting from "@/assets/meeting.jpg";

type Variant = "xLearnAI" | "xMeetAI";
type Size = "65" | "75" | "86";

const variantData = {
  xLearnAI: {
    icon: GraduationCap,
    tagline: "Built for the modern classroom",
    description:
      "Curriculum-ready interactive display with Edu AI lectures, textbooks, quizzes and structured learning content from Nursery to Class 12.",
    image: classroom,
    highlights: [
      "1-year Edu AI subscription included",
      "CBSE & State Board lecture library",
      "Built-in quizzes and mock tests",
      "Smart formula & handwriting recognition",
    ],
  },
  xMeetAI: {
    icon: Video,
    tagline: "Designed for the modern boardroom",
    description:
      "AV-grade conferencing display with 48MP AI camera, 8-mic array and built-in stereo speakers for crystal-clear hybrid meetings.",
    image: meeting,
    highlights: [
      "48 MP AI tracking camera",
      "8-array microphone system",
      "Speaker auto-zoom",
      "Optional Windows OPS module",
    ],
  },
};

const specs: Record<Size, { brightness: string; weight: string; vesa: string; ppi: string }> = {
  "65": { brightness: "400 cd/m²", weight: "42 kg", vesa: "600 × 400", ppi: "68 PPI" },
  "75": { brightness: "400 cd/m²", weight: "55 kg", vesa: "800 × 400", ppi: "59 PPI" },
  "86": { brightness: "450 cd/m²", weight: "72 kg", vesa: "800 × 600", ppi: "51 PPI" },
};

export function ModelSelector() {
  const [variant, setVariant] = useState<Variant>("xLearnAI");
  const [size, setSize] = useState<Size>("75");
  const data = variantData[variant];
  const Icon = data.icon;
  const spec = specs[size];

  return (
    <section id="models" className="py-12 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
            Choose your model
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            One platform. Two purpose-built variants.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
            Switch between xLearnAI and xMeetAI to see how each is tailored to its environment.
          </p>
        </div>

        {/* Variant toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-muted border border-border">
            {(Object.keys(variantData) as Variant[]).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`relative px-5 sm:px-8 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                  variant === v ? "text-primary-foreground" : "text-foreground/70"
                }`}
              >
                {variant === v && (
                  <motion.span
                    layoutId="variantPill"
                    className="absolute inset-0 rounded-full bg-gradient-primary shadow-brand"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{v}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Variant content */}
        <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={variant}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Icon className="h-3.5 w-3.5" />
                {variant}
              </div>
              <h3 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-bold text-foreground leading-snug">
                {data.tagline}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">{data.description}</p>
              <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={variant + "-img"}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-2xl sm:rounded-3xl bg-gradient-subtle border border-border p-3 sm:p-5 lg:p-6 shadow-elegant"
            >
              <img
                src={data.image}
                alt={variant}
                width={1280}
                height={800}
                loading="lazy"
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Size selector + live spec table */}
        <div className="mt-10 sm:mt-16 rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground">Available Sizes</h4>
              <p className="text-sm text-muted-foreground">Specs update live with your selection.</p>
            </div>
            <div className="inline-flex p-1 rounded-xl bg-muted border border-border self-start">
              {(Object.keys(specs) as Size[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
                    size === s
                      ? "bg-primary text-primary-foreground shadow-brand"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {s}"
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={size}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: "Display Size", value: `${size}"` },
              { label: "Brightness", value: spec.brightness },
              { label: "Pixel Density", value: spec.ppi },
              { label: "Net Weight", value: spec.weight },
              { label: "VESA Mount", value: spec.vesa },
              { label: "Resolution", value: "3840 × 2160" },
              { label: "Touch Points", value: "20 / 40" },
              { label: "OS", value: "Android 14" },
            ].map((row) => (
              <div key={row.label} className="rounded-xl bg-muted/50 border border-border p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {row.label}
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">{row.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
