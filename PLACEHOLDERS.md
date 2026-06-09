# Provisional data — replace before launch

The site currently displays **provisional placeholder values** so it reads as complete. **None of
the figures below are verified.** Replace each with real data before going live.

All values live in **`lib/content.ts`** — edit them in one place:
- contact details → the `SITE` object
- metrics & SLAs → the `METRICS` object

After updating, the values flow automatically into the homepage stats (`STATS`), the workflow SLA
band (`app/workflow/page.tsx`), the footer, and the contact page.

## Trace of provisional values

| Key (`lib/content.ts`) | Shows on | Provisional value now in place | Replace with |
|---|---|---|---|
| `SITE.email` | Footer, Contact, mailto links | `hello@alignarchitect.com` | Real business email |
| `SITE.phone` | Footer, Contact, tel links | `+1 (555) 018-2204` | Real business phone (555 = fictional range) |
| `SITE.responseTime` | Contact ("Typical response") | `Within 1 business day` | Real typical response time |
| `METRICS.casesPlanned` | Home stats | `12,000+` | Real cases planned & reviewed |
| `METRICS.planTurnaround` | Home stats | `48–72h` | Real typical plan turnaround |
| `METRICS.marketsServed` | Home stats | `20+` | Real number of markets served |
| `METRICS.slaIntakeToSetup` | Workflow SLA band | `48–72h` | Real intake → setup time |
| `METRICS.slaQcPass` | Workflow SLA band | `Within 24h` | Real QC turnaround |
| `METRICS.revisionPolicy` | Workflow SLA band | `Unlimited in scope` | Real revision policy |

> Tip: every provisional value is tagged with a `// PROVISIONAL` comment in `lib/content.ts`.
> Run `grep -rn "PROVISIONAL" lib` to find them all.

## Other pre-launch checklist
- `app/layout.tsx` — `metadataBase` is `https://alignarchitect.com`; update to the real domain.
- Add a real Open Graph / social share image (currently text metadata only).
- Confirm the "Collaborated with" partner mentions (Straumann/Zenyum/Softsmile) are cleared for public use.
- Wire the contact form: `components/sections/ContactForm.tsx` → `submitConsultRequest()` (EmailJS
  recommended for a static host).
