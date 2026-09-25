import React from 'react';
import Image from 'next/image';
import LPattern from './LPattern';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
  const { t } = useLanguage();
  const text = t("Let's Talk");
  const spaceIndex = text.lastIndexOf(" ");
  const firstPart = spaceIndex !== -1 ? text.substring(0, spaceIndex) : text;
  const secondPart = spaceIndex !== -1 ? text.substring(spaceIndex + 1) : "";

  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/888276/pexels-photo-888276.jpeg"
          alt={t("Let's Talk")}
          fill sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      <LPattern />
      <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
        <h1
          className="text-5xl md:text-7xl font-light drop-shadow-lg"
          style={{ fontFamily: 'var(--font-playfair-display), serif' }}
        >
          {firstPart} {secondPart && <span className="italic">{secondPart}</span>}
        </h1>
        <p className="mt-5 text-sm md:text-lg text-gray-200 drop-shadow-md max-w-xl">
          {t("Whether you're an employer seeking workforce deployment or a professional exploring international career opportunities, our team is ready to help.")}
        </p>
      </div>
    </div>
  );
}
