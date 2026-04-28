import {
  Chrome,
  PenTool,
  Sparkles,
  LayoutGrid,
  Video,
  Wifi,
  Settings2,
  GraduationCap,
  Users,
  ShieldCheck,
  PlayCircle,
  Calendar,
  Mail,
  HardDrive,
  Calculator,
  Timer,
  Eye,
  Sigma,
  FileText,
  Layers,
  Zap,
  Mic,
  Cast,
  Cable,
  Power,
  RotateCw,
  BookOpen,
  ClipboardCheck,
  Camera,
  Cpu,
} from "lucide-react";
import { Reveal } from "./Reveal";
import classroom from "@/assets/classroom.jpg";
import meeting from "@/assets/meeting.jpg";

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-brand">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

const workspaceApps = [
  { icon: Video, label: "Meet" },
  { icon: Chrome, label: "Chrome" },
  { icon: Calendar, label: "Calendar" },
  { icon: HardDrive, label: "Drive" },
  { icon: Mail, label: "Gmail" },
  { icon: PlayCircle, label: "YouTube" },
];

const whiteboardFeatures = [
  { icon: PenTool, title: "Smart Recognition", description: "Convert handwriting and math equations into clean digital text instantly." },
  { icon: Layers, title: "High-Density Touch", description: "20-point Android & 40-point Windows multi-touch with palm erase." },
  { icon: BookOpen, title: "Online Library (AI Help)", description: "Built-in templates, document compatibility for PPT, Word, Excel & PDF." },
  { icon: Sigma, title: "Assistant Tools", description: "Compass, ruler, protractor and flowchart elements at your fingertips." },
];

const aiFeatures = [
  { icon: Sparkles, title: "AI Help", description: "Select on-screen text for AI-powered explanations and summaries." },
  { icon: FileText, title: "OCR", description: "Convert handwritten notes into editable digital text in one tap." },
  { icon: Sigma, title: "Formula Recognition", description: "Handwritten equations transformed into formatted digital formulas." },
  { icon: Calculator, title: "Smart Widgets", description: "Calculator, timer and annotation tools always within reach." },
  { icon: Users, title: "Collaborative Whiteboard", description: "Multi-user real-time collaboration across devices." },
  { icon: Eye, title: "Smart Annotation", description: "Annotate on top of any app, document or web page seamlessly." },
];

const splitScreen = [
  { icon: Zap, title: "Quick Launch", description: "Open frequently used apps with a single tap." },
  { icon: LayoutGrid, title: "Split Screen", description: "Run two apps side-by-side simultaneously." },
  { icon: RotateCw, title: "Smooth Switching", description: "Effortless multitasking between active sessions." },
];

const audioVideo = [
  { icon: Camera, title: "48 MP AI Camera", description: "Auto-tracks the active speaker for cinematic meeting framing." },
  { icon: Mic, title: "8-Array Microphone", description: "Crystal-clear voice pickup across the entire room." },
  { icon: Video, title: "Speaker Tracking", description: "Automatic zoom on the person currently speaking." },
  { icon: Cpu, title: "Dual-System", description: "Android 14 by default — add an OPS module for Windows on demand." },
];


const connectivity = [
  { icon: Cast, title: "QuickShare & AirPlay", description: "Wireless screen sharing from any device — phone, tablet or laptop." },
  { icon: Cable, title: "HDMI with Touch-Back", description: "Control your laptop directly from the display via touch." },
  { icon: Wifi, title: "Wireless Dongle", description: "Plug-and-play casting with the optional dongle." },
  { icon: Cast, title: "Reverse Projection", description: "Mirror the display onto any laptop in the room." },
];

const dms = [
  { icon: Power, title: "Remote Power", description: "Shutdown, reboot, hibernate, wake-up and OPS control remotely." },
  { icon: Timer, title: "19 Productivity Tools", description: "Timer, stopwatch, freeze, spotlight, prompter, random pick & more." },
  { icon: Settings2, title: "Centralised Control", description: "Manage all displays in your fleet from one dashboard." },
];

const eduAi = [
  { icon: PlayCircle, title: "Lecture Videos", description: "CBSE & State Board syllabi from Nursery to Class 12." },
  { icon: BookOpen, title: "Textbook PDFs", description: "Complete digital textbook library at your fingertips." },
  { icon: ClipboardCheck, title: "Quizzes & Mock Tests", description: "Chapter-wise quizzes and full mock tests for exam prep." },
  { icon: GraduationCap, title: "Structured Curriculum", description: "Subject-wise and grade-wise content organisation." },
];

const avConf = [
  { icon: Users, title: "Room-Ready Layouts", description: "Optimised configurations for small and large meeting rooms." },
  { icon: Camera, title: "Conference Webcam", description: "Optional accessory for enhanced video quality." },
  { icon: Mic, title: "External Speaker", description: "Pair with our conference speaker for richer audio." },
  { icon: ShieldCheck, title: "Floor Stand Mount", description: "Movable floor stand for flexible room deployment." },
];

export function Features() {
  return (
    <>
      {/* Section 1: Google Workspace & Android 14 */}
      <section id="features" className="py-20 md:py-28 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="01 · Powered by Google"
              title="EDLA-certified Google Workspace, on Android 14."
              subtitle="A fully certified, secure Google experience — Meet, Chrome, Drive, Gmail, Calendar and YouTube — all running natively on Android 14 with full Play Store access."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {workspaceApps.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  <div className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-accent text-primary">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{a.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <FeatureCard icon={ShieldCheck} title="Enhanced Security" description="Latest Android 14 security patches keep your data and meetings safe." />
              <FeatureCard icon={Sparkles} title="Future-Ready Upgrades" description="Continuous OS upgrades and EDLA certification updates." />
              <FeatureCard icon={LayoutGrid} title="Play Store Access" description="Install any productivity or learning app you need." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 & 3: Whiteboard + AI */}
      <section id="whiteboard" className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="02 · Digital Whiteboard"
              title="A whiteboard, reimagined for the AI era."
              subtitle="High-density multi-touch, smart recognition and a built-in library of templates — designed to keep your ideas flowing."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whiteboardFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionHeader
                eyebrow="03 · WhiteBoard AI"
                title="AI that understands your handwriting."
                subtitle="From OCR and formula recognition to live AI explanations — turn any whiteboard session into structured, searchable knowledge."
              />
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <FeatureCard {...f} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Split-screen */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="04 · Multitasking"
              title="Two apps. One screen. Zero friction."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {splitScreen.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Audio & Video xMeetAI */}
      <section className="py-20 md:py-28 bg-surface-dark text-white" style={{ backgroundColor: "var(--surface-dark)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-glow">
              05 · Audio & Video — xMeetAI
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Studio-grade conferencing, built in.
            </h2>
            <p className="mt-4 text-white/70">
              A 48 MP AI camera, 8-array microphones and stereo speakers — engineered to make hybrid meetings feel as natural as in-person.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {audioVideo.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                    <f.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={meeting}
                alt="xMeetAI in a corporate boardroom"
                width={1280}
                height={800}
                loading="lazy"
                className="relative rounded-2xl border border-white/10 shadow-elegant w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 6: Connectivity */}
      <section id="connectivity" className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="06 · Projection & Connectivity"
              title="Connect anything. Cast everything."
              subtitle="Wireless or wired, the xSeries plays nicely with every device in the room."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {connectivity.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: DMS */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="07 · Device Management"
              title="One dashboard. Total control."
              subtitle="Manage power, monitor usage and access 19 built-in productivity tools — from anywhere."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {dms.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Edu AI */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <img
                src={classroom}
                alt="Edu AI Learning App on xLearnAI"
                width={1280}
                height={800}
                loading="lazy"
                className="relative rounded-2xl border border-border shadow-elegant w-full h-auto"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              08 · Edu AI Learning App — xLearnAI
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              A complete learning library, built in.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From Nursery to Class 12 — lectures, textbooks, quizzes and mock tests covering CBSE and major State Board syllabi. 1-year complimentary subscription included.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {eduAi.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 9: AV Conferencing Solution */}
      <section id="specs" className="py-20 md:py-28 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="09 · AV Conferencing — xMeetAI"
              title="A complete meeting-room ecosystem."
              subtitle="From small huddle rooms to large boardrooms, pair the xMeetAI display with our accessory ecosystem for any space."
            />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {avConf.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
