import Head from "next/head";
import Hero from "@/components/Hero";
import DualValueProposition from "@/components/DualValueProposition";
import SourcingDeploymentModels from "@/components/SourcingDeploymentModels";
import SourcingGeography from "@/components/SourcingGeography";
import DeploymentProcess from "@/components/DeploymentProcess";
import IndustryPipelines from "@/components/IndustryPipelines";
import EthicalCommitment from "@/components/EthicalCommitment";
import GlobalCTA from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Core Migration - Cross-Border Workforce Solutions")}</title>
        <meta
          name="description"
          content={t("Core Migration connects employers across the Middle East, the UK, and Europe with trade-tested, vetted, and job-ready professionals from Bangladesh, India, Nepal, and Sri Lanka.")}
        />
      </Head>
      <main className="min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
        <Hero />
        <div data-aos="fade-up">
          <DualValueProposition />
        </div>
        <div data-aos="fade-up">
          <SourcingDeploymentModels />
        </div>
        <div data-aos="fade-up">
          <SourcingGeography />
        </div>
        <div data-aos="fade-up">
          <DeploymentProcess />
        </div>
        <div data-aos="fade-up">
          <IndustryPipelines />
        </div>
        <div data-aos="fade-up">
          <EthicalCommitment />
        </div>
        <div data-aos="fade-up">
          <GlobalCTA
            headline="Ready to Build Your"
            headlineAccent="International Workforce?"
            description="Whether you need individual specialist talent or a full project workforce, our team delivers with full legal compliance."
            primaryCta={{ label: "Request a Sourcing Plan", href: "/contact-us" }}
            secondaryCta={{ label: "Browse Open Overseas Positions", href: "/vacancies" }}
          />
        </div>
      </main>
    </>
  );
}
