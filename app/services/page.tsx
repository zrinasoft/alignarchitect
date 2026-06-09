import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceGlyph } from "@/components/graphics/ServiceGlyph";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Aligner treatment planning, white-label manufacturing, treatment-plan QC, and remote crown, bridge & implant CAD/CAM — the four services behind AlignArchitect.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The engineering team behind your aligner and restorative work."
        lede="Four specialised services, each built on the same clinical discipline. Use one, or run your whole digital workflow through us."
      >
        <nav className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-graphite-700 transition-colors hover:border-ink hover:text-ink"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="divide-y divide-line">
        {SERVICES.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 py-20 sm:py-28">
            <Container>
              <div
                className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* copy */}
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 items-center justify-center rounded-xl border border-line bg-graphite-50 text-teal-600">
                      <ServiceGlyph icon={s.icon} className="size-6" />
                    </span>
                    <span className="label-mono text-graphite-300">{s.index}</span>
                  </div>
                  <h2 className="mt-6 font-display text-h2 font-medium tracking-tight text-ink text-balance">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-lede text-teal-700">{s.short}</p>
                  <p className="mt-6 max-w-xl text-graphite-600 leading-relaxed">{s.description}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="label-mono text-graphite-400 normal-case tracking-wide">
                      Built for: <span className="text-graphite-700">{s.audience}</span>
                    </span>
                    <Button href="/contact" variant="ghost" withArrow>
                      Discuss this service
                    </Button>
                  </div>
                </Reveal>

                {/* deliverables */}
                <Reveal small>
                  <div className="rounded-xl border border-line bg-paper-raised p-8 shadow-soft sm:p-10">
                    <Eyebrow>What you get</Eyebrow>
                    <ul className="mt-6 space-y-4">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                            <Check className="size-3.5" strokeWidth={2.4} />
                          </span>
                          <span className="text-graphite-700">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us the case. We'll recommend the service."
        body="Send us a case or a question and we'll map the right combination of planning, QC, manufacturing, or restorative design."
        secondaryLabel="See the workflow"
        secondaryHref="/workflow"
      />
    </>
  );
}
