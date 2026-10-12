import Head from "next/head";
import SolutionDetail from "@/components/SolutionDetail";
import ServicesHero from "@/components/ServicesHero";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

const keyFeatures = [
  "Targeted sourcing of engineers, project managers, site supervisors, and clinical staff",
  "Practical trade and skill assessments at authorized testing centers",
  "Licensure and qualification support (Prometric, Dataflow, and relevant certification boards)",
  "Full credential attestation through relevant ministries and embassies",
  "Employer-led final interviews, virtual or in-person",
];

const targetRoles = [
  {
    group: "Healthcare",
    roles:
      "Registered Nurses, ER/ICU Specialists, General Practitioners, Laboratory Technicians",
  },
  {
    group: "Engineering & Technical",
    roles:
      "Civil Engineers, MEP Managers, Site Supervisors, Quality Control Inspectors",
  },
  {
    group: "Hospitality Leadership",
    roles:
      "Executive Chefs, Restaurant Managers, Front Office Supervisors, Head Housekeepers",
  },
];

export default function DirectSpecialistRecruitment() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Direct & Specialist Recruitment - Core Migration")}</title>
        <meta
          name="description"
          content={t(
            "For companies seeking qualified white-collar professionals, technical experts, and licensed healthcare staff, with rigorous vetting to ensure immediate productivity on placement.",
          )}
        />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t("Direct &")}
          titleAccent={t("Specialist Recruitment")}
          subtitle={t(
            "For companies seeking qualified white-collar professionals, technical experts, and licensed healthcare staff, with rigorous vetting to ensure immediate productivity on placement.",
          )}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Our Solutions"), href: "/our-solutions" },
            { label: t("Direct & Specialist Recruitment") },
          ]}
        />

        <SolutionDetail
          keyFeatures={keyFeatures}
          targetRoles={targetRoles}
          primaryCta="Request Specialist Candidates"
        />

        <div>
          <MobileAppSection
            headline="Discuss Your"
            headlineAccent="Workforce Requirements"
            primaryCta={{
              label: "Submit Your Demand Specifications",
              href: "/contact-us",
            }}
            secondaryCta={{
              label: "Speak to a Workforce Consultant",
              href: "/contact-us",
            }}
          />
        </div>
      </main>
    </>
  );
}
