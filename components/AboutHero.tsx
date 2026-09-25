import React from 'react';
import Image from 'next/image';
import LPattern from './LPattern';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutHero() {
    const { t } = useLanguage();
    const text = t("Building Global Workforces Through Ethical Sourcing");
    const spaceIndex = text.lastIndexOf(" ");
    const firstPart = text.substring(0, spaceIndex);
    const secondPart = text.substring(spaceIndex + 1);

    return (
        <div className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                    alt={t("Building Global Workforces Through Ethical Sourcing")}
                    fill sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
            </div>
            <LPattern />
            <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
                <h1
                    className="text-4xl md:text-6xl font-light drop-shadow-lg leading-tight"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                    {firstPart} <span className="italic">{secondPart}</span>
                </h1>
                <p className="mt-5 text-sm md:text-lg text-gray-200 drop-shadow-md max-w-xl">
                    {t("Core Migration is an international workforce deployment specialist connecting employers with qualified manpower from South Asia.")}
                </p>
            </div>
        </div>
    );
}
