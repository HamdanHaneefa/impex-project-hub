import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const comparisonData = [
  {
    category: "Display & Touch",
    features: [
      { name: "4K Ultra HD Resolution (3840 × 2160)", xLearnAI: true, xMeetAI: true },
      { name: "Available Sizes", xLearnAI: "65″ / 75″ / 86″", xMeetAI: "65″ / 75″ / 86″" },
      { name: "Multi-Touch Points", xLearnAI: "20 (Android) / 40 (Windows)", xMeetAI: "20 (Android) / 40 (Windows)" },
      { name: "Brightness", xLearnAI: "400-450 cd/m²", xMeetAI: "400-450 cd/m²" },
    ],
  },
  {
    category: "Software & OS",
    features: [
      { name: "Android 14 with EDLA Certification", xLearnAI: true, xMeetAI: true },
      { name: "Google Workspace (Meet, Drive, Gmail, etc.)", xLearnAI: true, xMeetAI: true },
      { name: "Digital Whiteboard with AI", xLearnAI: true, xMeetAI: true },
      { name: "Dual-System Support (OPS Module)", xLearnAI: true, xMeetAI: true },
    ],
  },
  {
    category: "Audio & Video",
    features: [
      { name: "48 MP AI Tracking Camera", xLearnAI: false, xMeetAI: true },
      { name: "8-Array Microphone System", xLearnAI: false, xMeetAI: true },
      { name: "Speaker Tracking & Auto-Zoom", xLearnAI: false, xMeetAI: true },
      { name: "Built-in Stereo Speakers", xLearnAI: true, xMeetAI: true },
    ],
  },
  {
    category: "Education Features",
    features: [
      { name: "Edu AI Learning App", xLearnAI: true, xMeetAI: false },
      { name: "CBSE & State Board Lecture Videos", xLearnAI: true, xMeetAI: false },
      { name: "Textbook PDFs & Quizzes", xLearnAI: true, xMeetAI: false },
      { name: "1-Year Complimentary Subscription", xLearnAI: true, xMeetAI: false },
    ],
  },
  {
    category: "Connectivity",
    features: [
      { name: "Wireless Screen Sharing (QuickShare, AirPlay)", xLearnAI: true, xMeetAI: true },
      { name: "HDMI with Touch-Back Support", xLearnAI: true, xMeetAI: true },
      { name: "Device Management System", xLearnAI: true, xMeetAI: true },
      { name: "19 Built-in Productivity Tools", xLearnAI: true, xMeetAI: true },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-primary mx-auto" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
    );
  }
  return <span className="text-sm text-foreground font-medium">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Model Comparison
            </p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              xLearnAI vs xMeetAI
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Both models share the same powerful core. Choose based on your primary use case.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 lg:mt-20 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-card">
                {/* Header */}
                <div className="grid grid-cols-[2fr_1fr_1fr] bg-gradient-subtle border-b border-border">
                  <div className="px-4 sm:px-6 py-4 sm:py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Feature
                    </p>
                  </div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-center border-l border-border">
                    <p className="text-sm font-bold text-foreground">xLearnAI</p>
                    <p className="text-xs text-muted-foreground mt-0.5">For Education</p>
                  </div>
                  <div className="px-4 sm:px-6 py-4 sm:py-5 text-center border-l border-border">
                    <p className="text-sm font-bold text-foreground">xMeetAI</p>
                    <p className="text-xs text-muted-foreground mt-0.5">For Meetings</p>
                  </div>
                </div>

                {/* Body */}
                {comparisonData.map((section, sectionIdx) => (
                  <div key={section.category}>
                    {/* Category Header */}
                    <div className="bg-muted/50 px-4 sm:px-6 py-3 border-b border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        {section.category}
                      </p>
                    </div>
                    {/* Features */}
                    {section.features.map((feature, featureIdx) => (
                      <div
                        key={feature.name}
                        className={`grid grid-cols-[2fr_1fr_1fr] ${
                          featureIdx !== section.features.length - 1 ||
                          sectionIdx !== comparisonData.length - 1
                            ? "border-b border-border"
                            : ""
                        } bg-card hover:bg-muted/30 transition-colors`}
                      >
                        <div className="px-4 sm:px-6 py-3 sm:py-4">
                          <p className="text-xs sm:text-sm text-foreground">{feature.name}</p>
                        </div>
                        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center border-l border-border">
                          <CellValue value={feature.xLearnAI} />
                        </div>
                        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center border-l border-border">
                          <CellValue value={feature.xMeetAI} />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
