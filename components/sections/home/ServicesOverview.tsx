import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceGlyph } from "@/components/graphics/ServiceGlyph";
import { SERVICES } from "@/lib/content";

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Four services, one standard of precision."
          lede="From the first scan to a finished restoration, we operate as the remote engineering team behind your aligner and restorative work."
        />

        <RevealGroup
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2"
          staggerChildren={0.09}
        >
          {SERVICES.map((s) => (
            <RevealItem key={s.id}>
              <Link
                href={`/services#${s.id}`}
                className="group relative flex h-full flex-col gap-5 bg-paper-raised p-8 transition-colors duration-300 hover:bg-graphite-50 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="label-mono text-graphite-300">{s.index}</span>
                  <span className="flex size-12 items-center justify-center rounded-lg border border-line bg-paper text-teal-600 transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
                    <ServiceGlyph icon={s.icon} className="size-5" />
                  </span>
                </div>

                <div className="mt-2">
                  <h3 className="font-display text-h3 font-medium tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-graphite-600">{s.short}</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="label-mono text-graphite-400 normal-case tracking-wide text-[0.7rem]">
                    {s.audience}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-teal-600">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* hover accent rule */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
