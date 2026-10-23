"use server";

import { site } from "@/data/site";
import { clean, deliver, isEmail, type FormState } from "@/lib/forms";

const fallback = `Online submissions aren’t connected yet. Please email ${site.contact.email} or call ${site.contact.phoneDisplay}.`;

export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (clean(formData.get("company"))) return { status: "success", message: "Thank you." };

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 200);
  const phone = clean(formData.get("phone"), 30);
  const message = clean(formData.get("message"), 4000);

  const fieldErrors: FormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email address.";
  else if (!isEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (phone && !/^[+\d][\d\s-]{6,}$/.test(phone)) fieldErrors.phone = "Please enter a valid phone number.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", fieldErrors };
  }

  const result = await deliver("enquiry", { name, email, phone, message });
  if (result.ok) {
    return { status: "success", message: "Thank you for reaching out. Our team will get back to you soon." };
  }
  return result.reason === "unconfigured"
    ? { status: "unavailable", message: fallback }
    : { status: "error", message: `We couldn’t send your message right now. ${fallback.replace("Online submissions aren’t connected yet. ", "")}` };
}

export async function subscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  if (clean(formData.get("company"))) return { status: "success", message: "Thank you." };

  const email = clean(formData.get("email"), 200);
  const consent = formData.get("consent") === "yes";

  const fieldErrors: FormState["fieldErrors"] = {};
  if (!isEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!consent) fieldErrors.consent = "Please tick the box to confirm you want our newsletter.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the form.", fieldErrors };
  }

  const result = await deliver("newsletter", { email, consent: "yes" });
  if (result.ok) return { status: "success", message: "Thanks for subscribing!" };
  return result.reason === "unconfigured"
    ? { status: "unavailable", message: `Newsletter sign-up isn’t connected yet. To join the list, email ${site.contact.email}.` }
    : { status: "error", message: "We couldn’t subscribe you right now. Please try again later." };
}
