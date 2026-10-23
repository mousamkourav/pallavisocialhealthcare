import "server-only";

export type FormState = {
  status: "idle" | "success" | "error" | "unavailable";
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export const initialFormState: FormState = { status: "idle", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function clean(value: FormDataEntryValue | null, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function isEmail(value: string) {
  return EMAIL_RE.test(value);
}

/**
 * Integration boundary for form submissions.
 *
 * The original Wix forms stored submissions inside Wix. That backend is gone, so submissions are
 * forwarded as JSON to FORM_WEBHOOK_URL (e.g. a Formspree / Web3Forms / Make / Zapier / Google Apps
 * Script endpoint chosen by the owner). If it is not configured we say so honestly instead of
 * pretending the message was sent.
 */
export async function deliver(kind: "enquiry" | "newsletter", payload: Record<string, string>) {
  const url = process.env.FORM_WEBHOOK_URL;
  if (!url) return { ok: false as const, reason: "unconfigured" as const };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ form: kind, submittedAt: new Date().toISOString(), ...payload }),
      cache: "no-store",
    });
    return res.ok ? { ok: true as const } : { ok: false as const, reason: "failed" as const };
  } catch {
    return { ok: false as const, reason: "failed" as const };
  }
}
