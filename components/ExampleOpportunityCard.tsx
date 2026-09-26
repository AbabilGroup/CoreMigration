import React from "react";
import Link from "next/link";
import { MapPinIcon, CurrencyDollarIcon, ClockIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

export interface OpportunityData {
  slug: string;
  title: string;
  industry: string;
  destination: string;
  sourceRegion: string;
  salary: string;
  contract: string;
  workingHours: string;
  benefits: string;
  requirements: string;
  ctaLabel: string;
}

export default function ExampleOpportunityCard({ opportunity }: { opportunity: OpportunityData }) {
  const { t } = useLanguage();

  return (
    <div className="card-hover border border-gray-200 bg-white p-7 md:p-8 flex flex-col" data-aos="zoom-in">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-bold text-brand-dark">{t(opportunity.title)}</h3>
        <span className="shrink-0 bg-brand-accent/20 text-brand-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 whitespace-nowrap">
          {t("Example Opportunity")}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-5">
        <span className="flex items-center gap-1.5">
          <BriefcaseIcon className="w-4 h-4" /> {t(opportunity.industry)}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPinIcon className="w-4 h-4" /> {t(opportunity.destination)}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-y-3 text-sm mb-5">
        <div>
          <dt className="text-gray-400 text-xs uppercase tracking-wider">{t("Source Region")}</dt>
          <dd className="text-gray-700 font-medium">{t(opportunity.sourceRegion)}</dd>
        </div>
        <div>
          <dt className="text-gray-400 text-xs uppercase tracking-wider">{t("Contract")}</dt>
          <dd className="text-gray-700 font-medium">{t(opportunity.contract)}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-gray-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <CurrencyDollarIcon className="w-4 h-4" /> {t("Salary")}
          </dt>
          <dd className="text-gray-700 font-medium">{t(opportunity.salary)}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-gray-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" /> {t("Working Hours")}
          </dt>
          <dd className="text-gray-700 font-medium">{t(opportunity.workingHours)}</dd>
        </div>
      </dl>

      <div className="mb-3">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t("Benefits")}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{t(opportunity.benefits)}</p>
      </div>
      <div className="mb-6">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t("Requirements")}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{t(opportunity.requirements)}</p>
      </div>

      <Link
        href={`/vacancies/${opportunity.slug}`}
        className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
        {t(opportunity.ctaLabel)}
      </Link>
    </div>
  );
}
