import React from "react";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

interface SolutionDetailProps {
  keyFeatures: string[];
  targetRoles: { group: string; roles: string }[];
  primaryCta: string;
}

/** Key features + target roles body shared by the individual solution pages. */
export default function SolutionDetail({ keyFeatures, targetRoles, primaryCta }: SolutionDetailProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
        <div className="mx-auto max-w-300 px-6">
          <SectionHeading>{t("Key Features")}</SectionHeading>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyFeatures.map((feature, i) => (
              <li
                key={feature}
                className="flex items-start gap-3.5 rounded-[20px] bg-cm-tile px-6 py-5 font-semibold text-cm-deep"
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 80}>
                <span className="mt-0.5 flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[10px] bg-cm-fresh text-white">
                  <CheckIcon className="h-5 w-5 stroke-2" />
                </span>
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-300 px-6">
          <SectionHeading>{t("Target Roles")}</SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetRoles.map((group, i) => (
              <div
                key={group.group}
                className={`relative isolate overflow-hidden rounded-[28px] p-8 text-white ${i % 2 ? "bg-cm-night" : "bg-cm-card"}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-45 w-45 rounded-full bg-cm-fresh/20"
                />
                <h3 className="mb-3 text-xl md:text-[22px] font-semibold">{t(group.group)}</h3>
                <p className="text-base leading-relaxed text-white/90">{t(group.roles)}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
            <Link href="/contact-us" className="btn-fresh">
              {t(primaryCta)}
            </Link>
            <Link href="/our-solutions#recruitment-roadmap" className="btn-lg border-cm-deep text-cm-deep hover:bg-cm-deep hover:text-white">
              {t("View Our Recruitment Roadmap")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
