export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

const tones = {
  white: "bg-paper",
  tint: "bg-paper-200",
  warm: "bg-paper-200",
  dark: "on-dark bg-primary-900 text-primary-100",
};

export function Section({ tone = "white", className = "", containerClassName = "", id, children, ...rest }) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${tones[tone]} ${className}`} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left", dark = false, className = "", as: H = "h2" }) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${dark ? "text-white" : ""}`}>
        {title}
      </H>
      {text && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-primary-200" : "text-ink-600"}`}>{text}</p>}
    </div>
  );
}
