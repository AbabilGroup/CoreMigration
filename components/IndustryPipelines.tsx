import React from "react";
import Link from "next/link";
import {
  HeartIcon,
  BuildingOffice2Icon,
  FireIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const pipelines = [
  {
    icon: HeartIcon,
    title: "Healthcare & Life Sciences",
    description: "Registered Nurses, General Practitioners, Lab Technicians (Prometric & Dataflow support)",
    href: "/industries#healthcare-life-sciences",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Heavy Construction & Infrastructure",
    description: "Civil Engineers, Masons, Steel Fixers, Carpenters, Heavy Plant Operators",
    href: "/industries#heavy-construction-infrastructure",
  },
  {
    icon: FireIcon,
    title: "Oil, Gas & Energy",
    description: "Certified 6G Welders, Pipe Fabricators, Riggers, Mechanical Fitters",
    href: "/industries#oil-gas-energy",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Hospitality & Facility Management",
    description: "Chefs, Front-of-House, HVAC Technicians, Plumbers, Cleaners",
    href: "/industries#hospitality-catering",
  },
];

export default function IndustryPipelines() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-12 max-w-3xl" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}>
          {t("Featured")} <span className="italic font-bold">{t("Industry Pipelines")}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipelines.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block bg-zinc-50 border border-zinc-200 p-6 hover:bg-brand-dark transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}>
            <item.icon className="w-10 h-10 text-brand-primary mb-5" />
            <h3 className="text-lg font-bold text-brand-dark group-hover:text-white mb-3 transition-colors">
              {t(item.title)}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
              {t(item.description)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
