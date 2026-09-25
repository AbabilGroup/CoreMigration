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
          <h1 className="text-4xl text-brand-dark font-bold mb-4">{t("Job Not Found")}</h1>
          <p className="text-gray-500 mb-6">{t("The position you are looking for does not exist or has been filled.")}</p>
          <Link href="/vacancies" className="bg-brand-primary text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary transition-colors">
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
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t(opportunity.title)}
          titleAccent={t(opportunity.destination)}
          subtitle={t(opportunity.industry)}
          image="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg"
          breadcrumbs={[
            { label: t('Home'), href: '/' },
            { label: t('Vacancies'), href: '/vacancies' },
            { label: t(opportunity.title) },
          ]}
        />

        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Opportunity Description */}
                    <div className="lg:w-8/12" data-aos="fade-up">
                        <span className="inline-block bg-brand-accent/20 text-brand-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 mb-6">
                            {t("Example Opportunity")}
                        </span>
                        <h2 className="text-3xl md:text-4xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            {t("Role")} <span className="italic font-bold">{t("Overview")}</span>
                        </h2>
                        <div className="w-16 h-1 bg-brand-primary mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {t("This example opportunity illustrates a typical role, package, and structure for this position and destination — not a live, currently-open vacancy. Salary figures are based on published market-rate research for this role/country combination.")}
                        </p>

                        <h3 className="text-2xl text-brand-dark font-semibold mt-12 mb-6">{t("Requirements")}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{t(opportunity.requirements)}</p>

                        <h3 className="text-2xl text-brand-dark font-semibold mt-12 mb-6">{t("Benefits")}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">{t(opportunity.benefits)}</p>
                    </div>

                    {/* Right Column: Opportunity Meta Card */}
                    <div className="lg:w-4/12" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-zinc-50 border border-zinc-200 p-8 sticky top-32">
                            <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-zinc-200 pb-4">{t("Position Details")}</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">{t("Destination")}</p>
                                        <p className="text-brand-dark font-medium">{t(opportunity.destination)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <BriefcaseIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">{t("Industry")}</p>
                                        <p className="text-brand-dark font-medium">{t(opportunity.industry)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ClockIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">{t("Contract")}</p>
                                        <p className="text-brand-dark font-medium">{t(opportunity.contract)}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CurrencyDollarIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">{t("Salary")}</p>
                                        <p className="text-brand-dark font-medium">{t(opportunity.salary)}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/vacancies/register"
                                className="block text-center w-full bg-brand-primary text-white py-4 font-bold tracking-widest uppercase hover:bg-brand-secondary transition-colors text-sm">
                                {t(opportunity.ctaLabel)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div data-aos="fade-up">
            <MobileAppSection />
        </div>
      </main>
    </>
  );
}
