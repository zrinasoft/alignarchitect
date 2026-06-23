# AlignArchitect - Image Assets

## Usage Guidelines for Claude

- Always use these images in the sections suggested in each asset's description
- Prefer real photos over abstract textures wherever possible
- Abstract backgrounds (teal fractal, cyan geometric, hex mesh) are for section
  backgrounds/overlays only -- never as standalone content images
- All images are in `/public/images/` and are free to use (licensed)
- Use `object-fit: cover` for all images, never stretch

## Recommended Section Mapping

| Image                                       | Recommended Section                         |
| ------------------------------------------- | ------------------------------------------- |
| `gloved-hands-holding-clear-dental-aligner` | Hero or Services > Aligner Planning card    |
| `dental-technician-designing-3d-crown`      | Services > CAD/CAM card or Workflow section |
| `dental-prosthetic-bridge-and-3d-model`     | Services > Crown/Bridge/Implant card        |
| `dentist-analyzing-panoramic-child-xray`    | Services > QC & Review card                 |
| `abstract-teal-fractal-burst-background`    | Hero background overlay                     |
| `abstract-cyan-geometric-lines-background`  | Dark feature section background             |
| `hexagonal-metal-mesh-pattern-closeup`      | Texture overlay on dark sections            |

## Current usage (wired up)

| Image                                           | Used in                                           |
| ----------------------------------------------- | ------------------------------------------------- |
| `gloved-hands-holding-clear-dental-aligner`     | Services → Aligner Design block                   |
| `dental-prosthetic-bridge-and-3d-model`         | Services → Denture Design block · About hero      |
| `dentist-analyzing-panoramic-child-dental-xray` | Services → Implant Design block                   |
| `dental-technician-designing-3d-crown`          | Services → Crown & Bridge Design block · Workflow hero |
| `endodontic-file-dental-handpiece-closeup`      | Services hero (precision)                         |
| `abstract-teal-fractal-burst-background`        | Contact hero (bg overlay)                         |
| `abstract-cyan-geometric-lines-background`      | Closing CTA section (dark bg texture)             |
| `hexagonal-metal-mesh-pattern-closeup`          | **Not used yet** — 3.4 MB, compress to WebP first |
| `logo` (client source, white bg)                | Brand logo — processed into the transparent crops below |
| `logo-mark` (derived, transparent)              | Symbol crop — composited into the horizontal lockup |
| `logo-horizontal` (derived, transparent)        | **Header** — symbol + "AlignArchitects" lockup (fits the nav bar) |
| `logo-trim` (derived, transparent)              | **Footer** — full stacked lockup on a white chip (reads on dark) |
| `clear-aligner-dental-hero-banner`              | **Home** → promo banner band before the CTA (links to contact) |
| `alignarchitects-scan-to-smile-hero`            | **Services** → promo banner band before the CTA (links to contact) |

> Photos render via `next/image` (config has `images.unoptimized` for static export, so files
> are served at original size). Before launch, compress/convert to WebP to cut page weight —
> `dental-technician-designing-3d-crown` (1.2 MB) and `hexagonal-metal-mesh` (3.4 MB) especially.

> **Logo:** `logo.png` is the client's master logo (stacked lockup on a white background). It was
> flood-filled to transparency with GraphicsMagick, then split/recomposited into `logo-mark.png`
> (symbol), `logo-horizontal.png` (symbol + wordmark side-by-side, used in the nav), and
> `logo-trim.png` (full stacked lockup, used in the footer). The old SVG `Wordmark` component was
> removed and replaced by `graphics/BrandLogo.tsx`.
> ⚠️ The logo and both banners spell the brand **"AlignArchitects"** (plural) while the rest of the
> site copy uses **"AlignArchitect"** (singular) — reconcile before launch.
> **Banners** (`clear-aligner-dental-hero-banner` 340 KB, `alignarchitects-scan-to-smile-hero` 488 KB)
> have baked-in text: compress to WebP, and consider a native, responsive rebuild for small screens
> where the baked text gets hard to read.

## What's Missing (add later)

- [ ] Team / founder photo
- [ ] Partner logos (Straumann, Zenyum, Softsmile)
- [ ] Before/after treatment plan screenshots

```json
{
  "./public/images/dental-technician-designing-3d-crown.jpg": {
    "filename": "dental-technician-designing-3d-crown",
    "description": "A close-up, over-the-shoulder shot of a male dental technician working on a 3D digital model of teeth and a dental crown on a large monitor. The workspace is bright and focused, featuring high-tech laboratory equipment like a 3D scanner. This image has a professional and precise tone, dominated by natural wood tones, muted greys, and a pop of green in the background, making it perfect for a service card or feature section on a modern dental lab or digital dentistry website.",
    "tags": [
      "digital dentistry",
      "CAD CAM dental",
      "dental laboratory",
      "3D teeth modeling",
      "dental technician",
      "medical technology"
    ]
  },
  "./public/images/dentist-analyzing-panoramic-child-dental-xray.jpg": {
    "filename": "dentist-analyzing-panoramic-child-dental-xray",
    "description": "An over-the-shoulder view of a dental professional pointing with a stylus at a panoramic digital X-ray of a child's teeth on a computer monitor. The mood is clinical, diagnostic, and highly professional, dominated by clean whites, blacks, and shades of grey. This image is well-suited for a service card, educational blog post, or a diagnostic technology feature section on a pediatric dental website.",
    "tags": [
      "dental x-ray",
      "pediatric dentistry",
      "panoramic radiograph",
      "orthodontic assessment",
      "clinical diagnostics",
      "dental technology"
    ]
  },
  "./public/images/abstract-teal-fractal-burst-background.jpg": {
    "filename": "abstract-teal-fractal-burst-background",
    "description": "An abstract digital graphic featuring translucent, overlapping teal and aqua lines bursting outward from a central point against a clean white backdrop. The mood is clean, modern, and clinical, making it ideal for healthcare, technology, or dental brandings. This versatile image would work perfectly as a website background, hero overlay, or decorative banner texture.",
    "tags": [
      "abstract texture",
      "teal background",
      "digital art",
      "fractal lines",
      "modern corporate graphics",
      "medical backdrop"
    ]
  },
  "./public/images/abstract-cyan-geometric-lines-background.jpg": {
    "filename": "abstract-cyan-geometric-lines-background",
    "description": "An abstract digital artwork featuring sharp, intersecting cyan lines over a bright, textured white and light-blue gradient background. The mood is modern, energetic, and highly dynamic, conveying a sense of digital connectivity or architectural structure. It would serve perfectly as a striking website background, hero image section, or a creative texture overlay.",
    "tags": [
      "abstract",
      "geometric-lines",
      "cyan-background",
      "modern-texture",
      "digital-art",
      "dynamic-patterns"
    ]
  },
  "./public/images/dental-prosthetic-bridge-and-3d-model.jpg": {
    "filename": "dental-prosthetic-bridge-and-3d-model",
    "description": "A top-down shot showing a grey 3D-printed dental arch model paired with a matching set of ceramic prosthetic teeth over a solid black background. The tone is highly professional, clean, and scientific, emphasizing dental technology and cosmetic precision. It is ideally suited for a dental clinic service card, laboratory showcase, or dental technology homepage section.",
    "tags": [
      "dental-prosthetics",
      "3d-printed-teeth",
      "dental-laboratory",
      "cosmetic-dentistry",
      "ceramic-bridge",
      "medical-technology"
    ]
  },
  "./public/images/gloved-hands-holding-clear-dental-aligner.jpg": {
    "filename": "gloved-hands-holding-clear-dental-aligner",
    "description": "A close-up, shallow depth of field shot of a dental professional's gloved hands holding a clear plastic orthodontic aligner tray. The tone is sterile, modern, and professional, featuring soft white, beige, and muted light blue tones. It would perfectly suit an orthodontics service card, an Invisalign product feature section, or a dental care website hero banner.",
    "tags": [
      "clear-aligners",
      "orthodontics",
      "invisible-braces",
      "dental-care",
      "gloved-hands",
      "cosmetic-dentistry"
    ]
  },
  "./public/images/hexagonal-metal-mesh-pattern-closeup.jpg": {
    "filename": "hexagonal-metal-mesh-pattern-closeup",
    "description": "Macro view of a hexagonal honeycomb-style mesh with a dense perforated texture, creating a striking geometric pattern across the frame. The mood is modern, industrial, and high-tech, with dominant black, silver, and cool metallic tones. It works well as an abstract website background, technology hero section, or futuristic design texture.",
    "tags": ["hexagonal-pattern", "metal-mesh", "abstract-background"]
  },
  "./public/images/clear-aligner-dental-hero-banner.png": {
    "filename": "clear-aligner-dental-hero-banner",
    "description": "This promotional banner features a radiant, smiling woman alongside clear dental aligners, highlighting the AlignArchitects brand and their 'Scan to Smile' delivery service. The mood is professional, clean, and uplifting, utilizing a dominant color palette of crisp white and varying shades of trust-inspiring blue. Its wide horizontal format, service icons, and clear value propositions make it perfectly suited for a website hero section or primary promotional banner.",
    "tags": ["clear aligners", "dental services", "hero banner"]
  },
  "./public/images/alignarchitects-scan-to-smile-hero.png": {
    "filename": "alignarchitects-scan-to-smile-hero",
    "description": "This image, referenced as Banner (2).png, is a clean and professional hero banner for AlignArchitects featuring a smiling woman alongside a clear aligner case. The dominant white and blue color palette establishes a trustworthy, optimistic tone while clearly illustrating a four-step dental aligner delivery process. Its wide, information-rich layout makes it perfectly suited for a primary website hero section or promotional banner.",
    "tags": ["clear aligners", "dental services", "hero banner"]
  },
  "./public/images/logo.png": {
    "filename": "logo",
    "description": "This image is main site logo.",
    "tags": ["logo"]
  }
}
```
