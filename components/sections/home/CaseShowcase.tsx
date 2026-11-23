import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { CASE_SHOWCASE, CASE_VIDEOS } from "@/lib/content";

/** Planning videos on a dark "screening room" band so the footage pops. */
export function CaseShowcase() {
  return (
    <section id="cases" className="relative isolate overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-dark opacity-40 mask-radial" />
      <div
        aria-hidden
        className="absolute -right-40 top-0 -z-10 size-[560px] rounded-full bg-teal/10 blur-[140px]"
      />
      <Container>
        <SectionHeading
          onDark
          eyebrow={CASE_SHOWCASE.eyebrow}
          title={CASE_SHOWCASE.title}
          lede={CASE_SHOWCASE.lede}
        />

        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2" staggerChildren={0.09}>
          {CASE_VIDEOS.map((v, i) => (
            <RevealItem key={v.youtubeId} as="article">
              <YouTubeEmbed id={v.youtubeId} title={v.title} className="!border-white/10 shadow-lift" />
              <div className="mt-5 flex items-baseline gap-4">
                <span className="font-display text-sm font-medium text-teal-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium tracking-tight text-paper">
                  {v.title}
                </h3>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
