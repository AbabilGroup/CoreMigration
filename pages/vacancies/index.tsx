import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import ExampleOpportunityCard from "@/components/ExampleOpportunityCard";
import MobileAppSection from "@/components/MobileAppSection";
import { opportunities } from "@/data/opportunities";
import { useLanguage } from "@/context/LanguageContext";

export default function Vacancies() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Vacancies - Core Migration")}</title>
        <meta
          name="description"
          content={t("Core Migration connects qualified candidates from Bangladesh, India, Nepal, and Sri Lanka with verified international employers. Candidate selection is based purely on merit, technical qualification, and trade-test performance.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Verified International Job Opportunities for South Asian")}
          titleAccent={t("Professionals")}
          subtitle={t("Core Migration connects qualified candidates from Bangladesh, India, Nepal, and Sri Lanka with verified international employers. Candidate selection is based purely on merit, technical qualification, and trade-test performance.")}
          image="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Vacancies") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-3xl">
            {t("The opportunities below are example opportunities illustrating typical roles, packages, and structure — not live, currently-open positions. Salary figures are based on current published market-rate research for each role/country combination and are reviewed periodically against live market data.")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity) => (
              <ExampleOpportunityCard key={opportunity.slug} opportunity={opportunity} />
            ))}
          </div>

          <div className="mt-16 text-center bg-zinc-50 border border-zinc-200 p-10" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">
              {t("Don't See a Matching Role?")}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
              {t("Submit your CV and credentials to our candidate database. Our recruitment team will review your profile and contact you when a matching opportunity opens.")}
            </p>
            <Link
              href="/vacancies/register"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-secondary transition-colors">
              {t("Submit Candidate Profile")}
            </Link>
          </div>
        </section>

        <div data-aos="fade-up">
          <MobileAppSection
            headline="Ready to Build Your"
            headlineAccent="International Workforce?"
            primaryCta={{ label: "Submit a Vacancy", href: "/contact-us" }}
            secondaryCta={{ label: "Register as a Candidate", href: "/vacancies/register" }}
          />
        </div>
      </main>
    </>
  );
}
