import {
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactFormSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("Let's talk about things!")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "Whether you're an employer seeking workforce deployment or a professional exploring international career opportunities, our team is ready to help.",
                )}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#E5F5EF] p-3 rounded-full shrink-0">
                  <MapPinIcon className="w-6 h-6 text-[#008F5D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("Registered Office")}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    176 Crossbank Street, Oldham, England, OL8 1HE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E5F5EF] p-3 rounded-full shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-[#008F5D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("Email Address")}
                  </h3>
                  <Link href="mailto:info@coremigration.eu">
                    <p className="text-gray-600 mt-1">info@coremigration.eu</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("Send Inquiry to Core Migration")}
            </h3>
            <form
              action="https://formsubmit.co/9eb913914642425af3ecb03929005b59"
              method="POST"
              className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Message"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://coremigration.eu/"
              />

              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700">
                  {t("I am an:")}
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors bg-white">
                  <option value="Employer">{t("Employer")}</option>
                  <option value="Candidate">{t("Candidate")}</option>
                  <option value="Processing Partner">{t("Processing Partner")}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700">
                    {t("First Name")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                    placeholder={t("First Name")}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700">
                    {t("Last Name")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                    placeholder={t("Last Name")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    {t("Email Address")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700">
                    {t("Phone Number/WhatsApp (optional)")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="companyOrProfession"
                    className="block text-sm font-medium text-gray-700">
                    {t("Company Name / Profession")}
                  </label>
                  <input
                    type="text"
                    id="companyOrProfession"
                    name="companyOrProfession"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="destinationCountry"
                    className="block text-sm font-medium text-gray-700">
                    {t("Destination Country of Interest")}
                  </label>
                  <input
                    type="text"
                    id="destinationCountry"
                    name="destinationCountry"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700">
                  {t("Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors resize-none"
                  placeholder={t("Write your msg here...")}></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#008F5D] hover:bg-[#00744B] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                {t("Send Inquiry to Core Migration")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
