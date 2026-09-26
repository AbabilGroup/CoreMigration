import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  MagnifyingGlassCircleIcon,
  ScaleIcon,
  ClockIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const values = [
  {
    icon: HeartIcon,
    title: "People First",
    description:
      "Every decision centers on treating candidates and clients with dignity, respect, and genuine care.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    description: "Transparent, honest, and accountable in every interaction.",
  },
  {
    icon: MagnifyingGlassCircleIcon,
    title: "Precision",
    description:
      "Rigorous trade testing and multi-stage screening to match candidates exactly to job requirements.",
  },
  {
    icon: ScaleIcon,
    title: "Compliance",
    description:
      "Strict adherence to host-country immigration mandates and source-country emigration law (including BMET requirements).",
  },
  {
    icon: ClockIcon,
    title: "Reliability",
    description:
      "Structured processes designed to remove delays and administrative friction from international hiring.",
  },
  {
    icon: HandRaisedIcon,
    title: "Responsibility",
    description: "Commitment to ethical recruitment and fair treatment of every candidate placed.",
  },
];

export default function AboutValues() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-14" data-aos="fade-up">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
            {t("OUR VALUES")}
          </p>
          <h2
            className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            {t("What Drives")} <span className="italic font-bold">{t("Core Migration")}</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            {t("Our values define how we operate, how we serve, and how we grow with our global partners.")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-hover border border-gray-200 rounded-sm p-8 flex flex-col items-start group"
              data-aos="fade-up"
              data-aos-delay={index * 80}>
              <value.icon className="w-10 h-10 text-[#006A80] mb-5 stroke-1 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-brand-dark font-bold text-lg mb-3">
                {t(value.title)}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
