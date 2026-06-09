import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 size-[460px] rounded-full bg-teal/10 blur-[120px]"
      />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-h1 font-medium tracking-tight text-balance">
            {title}
          </h1>
          {lede && <p className="mt-6 max-w-2xl text-lede text-graphite-600">{lede}</p>}
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
