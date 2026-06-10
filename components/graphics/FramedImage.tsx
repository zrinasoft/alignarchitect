import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  /** mono spec-label tab, e.g. "FIG.01 / ALIGNER" */
  label?: string;
  priority?: boolean;
  /** aspect ratio utility, defaults to 4/3 */
  aspectClassName?: string;
  className?: string;
  sizes?: string;
};

/**
 * A photo wrapped in AlignArchitect's precision-instrument framing — rounded
 * panel, hairline border, corner registration ticks, and an optional mono
 * caption tab. Ties real photography to the brand's draughting aesthetic.
 */
export function FramedImage({
  src,
  alt,
  label,
  priority = false,
  aspectClassName = "aspect-[4/3]",
  className = "",
  sizes = "(min-width: 1024px) 45vw, 100vw",
}: FramedImageProps) {
  return (
    <figure
      className={`group relative ${aspectClassName} overflow-hidden rounded-2xl border border-line bg-graphite-100 shadow-lift ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />

      {/* subtle ink wash for legibility + depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
      />

      {/* corner registration ticks */}
      <span aria-hidden className="pointer-events-none absolute inset-0">
        {(
          [
            "left-3 top-3 border-l-2 border-t-2",
            "right-3 top-3 border-r-2 border-t-2",
            "left-3 bottom-3 border-l-2 border-b-2",
            "right-3 bottom-3 border-r-2 border-b-2",
          ] as const
        ).map((pos) => (
          <span key={pos} className={`absolute size-4 border-teal/80 ${pos}`} />
        ))}
      </span>

      {/* mono caption tab */}
      {label && (
        <figcaption className="absolute bottom-4 left-4 rounded-md bg-ink/85 px-3 py-1.5 text-paper backdrop-blur-sm">
          <span className="label-mono text-[0.65rem] text-teal-300">{label}</span>
        </figcaption>
      )}
    </figure>
  );
}
