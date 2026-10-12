import React from "react";
import Link from "next/link";
import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const quickLinks = [
  { label: "Submit a Vacancy", href: "/contact-us", icon: BriefcaseIcon },
  { label: "Browse Vacancies", href: "/vacancies", icon: MagnifyingGlassIcon },
  { label: "Register as a Candidate", href: "/vacancies/register", icon: UserPlusIcon },
  { label: "View Industries", href: "/industries", icon: BuildingOffice2Icon },
  { label: "See Regional Coverage", href: "/regional-coverage", icon: GlobeAltIcon },
  { label: "See How We Deliver", href: "/how-we-deliver", icon: ClipboardDocumentCheckIcon },
];

const panels = [
  {
    id: "employers",
    title: "For Employers",
    text: "Rapid scaling without the paperwork. Core Migration is your single point of accountability: trade testing, medical processing, emigration clearance, and group flight logistics.",
    cta: "Review Employer Solutions",
    href: "/our-solutions",
    bg: "bg-cm-card",
  },
  {
    id: "candidates",
    title: "For Candidates",
    text: "A clear path to work abroad. We guide every candidate through licensing, attestation, visa stamping, and pre-departure orientation with verified employers.",
    cta: "Browse Verified Vacancies",
    href: "/vacancies",
    bg: "bg-cm-night",
  },
];

export default function DualValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3.5 rounded-[20px] bg-cm-tile px-6 py-5.5 font-bold text-cm-deep transition-colors duration-200 hover:bg-cm-hover"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 80}>
              <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[10px] bg-cm-fresh text-white">
                <link.icon className="h-5 w-5 stroke-2" />
              </span>
              {t(link.label)}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
          {panels.map((panel, i) => (
            <div
              key={panel.id}
              id={panel.id}
              className={`relative isolate overflow-hidden rounded-4xl p-8 md:p-12 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,77,59,0.25)] ${panel.bg}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-55 w-55 rounded-full bg-cm-fresh/20"
              />
              <h3 className="mb-4 text-2xl md:text-[28px] font-semibold leading-tight">{t(panel.title)}</h3>
              <p className="mb-7 text-base md:text-lg leading-relaxed">{t(panel.text)}</p>
              <Link href={panel.href} className="btn-fresh w-full sm:w-auto">
                {t(panel.cta)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
