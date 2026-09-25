import Head from "next/head";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Europe() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Europe - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration supports European employers seeking trade-tested professionals from South Asia across construction, healthcare, and industrial sectors.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Extending Verified Workforce Solutions Across")}
          titleAccent={t("Europe")}
          subtitle={t("Core Migration supports European employers seeking trade-tested professionals from South Asia across construction, healthcare, and industrial sectors, with the same end-to-end compliance and deployment management used across our GCC and UK operations.")}
          image="https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Regional Coverage"), href: "/regional-coverage" },
            { label: t("Europe") },
          ]}
        />

        <div data-aos="fade-up">
          <MobileAppSection
            headline="Discuss European"
            headlineAccent="Workforce Needs"
            primaryCta={{ label: "Discuss European Workforce Needs", href: "/contact-us" }}
            secondaryCta={{ label: "View Overseas Vacancies", href: "/vacancies" }}
          />
        </div>
      </main>
    </>
  );
}
