import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DIFFERENTIATORS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "A decade of clinical-grade aligner treatment planning, with collaborations across Straumann, Zenyum, and Softsmile. Meet the precision partner behind AlignArchitect.",
};

const CAPABILITIES = [
  { title: "Treatment planning", note: "Across leading clear-aligner systems" },
  { title: "Restorative CAD/CAM", note: "Crown, bridge & implant design" },
  { title: "Quality control", note: "Independent clinical plan review" },
  { title: "White-label production", note: "Private-label aligner manufacturing" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A decade of precision, working quietly behind the profession."
        lede={`AlignArchitect is a B2B treatment-planning and digital-dentistry partner. For ${SITE.yearsExperience} years we've planned aligner cases and designed restorations for dentists, labs, and brands — including collaborations with ${SITE.partners.join(", ")}.`}
      />

      {/* story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <div className="mt-6 space-y-5 text-lede text-graphite-600">
                <p>
                  We started with a simple conviction: a treatment plan is an engineering document, not
                  a marketing animation. Aligners move teeth through real biomechanics, and the quality
                  of the plan decides the quality of the outcome.
                </p>
                <p>
                  Over {SITE.yearsExperience} years, that conviction has carried us through thousands of
                  cases and collaborations with established names in the field. We&apos;ve seen what
                  separates a plan that tracks from one that stalls — and we&apos;ve built our process
                  around it.
                </p>
                <p>
                  Today we work as the invisible engineering team behind dentists, labs, and aligner
                  brands — planning, reviewing, manufacturing, and designing, so our partners can focus
                  on their patients and their business.
                </p>
              </div>
            </Reveal>

            <Reveal small className="lg:pt-10">
              <div className="rounded-xl border border-line bg-graphite-50 p-8 sm:p-10">
                <Eyebrow>Collaborated with</Eyebrow>
                <ul className="mt-6 divide-y divide-line">
                  {SITE.partners.map((p) => (
                    <li
                      key={p}
                      className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                    >
                      <span className="font-display text-h3 font-medium tracking-tight text-ink">
                        {p}
                      </span>
                      <span className="label-mono text-graphite-300">Partner</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-graphite-500">
                  Collaboration experience across leading aligner and digital-dentistry organisations.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* principles */}
      <section className="border-y border-line bg-graphite-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we think"
            title="The principles behind every case."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col gap-3 bg-paper-raised p-7">
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite-600">{d.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* capabilities */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Software-agnostic, end to end."
            lede="We work inside the planning and CAD/CAM tools you already use, and cover the full digital-dentistry spectrum."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <RevealItem key={c.title}>
                <div className="flex h-full flex-col gap-2 rounded-xl border border-line bg-paper-raised p-7">
                  <span className="label-mono text-teal-600">{c.title}</span>
                  <p className="mt-1 text-graphite-600">{c.note}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTASection
        title="Put a decade of planning behind your next case."
        body="Whether you're a clinic, a lab, or a brand, we'll plug into the way you already work."
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
