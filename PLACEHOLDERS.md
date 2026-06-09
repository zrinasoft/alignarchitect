# Placeholders to fill before launch

Per the agreed copy rule, the site states **only verified facts** as claims (10+ years, partner
collaborations with Straumann/Zenyum/Softsmile, the four services, the three audiences). Every metric
or detail we don't actually have is a visible `{{token}}`. Replace each one below, then re-run
`grep -rohE '\{\{[a-z_]+\}\}' app components lib` to confirm none remain.

All tokens currently live in **`lib/content.ts`** (the single source of copy).

| Token | Where it shows | What to put |
|---|---|---|
| `{{contact_email}}` | Footer, Contact page, mailto links | Real business email |
| `{{contact_phone}}` | Footer, Contact page, tel links | Real business phone |
| `{{response_time}}` | Contact page ("Typical response") | e.g. "Within 1 business day" |
| `{{cases_planned}}` | Homepage stats strip | e.g. "10,000+" cases planned & reviewed |
| `{{turnaround}}` | Homepage stats strip | Typical plan turnaround, e.g. "48–72h" |
| `{{countries}}` | Homepage stats strip | Markets served, e.g. "20+" |
| `{{turnaround_planning}}` | Workflow page (SLA band) | Intake → setup time |
| `{{turnaround_qc}}` | Workflow page (SLA band) | QC pass time |
| `{{revision_policy}}` | Workflow page (SLA band) | e.g. "Unlimited within scope" |

## Other pre-launch checklist
- `app/layout.tsx` — `metadataBase` is set to `https://alignarchitect.com`; update to the real domain.
- Add real Open Graph / social share image (currently text metadata only).
- Confirm the "Collaborated with" partner mentions are cleared for public use.
- Wire the contact form: see `components/sections/ContactForm.tsx` → `submitConsultRequest()`.
