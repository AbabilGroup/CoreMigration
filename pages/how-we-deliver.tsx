import Head from "next/head";
import HowWeDeliverHero from "@/components/HowWeDeliverHero";
import WhatYouCanExpect from "@/components/WhatYouCanExpect";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

export default function HowWeDeliver() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("How We Deliver - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration delivers workforce solutions through a consistent, transparent process — from first requirement to final deployment.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <HowWeDeliverHero />

        <div data-aos="fade-up">
          <WhatYouCanExpect />
        </div>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Start Building"
            headlineAccent="Your Workforce"
            primaryCta={{ label: "Request an Employer Consultation", href: "/contact-us" }}
            secondaryCta={{ label: "Submit a Vacancy", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
