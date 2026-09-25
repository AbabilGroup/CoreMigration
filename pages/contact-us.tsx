import Head from "next/head";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Contact Us - Core Migration")}</title>
        <meta
          name="description"
          content={t("Whether you're an employer seeking workforce deployment or a professional exploring international career opportunities, our team is ready to help.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ContactHero />

        <div data-aos="fade-up">
          <ContactFormSection />
        </div>

        <div data-aos="fade-up"></div>
      </main>
    </>
  );
}
