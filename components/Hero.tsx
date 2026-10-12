import { useRef } from "react";
import Link from "next/link";
import useHeroAnimation from "@/hooks/useHeroAnimation";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const container = useRef<HTMLDivElement>(null);

  useHeroAnimation(container);

  return (
    <section
      ref={container}
      className="relative isolate overflow-hidden bg-cm-deep text-center text-white pt-36 pb-24 md:pt-52 md:pb-36">
      {/* Decorative arc (left) and diagonal line (bottom right) */}
      <div data-hero-media aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute -left-30 top-10 h-225 w-130 -rotate-8 rounded-r-[260px] border-[3px] border-cm-fresh opacity-55" />
        <span className="absolute -bottom-65 -right-50 h-130 w-175 -rotate-24 border-t-[3px] border-cm-fresh opacity-50" />
      </div>

      <div data-hero-content className="mx-auto max-w-300 px-6">
        <h1
          data-hero-item
          className="mx-auto mb-5 max-w-225 text-4xl md:text-[56px] font-bold leading-[1.2]">
          {t("Cross-Border Workforce Solutions, Delivered Without the Friction")}
        </h1>
        <p
          data-hero-item
          className="mx-auto mb-10 max-w-205 text-lg md:text-2xl font-semibold leading-relaxed">
          {t("We connect employers across the Middle East, the UK, and Europe with trade-tested, vetted, job-ready professionals from Bangladesh, India, Nepal, and Sri Lanka.")}
        </p>
        <div data-hero-item className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link href="/contact-us" className="btn-fresh">
            {t("Submit a Vacancy")}
          </Link>
          <Link href="/vacancies" className="btn-ghost-light">
            {t("View Overseas Vacancies")}
          </Link>
        </div>
      </div>
    </section>
  );
}
