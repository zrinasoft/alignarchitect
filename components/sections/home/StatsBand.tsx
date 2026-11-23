import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { STATS } from "@/lib/content";

/** Full-width dark band with the headline numbers over a metal-mesh texture. */
export function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hexagonal-metal-mesh-pattern-closeup.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.12]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(15,181,186,0.14),transparent_65%)]"
      />
      <Container>
        <Reveal className="grid grid-cols-2 gap-y-12 py-20 text-center sm:py-24 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              onDark
              className={`flex flex-col items-center px-4 [&>p]:mx-auto ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              } ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""}`}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
