import { useFormSubmit } from "./useFormSubmit.js";
import { CheckboxGroup, Field, FormError, FormSuccess, Honeypot, SubmitRow } from "./Fields.jsx";
import { AGENCY_NAME, site } from "../../data/site.js";
import { applicationOptions, roles } from "../../data/careers.js";

const MAX_CV_MB = 10;

const uploads = site.forms.allowFileUploads;

/** Applicants must provide a CV file or a CV link (link only when uploads are off). */
function validate(data) {
  const file = uploads ? data.get("cv") : null;
  const hasFile = file && file.size > 0;
  const hasLink = String(data.get("cv_link") || "").trim() !== "";
  if (!hasFile && !hasLink) return uploads ? "Please upload your CV or paste a link to it." : "Please paste a link to your CV.";
  if (hasFile && file.size > MAX_CV_MB * 1024 * 1024) return `Your CV file must be smaller than ${MAX_CV_MB} MB.`;
  if (!hasFile) data.delete("cv"); // don't send an empty file field
  return null;
}

export default function CareersForm() {
  const { status, error, handleSubmit, reset } = useFormSubmit(site.forms.careers, { validate });

  if (status === "success") {
    return (
      <FormSuccess
        title="Application received"
        text="Thank you for applying. We review every application and will contact you if your experience matches an open role."
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" encType={uploads ? "multipart/form-data" : undefined}>
      <input type="hidden" name="_subject" value={`New job application for ${AGENCY_NAME}`} />
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Country" name="country" required autoComplete="country-name" />
        <Field label="Role you are applying for" name="role" as="select" required defaultValue="">
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((r) => (
            <option key={r.title}>{r.title}</option>
          ))}
          <option>Open application</option>
        </Field>
      </div>
      <CheckboxGroup legend="Your skills" name="skills" options={applicationOptions.skills} />
      <Field label="Years of relevant experience" name="experience" as="select" required defaultValue="">
        <option value="" disabled>
          Choose one
        </option>
        {applicationOptions.experience.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </Field>
      <Field
        label="Tell us about your experience"
        name="experience_details"
        as="textarea"
        rows={4}
        placeholder="Roles you have held, tools you use and the kind of clients you have supported."
      />
      <Field label="Portfolio or LinkedIn link" name="portfolio" type="url" placeholder="https://" />
      <div className={`grid gap-6 rounded-xl border border-dashed border-ink-300 bg-paper-200/50 p-5 ${uploads ? "sm:grid-cols-2" : ""}`}>
        {uploads && (
        <Field
          label="Upload your CV"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          hint={`PDF or Word, up to ${MAX_CV_MB} MB.`}
          className="[&_.field]:file:mr-3 [&_.field]:file:rounded-md [&_.field]:file:border-0 [&_.field]:file:bg-primary-900 [&_.field]:file:px-3 [&_.field]:file:py-1.5 [&_.field]:file:text-sm [&_.field]:file:text-white"
        />
        )}
        <Field
          label={uploads ? "Or paste a link to your CV" : "Link to your CV"}
          name="cv_link"
          type="url"
          required={!uploads}
          placeholder="Google Drive, Dropbox..."
          hint="Upload your CV to Google Drive or Dropbox and make sure anyone with the link can view it."
        />
      </div>
      <FormError status={status} error={error} />
      <SubmitRow status={status} label="Submit application" />
    </form>
  );
}
