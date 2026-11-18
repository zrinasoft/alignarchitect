/**
 * EmailJS settings for the contact form (https://dashboard.emailjs.com).
 *
 * Values come from NEXT_PUBLIC_EMAILJS_* env vars (see .env.example), set in
 * .env.local locally or in the host's build settings. They're inlined into the
 * client JS at build time — EmailJS runs in the browser, so they're public by
 * design. Protect the account via EmailJS → Account → Security → "Allowed domains".
 *
 * The email template should use these variables (sent by ContactForm):
 *   {{name}} {{email}} {{organisation}} {{role}} {{service}} {{message}}
 * and set the template's "Reply To" field to {{email}}.
 */
export const EMAILJS = {
  // Must be written out as literal `process.env.NEXT_PUBLIC_…` for Next.js to inline them.
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
} as const;

export const emailjsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);
