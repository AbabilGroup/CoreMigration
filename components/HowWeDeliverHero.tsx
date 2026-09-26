import React, { useRef } from 'react';
import useHeroAnimation from '@/hooks/useHeroAnimation';
import Image from 'next/image';
import LPattern from './LPattern';
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
        <div ref={heroRef} className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden bg-gray-900">
            <div data-hero-media className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
                    alt={t("A Structured Approach You Can Rely On")}
                    fill sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
            </div>
            <LPattern />
            <div data-hero-content className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
                <h1 data-hero-item
                    className="text-4xl md:text-6xl font-light drop-shadow-lg leading-tight"
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
