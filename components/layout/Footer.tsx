import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/graphics/Wordmark";
import { SERVICES, NAV, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 mask-radial" />
      <Container className="relative py-16 sm:py-20">
        {/* link columns */}
        <div className="grid grid-cols-2 gap-10 pb-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Wordmark onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-400">
              Clinical-grade aligner treatment planning, white-label manufacturing, plan QC, and remote
              restorative CAD/CAM for dental professionals.
            </p>
          </div>

          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <FooterLink key={s.id} href={`/services#${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {NAV.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink>
            <FooterLink href={`tel:${SITE.phone}`}>{SITE.phone}</FooterLink>
          </FooterCol>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-3 border-t border-ink-700 pt-8 text-xs text-graphite-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.name}. {SITE.yearsExperience} years in digital dentistry.
          </p>
          <p className="label-mono text-graphite-600">
            B2B · Not patient-facing · Built for dental professionals
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="label-mono mb-5 text-graphite-500">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-graphite-300 transition-colors hover:text-teal-300"
      >
        {children}
      </Link>
    </li>
  );
}
