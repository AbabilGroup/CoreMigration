import ServicesHero from './ServicesHero';
import { useLanguage } from '@/context/LanguageContext';

export default function HowWeDeliverHero() {
    const { t } = useLanguage();

    return (
        <ServicesHero
            title={t("A Structured Approach You Can Rely On")}
            subtitle={t("Core Migration delivers workforce solutions through a consistent, transparent process — from first requirement to final deployment.")}
            breadcrumbs={[{ label: t("Home"), href: "/" }, { label: t("How We Deliver") }]}
        />
    );
}
