import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const models = [
  {
    title: "Direct & Specialist Recruitment",
    description:
      "Tailored sourcing for technical, supervisory, and specialized roles. Candidates undergo multi-stage technical screening, background checks, and embassy attestation before placement.",
    focus: "Healthcare, Engineering, Hospitality, Oil & Gas",
    cta: "Explore Direct Recruitment",
    href: "/our-solutions/direct-specialist-recruitment",
  },
  {
    title: "Bulk Mobilization",
    description:
      "High-volume recruitment drives to mobilize large groups of trade-tested workers on tight project timelines — multi-day testing events, batch visa filings, and coordinated group travel.",
    focus: "Construction, Infrastructure, Facility Management, Logistics",
    cta: "Plan a Mass Mobilization Drive",
    href: "/our-solutions/bulk-mobilization",
  },
];

export default function SourcingDeploymentModels() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-zinc-50">
      <div className="mb-12 max-w-3xl" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}>
          {t("Sourcing & Deployment")} <span className="italic font-bold">{t("Models")}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model, i) => (
          <div
            key={model.title}
            className="card-hover group bg-white border border-zinc-200 p-8 md:p-10"
            data-aos="fade-up"
            data-aos-delay={i * 100}>
            <h3 className="text-2xl text-brand-dark font-bold mb-4">{t(model.title)}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t(model.description)}</p>
            <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              {t("Focus")}: {t(model.focus)}
            </p>
            <Link
              href={model.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-dark text-brand-dark text-sm font-bold uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
              {t(model.cta)}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
