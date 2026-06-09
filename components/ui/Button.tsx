import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper px-6 py-3 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "bg-teal text-white px-6 py-3 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-glow",
  ghost:
    "border border-line-strong bg-transparent text-ink px-6 py-3 hover:border-ink hover:-translate-y-0.5",
  onDark:
    "bg-paper text-ink px-6 py-3 hover:bg-teal hover:text-white hover:-translate-y-0.5 hover:shadow-glow",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  onClick,
}: ButtonProps) {
  const external = href.startsWith("http");
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}
