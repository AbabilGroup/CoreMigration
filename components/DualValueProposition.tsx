import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CursorCircle from "./CursorCircle";
import { useLanguage } from "@/context/LanguageContext";

export default function DualValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-cream/60">
      <div className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employers — deep green */}
          <div
            className="card-hover group relative isolate overflow-hidden rounded-3xl bg-brand-primary p-8 md:p-10 text-white shadow-[0_24px_60px_-24px] shadow-brand-primary/60"
            data-aos="fade-up">
            <CursorCircle />
            {/* Background shapes */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border-[3px] border-brand-accent/40"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-10 -z-10 h-72 w-72 rounded-full bg-brand-secondary/60"
            />
            <BriefcaseIcon
              aria-hidden="true"
              className="pointer-events-none absolute bottom-6 right-6 -z-10 h-32 w-32 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
            />

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-accent text-brand-primary mb-6 shadow-lg shadow-brand-accent/30">
              <BriefcaseIcon className="w-7 h-7" />
            </div>
            <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              {t("For Employers")}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              {t("Rapid Scaling Without the Administrative Burden")}
            </h3>
            <p className="text-white/80 leading-relaxed mb-8">
              {t("Sourcing international manpower involves regulatory steps, embassy attestation, and skill verification. Core Migration acts as your single point of accountability — operating trade-testing coordination, medical processing (GAMCA/Wafid), emigration clearance (BMET/Protector), and group flight logistics.")}
            </p>
            <Link href="/our-solutions" className="btn-primary group/btn">
              {t("Review Employer Solutions")}
              <ArrowRightIcon className="w-4 h-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Candidates — orange */}
          <div
            className="card-hover group relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-brand-orange to-brand-orange-dark p-8 md:p-10 text-white shadow-[0_24px_60px_-24px] shadow-brand-orange/60"
            data-aos="fade-up"
            data-aos-delay="100">
            <CursorCircle colorClassName="border-white bg-white/25" />
            {/* Background shapes */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border-[3px] border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-10 -z-10 h-72 w-72 rounded-full bg-white/10"
            />
            <UserIcon
              aria-hidden="true"
              className="pointer-events-none absolute bottom-6 right-6 -z-10 h-32 w-32 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
            />

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-brand-orange mb-6 shadow-lg shadow-black/10">
              <UserIcon className="w-7 h-7" />
            </div>
            <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
              {t("For Candidates")}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              {t("A Transparent Path to Work Abroad")}
            </h3>
            <p className="text-white/85 leading-relaxed mb-8">
              {t("We connect skilled tradespeople, technical operators, and healthcare professionals from South Asia with verified international employers, guiding every candidate through licensing, attestation, visa stamping, and pre-departure orientation.")}
            </p>
            <Link
              href="/vacancies"
              className="btn group/btn bg-white text-brand-orange hover:bg-brand-cream">
              {t("Browse Verified Vacancies")}
              <ArrowRightIcon className="w-4 h-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
