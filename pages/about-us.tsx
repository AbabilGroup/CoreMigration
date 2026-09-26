import Head from "next/head";
import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import AboutServices from "@/components/AboutServices";
import AboutValues from "@/components/AboutValues";
import DeploymentInfrastructure from "@/components/DeploymentInfrastructure";
import RegisteredOffice from "@/components/RegisteredOffice";
import MobileAppSection from "@/components/MobileAppSection";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("About Us - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration is an international workforce deployment specialist connecting employers with qualified manpower from South Asia.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <AboutHero />

        <div data-aos="fade-up">
          <AboutIntro />
        </div>

        <div data-aos="fade-up">
          <AboutServices />
        </div>

        <div data-aos="fade-up">
          <AboutValues />
        </div>

        <div data-aos="fade-up">
          <DeploymentInfrastructure />
        </div>

        <div data-aos="fade-up">
          <RegisteredOffice />
        </div>

        <div data-aos="blur-in">
          <MobileAppSection
            headline="Partner with"
            headlineAccent="Core Migration"
            description="Whether you are hiring at scale or seeking your next international role, our team is ready to guide you through every step."
            primaryCta={{ label: "Contact Our Recruitment Team", href: "/contact-us" }}
            secondaryCta={{ label: "View Available Vacancies", href: "/vacancies" }}
          />
        </div>
      </main>
    </>
  );
}
