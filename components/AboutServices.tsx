import React from "react";
import {
  GlobeAltIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const reasons = [
  {
    icon: GlobeAltIcon,
    title: "Deep South Asian Talent Access",
    description: "Established sourcing channels across Bangladesh, India, Nepal, and Sri Lanka.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Trade-Tested Candidates",
    description: "Rigorous skills assessment, interviews, and medical clearance before shortlisting.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Full Documentation Handling",
    description: "Attestation, visa processing, emigration clearance, and legal compliance managed in-house.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Industry-Specific Expertise",
    description: "Specialized recruitment across construction, healthcare, hospitality, energy, and manufacturing.",
  },
  {
    icon: UserGroupIcon,
    title: "Single Point of Contact",
    description: "Dedicated account coordination for employers managing interviews and large-scale hiring.",
  },
  {
    icon: ChartBarIcon,
    title: "Scalable Delivery",
    description: "Structured to handle both individual specialist placements and large mobilization campaigns.",
  },
];

export default function AboutServices() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f7f5f2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12 max-w-3xl" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            {t("Why Employers and Candidates")}{" "}
            <span className="italic font-bold">{t("Choose Core Migration")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="card-hover bg-white p-8 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}>
              <reason.icon className="w-9 h-9 text-brand-primary mb-5" />
              <h3 className="text-lg font-bold text-brand-dark mb-3">{t(reason.title)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(reason.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
