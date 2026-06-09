import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/content";

const FACTS = [
  { k: `${SITE.yearsExperience} yrs`, v: "Treatment planning" },
  { k: "4", v: "Specialised services" },
  { k: "B2B", v: "Built for professionals" },
  { k: "QC", v: "On every case" },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-graphite-50">
      <Container className="grid grid-cols-2 divide-x divide-line sm:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.v} className="flex flex-col gap-1 px-2 py-7 text-center sm:px-6">
            <span className="font-display text-h3 font-medium tracking-tight text-ink">{f.k}</span>
            <span className="label-mono text-graphite-400 normal-case tracking-normal text-[0.72rem]">
              {f.v}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
