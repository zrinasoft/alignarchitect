# AlignArchitect

Marketing website for **AlignArchitect** — a B2B dental aligner treatment-planning company. Clients
are **dentists, dental labs, and companies wanting private-label aligners** (not patients).

## Business context
Four services: (1) aligner treatment planning, (2) white-label aligner manufacturing, (3) quality
control & review of third-party treatment plans, (4) remote crown/bridge/implant CAD/CAM design.
10+ years of experience; collaborations with Straumann, Zenyum, and Softsmile.

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind v4 — **CSS-first**, tokens in `app/globals.css` `@theme` (no `tailwind.config.js`)
- Framer Motion via the **`motion`** package (import from `motion/react`)
- `lucide-react` for utility/service icons
- Fonts via `next/font/google`: Space Grotesk (display), Inter (body), IBM Plex Mono (labels)
- Path alias `@/*` → project root

## Commands
- `pnpm dev` — dev server (Turbopack)
- `pnpm build` — static export → outputs `./out` (must pass before shipping)
- `pnpm preview` — serve the exported `./out` with a static file server
- `pnpm lint` — eslint (must be clean)

## Static export / hosting
This is a **fully static site** (`output: "export"` in `next.config.ts`) — no API routes,
server actions, or middleware. `pnpm build` emits `./out` as plain HTML/CSS/JS, hostable on any
static host (nginx, GitHub Pages, Netlify, S3, Cloudflare Pages). `trailingSlash: true` produces
`/<route>/index.html` paths for maximum portability; `images.unoptimized` is on (no `next/image` in use).
Note: `next start` does **not** work with static export — use `pnpm preview` (or any static server) instead.

### Dev-server note
If `pnpm dev` logs a 500 for `/custom-sw.js` and "Could not find the module … global-error.js in the
React Client Manifest", that's a **stale service worker registered in the browser** by a different app
previously served on `localhost:3000` — it is not from this project (we register no service worker).
Fix: DevTools → Application → Service Workers → **Unregister** (and Clear storage), then hard-reload.
If it persists, also clear the dev cache: `rm -rf .next`.

## Project structure
```
app/                  layout + 5 routes (/, /services, /workflow, /about, /contact)
components/ui/        primitives (Button, Container, Eyebrow, SectionHeading, Reveal, Stat)
components/graphics/  Wordmark, HeroArchForm, ServiceGlyph
components/layout/    Header, Footer
components/sections/  PageHero, CTASection, ContactForm, sections/home/*
lib/content.ts        ALL site copy (single source of truth)
lib/motion.ts         shared Framer Motion variants
```

## Conventions
- **Server Components by default.** Add `"use client"` only for motion/state: `Header`,
  `ContactForm`, `Hero`, `Reveal`, `Stat`, `HeroArchForm`.
- **Copy lives in `lib/content.ts`** — don't hardcode marketing strings in JSX.
- **Copy rule:** state only verified facts. Any unknown metric is a visible `{{token}}` tracked in
  `PLACEHOLDERS.md`. Do not invent stats, turnaround times, or claims.
- **Motion:** reuse variants from `lib/motion.ts` and the `Reveal` primitives; every animation must
  have a reduced-motion fallback (`useReducedMotion()` / the global CSS guard).
- **Design tokens:** use theme utilities (`text-ink`, `bg-teal`, `text-h2`, `.label-mono`). See
  `DESIGN.md` for the full system. Keep teal as a sparing accent.
- Accessibility: semantic HTML, labelled inputs, visible focus states, `aria-*` on interactive SVG.

## Not-yet-wired
- Contact form is **UI only** — `components/sections/ContactForm.tsx` → `submitConsultRequest()` is a
  stub. Wire EmailJS or a Server Action there (keep the `(data) => Promise<void>` signature).
