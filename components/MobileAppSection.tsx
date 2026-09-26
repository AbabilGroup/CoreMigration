import React from "react";
import Link from "next/link";
import FloatingCircles from "./FloatingCircles";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

interface GlobalCTAProps {
  headline?: string;
  headlineAccent?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const GlobalCTA = ({
  headline = "Ready to Take the",
  headlineAccent = "Next Step?",
  description = "Whether you are seeking global career opportunities or looking for reliable international hiring solutions, Core Migration is here to guide you every step of the way.",
  primaryCta = { label: "Get in Touch", href: "/contact-us" },
  secondaryCta = { label: "View Vacancies", href: "/vacancies" },
}: GlobalCTAProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate w-full bg-brand-dark py-16 md:py-24 overflow-hidden">
      <FloatingCircles />
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-serif mb-4 md:mb-6">
              {t(headline)}{" "}
              <span className="italic text-brand-primary">{t(headlineAccent)}</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t(description)}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href={primaryCta.href}
              className="w-full sm:w-auto flex items-center justify-center bg-brand-primary text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-primary/90 transition-colors">
              {t(primaryCta.label)}
              <ArrowRightIcon className="w-4 h-4 ml-2 stroke-2" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
              {t(secondaryCta.label)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
