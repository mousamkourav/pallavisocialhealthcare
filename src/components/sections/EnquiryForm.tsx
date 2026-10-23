"use client";

import { useActionState, useId } from "react";
import { submitEnquiry } from "@/app/actions";
import type { FormState } from "@/lib/forms";
import { FieldError, FormMessage } from "@/components/ui/FormMessage";

const initial: FormState = { status: "idle", message: "" };

const inputCls =
  "mt-1 h-10 w-full border-2 border-[#5b5872] bg-white px-3 text-sm aria-[invalid=true]:border-red-600";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const id = useId();
  const err = state.fieldErrors ?? {};
  const described = (k: string) => (err[k] ? `${id}-${k}-err` : undefined);

  return (
    <form action={action} noValidate aria-label="Enquiry form" className="space-y-4">
      <div>
        <label htmlFor={`${id}-name`} className="text-xs text-ink">
          Name <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <input id={`${id}-name`} name="name" required autoComplete="name" className={inputCls} aria-invalid={err.name ? true : undefined} aria-describedby={described("name")} />
        <FieldError id={`${id}-name-err`} message={err.name} />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="text-xs text-ink">
          Email <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={inputCls} aria-invalid={err.email ? true : undefined} aria-describedby={described("email")} />
        <FieldError id={`${id}-email-err`} message={err.email} />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="text-xs text-ink">
          Phone Number
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputCls} aria-invalid={err.phone ? true : undefined} aria-describedby={described("phone")} />
        <FieldError id={`${id}-phone-err`} message={err.phone} />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="text-xs text-ink">
          Message
        </label>
        <textarea id={`${id}-message`} name="message" rows={3} className={`${inputCls} h-auto py-2`} />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={pending}
        className="h-10 w-full bg-green-ink text-sm font-semibold text-white transition-colors hover:bg-navy disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
      <FormMessage state={state} />
    </form>
  );
}
