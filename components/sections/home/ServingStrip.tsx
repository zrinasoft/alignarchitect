import { Container } from "@/components/ui/Container";
import { SERVING, SITE } from "@/lib/content";

/** Light band under the hero: who we serve + named collaborations. */
export function ServingStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="flex flex-col items-center justify-between gap-5 py-6 lg:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="mr-2 text-xs font-medium uppercase tracking-[0.16em] text-graphite-400">
            Serving
          </span>
          {SERVING.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-graphite-700"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-teal" />
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-graphite-400">
            Collaborated with
          </span>
          {SITE.partners.map((p) => (
            <span key={p} className="font-display text-lg font-semibold tracking-tight text-graphite-700">
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
