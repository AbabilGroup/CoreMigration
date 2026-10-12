import React from "react";
import Link from "next/link";
import {
  HeartIcon,
  BuildingOffice2Icon,
  FireIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const industries = [
  {
    icon: HeartIcon,
    title: "Healthcare",
    description: "Nurses, doctors, lab technicians",
    href: "/industries#healthcare-life-sciences",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Construction",
    description: "Engineers, masons, plant operators",
    href: "/industries#heavy-construction-infrastructure",
  },
  {
    icon: FireIcon,
    title: "Oil, Gas & Energy",
    description: "6G welders, fabricators, riggers",
    href: "/industries#oil-gas-energy",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Hospitality & FM",
    description: "Chefs, front-of-house, technicians",
    href: "/industries#hospitality-catering",
  },
];

export default function IndustryPipelines() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-cm-deep" data-aos="fade-up">
          {t("Industries We Serve")}
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-[28px] bg-cm-tile px-6 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-cm-hover"
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <span className="mx-auto mb-4 flex h-15 w-15 items-center justify-center rounded-full bg-cm-fresh text-white">
                <item.icon className="h-7 w-7" />
              </span>
              <b className="mb-2 block text-xl text-cm-deep">{t(item.title)}</b>
              <span className="text-base text-cm-ink">{t(item.description)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
