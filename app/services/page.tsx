import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGlyph } from "@/components/graphics/ServiceGlyph";
import { FramedImage } from "@/components/graphics/FramedImage";
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
        image={{
          src: "/images/endodontic-file-dental-handpiece-closeup.jpg",
          alt: "Close-up of a precision dental handpiece and endodontic file",
          label: "PRECISION / INSTRUMENTATION",
        }}
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
        {SERVICES.map((s, i) => {
          const imageRight = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24 py-20 sm:py-28">
              <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  {/* image */}
                  <Reveal
                    small
                    className={imageRight ? "lg:order-2" : "lg:order-1"}
                  >
                    <FramedImage
                      src={s.image}
                      alt={s.imageAlt}
                      label={`FIG.${s.index} / ${s.icon.toUpperCase()}`}
                      aspectClassName="aspect-[4/3]"
                    />
                  </Reveal>

                  {/* copy */}
                  <Reveal className={imageRight ? "lg:order-1" : "lg:order-2"}>
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
                    <p className="mt-6 max-w-xl text-graphite-600 leading-relaxed">
                      {s.description}
                    </p>

                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                            <Check className="size-3.5" strokeWidth={2.4} />
                          </span>
                          <span className="text-sm text-graphite-700">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="label-mono text-graphite-400 normal-case tracking-wide">
                        Built for: <span className="text-graphite-700">{s.audience}</span>
                      </span>
                      <Button href="/contact" variant="ghost" withArrow>
                        Discuss this service
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
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
