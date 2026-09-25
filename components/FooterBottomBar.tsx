"use client";

import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FooterSitemap from "./FooterSitemap";
import SocialLinks from "./SocialLinks";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";

const FooterBottomBar = () => {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="w-full hidden lg:flex flex-col">
      <div className="w-full bg-[#2F9BA0] text-white py-5 px-6 md:px-12 border-t border-white/5 order-1 z-10 relative">
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mt-1">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span className="text-[11px] font-semibold tracking-wide mt-1">
              {t("© Copyright 2026 Core Migration All rights reserved.")}
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <SocialLinks
              className="text-white"
              iconClassName="w-3.5 h-3.5 hover:text-[#8fa0a8] transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-10 mt-2 lg:mt-0">
            <a
              href="mailto:info@coremigration.eu"
              className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <MdEmail className="w-3.5 h-3.5 stroke-[2.5] text-[#8fa0a8]" />
              <span className="text-[11px] font-bold tracking-widest">
                info@coremigration.eu
              </span>
            </a>

            <a
              href="mailto:info@coremigration.eu"
              className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <EnvelopeIcon className="w-3.75 h-3.75 stroke-2 text-[#8fa0a8]" />
              <span className="text-[11px] font-bold tracking-widest">
                {t("ENQUIRE NOW")}
              </span>
            </a>

            <button
              onClick={() => setIsSitemapOpen(!isSitemapOpen)}
              className="border border-white hover:bg-white hover:text-[#001f2a] transition-colors duration-300 px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase ml-0 sm:ml-4 cursor-pointer">
              {isSitemapOpen ? t("COLLAPSE SITEMAP -") : t("EXPAND SITEMAP +")}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-white order-2 grid transition-all duration-700 ease-in-out ${
          isSitemapOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <FooterSitemap />
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBar;
