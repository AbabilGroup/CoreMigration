import React from "react";
import {
  GlobeAltIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";
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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading>
          {t("Why Employers and Candidates")} {t("Choose Core Migration")}
        </SectionHeading>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-[28px] bg-cm-tile p-8 transition-all duration-200 hover:-translate-y-1 hover:bg-cm-hover"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}>
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cm-fresh text-white">
                <reason.icon className="h-7 w-7" />
              </span>
              <h3 className="mb-2.5 text-xl font-bold text-cm-deep">{t(reason.title)}</h3>
              <p className="text-base leading-relaxed text-cm-ink">{t(reason.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
