import { useId, useState } from "react";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import { Section, SectionHeading } from "../ui/Section.jsx";
import { site } from "../../data/site.js";
import { calculator, plans } from "../../data/pricing.js";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const priceNumber = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;
const WEEKS_PER_MONTH = 52 / 12;

function suggestPlan(monthlyHours) {
  const { Starter, Growth } = calculator.planHours;
  const name = monthlyHours <= Starter ? "Starter" : monthlyHours <= Growth ? "Growth" : "Premium";
  return plans.find((p) => p.name === name) || plans[0];
}

function Slider({ label, hint, value, min, max, step, onChange, format }) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-medium text-ink-900">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 font-display text-2xl font-extrabold text-ink-950 tabular-nums">
          {format(value)}
        </output>
      </div>
      {hint && <p className="mt-1 text-sm text-ink-500">{hint}</p>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range mt-4 w-full"
        style={{ "--fill": `${pct}%` }}
      />
      <div className="mt-1 flex justify-between text-xs text-ink-400" aria-hidden="true">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

/** Time-back calculator. Text lives in data/pricing.js (`calculator`). */
export default function TimeCalculator({ tone = "tint" }) {
  const [hours, setHours] = useState(calculator.defaults.hours);
  const [rate, setRate] = useState(calculator.defaults.rate);

  const monthlyHours = Math.round(hours * WEEKS_PER_MONTH);
  const monthlyValue = monthlyHours * rate;
  const plan = suggestPlan(monthlyHours);
  const planPrice = priceNumber(plan.price);
  const difference = monthlyValue - planPrice;

  return (
    <Section tone={tone} id="calculator">
      <SectionHeading eyebrow={calculator.eyebrow} title={calculator.title} text={calculator.text} />

      <Reveal className="mt-12 grid overflow-hidden rounded-3xl border border-ink-200 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10 bg-white p-6 sm:p-10">
          <Slider
            label={calculator.hoursLabel}
            value={hours}
            min={1}
            max={40}
            step={1}
            onChange={setHours}
            format={(v) => `${v} ${v === 1 ? "hr" : "hrs"}`}
          />
          <Slider
            label={calculator.rateLabel}
            hint={calculator.rateHint}
            value={rate}
            min={20}
            max={500}
            step={5}
            onChange={setRate}
            format={(v) => money.format(v)}
          />
        </div>

        <div className="on-dark flex flex-col bg-primary-900 p-6 text-primary-200 sm:p-10" aria-live="polite">
          <dl className="grid gap-6 min-[400px]:grid-cols-2">
            <div>
              <dt className="text-sm">Hours a month</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-white tabular-nums">{monthlyHours}</dd>
            </div>
            <div>
              <dt className="text-sm">Your time on these tasks</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold text-accent-300 tabular-nums">
                {money.format(monthlyValue)}
                <span className="text-base font-semibold text-primary-300">/mo</span>
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-white/15 pt-8">
            <p className="text-sm">Suggested plan</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">
              {plan.name}{" "}
              <span className="text-base font-semibold text-primary-300">
                {plan.pricePrefix ? `${plan.pricePrefix.toLowerCase()} ` : ""}
                {plan.price}
                {plan.period}
              </span>
            </p>
            <p className="mt-1 text-sm text-primary-300">{plan.tagline}{plan.hours ? `, ${plan.hours.toLowerCase()}` : ""}</p>

            <p className="mt-6 leading-relaxed text-primary-100">
              {difference > 0 ? (
                <>
                  Your time on these tasks is worth{" "}
                  <strong className="text-white">{money.format(difference)} a month more</strong> than the plan costs.
                  Spend it on the work only you can do.
                </>
              ) : (
                <>
                  At these numbers, the biggest win is the{" "}
                  <strong className="text-white">{monthlyHours} hours a month</strong> and the headspace you get back.
                </>
              )}
            </p>
          </div>

          <Button href={site.cta.href} arrow className="mt-8 self-start">
            {site.cta.label}
          </Button>
          <p className="mt-4 text-xs text-primary-300">{calculator.note}</p>
        </div>
      </Reveal>
    </Section>
  );
}
