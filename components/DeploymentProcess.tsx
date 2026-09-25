import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    title: "Demand & Authorization",
    description:
      "Employer provides job specifications, salary bands, and legal documentation (Demand Letter & Power of Attorney). Core Migration authenticates these with the relevant embassies.",
  },
  {
    title: "Sourcing & Trade Verification",
    description:
      "Local sourcing channels are activated. Applicants undergo practical trade testing and CV pre-screening.",
  },
  {
    title: "Selection Drive",
    description:
      "Employers conduct interviews onsite at partner testing facilities or via virtual interview sessions.",
  },
  {
    title: "Visa, Medical & Flight Deployment",
    description:
      "GAMCA/Wafid medicals, visa stamping, BMET emigration clearance, pre-departure briefings, and flight ticketing are completed. Candidates arrive ready for site onboarding.",
  },
];

export default function DeploymentProcess() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-brand-dark">
      <div className="mb-12 max-w-3xl" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl text-white font-light mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}>
          <span className="italic font-bold text-brand-primary">{t("Deployment Process")}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative border-t-4 border-brand-primary pt-6"
            data-aos="fade-up"
            data-aos-delay={i * 100}>
            <span className="text-5xl font-bold text-white/10 leading-none block mb-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-bold text-white mb-3">{t(step.title)}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t(step.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
