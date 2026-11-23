import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceGlyph } from "@/components/graphics/ServiceGlyph";
import { SERVICES } from "@/lib/content";

/** Four tall photo cards — each service led by its own image. */
export function ServicesOverview() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we design"
            title="From scan to smile, across four services."
            lede="Send us your scans and we return accurate, clinically-driven design across aligners, implants, crowns, and dentures."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink hover:text-teal-600"
          >
            All service details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerChildren={0.09}>
          {SERVICES.map((s) => (
            <RevealItem key={s.id}>
              <Link
                href={`/services#${s.id}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-ink shadow-soft transition-shadow duration-300 hover:shadow-lift lg:aspect-[3/4.4]"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/0 transition-opacity duration-300"
                />
                <span className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-xl bg-white/90 text-teal-700 backdrop-blur-sm transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <ServiceGlyph icon={s.icon} className="size-5" />
                </span>
                <span className="absolute right-5 top-6 font-display text-sm font-medium text-white/70">
                  {s.index}
                </span>

                <div className="relative p-6">
                  <h3 className="font-display text-h3 font-medium tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-200">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
