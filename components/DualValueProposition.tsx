import React from "react";
import Link from "next/link";
import { BriefcaseIcon, UserIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

export default function DualValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10" data-aos="fade-up">
          <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 mb-6">
            <BriefcaseIcon className="w-7 h-7 text-brand-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl text-brand-dark font-bold mb-4">
            {t("For Employers")} — {t("Rapid Scaling Without the Administrative Burden")}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t("Sourcing international manpower involves regulatory steps, embassy attestation, and skill verification. Core Migration acts as your single point of accountability — operating trade-testing coordination, medical processing (GAMCA/Wafid), emigration clearance (BMET/Protector), and group flight logistics.")}
          </p>
          <Link
            href="/our-solutions"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
            {t("Review Employer Solutions")}
          </Link>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10" data-aos="fade-up" data-aos-delay="100">
          <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 mb-6">
            <UserIcon className="w-7 h-7 text-brand-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl text-brand-dark font-bold mb-4">
            {t("For Candidates")} — {t("A Transparent Path to Work Abroad")}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t("We connect skilled tradespeople, technical operators, and healthcare professionals from South Asia with verified international employers, guiding every candidate through licensing, attestation, visa stamping, and pre-departure orientation.")}
          </p>
          <Link
            href="/vacancies"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
            {t("Browse Verified Vacancies")}
          </Link>
        </div>
      </div>
    </section>
  );
}
