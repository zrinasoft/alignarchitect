import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** render the leading index/tick marker */
  marker?: boolean;
  onDark?: boolean;
};

/** The mono spec-label eyebrow — AlignArchitect's precision signature. */
export function Eyebrow({ children, className = "", marker = true, onDark = false }: EyebrowProps) {
  return (
    <span
      className={`label-mono inline-flex items-center gap-2.5 ${
        onDark ? "text-teal-300" : "text-teal-600"
      } ${className}`}
    >
      {marker && (
        <span
          aria-hidden
          className={`inline-block h-px w-6 ${onDark ? "bg-teal-300/60" : "bg-teal-600/50"}`}
        />
      )}
      {children}
    </span>
  );
}
