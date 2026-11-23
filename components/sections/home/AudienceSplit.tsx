import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AUDIENCES } from "@/lib/content";

/** Navy audience cards on a tinted band. */
export function AudienceSplit() {
  return (
    <section className="bg-teal-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Who we work with"
          title="One partner, built around your business."
          lede="We adapt to how you operate — clinic, lab, or brand — and stay invisible to the people you serve."
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3" staggerChildren={0.1}>
          {AUDIENCES.map((a) => (
            <RevealItem key={a.id}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-8 text-paper shadow-lift transition-transform duration-300 hover:-translate-y-1">
                <span
                  aria-hidden
                  className="absolute -right-16 -top-16 size-44 rounded-full bg-teal/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-60"
                />
                <span className="relative inline-flex w-fit rounded-full bg-teal/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-teal-300">
                  {a.label}
                </span>
                <h3 className="relative mt-6 font-display text-h3 font-medium tracking-tight text-balance">
                  {a.headline}
                </h3>
                <p className="relative mt-4 text-graphite-300">{a.description}</p>

                <ul className="relative mt-7 space-y-3 border-t border-white/10 pt-7">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-graphite-200">
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-teal-300" />
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
