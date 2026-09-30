import React, { useRef } from 'react';
import useHeroAnimation from '@/hooks/useHeroAnimation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HowWeDeliverHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    useHeroAnimation(heroRef);
    const { t } = useLanguage();
    const text = t("A Structured Approach You Can Rely On");
    const spaceIndex = text.lastIndexOf(" ");
    const firstPart = text.substring(0, spaceIndex);
    const secondPart = text.substring(spaceIndex + 1);

    return (
        <div ref={heroRef} className="relative flex items-end w-full min-h-[50vh] md:min-h-[75vh] overflow-hidden bg-brand-primary">
            <div data-hero-media className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/7580842/pexels-photo-7580842.jpeg"
                    alt={t("A Structured Approach You Can Rely On")}
                    fill sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-primary/95 via-brand-primary/60 to-brand-primary/20" />
            </div>
            <div data-hero-content className="relative z-20 px-6 md:px-24 pt-28 pb-16 md:pb-22 text-white max-w-3xl">
                <h1 data-hero-item
                    className="text-3xl sm:text-4xl md:text-6xl font-light drop-shadow-lg leading-tight"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                    {firstPart} <span className="italic">{secondPart}</span>
                </h1>
                <p data-hero-item className="mt-5 text-sm md:text-lg text-gray-200 drop-shadow-md max-w-xl">
                    {t("Core Migration delivers workforce solutions through a consistent, transparent process — from first requirement to final deployment.")}
                </p>
            </div>
        </div>
    );
}
