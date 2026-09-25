import React from "react";
import Image from "next/image";
import { ChatBubbleLeftRightIcon, ClipboardDocumentCheckIcon, EyeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const blocks = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Clear Communication From Day One",
    description:
      "Every employer engagement begins with a detailed requirement review — roles, salary structures, timelines, and compliance needs are agreed upfront, with no hidden steps added later.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Rigorous, Documented Screening",
    description:
      "Every candidate passes through trade testing, credential verification, and medical clearance before being shortlisted — giving employers confidence before they even reach the interview stage.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    icon: EyeIcon,
    title: "Full Visibility Into Compliance Status",
    description:
      "Employers and candidates receive clear updates on visa, medical, and emigration clearance status throughout processing — no unexplained delays or opaque handoffs.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
  },
  {
    icon: PaperAirplaneIcon,
    title: "Deployment Support That Doesn't Stop at the Airport",
    description:
      "Every candidate receives pre-departure orientation and is supported through arrival and initial site onboarding, reducing early-stage attrition and settling-in issues.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
];

export default function WhatYouCanExpect() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl text-brand-dark font-light"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}>
            {t("What You Can")} <span className="italic font-bold">{t("Expect")}</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {blocks.map((block, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={block.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
                data-aos="fade-up">
                <div className="relative w-full md:w-1/2 h-64 md:h-80">
                  <Image src={block.image} alt={t(block.title)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <block.icon className="w-10 h-10 text-brand-primary mb-5" />
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{t(block.title)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(block.description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
