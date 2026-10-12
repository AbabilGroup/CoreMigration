import Head from "next/head";
import Hero from "@/components/Hero";
import DualValueProposition from "@/components/DualValueProposition";
import DeploymentProcess from "@/components/DeploymentProcess";
import IndustryPipelines from "@/components/IndustryPipelines";
import EthicalCommitment from "@/components/EthicalCommitment";
import HomeCTA from "@/components/HomeCTA";
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
      <main className="min-h-screen overflow-hidden">
        <Hero />
        <DualValueProposition />
        <DeploymentProcess />
        <IndustryPipelines />
        <EthicalCommitment />
        <HomeCTA />
      </main>
    </>
  );
}
