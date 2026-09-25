import Head from "next/head";
import ServicesHero from "@/components/ServicesHero";
import { useLanguage } from "@/context/LanguageContext";

export default function RegisterCandidate() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t("Register as a Candidate - Core Migration")}</title>
        <meta
          name="description"
          content={t("Don't see a matching role? Submit your CV and credentials to our candidate database. Our recruitment team will review your profile and contact you when a matching opportunity opens.")}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={t("Don't See a Matching")}
          titleAccent={t("Role?")}
          subtitle={t("Submit your CV and credentials to our candidate database. Our recruitment team will review your profile and contact you when a matching opportunity opens.")}
          image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          breadcrumbs={[
            { label: t("Home"), href: "/" },
            { label: t("Vacancies"), href: "/vacancies" },
            { label: t("Register as a Candidate") },
          ]}
        />

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
          <form
            action="https://formsubmit.co/9eb913914642425af3ecb03929005b59"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-100">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Candidate Registration" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://coremigration.eu/vacancies/" />

            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                {t("Full Name")}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t("Contact Phone/WhatsApp")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t("Email Address")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  {t("Country of Residence")}
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                  {t("Primary Profession/Trade")}
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                {t("Years of Experience")}
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                {t("CV/Certificate Upload")}
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-brand-primary/10 file:text-brand-primary file:font-semibold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3.5 px-6 rounded-lg transition-colors uppercase tracking-wider text-sm">
              {t("Submit Candidate Profile")}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
