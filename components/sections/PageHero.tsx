import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type HeroImage = { src: string; alt: string; label?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** rendered under the lede — style it for a dark background */
  children?: ReactNode;
  /** photo shown full-bleed on the right, fading into the dark canvas */
  image?: HeroImage;
  /** decorative background texture across the whole hero */
  bgImage?: string;
};

/** Dark inner-page hero with a photographic backdrop, matching the home hero. */
export function PageHero({ eyebrow, title, lede, children, image, bgImage }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-16 text-paper">
      {image && (
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover opacity-50 lg:opacity-80"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10"
          />
        </div>
      )}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-1/4 -z-10 size-[460px] rounded-full bg-teal/15 blur-[130px]"
      />

      <Container>
        <Reveal className="max-w-2xl py-24 sm:py-32">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-h1 font-medium tracking-tight text-balance">{title}</h1>
          {lede && <p className="mt-6 max-w-xl text-lede text-graphite-300">{lede}</p>}
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
