import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const partnerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  role: z.enum(["architect", "contractor", "distributor", "developer", "other"]),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

type FormState = {
  name: string;
  company: string;
  email: string;
  role: "architect" | "contractor" | "distributor" | "developer" | "other";
  message: string;
};

const INITIAL: FormState = {
  name: "",
  company: "",
  email: "",
  role: "architect",
  message: "",
};

export function PartnerSection({ active }: { active: boolean }) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = partnerSchema.safeParse(form);
    if (!result.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (key) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm(INITIAL);
    window.setTimeout(() => setSent(false), 4000);
  };

  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="grid h-full w-full grid-cols-1 items-center gap-6 overflow-y-auto px-5 pt-20 pb-16 md:gap-10 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-2 lg:gap-16 lg:px-20"
    >
      {/* left: title + contact info */}
      <div className="relative flex flex-col justify-center">
        <span className="eyebrow text-copper">Become a Partner</span>
        <div className="mt-4 overflow-hidden">
          {"Build with Ecosmart.".split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="display-serifish mr-3 inline-block text-4xl md:text-6xl lg:text-7xl"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 max-w-md text-[0.8rem] leading-relaxed text-ink-soft md:mt-6 md:text-[0.95rem]"
        >
          Join EcoSmart's growing network of architects, distributors, contractors and solution partners across Saudi Arabia and the GCC.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 space-y-3 text-sm text-ink/85 md:mt-8"
        >
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
              <Mail className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <a href="mailto:partners@ecosmart.ae" className="hover:text-copper">
              partners@ecosmart.ae
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
              <Phone className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <a href="tel:+97140000000" className="hover:text-copper">
              +971 4 000 0000
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
              <MapPin className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <span className="text-ink-soft">Dubai, United Arab Emirates</span>
          </li>
        </motion.ul>
      </div>

      {/* right: form */}
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl bg-canvas/80 p-5 md:p-7"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(122,58,27,0.22), 0 8px 24px -10px rgba(26,23,20,0.08)",
          border: "1px solid rgba(26,23,20,0.06)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="eyebrow mb-4 text-copper">Partner application</div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Field label="Full name" error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              maxLength={100}
              className="field-input"
              placeholder="Jane Doe"
            />
          </Field>
          <Field label="Company" error={errors.company}>
            <input
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              maxLength={120}
              className="field-input"
              placeholder="Studio name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              maxLength={255}
              className="field-input"
              placeholder="you@studio.com"
            />
          </Field>
          <Field label="Role" error={errors.role}>
            <select
              value={form.role}
              onChange={(e) => update("role", e.target.value as FormState["role"])}
              className="field-input"
            >
              <option value="architect">Architect</option>
              <option value="contractor">Contractor</option>
              <option value="distributor">Distributor</option>
              <option value="developer">Developer</option>
              <option value="other">Other</option>
            </select>
          </Field>
        </div>

        <div className="mt-3">
          <Field label="Message (optional)" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={800}
              rows={3}
              className="field-input resize-none"
              placeholder="Projects, regions, what you're looking for…"
            />
          </Field>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-[0.7rem] text-ink-soft/70">
            We reply within 2 business days.
          </span>
          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-canvas"
            style={{
              background: "linear-gradient(135deg,#d89060 0%,#b4592c 100%)",
              boxShadow: "0 14px 30px -10px rgba(180,89,44,0.5)",
            }}
          >
            {sent ? "Sent ✓" : "Let's Talk Partnership"}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </motion.button>
        </div>
      </motion.form>

      <style>{`
        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(26,23,20,0.1);
          border-radius: 0.75rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          color: var(--ink);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field-input:focus {
          border-color: var(--copper);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--copper) 18%, transparent);
        }
        .dark .field-input { background: rgba(0,0,0,0.25); }
      `}</style>
    </motion.div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-[0.7rem] text-red-600">{error}</span>}
    </label>
  );
}
