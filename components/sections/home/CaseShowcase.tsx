import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { CASE_SHOWCASE, CASE_VIDEOS } from "@/lib/content";

export function CaseShowcase() {
  return (
    <section id="cases" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={CASE_SHOWCASE.eyebrow}
          title={CASE_SHOWCASE.title}
          lede={CASE_SHOWCASE.lede}
        />

        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2" staggerChildren={0.09}>
          {CASE_VIDEOS.map((v, i) => (
            <RevealItem key={v.youtubeId} as="article">
              <YouTubeEmbed id={v.youtubeId} title={v.title} />
              <div className="mt-5 flex items-baseline gap-4">
                <span className="label-mono text-graphite-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium tracking-tight text-ink">
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
