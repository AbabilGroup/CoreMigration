import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import ExampleOpportunityCard from "@/components/ExampleOpportunityCard";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
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
      <main className="min-h-screen">
        <ServicesHero
          title={t("Verified International Job Opportunities for South Asian")}
          titleAccent={t("Professionals")}
          subtitle={t("Core Migration connects qualified candidates from Bangladesh, India, Nepal, and Sri Lanka with verified international employers. Candidate selection is based purely on merit, technical qualification, and trade-test performance.")}
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Vacancies") },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-300 px-6">
            <p className="mb-10 max-w-3xl rounded-[20px] bg-cm-tile px-6 py-5 text-base leading-relaxed text-cm-ink">
              {t("The opportunities below are example opportunities illustrating typical roles, packages, and structure — not live, currently-open positions. Salary figures are based on current published market-rate research for each role/country combination and are reviewed periodically against live market data.")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {opportunities.map((opportunity) => (
                <ExampleOpportunityCard key={opportunity.slug} opportunity={opportunity} />
              ))}
            </div>

            <div
              className="relative isolate mt-16 overflow-hidden rounded-4xl bg-cm-night px-6 py-12 md:p-14 text-center text-white"
              data-aos="fade-up">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-15 -right-15 -z-10 h-55 w-55 rounded-full bg-cm-fresh/20"
              />
              <div className="mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-cm-fresh text-white">
                <DocumentArrowUpIcon className="h-7 w-7" />
              </div>
              <h2 className="mb-3 text-2xl md:text-[28px] font-semibold">
                {t("Don't See a Matching Role?")}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base md:text-lg leading-relaxed">
                {t("Submit your CV and credentials to our candidate database. Our recruitment team will review your profile and contact you when a matching opportunity opens.")}
              </p>
              <Link href="/vacancies/register" className="btn-fresh">
                {t("Submit Candidate Profile")}
              </Link>
            </div>
          </div>
        </section>

        <div>
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
