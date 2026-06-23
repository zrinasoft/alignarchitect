import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  /**
   * "horizontal" = symbol + wordmark side-by-side (the nav lockup);
   * "full" = the stacked symbol-over-wordmark lockup (footer);
   * "mark" = symbol only.
   */
  variant?: "horizontal" | "full" | "mark";
  /** sizing utilities applied to the image, e.g. "h-9" */
  className?: string;
  priority?: boolean;
};

const SRC = {
  horizontal: { src: "/images/logo-horizontal.png", width: 1212, height: 240 },
  full: { src: "/images/logo-trim.png", width: 830, height: 582 },
  mark: { src: "/images/logo-mark.png", width: 361, height: 338 },
} as const;

/**
 * The AlignArchitects brand logo (client-provided), linking home. Three crops of
 * the same source logo: `horizontal` (symbol + wordmark, for the nav bar where
 * width is available but height is tight), `full` (stacked lockup, for the footer
 * where there's vertical room), and `mark` (symbol only).
 */
export function BrandLogo({ variant = "horizontal", className = "", priority = false }: BrandLogoProps) {
  const { src, width, height } = SRC[variant];
  return (
    <Link href="/" aria-label="AlignArchitects — home" className="inline-flex items-center">
      <Image
        src={src}
        alt="AlignArchitects"
        width={width}
        height={height}
        priority={priority}
        className={`w-auto select-none ${className}`}
        draggable={false}
      />
    </Link>
  );
}
