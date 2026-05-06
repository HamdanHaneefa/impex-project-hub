import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the difference between xLearnAI and xMeetAI?",
    answer:
      "Both models share the same core hardware and software platform. xLearnAI includes the Edu AI Learning App with CBSE and State Board content (1-year subscription included), making it ideal for classrooms. xMeetAI features a 48 MP AI tracking camera, 8-array microphone system, and speaker tracking, optimized for boardroom conferencing.",
  },
  {
    question: "Can I use Windows on the IMPEX xSeries?",
    answer:
      "Yes. The xSeries runs Android 14 by default, but supports dual-system operation via an optional OPS (Open Pluggable Specification) module. With an OPS module installed, you can switch between Android and Windows seamlessly.",
  },
  {
    question: "Is the Edu AI subscription mandatory for xLearnAI?",
    answer:
      "The xLearnAI model includes a complimentary 1-year Edu AI subscription. After the first year, you can choose to renew the subscription to continue accessing lecture videos, textbooks, quizzes, and mock tests. The display itself will continue to function fully without the subscription.",
  },
  {
    question: "What wireless screen sharing options are supported?",
    answer:
      "The xSeries supports QuickShare (Android), AirPlay (iOS/macOS), and wireless dongle-based casting. You can also use HDMI with touch-back support, allowing you to control your laptop directly from the display's touchscreen.",
  },
  {
    question: "How many touch points does the display support?",
    answer:
      "The display supports 20 simultaneous touch points when running Android, and 40 touch points when running Windows (via OPS module). Both modes include palm erase functionality for natural writing.",
  },
  {
    question: "What is EDLA certification?",
    answer:
      "EDLA (Enterprise Devices Licensing Agreement) is Google's certification for commercial Android devices. It ensures full access to Google Workspace apps (Meet, Drive, Gmail, Calendar, Chrome, YouTube) and the Google Play Store, with guaranteed security updates and enterprise-grade support.",
  },
  {
    question: "Can I mount the display on a wall?",
    answer:
      "Yes. All three sizes (65″, 75″, 86″) support VESA mounting. The 65″ uses a 600×400mm mount, the 75″ uses 800×400mm, and the 86″ uses 800×600mm. Wall mounts are sold separately. A movable floor stand is also available as an optional accessory.",
  },
  {
    question: "What is included in the Device Management System?",
    answer:
      "The DMS allows remote control of power functions (shutdown, reboot, hibernate, wake-up), OPS module control, and task management. It also includes 19 built-in productivity tools such as timer, stopwatch, freeze, spotlight, prompter, and random pick.",
  },
  {
    question: "Is installation and training included?",
    answer:
      "Installation services and on-site training can be arranged separately based on your location and requirements. Please mention your installation needs in the enquiry form, and our team will include it in your quotation.",
  },
  {
    question: "What is the warranty period?",
    answer:
      "The IMPEX xSeries comes with a standard 1-year manufacturer warranty covering hardware defects. Extended warranty plans and on-site support packages are available. Contact our sales team for detailed warranty terms and extended coverage options.",
  },
  {
    question: "Can I try the display before purchasing?",
    answer:
      "Absolutely! We offer on-site demos at your campus or office. Use the enquiry form or contact our sales team to schedule a personalized demonstration of the xLearnAI or xMeetAI model.",
  },
  {
    question: "What payment and delivery options are available?",
    answer:
      "We accept bank transfers, purchase orders, and financing options for bulk orders. Delivery timelines vary by location and order size. Our team will provide detailed payment terms and delivery schedules in your quotation.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-gradient-subtle">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Everything you need to know
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Can't find the answer you're looking for? Reach out to our sales team.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card shadow-card px-5 sm:px-6 data-[state=open]:shadow-elegant transition-all"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions?{" "}
              <a
                href="#enquiry"
                className="font-semibold text-primary hover:underline"
              >
                Contact our sales team
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
