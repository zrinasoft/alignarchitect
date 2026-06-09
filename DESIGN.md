# AlignArchitect — Design System

**Concept:** precision engineering meets premium healthcare. Light, typography-forward, generous
whitespace, hairline grids, with strategic **dark spotlight sections** for rhythm. Eye-catching but
never flashy. Not a patient-facing clinic site — this is B2B for dental professionals.

All tokens are defined CSS-first in **`app/globals.css`** via Tailwind v4's `@theme` block (there is
no `tailwind.config.js`). Use the generated utilities (`text-ink`, `bg-teal`, `text-h2`, etc.).

---

## Color

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B1220` | Primary text, dark section canvas |
| `ink-800` | `#111A2B` | Raised dark surfaces |
| `ink-700` | `#1B2740` | Dark borders / hairlines |
| `paper` | `#F7F9FB` | Default light canvas |
| `paper-raised` | `#FFFFFF` | Cards on paper |
| `graphite-50…900` | cool gray scale | Text tints, surfaces, borders |
| `teal` | `#0FB5BA` | **Signature accent** — CTAs, marks, highlights |
| `teal-600 / 700` | `#0C9499 / #0A767A` | Hover / pressed accent |
| `teal-50` | `#E6F7F7` | Accent tint backgrounds |
| `line` / `line-strong` | `#E2E8F0 / #CDD6E2` | Hairlines & input borders |

Accent discipline: teal is a **spark**, not a wash. Most surfaces are paper/graphite; teal appears on
CTAs, the wordmark, eyebrows, and one or two focal points per section.

## Typography

- **Display** — Space Grotesk (`font-display`): all headlines, stats, wordmark.
- **Body** — Inter (`font-sans`): paragraphs, UI text.
- **Mono** — IBM Plex Mono (`font-mono`): the `.label-mono` eyebrow/spec labels — the precision
  signature. Uppercase, `0.22em` tracking.

Fluid scale (clamp-based): `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lede`. Headlines use
tight negative letter-spacing and near-1.0 leading.

## Spacing & layout

- Container: `max-w-[1200px]`, responsive padding `px-6 / sm:px-8 / lg:px-12` (see `ui/Container`).
- Section vertical rhythm: `py-24 sm:py-32` (standard), `py-20 sm:py-28` (denser pages).
- 8pt-based spacing via Tailwind's scale.

## Radii & shadows

- Radii: `rounded-lg` (cards/inputs), `rounded-xl` (panels), `rounded-full` (buttons/pills).
- Shadows: `--shadow-soft` (resting cards), `--shadow-lift` (hover), `--shadow-glow` (teal focus).

## Motion (Framer Motion via `motion/react`)

- Variants live in `lib/motion.ts`: `fadeRise`, `fadeRiseSm`, `stagger()`, shared `EASE`
  (`cubic-bezier(0.22,1,0.36,1)`).
- Reveal primitives in `components/ui/Reveal.tsx`: `<Reveal>`, `<RevealGroup>` + `<RevealItem>`.
- Scope: scroll reveals (staggered fade+rise), hover lifts, ONE animated hero graphic
  (`graphics/HeroArchForm`), stat count-ups (`ui/Stat`). No parallax, no page transitions.
- **Reduced motion:** globally short-circuited in CSS, and components check `useReducedMotion()` to
  render static fallbacks.

## Atmosphere utilities (in `globals.css`)

- `.bg-grid` / `.bg-grid-dark` — hairline precision grid.
- `.mask-radial` — radial fade for grids/glows.
- `.label-mono` — the mono spec label.
- `.animate-grid-drift`, `.animate-marquee` — ambient motion.
- `.grain` — subtle noise overlay.

## Component map

- `ui/` — Container, Button, Eyebrow, SectionHeading, Reveal, Stat.
- `graphics/` — Wordmark, HeroArchForm, ServiceGlyph.
- `layout/` — Header (sticky, blur-on-scroll, mobile menu), Footer.
- `sections/` — PageHero, CTASection, ContactForm, `sections/home/*`.
