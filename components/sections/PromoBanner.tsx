import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PromoBannerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
};

/**
 * A full-width promotional banner (client-provided artwork) presented inside the
 * site's precision-frame language — hairline border, rounded panel, soft lift —
 * and linked to a call-to-action. The image scales to the container width and
 * keeps its natural aspect ratio.
 */
export function PromoBanner({ src, alt, width, height, href = "/contact" }: PromoBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <Link
            href={href}
            className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lift"
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 1280px) 1136px, 100vw"
              className="h-auto w-full"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
