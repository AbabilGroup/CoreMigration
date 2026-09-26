import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import CursorCircle from "./CursorCircle";
import { useLanguage } from "@/context/LanguageContext";

export default function RegisteredOffice() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12" data-aos="fade-left">
        <div className="card-hover relative isolate overflow-hidden flex items-start gap-5 border border-gray-200 p-8">
          <CursorCircle />
          <div className="bg-brand-primary/10 p-3 rounded-full shrink-0">
            <MapPinIcon className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h3 className="font-bold text-brand-dark text-lg mb-2">
              {t("Registered Office")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
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
