import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow = "Get started",
  title,
  body,
  primaryLabel = "Request a consult",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 mask-radial" />
      {/* teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 size-[460px] -translate-y-1/2 rounded-full bg-teal/20 blur-[120px]"
      />
      <Container className="relative py-24 sm:py-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-h1 font-medium tracking-tight text-balance">
            {title}
          </h2>
          {body && <p className="mt-6 max-w-xl text-lede text-graphite-300">{body}</p>}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="onDark" withArrow>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="ghost"
                className="border-ink-700 !text-paper hover:!border-paper"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
