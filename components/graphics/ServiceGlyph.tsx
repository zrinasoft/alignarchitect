import { ScanLine, Bolt, Crown, Smile, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/content";

const MAP: Record<Service["icon"], LucideIcon> = {
  aligner: ScanLine,
  implant: Bolt,
  crown: Crown,
  denture: Smile,
};

type ServiceGlyphProps = {
  icon: Service["icon"];
  className?: string;
};

export function ServiceGlyph({ icon, className = "" }: ServiceGlyphProps) {
  const Icon = MAP[icon];
  return <Icon className={className} strokeWidth={1.4} aria-hidden />;
}
