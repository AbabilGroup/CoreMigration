import React from "react";

/**
 * Section title in the redesign style: large, bold, deep green (or white on
 * dark bands). Optional intro paragraph underneath.
 */
export default function SectionHeading({
  children,
  intro,
  light = false,
  center = false,
  className = "",
}: {
  children: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`} data-aos="fade-up">
      <h2
        className={`text-3xl md:text-[44px] font-bold leading-tight ${light ? "text-white" : "text-cm-deep"}`}>
        {children}
      </h2>
      {intro && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-white/90" : "text-cm-ink"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
