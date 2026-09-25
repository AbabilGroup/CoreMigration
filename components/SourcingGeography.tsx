import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const sourceHubs = [
  { country: "Bangladesh", detail: "Construction trades, heavy equipment operators, facilities personnel" },
  { country: "India", detail: "Healthcare specialists, MEP engineers, technical trades, oil & gas trades" },
  { country: "Nepal", detail: "Hospitality staff, security personnel, general construction labor" },
  { country: "Sri Lanka", detail: "Hospitality professionals, chefs, technical logistics staff" },
];

const destinationRegions = [
  { region: "Middle East (GCC)", detail: "Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain" },
  { region: "UK & Europe", detail: "Healthcare systems, energy developments, infrastructure projects" },
];

export default function SourcingGeography() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-12 max-w-3xl" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}>
          {t("Sourcing")} <span className="italic font-bold">{t("Geography")}</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {t("Connecting South Asia's talent-sourcing regions with high-demand destination markets across the Gulf, the UK, and Europe.")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-aos="fade-up">
          <h3 className="text-xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-primary inline-block">
            {t("Source Talent Hubs")}
          </h3>
          <div className="space-y-6 mt-6">
            {sourceHubs.map((hub) => (
              <div key={hub.country} className="flex gap-4">
                <div className="w-2 h-2 mt-2 shrink-0 bg-brand-primary rounded-full" />
                <div>
                  <p className="font-bold text-brand-dark">{t(hub.country)}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(hub.detail)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-bold text-brand-dark mb-6 pb-3 border-b-2 border-brand-primary inline-block">
            {t("Destination Regions")}
          </h3>
          <div className="space-y-6 mt-6">
            {destinationRegions.map((region) => (
              <div key={region.region} className="flex gap-4">
                <div className="w-2 h-2 mt-2 shrink-0 bg-brand-primary rounded-full" />
                <div>
                  <p className="font-bold text-brand-dark">{t(region.region)}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(region.detail)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
