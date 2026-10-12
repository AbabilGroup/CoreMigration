import ServicesHero from './ServicesHero';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
    const { t } = useLanguage();

    return (
        <ServicesHero
            title={t("Let's Talk")}
            subtitle={t("Whether you're an employer seeking workforce deployment or a professional exploring international career opportunities, our team is ready to help.")}
            breadcrumbs={[{ label: t("Home"), href: "/" }, { label: t("Contact Us") }]}
        />
    );
}
