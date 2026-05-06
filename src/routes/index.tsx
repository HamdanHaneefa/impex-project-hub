import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ModelSelector } from "@/components/site/ModelSelector";
import { Features } from "@/components/site/Features";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { TechnicalSpecs } from "@/components/site/TechnicalSpecs";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ModelSelector />
        <Features />
        <ComparisonTable />
        <TechnicalSpecs />
        <EnquiryForm />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
