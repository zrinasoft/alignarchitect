import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { INTRO, SITE } from "@/lib/content";

/** Photo collage + about copy, on a tinted band to separate it from the services grid. */
export function IntroSplit() {
  return (
    <section className="bg-teal-50/60 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* collage */}
          <Reveal small className="relative pb-10 pr-6 sm:pb-14 sm:pr-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lift sm:aspect-[5/6]">
              <Image
                src={INTRO.image}
                alt={INTRO.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[70%_50%]"
              />
            </div>
            <div className="absolute bottom-0 right-0 aspect-square w-[42%] overflow-hidden rounded-2xl border-[6px] border-teal-50 shadow-lift">
              <Image
                src={INTRO.insetImage}
                alt={INTRO.insetAlt}
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-5 top-5 rounded-xl bg-teal px-5 py-4 text-white shadow-glow">
              <div className="font-display text-h2 font-medium leading-none">{SITE.yearsExperience}</div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/85">
                Years experience
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal>
            <Eyebrow>{INTRO.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-h2 font-medium tracking-tight text-ink text-balance">
              {INTRO.title}
            </h2>
            <span aria-hidden className="mt-6 block h-1 w-14 rounded-full bg-teal" />
            <div className="mt-6 space-y-4 text-graphite-600">
              {INTRO.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3.5">
              {INTRO.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-graphite-800">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/about" variant="primary" withArrow>
                More about us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
