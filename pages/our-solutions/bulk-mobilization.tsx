import Head from "next/head";
import SolutionDetail from "@/components/SolutionDetail";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const keyFeatures = [
  "Rapid activation of sourcing networks across South Asia for large candidate pools",
  "Multi-day trade-testing events for employer delegates to observe candidates directly",
  "Batch processing of passports, medicals, visas, and emigration clearances",
  "Coordinated group travel, including chartered flight arrangements where required",
  "Pre-departure briefings covering site safety, camp rules, and destination labor law",
];

const targetRoles = [
  {
    group: "Construction Trades",
    roles: "Masons, Steel Fixers, Formwork Carpenters, Scaffolders, Heavy Equipment Operators",
  },
  {
    group: "Industrial & Energy Trades",
    roles: "Certified 6G Pipe Welders, Fitters, Riggers, Industrial Electricians",
  },
  {
    group: "Facility & Logistics Trades",
    roles: "Commercial Cleaners, Security Guards, HVAC Technicians, Warehouse Packers, Forklift Operators",
  },
];

export default function BulkMobilization() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Bulk Mobilization - Core Migration")}</title>
        <meta
          name="description"
          content={t("For large-scale infrastructure, industrial, and facility management projects where time-to-site is critical.")}
        />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t("Bulk")}
          titleAccent={t("Mobilization")}
          subtitle={t("For large-scale infrastructure, industrial, and facility management projects where time-to-site is critical.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Bulk Mobilization") },
          ]}
        />

        <SolutionDetail
          keyFeatures={keyFeatures}
          targetRoles={targetRoles}
          primaryCta="Start a Mobilization Campaign"
        />

        <div>
          <MobileAppSection
            headline="Discuss Your"
            headlineAccent="Workforce Requirements"
            primaryCta={{ label: "Submit Your Demand Specifications", href: "/contact-us" }}
            secondaryCta={{ label: "Speak to a Workforce Consultant", href: "/contact-us" }}
          />
        </div>
      </main>
    </>
  );
}
