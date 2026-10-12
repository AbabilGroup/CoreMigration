import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface GlobalCTAProps {
  headline?: string;
  headlineAccent?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Closing call-to-action: mint band, centered heading, deep + fresh buttons. */
const GlobalCTA = ({
  headline = "Ready to Take the",
  headlineAccent = "Next Step?",
  description = "Whether you are seeking global career opportunities or looking for reliable international hiring solutions, Core Migration is here to guide you every step of the way.",
  primaryCta = { label: "Get in Touch", href: "/contact-us" },
  secondaryCta = { label: "View Vacancies", href: "/vacancies" },
}: GlobalCTAProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-cm-mint py-16 md:py-24 text-center">
      <div className="mx-auto max-w-300 px-6" data-aos="blur-in">
        <h2 className="text-3xl md:text-[44px] font-bold leading-tight text-cm-deep">
          {t(headline)} {headlineAccent && t(headlineAccent)}
        </h2>
        {description && (
          <p className="mx-auto mt-4.5 max-w-180 text-base md:text-lg leading-relaxed text-cm-ink">
            {t(description)}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link href={primaryCta.href} className="btn-deep">
            {t(primaryCta.label)}
          </Link>
          <Link href={secondaryCta.href} className="btn-fresh">
            {t(secondaryCta.label)}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
