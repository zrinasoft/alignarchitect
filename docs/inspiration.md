# Design references & inspiration

Reference sites a client-side reviewer pointed us to (2026-11-23). His feedback on our earlier build:
it read as one long white page with no visual separation, too few photos and videos, and an
"AI-built" feel. Use these sites as the bar for **visual richness**, not as something to copy. Don't
lift their copy, claims, photos, or layout one-to-one.

| Site | What it does well |
|---|---|
| <https://sharksmile.net/> | Black full-bleed hero with a blurred X-ray/aligner photo, serif headline with an accent word, and a 4-up stat strip inside the hero. Then: "Serving" audience chips; an about split with a big photo and a floating "10+ years" badge; navy service cards; a dark stats band; navy audience cards on a tinted band; FAQ accordion; a **before/after case-study slider** with thumbnails; testimonial cards; a bright-blue CTA band; dark footer; floating WhatsApp button. |
| <https://orthoalignsolution.com/> | Rounded "inset panel" sections (deep green, large radius); a video in the About block; image-led service cards; a carousel of treatable-case photos (diastema, crowding, overbite…); Meshmixer screenshots on a gradient band; FAQ; a live competitor-comparison widget; blog cards. |

## Patterns we adopted (home redesign, 2026-11-23)

- **Dark photographic hero**: `public/images/xray-panoramic-dark.webp` (a crop of our licensed
  panoramic X-ray photo, converted to grayscale with crushed levels), a slow teal scan-line sweep,
  and a verified-facts strip inside the hero.
- **Clear section rhythm**: every section has its own background. Dark hero → white strip → teal
  tint → white → dark stats → white → dark videos → paper → tint → teal CTA → dark footer.
- **Photos on the home page**: an intro collage with a "10+ years" badge, photo-led service cards,
  and a photo in "Why us".
- **Inner pages** (`PageHero`) open on the same dark photo hero.

## Still missing vs. the references (needs client material)

- **Before/after comparison slider.** Needs real initial-vs-final setup screenshots from the
  client's planning software.
- **Testimonials** from real, named clients (with permission).
- **Partner logos** (Straumann, Zenyum, Softsmile), once they're cleared for public use.
- **FAQ.** Needs verified answers on turnaround, revisions, file formats, and pricing.
- **Team / lab photos** of the actual people and workspace.
- **Floating WhatsApp button.** Easy to add once the client confirms the WhatsApp number.
