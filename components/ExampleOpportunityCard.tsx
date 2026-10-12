import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
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
    <div
      className="relative isolate flex flex-col overflow-hidden rounded-4xl bg-cm-card p-8 md:p-10 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,58,39,0.25)]"
      data-aos="fade-up">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-55 w-55 rounded-full bg-cm-fresh/20"
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-2xl md:text-[28px] font-semibold leading-tight">{t(opportunity.title)}</h3>
        <span className="shrink-0 rounded-full bg-cm-fresh px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white whitespace-nowrap">
          {t("Example Opportunity")}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 mb-6">
        <span className="flex items-center gap-1.5">
          <BriefcaseIcon className="w-4 h-4 text-cm-fresh" /> {t(opportunity.industry)}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPinIcon className="w-4 h-4 text-cm-fresh" /> {t(opportunity.destination)}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-3 text-sm mb-6">
        <div className="rounded-2xl bg-white/10 p-4">
          <dt className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider">{t("Source Region")}</dt>
          <dd className="mt-1 font-medium">{t(opportunity.sourceRegion)}</dd>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <dt className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider">{t("Contract")}</dt>
          <dd className="mt-1 font-medium">{t(opportunity.contract)}</dd>
        </div>
        <div className="col-span-2 rounded-2xl bg-white/10 p-4">
          <dt className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <CurrencyDollarIcon className="w-4 h-4" /> {t("Salary")}
          </dt>
          <dd className="mt-1 font-medium">{t(opportunity.salary)}</dd>
        </div>
        <div className="col-span-2 rounded-2xl bg-white/10 p-4">
          <dt className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" /> {t("Working Hours")}
          </dt>
          <dd className="mt-1 font-medium">{t(opportunity.workingHours)}</dd>
        </div>
      </dl>

      <div className="mb-4">
        <p className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider mb-1">{t("Benefits")}</p>
        <p className="text-white/85 text-sm leading-relaxed">{t(opportunity.benefits)}</p>
      </div>
      <div className="mb-7">
        <p className="text-cm-fresh text-[11px] font-bold uppercase tracking-wider mb-1">{t("Requirements")}</p>
        <p className="text-white/85 text-sm leading-relaxed">{t(opportunity.requirements)}</p>
      </div>

      <Link href={`/vacancies/${opportunity.slug}`} className="btn-fresh group/btn mt-auto">
        {t(opportunity.ctaLabel)}
        <ArrowRightIcon className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </div>
  );
}
