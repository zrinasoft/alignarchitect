/**
 * Centralised site copy for AlignArchitect.
 *
 * COPY RULE: only verified facts are stated as claims (10+ yrs, named partners,
 * the 4 services, the 3 audiences). Any number we don't actually know is a
 * {{token}} — see PLACEHOLDERS.md for the full inventory to fill before launch.
 */

export const SITE = {
  name: "AlignArchitect",
  tagline: "Precision aligner treatment planning",
  // Contact placeholders — fill before launch.
  email: "{{contact_email}}",
  phone: "{{contact_phone}}",
  responseTime: "{{response_time}}",
  partners: ["Straumann", "Zenyum", "Softsmile"],
  yearsExperience: "10+",
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
  icon: "planning" | "manufacturing" | "qc" | "restorative";
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  audience: string;
};

export const SERVICES: Service[] = [
  {
    id: "treatment-planning",
    index: "01",
    icon: "planning",
    title: "Aligner Treatment Planning",
    short: "Clinically-sound setups, staged to the last micron.",
    description:
      "We turn your scans and prescriptions into predictable, clinically-defensible aligner setups. Every stage is planned around biomechanics, attachment strategy, and arch coordination — not just a tooth-moving animation. Backed by 10+ years of planning across leading aligner systems.",
    deliverables: [
      "Full ClinCheck-style staged setups",
      "Attachment & IPR planning with rationale",
      "Biomechanically-staged tooth movement",
      "Annotated treatment narrative for case acceptance",
    ],
    audience: "Dentists & orthodontists",
  },
  {
    id: "white-label-manufacturing",
    index: "02",
    icon: "manufacturing",
    title: "White-Label Manufacturing",
    short: "Your brand, our production engine.",
    description:
      "Launch or scale a private-label aligner line without building a lab. From planning through to finished, packaged aligners, we operate as your silent production partner — consistent, traceable, and ready to carry your name.",
    deliverables: [
      "End-to-end private-label production",
      "Consistent trimming, fit & finish standards",
      "Branded packaging support",
      "Scalable capacity for growing case volume",
    ],
    audience: "Aligner brands & dental labs",
  },
  {
    id: "quality-control",
    index: "03",
    icon: "qc",
    title: "Quality Control & Plan Review",
    short: "An expert second set of eyes on every plan.",
    description:
      "An independent clinical review of third-party treatment plans before they reach the chair. We audit staging, biomechanics, and feasibility, flag risks, and return clear, actionable revisions — so what gets approved actually tracks.",
    deliverables: [
      "Independent clinical plan audit",
      "Risk & feasibility flagging",
      "Actionable revision notes",
      "Standardised QC checklist sign-off",
    ],
    audience: "Labs & aligner companies",
  },
  {
    id: "remote-restorative",
    index: "04",
    icon: "restorative",
    title: "Remote Crown, Bridge & Implant Design",
    short: "Restorative CAD/CAM, delivered remotely.",
    description:
      "Outsource your restorative design to a remote CAD/CAM team that works inside your preferred software. Crowns, bridges, and implant restorations designed to your parameters and library, returned ready for milling or printing.",
    deliverables: [
      "Crown & bridge CAD design",
      "Implant-supported restoration design",
      "Design to your milling/printing libraries",
      "Flexible, software-agnostic workflow",
    ],
    audience: "Dental labs & clinics",
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
      "Hand off treatment planning to a partner who thinks like a clinician. Get defensible setups that improve case acceptance and free your time for patients.",
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
    title: "A decade in the field",
    description:
      "10+ years planning aligner cases, including collaborations with Straumann, Zenyum, and Softsmile.",
  },
];

export type Stat = { value: string; suffix?: string; label: string };

// NOTE: numeric values are placeholders — see PLACEHOLDERS.md.
export const STATS: Stat[] = [
  { value: "10", suffix: "+", label: "Years planning aligner cases" },
  { value: "{{cases_planned}}", label: "Cases planned & reviewed" },
  { value: "{{turnaround}}", label: "Typical plan turnaround" },
  { value: "{{countries}}", label: "Markets served" },
];
