import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WorkflowTimeline } from "@/components/sections/WorkflowTimeline";
import { METRICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Digital Workflow",
  description:
    "How AlignArchitect works: a disciplined intake → planning → quality control → delivery pipeline that keeps every aligner and restorative case predictable.",
};

const SLAS = [
  { k: "Intake to setup", v: METRICS.slaIntakeToSetup },
  { k: "QC pass", v: METRICS.slaQcPass },
  { k: "Revision rounds", v: METRICS.revisionPolicy },
];

export default function WorkflowPage() {
  return (
    <>
      <PageHero
        eyebrow="The digital workflow"
        title="One disciplined pipeline, every single case."
        lede="Quality shouldn't depend on who picked up your case. Every project moves through the same four stages, with an independent QC gate before anything reaches you."
        image={{
          src: "/images/dental-technician-designing-3d-crown.jpg",
          alt: "Dental technician designing a 3D dental model on a monitor",
          label: "WORKFLOW / DIGITAL SETUP",
        }}
      />

      {/* timeline */}
      <section className="py-20 sm:py-28">
        <Container>
          <WorkflowTimeline />
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
