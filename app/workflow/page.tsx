import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WORKFLOW } from "@/lib/content";

export const metadata: Metadata = {
  title: "Digital Workflow",
  description:
    "How AlignArchitect works: a disciplined intake → planning → quality control → delivery pipeline that keeps every aligner and restorative case predictable.",
};

const SLAS = [
  { k: "Intake to setup", v: "{{turnaround_planning}}" },
  { k: "QC pass", v: "{{turnaround_qc}}" },
  { k: "Revision rounds", v: "{{revision_policy}}" },
];

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="The digital workflow"
        title="One disciplined pipeline, every single case."
        lede="Quality shouldn't depend on who picked up your case. Every project moves through the same four stages, with an independent QC gate before anything reaches you."
      />

      {/* timeline */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="relative">
            {/* vertical rail */}
            <span
              aria-hidden
              className="absolute left-[27px] top-4 bottom-4 w-px bg-line sm:left-[31px]"
            />
            <RevealGroup className="space-y-12 sm:space-y-16" staggerChildren={0.12}>
              {WORKFLOW.map((step) => (
                <RevealItem key={step.step}>
                  <div className="relative grid gap-6 pl-20 sm:grid-cols-[1fr_auto] sm:gap-12 sm:pl-24">
                    {/* node */}
                    <span className="absolute left-0 top-0 flex size-14 items-center justify-center rounded-full border border-line bg-paper-raised font-display text-lg font-medium text-teal-600 shadow-soft sm:size-16">
                      {step.step}
                    </span>

                    <div className="max-w-xl">
                      <h2 className="font-display text-h3 font-medium tracking-tight text-ink">
                        {step.title}
                      </h2>
                      <p className="mt-3 text-graphite-600 leading-relaxed">{step.description}</p>
                    </div>

                    <div className="sm:w-56 sm:shrink-0">
                      <Eyebrow>Outputs</Eyebrow>
                      <ul className="mt-4 space-y-2">
                        {step.outputs.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-2.5 text-sm text-graphite-700"
                          >
                            <span className="size-1.5 rounded-full bg-teal" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* SLA band */}
      <section className="border-y border-line bg-graphite-50 py-16 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Turnaround</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-h2 font-medium tracking-tight text-balance">
              Built for pace, gated by quality.
            </h2>
            <p className="mt-4 max-w-xl text-graphite-600">
              Typical turnaround targets below. Final timelines depend on case complexity and volume —
              confirmed at intake.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {SLAS.map((s) => (
              <div key={s.k} className="bg-paper-raised p-8">
                <div className="font-display text-h3 font-medium text-ink tabular-nums">{s.v}</div>
                <p className="mt-2 label-mono text-graphite-400 normal-case tracking-wide text-[0.72rem]">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Ready when you are"
        title="Send your first case through the pipeline."
        body="We'll confirm scope at intake and walk you through exactly what to expect at each stage."
        secondaryLabel="Browse services"
        secondaryHref="/services"
      />
    </>
  );
}
