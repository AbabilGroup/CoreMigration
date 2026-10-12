import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

export default function RegisteredOffice() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6" data-aos="fade-up">
        <div className="flex items-start gap-5 rounded-[28px] bg-cm-tile p-8">
          <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-cm-fresh text-white">
            <MapPinIcon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="mb-2 text-xl font-bold text-cm-deep">{t("Registered Office")}</h3>
            <p className="text-base leading-relaxed text-cm-ink">
              {t("Core Migration")}
              <br />
              176 Crossbank Street, Oldham, England, OL8 1HE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
