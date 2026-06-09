import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  onDark = false,
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignCls} ${className}`}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-display text-h2 font-medium tracking-tight ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lede ${
            onDark ? "text-graphite-300" : "text-graphite-600"
          } ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
