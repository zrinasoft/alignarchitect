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
| `SITE.responseTime` | Contact ("Typical response") | `Within 1 business day` | Real typical response time |
| `METRICS.casesPlanned` | Home stats | `Thousands` _(client-stated, not a placeholder)_ | Optional: a precise figure if you have one |
| `METRICS.planTurnaround` | Home stats | `48–72h` | Real typical plan turnaround |
| `METRICS.marketsServed` | Home stats | `20+` | Real number of markets served |
| `METRICS.slaIntakeToSetup` | Workflow SLA band | `48–72h` | Real intake → setup time |
| `METRICS.slaQcPass` | Workflow SLA band | `Within 24h` | Real QC turnaround |
| `METRICS.revisionPolicy` | Workflow SLA band | `Unlimited in scope` | Real revision policy |

> Tip: every provisional value is tagged with a `// PROVISIONAL` comment in `lib/content.ts`.
> Run `grep -rn "PROVISIONAL" lib` to find them all.

## Resolved from client content (2026-06-23)
- `SITE.location` is now set to **Lahore, Punjab, Pakistan** (from the client profile) and shows on
  Contact + Footer — this is real data, not a placeholder.
- `METRICS.casesPlanned` softened from the invented `12,000+` to the client-stated `Thousands`.
- Still outstanding placeholders: `SITE.responseTime`,
  `METRICS.planTurnaround`, `METRICS.marketsServed`, and the workflow SLAs (see table above).

## Resolved from client content (2026-11-17)
- `SITE.email` → `abdulmannan8947@gmail.com` and `SITE.phone` → `+92 300 9472143` (client-provided).
  Shown in the Footer (every page) and on Contact; `SITE.phoneHref` holds the tel: form.

## Other pre-launch checklist
- `app/layout.tsx` — `metadataBase` is `https://alignarchitect.com`; update to the real domain.
- Add a real Open Graph / social share image (currently text metadata only).
- **Brand name:** the client logo + both promo banners read **"AlignArchitects"** (plural), but the
  site copy, metadata, and the `alignarchitect.com` domain use **"AlignArchitect"** (singular) — decide
  which is canonical and reconcile (the domain is the one piece outside the codebase).
- Replace the **reconstructed** nav lockup `public/images/logo-horizontal.png` with an official
  horizontal/transparent logo if the client has one; compress the promo banners to WebP and consider a
  native, responsive rebuild of the "scan to smile" banner for small screens (see `ASSETS.md`).
- Confirm the "Collaborated with" partner mentions (Straumann/Zenyum/Softsmile) are cleared for public use.
- Wire the contact form: `components/sections/ContactForm.tsx` → `submitConsultRequest()` (EmailJS
  recommended for a static host).
