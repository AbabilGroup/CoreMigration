import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LPattern from './LPattern';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServicesHeroProps {
    title: string;
    titleAccent: string;
    subtitle: string;
    image: string;
    breadcrumbs?: BreadcrumbItem[];
}

export default function ServicesHero({ title, titleAccent, subtitle, image, breadcrumbs }: ServicesHeroProps) {
    const defaultBreadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '/' },
        { label: 'Our Solutions', href: '/our-solutions' },
    ];

    const crumbs = breadcrumbs || defaultBreadcrumbs;

    return (
        <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent" />
            </div>
            <LPattern />
            <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
                <nav className="flex items-center gap-2 mb-5 text-xs tracking-wider">
                    {crumbs.map((crumb, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span className="text-white/50">—</span>}
                            {crumb.href ? (
                                <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors uppercase font-semibold">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-brand-primary uppercase font-semibold">{crumb.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
                <h1
                    className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                    {title} <span className="font-bold italic">{titleAccent}</span>
                </h1>
                <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
