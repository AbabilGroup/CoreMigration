import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    title: "Demand & Authorization",
    description:
      "You share job specifications, salary bands, and legal documents. We authenticate them with the relevant embassies.",
  },
  {
    title: "Sourcing & Trade Verification",
    description:
      "Local sourcing is activated. Applicants complete practical trade tests and CV pre-screening.",
  },
  {
    title: "Selection Drive",
    description:
      "You interview shortlisted candidates, onsite at partner testing facilities or by video.",
  },
  {
    title: "Visa, Medical & Flight",
    description:
      "Medicals, visa stamping, emigration clearance, briefings, and flights are completed. Candidates arrive ready for site onboarding.",
  },
];

export default function DeploymentProcess() {
  const { t } = useLanguage();

  return (
    <section className="bg-cm-mint py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-cm-deep" data-aos="fade-up">
          {t("How Deployment Works")}
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-[28px] border-2 border-cm-hover bg-white p-8"
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <div className="mb-4 grid h-13 w-13 place-items-center rounded-full bg-cm-fresh font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-2.5 text-xl md:text-[22px] font-semibold leading-tight text-cm-deep">
                {t(step.title)}
              </h3>
              <p className="text-base leading-relaxed text-cm-ink">{t(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
