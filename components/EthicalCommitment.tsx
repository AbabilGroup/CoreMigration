import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

export default function EthicalCommitment() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center" data-aos="fade-up">
      <ShieldCheckIcon className="w-12 h-12 text-brand-primary mx-auto mb-6" />
      <h2
        className="text-3xl md:text-4xl text-brand-dark font-light mb-6"
        style={{ fontFamily: "var(--font-playfair-display), serif" }}>
        {t("The Core Migration")} <span className="italic font-bold">{t("Promise")}</span>
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        {t("We operate under strict international labor-compliance principles — transparent recruitment, legal workplace contracts, verified employer conditions, and adherence to host-country immigration law.")}
      </p>
    </section>
  );
}
