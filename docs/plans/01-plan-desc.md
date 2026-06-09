# Task: AlignArchitect B2B Marketing Website
Date: 2026-06-09
Status: done

## Goal
Build a complete, modern, code-first B2B marketing site for **AlignArchitect** — a dental aligner
treatment-planning company selling to dentists, dental labs, and aligner brands (not patients).
Aesthetic: "precision engineering meets premium healthcare" — eye-catching but not flashy,
typography-forward, light/purposeful animation.

## Stack
Next.js 16 (App Router) · React 19 · Tailwind v4 (CSS-first `@theme`) · TypeScript · `motion`
(Framer Motion, `motion/react`) · `lucide-react`. Fonts via `next/font/google`.

## Locked Decisions
- **Assets:** none — all visuals built in code (SVG/CSS). Partner names (Straumann/Zenyum/Softsmile)
  are **text mentions**, not logos. Custom text wordmark + small geometric mark.
- **Theme:** light base with strategic **dark spotlight sections** (workflow teaser, final CTA).
  No system dark-mode toggle (remove scaffold's `prefers-color-scheme` block).
- **Palette:** ink `#0B1220` · paper `#F7F9FB` · accent teal-cyan `#0FB5BA`, on cool graphite neutrals.
- **Type:** Space Grotesk (headlines) · Inter (body) · IBM Plex Mono (uppercase eyebrows / spec labels).
- **Pages:** Home, Services, Workflow, About, Contact (5).
- **Contact:** client-validated **form UI only**; submit isolated to one stub function with
  `// TODO: wire submission (EmailJS / Server Action)`. No network calls now.
- **Animation:** purposeful — scroll reveals (staggered fade+rise), hover lifts, ONE animated hero
  graphic, stat count-ups. No parallax / page transitions. Full `prefers-reduced-motion` fallbacks.
- **Copy:** strict facts only (10+ yrs, named partners, 4 services, 3 audiences). Qualitative proof.
  Visible `{{token}}` placeholders for unknown metrics, inventoried in `PLACEHOLDERS.md`.
- **Icons:** `lucide-react` for utility/service icons; signature graphics hand-built as SVG.
- **Cadence:** build layout + all 5 pages in one pass (auto mode).

## Approach
1. **Setup** — install `motion`, `lucide-react`; rewrite `globals.css` with Tailwind v4 `@theme`
   tokens (colors, type scale, spacing, radii, shadows, motion); wire 3 fonts + metadata in `layout.tsx`.
2. **Design system** → `DESIGN.md` + tokens (ink/paper/teal/graphite scale, fluid `clamp()` display
   scale, 8pt spacing, motion durations/easing/stagger).
3. **Shared infra** — `lib/motion.ts` (variants + reduced-motion guard), `lib/content.ts` (typed copy),
   `components/ui/*` (Container, Button, SectionHeading, Reveal, Stat, Card, Badge),
   `components/graphics/*` (Wordmark, HeroArchForm, GridBackdrop, WorkflowDiagram, ServiceGlyphs),
   `components/layout/*` (Header sticky+blur+mobile menu, Footer).
4. **Homepage** `app/page.tsx` — Hero (animated arch-form) → TrustBar → ServicesOverview (4 cards) →
   WorkflowTeaser (dark) → WhyUs (count-ups) → AudienceSplit (dentists/labs/brands) → FinalCTA (dark).
5. **Pages** — `/services` (deep per-service w/ anchors), `/workflow` (full step diagram),
   `/about` (history, partners, philosophy), `/contact` (form UI + details).
6. **Docs** — `CLAUDE.md`, `DESIGN.md`, `PLACEHOLDERS.md`.

## Files to Change / Create
- `app/layout.tsx`, `app/globals.css`, `app/page.tsx` (modify/rewrite)
- `app/{services,workflow,about,contact}/page.tsx` (new)
- `components/{ui,layout,graphics,sections}/**` (new)
- `lib/{motion,content}.ts` (new)
- `CLAUDE.md`, `DESIGN.md`, `PLACEHOLDERS.md` (new)
- `package.json` — add `motion`, `lucide-react`

## Conventions
- Server Components by default; `"use client"` only for motion/state (Reveal, Header menu, count-ups, form).
- Copy lives in `lib/content.ts`. Reduced-motion fallback on every animation. Semantic HTML, focus
  states, aria/alt. Mobile-first.

## Risks
- Tailwind v4 tokens live in `globals.css` (no `tailwind.config.js`).
- Over-animation vs "not flashy" — lean on whitespace + type.
- Avoid invented claims — strict-facts + `{{tokens}}` + `PLACEHOLDERS.md`.

## Verification
- `pnpm install` → `pnpm dev`; visit all 5 routes; check responsive + dark sections.
- Verify reveals/hover/hero/count-ups fire; OS reduced-motion → static fallback.
- `pnpm build` clean (types + lint). Form: validation + stub success. `grep '{{'` matches `PLACEHOLDERS.md`.

## Deviations
| Original Plan | What Happened | Why |
|---|---|---|
| Global Footer carries the closing CTA | Footer is pure nav/links; a reusable `CTASection` is placed per page | Footer CTA + a homepage FinalCTA would stack two CTAs back-to-back; per-page CTA is cleaner and tailored |
| Separate `WorkflowDiagram` graphic component | Workflow visuals built inline (homepage step grid + workflow-page timeline) | Simpler, avoided an abstraction used in only two shapes |
| `Card`/`Badge` UI primitives | Cards/badges composed inline with shared utility classes | They varied per section; a rigid primitive added no reuse |
