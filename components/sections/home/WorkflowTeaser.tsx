import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WORKFLOW } from "@/lib/content";

/** Four-step pipeline as connected cards on the light canvas. */
export function WorkflowTeaser() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The digital workflow"
            title="A precise path from scan to delivery."
            lede="Every case moves through the same disciplined pipeline — intake, planning, independent QC, and delivery — so quality never depends on who picked it up."
          />
          <Reveal small className="shrink-0">
            <Button href="/workflow" variant="primary" withArrow>
              See the full workflow
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.1}>
          {/* connector rule behind the step badges (desktop) */}
          <span
            aria-hidden
            className="absolute left-8 right-8 top-[2.35rem] hidden h-px bg-gradient-to-r from-teal/60 via-teal/30 to-teal/60 lg:block"
          />
          {WORKFLOW.map((step) => (
            <RevealItem key={step.step}>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift">
                <span className="flex size-10 items-center justify-center rounded-full bg-teal font-display text-sm font-semibold text-white ring-8 ring-white">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-600">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
