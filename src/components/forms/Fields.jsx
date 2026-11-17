import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import Button from "../ui/Button.jsx";

export function Field({ label, name, required, hint, as = "input", className = "", children, ...rest }) {
  const id = `f-${name}`;
  const Tag = as;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="text-accent-700"> *</span>}
      </label>
      <Tag id={id} name={name} required={required} className="field" aria-describedby={hint ? `${id}-hint` : undefined} {...rest}>
        {children}
      </Tag>
      {hint && (
        <p id={`${id}-hint`} className="field-hint">
          {hint}
        </p>
      )}
    </div>
  );
}

export function CheckboxGroup({ legend, name, options, className = "" }) {
  return (
    <fieldset className={className}>
      <legend className="field-label">{legend}</legend>
      <div className="mt-1 grid gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-ink-300 px-3.5 py-2.5 text-sm text-ink-800 transition hover:border-ink-400 has-[:checked]:border-primary-700 has-[:checked]:bg-primary-50"
          >
            <input type="checkbox" name={name} value={opt} className="size-4 rounded accent-primary-800" />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** Hidden spam trap that Formspree ignores submissions from. */
export function Honeypot() {
  return <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />;
}

export function SubmitRow({ status, label }) {
  return (
    <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
      {status === "submitting" ? (
        <>
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> Sending...
        </>
      ) : (
        label
      )}
    </Button>
  );
}

export function FormError({ status, error }) {
  return (
    <div aria-live="assertive">
      {status === "error" && (
        <p className="flex gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export function FormSuccess({ title, text, onReset }) {
  return (
    <div role="status" className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
      <CheckCircle2 className="size-12 text-emerald-600" aria-hidden="true" />
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-w-md text-ink-700">{text}</p>
      {onReset && (
        <button type="button" onClick={onReset} className="mt-6 text-sm font-semibold text-ink-950 underline underline-offset-4">
          Send another
        </button>
      )}
    </div>
  );
}
