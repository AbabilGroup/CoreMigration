import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import MobileAppSection from '@/components/MobileAppSection';
import { opportunities } from '@/data/opportunities';
import { BriefcaseIcon, MapPinIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/context/LanguageContext';

export default function JobDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useLanguage();

  const opportunity = opportunities.find((o) => o.slug === slug);

  if (!opportunity && router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-cm-deep">{t("Job Not Found")}</h1>
          <p className="mb-6 text-cm-ink">{t("The position you are looking for does not exist or has been filled.")}</p>
          <Link href="/vacancies" className="btn-fresh">
            {t("Back to Vacancies")}
          </Link>
        </div>
      </div>
    );
  }

  if (!opportunity) {
    return null; // Loading state
  }

  return (
    <>
      <Head>
        <title>{opportunity.title} — {opportunity.destination} - Core Migration</title>
        <meta name="description" content={opportunity.title} />
      </Head>
      <main className="min-h-screen">
        <ServicesHero
          title={t(opportunity.title)}
          titleAccent={t(opportunity.destination)}
          subtitle={t(opportunity.industry)}
          breadcrumbs={[
            { label: t('Home'), href: '/' },
            { label: t('Vacancies'), href: '/vacancies' },
            { label: t(opportunity.title) },
          ]}
        />

        <section className="bg-[linear-gradient(160deg,#fff_0_58%,var(--color-cm-mint)_58%_100%)] py-16 md:py-24">
            <div className="mx-auto max-w-300 px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Opportunity Description */}
                    <div className="lg:w-8/12" data-aos="fade-right">
                        <span className="mb-6 inline-block rounded-full bg-cm-fresh px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            {t("Example Opportunity")}
                        </span>
                        <h2 className="mb-6 text-3xl md:text-[44px] font-bold leading-tight text-cm-deep">
                            {t("Role")} {t("Overview")}
                        </h2>

                        <p className="mb-8 text-base md:text-lg leading-relaxed text-cm-ink">
                            {t("This example opportunity illustrates a typical role, package, and structure for this position and destination — not a live, currently-open vacancy. Salary figures are based on published market-rate research for this role/country combination.")}
                        </p>

                        <h3 className="mt-12 mb-4 text-2xl md:text-[28px] font-semibold text-cm-deep">{t("Requirements")}</h3>
                        <p className="mb-8 text-base md:text-lg leading-relaxed text-cm-ink">{t(opportunity.requirements)}</p>

                        <h3 className="mt-12 mb-4 text-2xl md:text-[28px] font-semibold text-cm-deep">{t("Benefits")}</h3>
                        <p className="mb-8 text-base md:text-lg leading-relaxed text-cm-ink">{t(opportunity.benefits)}</p>
                    </div>

                    {/* Right Column: Opportunity Meta Card */}
                    <div className="lg:w-4/12" data-aos="fade-left" data-aos-delay="150">
                        <div className="sticky top-32 rounded-4xl bg-cm-card p-8 text-white">
                            <h3 className="mb-6 border-b border-white/20 pb-4 text-2xl font-semibold">{t("Position Details")}</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon className="h-6 w-6 shrink-0 text-cm-fresh" />
                                    <div>
                                        <p className="mb-1 text-sm font-semibold text-white/75">{t("Destination")}</p>
                                        <p className="font-semibold">{t(opportunity.destination)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <BriefcaseIcon className="h-6 w-6 shrink-0 text-cm-fresh" />
                                    <div>
                                        <p className="mb-1 text-sm font-semibold text-white/75">{t("Industry")}</p>
                                        <p className="font-semibold">{t(opportunity.industry)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ClockIcon className="h-6 w-6 shrink-0 text-cm-fresh" />
                                    <div>
                                        <p className="mb-1 text-sm font-semibold text-white/75">{t("Contract")}</p>
                                        <p className="font-semibold">{t(opportunity.contract)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CurrencyDollarIcon className="h-6 w-6 shrink-0 text-cm-fresh" />
                                    <div>
                                        <p className="mb-1 text-sm font-semibold text-white/75">{t("Salary")}</p>
                                        <p className="font-semibold">{t(opportunity.salary)}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/vacancies/register"
                                className="btn-fresh w-full">
                                {t(opportunity.ctaLabel)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div>
            <MobileAppSection />
        </div>
      </main>
    </>
  );
}
