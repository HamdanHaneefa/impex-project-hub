import { Reveal } from "./Reveal";
import { useState } from "react";

const specsData = [
  {
    size: '65"',
    specs: {
      "Display Size": '65" (165 cm)',
      Resolution: "3840 × 2160 (4K Ultra HD)",
      "Pixel Density": "68 PPI",
      Brightness: "400 cd/m²",
      "Contrast Ratio": "4000:1",
      "Viewing Angle": "178° (H) / 178° (V)",
      "Response Time": "8 ms",
      "Touch Technology": "Infrared Multi-Touch",
      "Touch Points": "20 (Android) / 40 (Windows)",
      "Operating System": "Android 14 (EDLA Certified)",
      Processor: "Quad-Core ARM Cortex-A73",
      RAM: "4 GB DDR4",
      Storage: "32 GB eMMC",
      "Built-in Speakers": "2 × 15W Stereo",
      Microphone: "Built-in Array (xMeetAI: 8-array)",
      Camera: "xMeetAI: 48 MP AI Tracking",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2, HDMI × 3, USB × 4",
      "Power Consumption": "≤ 280W",
      "Net Weight": "42 kg",
      "VESA Mount": "600 × 400 mm",
    },
  },
  {
    size: '75"',
    specs: {
      "Display Size": '75" (190 cm)',
      Resolution: "3840 × 2160 (4K Ultra HD)",
      "Pixel Density": "59 PPI",
      Brightness: "400 cd/m²",
      "Contrast Ratio": "4000:1",
      "Viewing Angle": "178° (H) / 178° (V)",
      "Response Time": "8 ms",
      "Touch Technology": "Infrared Multi-Touch",
      "Touch Points": "20 (Android) / 40 (Windows)",
      "Operating System": "Android 14 (EDLA Certified)",
      Processor: "Quad-Core ARM Cortex-A73",
      RAM: "4 GB DDR4",
      Storage: "32 GB eMMC",
      "Built-in Speakers": "2 × 15W Stereo",
      Microphone: "Built-in Array (xMeetAI: 8-array)",
      Camera: "xMeetAI: 48 MP AI Tracking",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2, HDMI × 3, USB × 4",
      "Power Consumption": "≤ 350W",
      "Net Weight": "55 kg",
      "VESA Mount": "800 × 400 mm",
    },
  },
  {
    size: '86"',
    specs: {
      "Display Size": '86" (218 cm)',
      Resolution: "3840 × 2160 (4K Ultra HD)",
      "Pixel Density": "51 PPI",
      Brightness: "450 cd/m²",
      "Contrast Ratio": "4000:1",
      "Viewing Angle": "178° (H) / 178° (V)",
      "Response Time": "8 ms",
      "Touch Technology": "Infrared Multi-Touch",
      "Touch Points": "20 (Android) / 40 (Windows)",
      "Operating System": "Android 14 (EDLA Certified)",
      Processor: "Quad-Core ARM Cortex-A73",
      RAM: "4 GB DDR4",
      Storage: "32 GB eMMC",
      "Built-in Speakers": "2 × 15W Stereo",
      Microphone: "Built-in Array (xMeetAI: 8-array)",
      Camera: "xMeetAI: 48 MP AI Tracking",
      Connectivity: "Wi-Fi 6, Bluetooth 5.2, HDMI × 3, USB × 4",
      "Power Consumption": "≤ 450W",
      "Net Weight": "72 kg",
      "VESA Mount": "800 × 600 mm",
    },
  },
];

export function TechnicalSpecs() {
  const [selectedSize, setSelectedSize] = useState('65"');

  return (
    <section id="technical-specs" className="py-12 sm:py-24 md:py-32 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Technical Specifications
            </p>
            <h2 className="mt-2 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Complete technical details
            </h2>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Full specifications for all available sizes of the IMPEX xSeries.
            </p>
          </div>
        </Reveal>

        {/* Mobile View - Tabs */}
        <div className="md:hidden mt-8">
          <Reveal delay={0.1}>
            {/* Size Selector */}
            <div className="flex gap-2 mb-4">
              {specsData.map((model) => (
                <button
                  key={model.size}
                  onClick={() => setSelectedSize(model.size)}
                  className={`flex-1 py-2.5 px-2 rounded-lg text-sm font-bold transition-all ${
                    selectedSize === model.size
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card border border-border text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {model.size}
                </button>
              ))}
            </div>

            {/* Selected Size Specs */}
            {specsData
              .filter((model) => model.size === selectedSize)
              .map((model) => (
                <div key={model.size} className="rounded-lg border border-border bg-card shadow-card overflow-hidden">
                  <div className="bg-gradient-primary px-3.5 py-3">
                    <h3 className="text-base font-bold text-primary-foreground">
                      {model.size} Display
                    </h3>
                  </div>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {Object.entries(model.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-md bg-muted/50 border border-border px-2.5 py-2"
                      >
                        <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground leading-tight mb-1">
                          {key}
                        </p>
                        <p className="text-[11px] font-bold text-foreground leading-snug">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </Reveal>
        </div>

        {/* Desktop View - All Sizes */}
        <div className="hidden md:block mt-12 sm:mt-16 lg:mt-20 space-y-6 sm:space-y-8">
          {specsData.map((model, idx) => (
            <Reveal key={model.size} delay={idx * 0.1}>
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-card shadow-card overflow-hidden">
                <div className="bg-gradient-primary px-5 sm:px-8 py-5 sm:py-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                    {model.size} Display
                  </h3>
                </div>
                <div className="p-5 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {Object.entries(model.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-xl bg-muted/50 border border-border px-4 py-3"
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {key}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 sm:mt-8 rounded-xl bg-accent/50 border border-border px-3 sm:px-6 py-3 sm:py-4 text-center">
            <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Note:</strong> Specifications are subject to
              change without notice. Camera and microphone features are exclusive to xMeetAI
              variant. OPS module for Windows support sold separately.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
