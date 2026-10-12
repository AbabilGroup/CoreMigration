import React from "react";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const promises = [
  { label: "Rigorous trade testing before shortlisting", icon: ClipboardDocumentCheckIcon },
  { label: "Full documentation handled in-house", icon: DocumentTextIcon },
  { label: "One point of contact for employers", icon: ChatBubbleLeftRightIcon },
];

export default function EthicalCommitment() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-cm-deep py-16 md:py-24 text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-30 -top-30 -z-10 h-105 w-105 rounded-full bg-cm-glow opacity-25"
      />
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div data-aos="fade-up">
          <h2 className="mb-5 text-3xl md:text-[44px] font-bold leading-tight">
            {t("Our Ethical Recruitment Promise")}
          </h2>
          <p className="mb-8 text-base md:text-lg leading-relaxed">
            {t("We work under strict labor-compliance principles: transparent recruitment, legal workplace contracts, verified employer conditions, and respect for host-country immigration law.")}
          </p>
          <Link href="/how-we-deliver" className="btn-fresh w-full sm:w-auto">
            {t("See How We Deliver")}
          </Link>
        </div>
        <div className="grid gap-4.5">
          {promises.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3.5 rounded-3xl bg-white px-6 py-5 font-bold text-cm-deep"
              data-aos="fade-left"
              data-aos-delay={i * 100}>
              <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[10px] bg-cm-fresh text-white">
                <item.icon className="h-5 w-5 stroke-2" />
              </span>
              {t(item.label)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
