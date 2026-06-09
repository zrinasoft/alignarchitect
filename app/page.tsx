import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WorkflowTeaser } from "@/components/sections/home/WorkflowTeaser";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { AudienceSplit } from "@/components/sections/home/AudienceSplit";
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
