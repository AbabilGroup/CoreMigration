import React from "react";
import Link from "next/link";
import { BriefcaseIcon, UserIcon } from "@heroicons/react/24/outline";
import CursorCircle from "./CursorCircle";
import { useLanguage } from "@/context/LanguageContext";

export default function DualValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-cream">
      <div className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-hover relative isolate overflow-hidden rounded-2xl bg-white border-t-4 border-brand-accent p-8 md:p-10 shadow-sm" data-aos="fade-up">
            <CursorCircle />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-cream mb-6">
              <BriefcaseIcon className="w-7 h-7 text-brand-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl text-brand-primary font-bold mb-4">
              {t("For Employers")} — {t("Rapid Scaling Without the Administrative Burden")}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t("Sourcing international manpower involves regulatory steps, embassy attestation, and skill verification. Core Migration acts as your single point of accountability — operating trade-testing coordination, medical processing (GAMCA/Wafid), emigration clearance (BMET/Protector), and group flight logistics.")}
            </p>
            <Link href="/our-solutions" className="btn-dark">
              {t("Review Employer Solutions")}
            </Link>
          </div>

          <div className="card-hover relative isolate overflow-hidden rounded-2xl bg-white border-t-4 border-brand-orange p-8 md:p-10 shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <CursorCircle />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-orange-secondary mb-6">
              <UserIcon className="w-7 h-7 text-brand-orange" />
            </div>
            <h3 className="text-2xl md:text-3xl text-brand-orange font-bold mb-4">
              {t("For Candidates")} — {t("A Transparent Path to Work Abroad")}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t("We connect skilled tradespeople, technical operators, and healthcare professionals from South Asia with verified international employers, guiding every candidate through licensing, attestation, visa stamping, and pre-departure orientation.")}
            </p>
            <Link href="/vacancies" className="btn-orange">
              {t("Browse Verified Vacancies")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
