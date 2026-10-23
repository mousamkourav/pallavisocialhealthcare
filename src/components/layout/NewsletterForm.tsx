"use client";

import { useActionState, useId } from "react";
import { subscribeNewsletter } from "@/app/actions";
import type { FormState } from "@/lib/forms";
import { FieldError, FormMessage } from "@/components/ui/FormMessage";

const initial: FormState = { status: "idle", message: "" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribeNewsletter, initial);
  const id = useId();
  const emailErr = state.fieldErrors?.email;
  const consentErr = state.fieldErrors?.consent;

  return (
    <form action={action} noValidate className="mx-auto w-full max-w-[38rem]" aria-label="Newsletter sign-up">
      <label htmlFor={`${id}-email`} className="block text-xs text-ink">
        Enter your email here <span aria-hidden="true">*</span>
      </label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        required
        autoComplete="email"
        aria-invalid={emailErr ? true : undefined}
        aria-describedby={emailErr ? `${id}-email-err` : undefined}
        className="mt-1 h-10 w-full border-2 border-ink bg-white px-3 text-sm"
      />
      <FieldError id={`${id}-email-err`} message={emailErr} />

      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <label className="flex items-center gap-2 text-xs text-ink">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              required
              aria-invalid={consentErr ? true : undefined}
              aria-describedby={consentErr ? `${id}-consent-err` : undefined}
              className="h-4 w-4 accent-ink"
            />
            Yes, subscribe me to your newsletter. <span aria-hidden="true">*</span>
          </label>
          <FieldError id={`${id}-consent-err`} message={consentErr} />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="h-10 w-full bg-ink px-6 text-sm font-semibold uppercase text-white transition-colors hover:bg-navy disabled:opacity-60 sm:w-44"
        >
          {pending ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <FormMessage state={state} className="mt-3" />
    </form>
  );
}
