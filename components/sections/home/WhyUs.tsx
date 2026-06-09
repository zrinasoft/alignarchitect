import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { DIFFERENTIATORS, STATS } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="relative bg-graphite-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why AlignArchitect"
              title="Precision is a process, not a promise."
              lede="We pair clinical judgment with engineering discipline. The result is work you can stand behind — and clients can trust."
            />
          </div>

          <RevealGroup className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col gap-3 bg-paper-raised p-7">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Check className="size-4.5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-ink">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite-600">{d.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* stat strip */}
        <Reveal className="mt-16 grid grid-cols-2 gap-8 rounded-xl border border-line bg-paper-raised p-8 sm:p-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
