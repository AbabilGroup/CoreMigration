import React from "react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const stages = [
  {
    title: "South Asian Talent Network",
    detail: "Bangladesh | India | Nepal | Sri Lanka",
  },
  {
    title: "Screening & Trade Testing",
    detail: "Technical Assessment | Medicals | Credentials",
  },
  {
    title: "Embassy & Governmental Processing",
    detail: "Attestation | Visa Stamping | BMET Clearance",
  },
  {
    title: "Deployment & Site Onboarding",
    detail: "Pre-Departure Orientation | Air Travel | Arrival",
  },
  {
    title: "Destination Operations",
    detail: "Middle East | United Kingdom | Europe",
  },
];

export default function DeploymentInfrastructure() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-cm-deep py-16 md:py-24 text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-30 -top-30 -z-10 h-105 w-105 rounded-full bg-cm-glow opacity-25"
      />
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading light>
          {t("Deployment")} {t("Infrastructure")}
        </SectionHeading>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="rounded-3xl bg-white p-6 text-cm-deep"
              data-aos="fade-up"
              data-aos-delay={i * 80}>
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-cm-fresh font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug">{t(stage.title)}</h3>
              <p className="text-sm leading-relaxed text-cm-ink">{t(stage.detail)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
