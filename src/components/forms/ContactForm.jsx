import { useFormSubmit } from "./useFormSubmit.js";
import { CheckboxGroup, Field, FormError, FormSuccess, Honeypot, SubmitRow } from "./Fields.jsx";
import { AGENCY_NAME, site } from "../../data/site.js";
import { services } from "../../data/services.js";
import { contactOptions } from "../../data/contact.js";

export default function ContactForm() {
  const { status, error, handleSubmit, reset } = useFormSubmit(site.forms.contact);

  if (status === "success") {
    return (
      <FormSuccess
        title="Thank you, your message is on its way"
        text="We have received your details and will be in touch soon. In the meantime, feel free to book a discovery call above."
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <input type="hidden" name="_subject" value={`New inquiry from the ${AGENCY_NAME} website`} />
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Field label="Business name" name="business" autoComplete="organization" />
      <CheckboxGroup
        legend="Which services are you interested in?"
        name="services"
        options={[...services.map((s) => s.title), ...contactOptions.extraServices]}
      />
      <Field label="Monthly budget range" name="budget" as="select" defaultValue="">
        <option value="" disabled>
          Choose a range
        </option>
        {contactOptions.budgets.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </Field>
      <Field
        label="How can we help?"
        name="message"
        as="textarea"
        rows={5}
        required
        placeholder="Tell us a little about your business and what you would like to hand off."
      />
      <FormError status={status} error={error} />
      <SubmitRow status={status} label="Send message" />
    </form>
  );
}
