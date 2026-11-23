import Image from "next/image";
import { Container } from "@/components/ui/Container";
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

/** Closing call-to-action: a saturated teal band so it reads as the page's finale. */
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-ink text-white">
      <Image
        src="/images/abstract-cyan-geometric-lines-background.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.12] mix-blend-screen"
      />
      <span
        aria-hidden
        className="absolute -left-24 -top-24 -z-10 size-80 rounded-full border border-white/15"
      />
      <span
        aria-hidden
        className="absolute -bottom-32 -right-20 -z-10 size-[26rem] rounded-full border border-white/10"
      />
      <Container className="py-24 sm:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-teal-100">{eyebrow}</span>
          <h2 className="mt-5 font-display text-h1 font-medium tracking-tight text-balance">{title}</h2>
          {body && <p className="mt-6 max-w-xl text-lede text-teal-50/90">{body}</p>}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="onDark" withArrow>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="ghost"
                className="border-white/40 !text-white hover:!border-white"
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
