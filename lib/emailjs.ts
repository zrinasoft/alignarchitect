/**
 * EmailJS settings for the contact form (https://dashboard.emailjs.com).
 *
 * These values are public by design — EmailJS runs in the browser, so they
 * end up in the shipped JS either way. Protect the account instead via
 * EmailJS → Account → Security → "Allowed domains".
 *
 * The email template should use these variables (sent by ContactForm):
 *   {{name}} {{email}} {{organisation}} {{role}} {{service}} {{message}}
 * and set the template's "Reply To" field to {{email}}.
 */
export const EMAILJS = {
  serviceId: "service_h9iusub",
  templateId: "template_rf8qn6p",
  publicKey: "", // TODO: EmailJS → Account → General → Public Key
} as const;

export const emailjsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);
