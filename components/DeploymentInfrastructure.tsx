import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
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
    <section className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl text-brand-dark font-light"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            {t("Deployment")} <span className="italic font-bold">{t("Infrastructure")}</span>
          </h2>
        </div>

        <div className="flex flex-col items-center">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.title}>
              <div
                className="card-hover w-full bg-white border border-gray-200 px-8 py-6 text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}>
                <h3 className="font-bold text-brand-dark mb-1">{t(stage.title)}</h3>
                <p className="text-sm text-gray-500">{t(stage.detail)}</p>
              </div>
              {i < stages.length - 1 && (
                <ChevronDownIcon className="w-6 h-6 text-brand-primary my-2 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
