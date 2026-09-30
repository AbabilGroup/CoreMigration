import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  IdentificationIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import CursorCircle from "./CursorCircle";
import { useLanguage } from "@/context/LanguageContext";

const models = [
  {
    title: "Direct & Specialist Recruitment",
    description:
      "Tailored sourcing for technical, supervisory, and specialized roles. Candidates undergo multi-stage technical screening, background checks, and embassy attestation before placement.",
    focus: "Healthcare, Engineering, Hospitality, Oil & Gas",
    cta: "Explore Direct Recruitment",
    href: "/our-solutions/direct-specialist-recruitment",
    icon: IdentificationIcon,
  },
  {
    title: "Bulk Mobilization",
    description:
      "High-volume recruitment drives to mobilize large groups of trade-tested workers on tight project timelines — multi-day testing events, batch visa filings, and coordinated group travel.",
    focus: "Construction, Infrastructure, Facility Management, Logistics",
    cta: "Plan a Mass Mobilization Drive",
    href: "/our-solutions/bulk-mobilization",
    icon: UserGroupIcon,
  },
];

// Card color themes: deep green, then orange.
const themes = [
  {
    card: "bg-brand-primary shadow-brand-primary/60",
    circle: "border-brand-accent bg-brand-accent/30",
    ring: "border-brand-accent/40",
    blob: "bg-brand-secondary/60",
    watermark: "text-white/5",
    iconTile: "bg-brand-accent text-brand-primary shadow-brand-accent/30",
    focus: "bg-white/10 text-brand-accent",
    button: "btn-primary",
  },
  {
    card: "bg-linear-to-br from-brand-orange to-brand-orange-dark shadow-brand-orange/60",
    circle: "border-white bg-white/25",
    ring: "border-white/30",
    blob: "bg-white/10",
    watermark: "text-white/10",
    iconTile: "bg-white text-brand-orange shadow-black/10",
    focus: "bg-white/15 text-white",
    button: "btn bg-white text-brand-orange hover:bg-brand-cream",
  },
];

export default function SourcingDeploymentModels() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-12 max-w-3xl" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}>
          {t("Sourcing & Deployment")} <span className="italic font-bold">{t("Models")}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model, i) => {
          const theme = themes[i % themes.length];
          return (
            <div
              key={model.title}
              className={`card-hover group relative isolate flex flex-col overflow-hidden rounded-3xl p-8 md:p-10 text-white shadow-[0_24px_60px_-24px] ${theme.card}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <CursorCircle colorClassName={theme.circle} />
              {/* Background shapes */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border-[3px] ${theme.ring}`}
              />
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-24 -right-10 -z-10 h-72 w-72 rounded-full ${theme.blob}`}
              />
              <model.icon
                aria-hidden="true"
                className={`pointer-events-none absolute bottom-6 right-6 -z-10 h-32 w-32 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 ${theme.watermark}`}
              />

              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${theme.iconTile}`}>
                <model.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold leading-snug">{t(model.title)}</h3>
              <p className="mb-6 leading-relaxed text-white/85">{t(model.description)}</p>
              <p className={`mb-8 self-start rounded-2xl px-4 py-2 text-xs font-bold uppercase tracking-wider ${theme.focus}`}>
                {t("Focus")}: {t(model.focus)}
              </p>
              <Link href={model.href} className={`group/btn mt-auto self-start ${theme.button}`}>
                {t(model.cta)}
                <ArrowRightIcon className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
