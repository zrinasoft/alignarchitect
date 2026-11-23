import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DIFFERENTIATORS } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Why AlignArchitect"
              title="Precision is a process, not a promise."
              lede="We pair clinical judgment with engineering discipline. The result is work you can stand behind — and clients can trust."
            />
            <Reveal small className="relative mt-10 min-h-[320px] flex-1 overflow-hidden rounded-2xl bg-black shadow-lift">
              <Image
                src="/images/dental-prosthetic-bridge-and-3d-model.webp"
                alt="3D-printed dental arch model above a ceramic prosthetic set"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-teal text-white">
                      <Check className="size-5" strokeWidth={2.4} />
                    </span>
                    <span className="font-display text-sm font-medium text-graphite-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium tracking-tight text-ink">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite-600">{d.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
