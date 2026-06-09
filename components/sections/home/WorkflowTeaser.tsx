import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WORKFLOW } from "@/lib/content";

export function WorkflowTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 mask-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-teal/10 blur-[140px]"
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow onDark>The digital workflow</Eyebrow>
            <h2 className="mt-5 font-display text-h2 font-medium tracking-tight text-balance">
              A precise path from scan to delivery.
            </h2>
            <p className="mt-5 max-w-xl text-lede text-graphite-300">
              Every case moves through the same disciplined pipeline — intake, planning, independent
              QC, and delivery — so quality never depends on who picked it up.
            </p>
          </Reveal>
          <Reveal small className="shrink-0">
            <Button href="/workflow" variant="onDark" withArrow>
              See the full workflow
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          className="relative mt-16 grid gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {WORKFLOW.map((step) => (
            <RevealItem key={step.step}>
              <div className="group flex h-full flex-col gap-4 bg-ink p-7 transition-colors duration-300 hover:bg-ink-800">
                <div className="flex items-center justify-between">
                  <span className="font-display text-h3 font-medium text-teal">{step.step}</span>
                  <span className="h-px w-10 bg-ink-700 transition-colors group-hover:bg-teal" />
                </div>
                <h3 className="font-display text-lg font-medium tracking-tight text-paper">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite-400">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
