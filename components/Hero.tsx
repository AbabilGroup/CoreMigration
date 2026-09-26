import { useRef } from "react";
import Link from "next/link";
import useHeroAnimation from "@/hooks/useHeroAnimation";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const container = useRef<HTMLDivElement>(null);

  useHeroAnimation(container);

  return (
    <div
      ref={container}
      className="relative w-full h-dvh overflow-hidden bg-gray-900">
      <video
        data-hero-media
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover will-change-transform">
        <source src="/CoreMigration.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

      <div
        data-hero-content
        className="relative z-10 flex h-full items-end px-6 md:px-16 pb-20 md:pb-28">
        <div className="max-w-3xl text-white">
          <h1
            data-hero-item
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t("Cross-Border Workforce Solutions, Delivered Without the Friction")}
          </h1>
          <p
            data-hero-item
            className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
            {t("Core Migration connects employers across the Middle East, the UK, and Europe with trade-tested, vetted, and job-ready professionals from Bangladesh, India, Nepal, and Sri Lanka. We manage the entire journey — sourcing, trade testing, visa clearance, and deployment.")}
          </p>
          <div data-hero-item className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors duration-300">
              {t("Submit a Vacancy")}
            </Link>
            <Link
              href="/vacancies"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-colors duration-300">
              {t("View Overseas Vacancies")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
