import { useState } from "react";
import { isPlaceholder, site } from "../../data/site.js";

/**
 * Submits a <form> to a Formspree (or compatible) endpoint with fetch,
 * so the visitor stays on the page and sees a success or error message.
 *
 * status: "idle" | "submitting" | "success" | "error"
 */
export function useFormSubmit(endpoint, { validate } = {}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const validationError = validate?.(data);
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    if (isPlaceholder(endpoint)) {
      setStatus("error");
      setError(
        site.showPlaceholders
          ? "This form is not connected yet. Add your Formspree endpoint in src/data/site.js (see the README)."
          : `Sorry, this form is not available right now. Please email us at ${site.email}.`,
      );
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const body = await res.json().catch(() => ({}));
      const message = body?.errors?.map((e) => e.message).join(" ");
      throw new Error(message || "Something went wrong.");
    } catch (err) {
      setStatus("error");
      setError(
        `${err.message || "Something went wrong."} Please try again, or email us directly.`,
      );
    }
  }

  return { status, error, handleSubmit, reset: () => setStatus("idle") };
}
