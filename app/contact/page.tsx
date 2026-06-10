import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consult with AlignArchitect. Tell us about your practice, lab, or aligner brand and the treatment planning, QC, manufacturing, or restorative work you need.",
};

const INCLUDE = [
  "The type of case or service you need",
  "Approximate volume or frequency",
  "The software / systems you work in",
  "Any deadlines we should know about",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consult."
        lede="Tell us what you're working on. We'll come back with a clear, tailored way forward — whether that's a single case or an ongoing partnership."
        bgImage="/images/abstract-teal-fractal-burst-background.jpg"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* details */}
            <Reveal>
              <Eyebrow>Direct contact</Eyebrow>
              <div className="mt-6 space-y-4">
                <ContactRow icon={<Mail className="size-5" />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                <ContactRow icon={<Phone className="size-5" />} label="Phone" value={SITE.phone} href={`tel:${SITE.phone}`} />
                <ContactRow
                  icon={<Clock className="size-5" />}
                  label="Typical response"
                  value={SITE.responseTime}
                />
              </div>

              <div className="mt-10 rounded-xl border border-line bg-graphite-50 p-7">
                <Eyebrow>Helpful to include</Eyebrow>
                <ul className="mt-5 space-y-3">
                  {INCLUDE.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-graphite-700">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-sm text-graphite-500">
                AlignArchitect is a B2B partner for dental professionals — we don&apos;t provide
                patient-facing care.
              </p>
            </Reveal>

            {/* form */}
            <Reveal small>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-paper-raised text-teal-600">
        {icon}
      </span>
      <span>
        <span className="block label-mono text-graphite-400 normal-case tracking-wide text-[0.7rem]">
          {label}
        </span>
        <span className="block font-display text-base font-medium text-ink">{value}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className="group flex items-center gap-4 transition-colors hover:text-teal-700">
        {inner}
      </a>
    );
  }
  return <div className="flex items-center gap-4">{inner}</div>;
}
