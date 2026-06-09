"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { SERVICES } from "@/lib/content";

type Fields = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  service: "",
  message: "",
};

const ROLES = ["Dentist / Orthodontist", "Dental lab", "Aligner brand", "Other"];

/**
 * Submission stub. The form is intentionally not wired to a backend yet.
 * TODO: wire submission — drop in EmailJS (emailjs.send) or a Next.js Server
 * Action / Route Handler here. Keep the (data) => Promise signature.
 */
async function submitConsultRequest(data: Fields): Promise<void> {
  // Simulated latency so the UI states are exercised. Replace with a real call.
  if (process.env.NODE_ENV === "development") console.debug("consult request", data);
  await new Promise((resolve) => setTimeout(resolve, 900));
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.role) e.role = "Tell us who you are.";
  if (!f.message.trim() || f.message.trim().length < 10)
    e.message = "A little more detail helps us respond well.";
  return e;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const found = validate(fields);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setStatus("submitting");
    await submitConsultRequest(fields);
    setStatus("success");
    setFields(EMPTY);
  };

  return (
    <div className="relative rounded-2xl border border-line bg-paper-raised p-7 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Check className="size-7" strokeWidth={2.4} />
            </span>
            <h3 className="mt-6 font-display text-h3 font-medium tracking-tight text-ink">
              Request received
            </h3>
            <p className="mt-3 max-w-sm text-graphite-600">
              Thanks — we&apos;ll review your request and respond shortly. For anything urgent, email us
              directly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                value={fields.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Work email"
                name="email"
                type="email"
                value={fields.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                autoComplete="email"
              />
            </div>

            <Field
              label="Organisation"
              name="organisation"
              value={fields.organisation}
              onChange={(v) => update("organisation", v)}
              error={errors.organisation}
              optional
              autoComplete="organization"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="I am a"
                name="role"
                value={fields.role}
                onChange={(v) => update("role", v)}
                error={errors.role}
                options={ROLES}
                placeholder="Select one"
              />
              <SelectField
                label="Service of interest"
                name="service"
                value={fields.service}
                onChange={(v) => update("service", v)}
                options={[...SERVICES.map((s) => s.title), "Not sure yet"]}
                placeholder="Select one"
                optional
              />
            </div>

            <div>
              <FieldLabel htmlFor="message" label="How can we help?" />
              <textarea
                id="message"
                name="message"
                rows={4}
                value={fields.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={!!errors.message}
                placeholder="Tell us about the case, volume, software, or question…"
                className={inputCls(!!errors.message)}
              />
              <FieldError error={errors.message} />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-tight text-paper transition-all duration-300 hover:bg-teal-700 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Request a consult
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-xs text-graphite-400">
              We&apos;ll only use your details to respond to this request.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── field primitives ─────────────────────────────────────────────────── */

const inputCls = (hasError: boolean) =>
  `mt-2 w-full rounded-lg border bg-paper px-4 py-3 text-sm text-ink placeholder:text-graphite-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40 ${
    hasError ? "border-red-400" : "border-line-strong focus:border-teal"
  }`;

function FieldLabel({
  htmlFor,
  label,
  optional,
}: {
  htmlFor: string;
  label: string;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
      {label}
      {optional && <span className="ml-1.5 text-xs font-normal text-graphite-400">(optional)</span>}
    </label>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1.5 text-xs text-red-500">{error}</p>;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  optional,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} optional={optional} />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls(!!error)}
      />
      <FieldError error={error} />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  optional,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} optional={optional} />
      <select
        id={name}
        name={name}
        value={value}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls(!!error)} ${value ? "text-ink" : "text-graphite-400"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <FieldError error={error} />
    </div>
  );
}
