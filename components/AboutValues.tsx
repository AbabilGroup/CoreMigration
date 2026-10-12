import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  MagnifyingGlassCircleIcon,
  ScaleIcon,
  ClockIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";
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
    <section className="bg-cm-mint py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading intro={t("Our values define how we operate, how we serve, and how we grow with our global partners.")}>
          {t("What Drives")} {t("Core Migration")}
        </SectionHeading>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="rounded-[28px] border-2 border-cm-hover bg-white p-8"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}>
              <span className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-cm-fresh text-white">
                <value.icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2.5 text-xl md:text-[22px] font-semibold text-cm-deep">{t(value.title)}</h3>
              <p className="text-base leading-relaxed text-cm-ink">{t(value.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
