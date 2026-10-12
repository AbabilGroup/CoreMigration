import React from "react";
import Image from "next/image";
import { ChatBubbleLeftRightIcon, ClipboardDocumentCheckIcon, EyeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const blocks = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Clear Communication From Day One",
    description:
      "Every employer engagement begins with a detailed requirement review — roles, salary structures, timelines, and compliance needs are agreed upfront, with no hidden steps added later.",
    image: "https://images.pexels.com/photos/4342127/pexels-photo-4342127.jpeg",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Rigorous, Documented Screening",
    description:
      "Every candidate passes through trade testing, credential verification, and medical clearance before being shortlisted — giving employers confidence before they even reach the interview stage.",
    image: "https://images.pexels.com/photos/5989931/pexels-photo-5989931.jpeg",
  },
  {
    icon: EyeIcon,
    title: "Full Visibility Into Compliance Status",
    description:
      "Employers and candidates receive clear updates on visa, medical, and emigration clearance status throughout processing — no unexplained delays or opaque handoffs.",
    image: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg",
  },
  {
    icon: PaperAirplaneIcon,
    title: "Deployment Support That Doesn't Stop at the Airport",
    description:
      "Every candidate receives pre-departure orientation and is supported through arrival and initial site onboarding, reducing early-stage attrition and settling-in issues.",
    image: "https://images.pexels.com/photos/12717327/pexels-photo-12717327.jpeg",
  },
];

export default function WhatYouCanExpect() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading center className="mb-16">
          {t("What You Can")} {t("Expect")}
        </SectionHeading>

        <div className="space-y-16 md:space-y-24">
          {blocks.map((block, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={block.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}>
                <div
                  className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-[28px]"
                  data-aos={isReversed ? "reveal-right" : "reveal-left"}>
                  <Image src={block.image} alt={t(block.title)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div
                  className="w-full md:w-1/2"
                  data-aos={isReversed ? "fade-right" : "fade-left"}
                  data-aos-delay="250">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cm-fresh text-white"><block.icon className="h-7 w-7" /></span>
                  <h3 className="mb-4 text-2xl md:text-[28px] font-semibold leading-tight text-cm-deep">{t(block.title)}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-cm-ink">{t(block.description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
