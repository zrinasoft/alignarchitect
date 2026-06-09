import { ScanLine, Factory, ShieldCheck, Boxes, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/content";

const MAP: Record<Service["icon"], LucideIcon> = {
  planning: ScanLine,
  manufacturing: Factory,
  qc: ShieldCheck,
  restorative: Boxes,
};

type ServiceGlyphProps = {
  icon: Service["icon"];
  className?: string;
};

export function ServiceGlyph({ icon, className = "" }: ServiceGlyphProps) {
  const Icon = MAP[icon];
  return <Icon className={className} strokeWidth={1.4} aria-hidden />;
}
