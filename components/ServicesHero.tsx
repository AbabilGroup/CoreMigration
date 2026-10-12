import React, { useRef } from 'react';
import useHeroAnimation from '@/hooks/useHeroAnimation';
import HeroChevrons from './HeroChevrons';
import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServicesHeroProps {
    title: string;
    titleAccent?: string;
    subtitle: string;
    breadcrumbs?: BreadcrumbItem[];
}

/** Inner-page hero: deep green band with the same chevron shapes as the home hero. */
export default function ServicesHero({ title, titleAccent, subtitle, breadcrumbs }: ServicesHeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    useHeroAnimation(heroRef);

    return (
        <section ref={heroRef} className="relative isolate overflow-hidden bg-cm-deep text-center text-white pt-32 pb-20 md:pt-44 md:pb-28">
            <div data-hero-media aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <HeroChevrons className="absolute inset-y-0 left-0 h-full aspect-[760/720] opacity-35 md:opacity-100" />
            </div>

            <div data-hero-content className="mx-auto max-w-300 px-6">
                {breadcrumbs && (
                    <nav data-hero-item aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider">
                        {breadcrumbs.map((crumb, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-white/50">/</span>}
                                {crumb.href ? (
                                    <Link href={crumb.href} className="text-white/75 hover:text-white transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-cm-fresh">{crumb.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                )}
                <h1 data-hero-item className="mx-auto mb-5 max-w-225 text-3xl sm:text-4xl md:text-[52px] font-bold leading-[1.2]">
                    {title}{titleAccent ? ` ${titleAccent}` : ''}
                </h1>
                <p data-hero-item className="mx-auto max-w-205 text-base md:text-xl font-semibold leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
