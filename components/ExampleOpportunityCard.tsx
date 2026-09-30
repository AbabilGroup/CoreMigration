import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import CursorCircle from "./CursorCircle";
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
      className="card-hover group relative isolate flex flex-col overflow-hidden rounded-3xl bg-brand-primary p-7 md:p-8 text-white shadow-[0_24px_60px_-24px] shadow-brand-primary/60"
      data-aos="zoom-in">
      <CursorCircle />
      {/* Background shapes */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border-[3px] border-brand-accent/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-16 -z-10 h-72 w-72 rounded-full bg-brand-secondary/50"
      />
      <BriefcaseIcon
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-6 -z-10 h-32 w-32 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl md:text-2xl font-bold leading-snug">{t(opportunity.title)}</h3>
        <span className="shrink-0 rounded-full bg-brand-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary whitespace-nowrap">
          {t("Example Opportunity")}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 mb-6">
        <span className="flex items-center gap-1.5">
          <BriefcaseIcon className="w-4 h-4 text-brand-accent" /> {t(opportunity.industry)}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPinIcon className="w-4 h-4 text-brand-accent" /> {t(opportunity.destination)}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-3 text-sm mb-6">
        <div className="rounded-xl bg-white/10 p-3">
          <dt className="text-brand-accent text-[11px] font-bold uppercase tracking-wider">{t("Source Region")}</dt>
          <dd className="mt-1 font-medium">{t(opportunity.sourceRegion)}</dd>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <dt className="text-brand-accent text-[11px] font-bold uppercase tracking-wider">{t("Contract")}</dt>
          <dd className="mt-1 font-medium">{t(opportunity.contract)}</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-white/10 p-3">
          <dt className="text-brand-accent text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <CurrencyDollarIcon className="w-4 h-4" /> {t("Salary")}
          </dt>
          <dd className="mt-1 font-medium">{t(opportunity.salary)}</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-white/10 p-3">
          <dt className="text-brand-accent text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" /> {t("Working Hours")}
          </dt>
          <dd className="mt-1 font-medium">{t(opportunity.workingHours)}</dd>
        </div>
      </dl>

      <div className="mb-4">
        <p className="text-brand-accent text-[11px] font-bold uppercase tracking-wider mb-1">{t("Benefits")}</p>
        <p className="text-white/85 text-sm leading-relaxed">{t(opportunity.benefits)}</p>
      </div>
      <div className="mb-7">
        <p className="text-brand-accent text-[11px] font-bold uppercase tracking-wider mb-1">{t("Requirements")}</p>
        <p className="text-white/85 text-sm leading-relaxed">{t(opportunity.requirements)}</p>
      </div>

      <Link href={`/vacancies/${opportunity.slug}`} className="btn-primary group/btn mt-auto">
        {t(opportunity.ctaLabel)}
        <ArrowRightIcon className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </div>
  );
}
