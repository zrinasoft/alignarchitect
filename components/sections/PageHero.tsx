import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FramedImage } from "@/components/graphics/FramedImage";

type HeroImage = { src: string; alt: string; label?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  /** framed photo shown beside the copy (two-column layout) */
  image?: HeroImage;
  /** faint decorative background image behind the copy (single column) */
  bgImage?: string;
};

export function PageHero({ eyebrow, title, lede, children, image, bgImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      {/* atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 size-[460px] rounded-full bg-teal/10 blur-[120px]"
      />
      {bgImage && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.14] mask-radial"
          />
        </div>
      )}

      <Container className="relative">
        <div
          className={
            image
              ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
              : ""
          }
        >
          <Reveal className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-h1 font-medium tracking-tight text-balance">
              {title}
            </h1>
            {lede && <p className="mt-6 max-w-2xl text-lede text-graphite-600">{lede}</p>}
            {children && <div className="mt-9">{children}</div>}
          </Reveal>

          {image && (
            <Reveal small className="lg:pl-4">
              <FramedImage
                src={image.src}
                alt={image.alt}
                label={image.label}
                priority
                aspectClassName="aspect-[5/4]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
