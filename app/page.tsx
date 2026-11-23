import { Hero } from "@/components/sections/home/Hero";
import { ServingStrip } from "@/components/sections/home/ServingStrip";
import { IntroSplit } from "@/components/sections/home/IntroSplit";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { StatsBand } from "@/components/sections/home/StatsBand";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { CaseShowcase } from "@/components/sections/home/CaseShowcase";
import { WorkflowTeaser } from "@/components/sections/home/WorkflowTeaser";
import { AudienceSplit } from "@/components/sections/home/AudienceSplit";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { CTASection } from "@/components/sections/CTASection";

// Section rhythm (backgrounds): dark hero → white strip → tint → white → dark stats →
// white → dark videos → paper → tint → paper banner → teal CTA → dark footer.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServingStrip />
      <IntroSplit />
      <ServicesOverview />
      <StatsBand />
      <WhyUs />
      <CaseShowcase />
      <WorkflowTeaser />
      <AudienceSplit />
      <PromoBanner
        src="/images/clear-aligner-dental-hero-banner.png"
        alt="AlignArchitects — from scan to smile: send us your scans and we design and deliver clear aligners, implants, crowns, and dentures."
        width={1766}
        height={488}
      />
      <CTASection
        eyebrow="Let's plan your next case"
        title="Bring us your next case. We'll bring the precision."
        body="Tell us about your practice, lab, or brand and the work you need planned. We'll respond with a tailored way forward."
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
