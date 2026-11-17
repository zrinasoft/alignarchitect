/**
 * Centralised site copy for AlignArchitect.
 *
 * COPY RULE: only verified facts are stated as claims (10+ yrs, named partners,
 * the 4 services, the 3 audiences). Numbers we don't actually have yet use
 * PROVISIONAL placeholder values (tagged `// PROVISIONAL` in SITE / METRICS
 * below) — every one is traced in PLACEHOLDERS.md; replace before launch.
 */

export const SITE = {
  name: "AlignArchitect",
  tagline: "Precision digital dentistry & design",
  // PROVISIONAL contact details — placeholder data, replace before launch.
  // See PLACEHOLDERS.md for the full trace.
  email: "hello@alignarchitect.com", // PROVISIONAL
  phone: "+1 (555) 018-2204", // PROVISIONAL (555 = reserved fictional range)
  responseTime: "Within 1 business day", // PROVISIONAL
  location: "Lahore, Punjab, Pakistan",
  founded: "2026",
  partners: ["Straumann", "Zenyum", "Softsmile"],
  yearsExperience: "10+",
} as const;

/**
 * Operational metrics. `casesPlanned` is client-stated ("thousands of cases");
 * the rest remain PROVISIONAL placeholder values so the site reads as complete —
 * replace those with real figures before launch. Tracked in PLACEHOLDERS.md.
 */
export const METRICS = {
  casesPlanned: "Thousands", // client-stated ("thousands of cases")
  planTurnaround: "48–72h", // PROVISIONAL
  marketsServed: "20+", // PROVISIONAL
  slaIntakeToSetup: "48–72h", // PROVISIONAL
  slaQcPass: "Within 24h", // PROVISIONAL
  revisionPolicy: "Unlimited in scope", // PROVISIONAL
} as const;

export type NavLink = { label: string; href: string };

export const NAV: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Workflow", href: "/workflow" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ── Services ─────────────────────────────────────────────────────────── */

export type Service = {
  id: string;
  index: string;
  icon: "aligner" | "implant" | "crown" | "denture";
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  audience: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    id: "aligner-design",
    index: "01",
    icon: "aligner",
    title: "Aligner Design",
    short: "Custom clear-aligner setups, staged from your scans.",
    description:
      "Send us your digital scans and prescription and we design predictable, clinically-defensible clear-aligner setups. Every stage is planned around real biomechanics, attachment strategy, and arch coordination — not just a tooth-moving animation. Backed by 10+ years of aligner treatment planning across leading systems.",
    deliverables: [
      "Staged 3D aligner setups",
      "Attachment & IPR planning with rationale",
      "Biomechanically-staged tooth movement",
      "Annotated plan for case acceptance",
    ],
    audience: "Dentists, orthodontists & aligner brands",
    image: "/images/gloved-hands-holding-clear-dental-aligner.jpg",
    imageAlt: "Gloved hands holding a clear orthodontic aligner tray",
  },
  {
    id: "implant-design",
    index: "02",
    icon: "implant",
    title: "Implant Design",
    short: "Implant planning and implant-supported restoration design.",
    description:
      "Plan implant cases and design implant-supported restorations to your parameters. Working from your scans and radiographs, we help position implants and design the restorative components — returned ready for your surgical and prosthetic workflow.",
    deliverables: [
      "Implant position planning",
      "Implant-supported restoration design",
      "Designed to your components & libraries",
      "Files ready for milling or printing",
    ],
    audience: "Implantologists & dental labs",
    image: "/images/dentist-analyzing-panoramic-child-dental-xray.jpg",
    imageAlt: "Dental professional reviewing a panoramic digital X-ray for implant planning",
  },
  {
    id: "crown-design",
    index: "03",
    icon: "crown",
    title: "Crown & Bridge Design",
    short: "Crown and bridge CAD, designed to your libraries.",
    description:
      "Outsource crown and bridge design to a remote CAD team that works inside your preferred software. We design to your margins, contacts, and materials — built to your milling or printing libraries — and return production-ready files.",
    deliverables: [
      "Crown & bridge CAD design",
      "Designed to your margins & materials",
      "Built to your milling/printing libraries",
      "Production-ready output",
    ],
    audience: "Dental labs & clinics",
    image: "/images/dental-technician-designing-3d-crown.jpg",
    imageAlt: "Dental technician designing a 3D crown model on a monitor",
  },
  {
    id: "denture-design",
    index: "04",
    icon: "denture",
    title: "Denture Design",
    short: "Digital denture design — accurate and repeatable.",
    description:
      "Digital denture design for accurate, repeatable prosthetic outcomes. From your digital scans we design full and partial dentures to your specifications — tooth setup, base, and finish — returned ready for printing or milling in your workflow.",
    deliverables: [
      "Full & partial denture design",
      "Designed from digital scans",
      "Tooth setup & base design",
      "Files ready for printing or milling",
    ],
    audience: "Dental labs & clinics",
    image: "/images/dental-prosthetic-bridge-and-3d-model.jpg",
    imageAlt: "3D-printed dental arch model alongside a ceramic prosthetic set",
  },
];

/* ── Digital workflow ─────────────────────────────────────────────────── */

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
  outputs: string[];
};

export const WORKFLOW: WorkflowStep[] = [
  {
    step: "01",
    title: "Intake & Prescription",
    description:
      "You send scans (or impressions), photographs, and your clinical objectives through a secure handoff. We confirm scope and flag anything missing before a single stage is built.",
    outputs: ["Secure case upload", "Prescription review", "Scope confirmation"],
  },
  {
    step: "02",
    title: "Planning & Setup",
    description:
      "Our planners build the staged setup around real biomechanics — attachments, IPR, and arch coordination — engineered for predictability, not just a smooth animation.",
    outputs: ["Staged 3D setup", "Attachment & IPR map", "Movement rationale"],
  },
  {
    step: "03",
    title: "Quality Control",
    description:
      "Every plan passes an independent QC checklist before it reaches you. A second clinician verifies feasibility, staging, and finishing against our standards.",
    outputs: ["Independent QC audit", "Risk flags resolved", "Checklist sign-off"],
  },
  {
    step: "04",
    title: "Review & Delivery",
    description:
      "You review the plan, request revisions, and approve. We deliver final files — or, for white-label, manufactured aligners — ready for the next step in your workflow.",
    outputs: ["Annotated plan delivery", "Revision rounds", "Production-ready files"],
  },
];

/* ── Case showcase (YouTube) ──────────────────────────────────────────── */

export type CaseVideo = {
  /** YouTube video ID — the part after youtu.be/ (drop any ?si=… suffix). */
  youtubeId: string;
  title: string;
};

export const CASE_SHOWCASE = {
  eyebrow: "Case showcase",
  title: "See the planning, stage by stage.",
  lede: "Watch aligner virtual setups from our planning desk — how each malocclusion is staged and corrected, from the starting bite to the final occlusion.",
};

// Order matches the client's channel list. To add a video, append one line.
export const CASE_VIDEOS: CaseVideo[] = [
  { youtubeId: "eh6nQJT2Cmo", title: "Deep Bite & Crossbite Correction" },
  { youtubeId: "o_bckXSsxNc", title: "Class Correction" },
  { youtubeId: "DQVyBzEqOgM", title: "Overjet & Molar Occlusal Correction" },
  { youtubeId: "qlGgxBI5Gx0", title: "Crossbite, Midline & Molar Occlusal Correction" },
];

/* ── Audiences ────────────────────────────────────────────────────────── */

export type Audience = {
  id: string;
  label: string;
  headline: string;
  description: string;
  points: string[];
};

export const AUDIENCES: Audience[] = [
  {
    id: "dentists",
    label: "For Dentists",
    headline: "Plan more cases without slowing down chairside.",
    description:
      "Hand off treatment planning to a partner who thinks like a clinician. Dentists and orthodontists get defensible setups that improve case acceptance and free up chair time for patients.",
    points: [
      "Clinically-defensible staged setups",
      "Faster case turnaround",
      "Treatment narratives that win acceptance",
    ],
  },
  {
    id: "labs",
    label: "For Dental Labs",
    headline: "Extend your capacity, not your headcount.",
    description:
      "Add planning, QC, and restorative CAD/CAM to your service menu without hiring a specialist team. We plug into your workflow and stay invisible to your clients.",
    points: [
      "Overflow planning capacity",
      "Independent plan QC",
      "Remote restorative design",
    ],
  },
  {
    id: "brands",
    label: "For Aligner Brands",
    headline: "Launch a private label, skip the lab buildout.",
    description:
      "Go to market with your own aligner line backed by an experienced production and planning engine — the same caliber trusted by established names in the field.",
    points: [
      "End-to-end white-label production",
      "Consistent quality at scale",
      "Branded packaging support",
    ],
  },
];

/* ── Differentiators / proof ──────────────────────────────────────────── */

export type Differentiator = { title: string; description: string };

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Clinician-led, not click-led",
    description:
      "Every setup is built around biomechanics and case predictability — planned by people who understand the chair, not just the software.",
  },
  {
    title: "Software-agnostic",
    description:
      "We work inside the planning and CAD/CAM tools you already use, designing to your libraries and parameters.",
  },
  {
    title: "QC on every case",
    description:
      "An independent quality-control pass is standard, not an upsell. Nothing leaves without a second clinical sign-off.",
  },
  {
    title: "Transparent at every stage",
    description:
      "Complete visibility from intake to delivery — clear communication, accountability, and consistent results you can stand behind.",
  },
];

export type Stat = { value: string; suffix?: string; label: string };

// NOTE: planTurnaround & marketsServed are still PROVISIONAL — see PLACEHOLDERS.md.
export const STATS: Stat[] = [
  { value: "10", suffix: "+", label: "Years planning aligner cases" },
  { value: METRICS.casesPlanned, label: "Cases planned & reviewed" },
  { value: METRICS.planTurnaround, label: "Typical plan turnaround" },
  { value: METRICS.marketsServed, label: "Markets served" },
];
