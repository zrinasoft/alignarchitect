import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WorkflowTeaser } from "@/components/sections/home/WorkflowTeaser";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { AudienceSplit } from "@/components/sections/home/AudienceSplit";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WorkflowTeaser />
      <WhyUs />
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
