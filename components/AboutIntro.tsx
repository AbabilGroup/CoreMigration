import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutIntro() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-24"
          data-aos="fade-up">
          <div className="lg:w-5/12">
            <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
              {t("WHO WE ARE")}
            </p>
            <h2
              className="text-4xl md:text-[3.2rem] leading-tight text-brand-primary font-light"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}>
              {t("A Commitment to")}{" "}
              <span className="italic">{t("Better careers")}</span>
            </h2>
          </div>

          <div className="lg:w-7/12">
            <p
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}>
              {t("Core Migration manages every phase of the cross-border recruitment cycle — sourcing, trade testing, document attestation, visa processing, emigration compliance, and group travel — removing the operational complexity of international staffing for employers across the Middle East, the UK, and Europe.")}
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {t("We source professionals from Bangladesh, India, Nepal, and Sri Lanka across construction, healthcare, hospitality, energy, and facility management, matching verified candidates to employer requirements with full legal and medical compliance at every stage.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
