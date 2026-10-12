import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutIntro() {
  const { t } = useLanguage();

  return (
    <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div data-aos="fade-right">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cm-fresh">{t("WHO WE ARE")}</p>
          <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-cm-deep">
            {t("A Commitment to")} {t("Better careers")}
          </h2>
        </div>
        <div className="rounded-4xl bg-cm-card p-8 md:p-12 text-white" data-aos="fade-left">
          <p className="mb-5 text-base md:text-lg font-semibold leading-relaxed">
            {t("Core Migration manages every phase of the cross-border recruitment cycle — sourcing, trade testing, document attestation, visa processing, emigration compliance, and group travel — removing the operational complexity of international staffing for employers across the Middle East, the UK, and Europe.")}
          </p>
          <p className="text-base leading-relaxed text-white/90">
            {t("We source professionals from Bangladesh, India, Nepal, and Sri Lanka across construction, healthcare, hospitality, energy, and facility management, matching verified candidates to employer requirements with full legal and medical compliance at every stage.")}
          </p>
        </div>
      </div>
    </section>
  );
}
