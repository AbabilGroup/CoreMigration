/**
 * Site-wide decorative shapes, fixed to the viewport so they stay put while
 * the page scrolls. Sits behind all content; sections without their own
 * background let it show through.
 */
export default function BackgroundShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Large lime ring, top left */}
      <div className="absolute -left-48 -top-48 h-[42rem] w-[42rem] rounded-full border-[3px] border-brand-accent/25" />
      <div className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full border-2 border-brand-accent/15" />

      {/* Soft green blob, bottom right */}
      <div className="absolute -bottom-56 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand-primary" />

      {/* Sweeping curved band across the middle */}
      <svg
        className="absolute left-0 top-1/3 h-[60vh] w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none">
        <path
          d="M0 420 C 360 260, 720 560, 1080 360 S 1440 200, 1440 200 L 1440 600 L 0 600 Z"
          fill="var(--color-brand-accent)"
          fillOpacity="0.6"
        />
        <path
          d="M0 380 C 380 220, 700 520, 1080 320 S 1440 160, 1440 160"
          fill="none"
          stroke="var(--color-brand-accent)"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
