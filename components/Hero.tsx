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
      className="relative w-full min-h-dvh overflow-hidden bg-brand-primary">
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
      <div className="absolute inset-0 bg-linear-to-t from-brand-primary/95 via-brand-primary/70 to-brand-primary/40" />
      {/* Decorative ring + blob, DEKRA-style */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-136 w-136 rounded-full border-2 border-brand-accent/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-secondary/70"
      />

      <div
        data-hero-content
        className="relative z-10 flex min-h-dvh items-end px-5 sm:px-6 md:px-16 pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-28">
        <div className="max-w-3xl text-white">
          <h1
            data-hero-item
            className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-6xl lg:text-7xl md:leading-tight font-bold mb-4 md:mb-6">
            {t(
              "Cross-Border Workforce Solutions, Delivered Without the Friction",
            )}
          </h1>
          <p
            data-hero-item
            className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8 max-w-2xl">
            {t(
              "Core Migration connects employers across the Middle East, the UK, and Europe with trade-tested, vetted, and job-ready professionals from Bangladesh, India, Nepal, and Sri Lanka. We manage the entire journey — sourcing, trade testing, visa clearance, and deployment.",
            )}
          </p>
          <div data-hero-item className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact-us" className="btn-primary w-full sm:w-auto">
              {t("Submit a Vacancy")}
            </Link>
            <Link href="/vacancies" className="btn-outline-light w-full sm:w-auto">
              {t("View Overseas Vacancies")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
