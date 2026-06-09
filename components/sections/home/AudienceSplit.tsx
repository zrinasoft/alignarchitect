import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AUDIENCES } from "@/lib/content";

export function AudienceSplit() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who we work with"
          title="One partner, built around your business."
          lede="We adapt to how you operate — clinic, lab, or brand — and stay invisible to the people you serve."
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3" staggerChildren={0.1}>
          {AUDIENCES.map((a) => (
            <RevealItem key={a.id}>
              <div className="group flex h-full flex-col rounded-xl border border-line bg-paper-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:border-graphite-300 hover:shadow-lift">
                <span className="label-mono text-teal-600">{a.label}</span>
                <h3 className="mt-5 font-display text-h3 font-medium tracking-tight text-ink text-balance">
                  {a.headline}
                </h3>
                <p className="mt-4 text-graphite-600">{a.description}</p>

                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-graphite-700">
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
