import ServicesHero from './ServicesHero';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <ServicesHero
            title={t("Building Global Workforces Through Ethical Sourcing")}
            subtitle={t("Core Migration is an international workforce deployment specialist connecting employers with qualified manpower from South Asia.")}
            breadcrumbs={[{ label: t("Home"), href: "/" }, { label: t("About Us") }]}
        />
    );
}
