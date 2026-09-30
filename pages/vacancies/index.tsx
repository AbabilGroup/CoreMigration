import Head from "next/head";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import ExampleOpportunityCard from "@/components/ExampleOpportunityCard";
import CursorCircle from "@/components/CursorCircle";
import { ArrowRightIcon, DocumentArrowUpIcon } from "@heroicons/react/24/outline";
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
          image="https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg"
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

          <div
            className="group relative isolate mt-16 overflow-hidden rounded-3xl bg-linear-to-br from-brand-orange to-brand-orange-dark px-6 py-12 md:p-14 text-center text-white shadow-[0_24px_60px_-24px] shadow-brand-orange/60"
            data-aos="blur-in">
            <CursorCircle colorClassName="border-white bg-white/25" />
            {/* Background shapes */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 -z-10 h-56 w-56 rounded-full border-[3px] border-white/30"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-white/10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-24 top-8 -z-10 h-4 w-4 rounded-full bg-white/40"
            />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-orange shadow-lg shadow-black/10">
              <DocumentArrowUpIcon className="h-7 w-7" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("Don't See a Matching Role?")}
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
              {t("Submit your CV and credentials to our candidate database. Our recruitment team will review your profile and contact you when a matching opportunity opens.")}
            </p>
            <Link
              href="/vacancies/register"
              className="btn group/btn bg-white text-brand-orange hover:bg-brand-cream">
              {t("Submit Candidate Profile")}
              <ArrowRightIcon className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </section>

        <div data-aos="blur-in">
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
