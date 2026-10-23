import type { FormState } from "@/lib/forms";

/** Live region announcing the result of a form submission. */
export function FormMessage({ state, className = "" }: { state: FormState; className?: string }) {
  const tone =
    state.status === "success"
      ? "border-green-ink/30 bg-green-50 text-green-900"
      : state.status === "unavailable"
        ? "border-amber-400/50 bg-amber-50 text-amber-900"
        : "border-red-300 bg-red-50 text-red-800";

  return (
    <div role="status" aria-live="polite" className={className}>
      {state.status !== "idle" && state.message ? (
        <p className={`rounded border px-3 py-2 text-sm ${tone}`}>{state.message}</p>
      ) : null}
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-xs font-medium text-red-700">
      {message}
    </p>
  );
}
