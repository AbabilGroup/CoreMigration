// Nested right-pointing chevrons for the left edge of hero bands:
// a thin outer line, a medium line, and a thick two-tone chevron at the edge.

const CY = 360; // vertical centre of the 720-high viewBox
const LEFT = -120; // arms start off-canvas so they bleed out of the left edge
const TAN30 = 0.577;
const COS30 = 0.866;

/** Chevron with its apex at (ax, CY); `r` sets how far back the tip rounding starts. */
function tip(ax: number, r: number) {
  return { x: ax - r * COS30, dy: r / 2, armDy: (ax - LEFT) * TAN30 };
}

function chevron(ax: number, r: number) {
  const t = tip(ax, r);
  return `M ${LEFT} ${CY - t.armDy} L ${t.x} ${CY - t.dy} Q ${ax} ${CY} ${t.x} ${CY + t.dy} L ${LEFT} ${CY + t.armDy}`;
}

export default function HeroChevrons({ className = "" }: { className?: string }) {
  const inner = tip(110, 34);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 760 720"
      preserveAspectRatio="xMinYMid slice"
      fill="none"
      className={`pointer-events-none ${className}`}>
      <path d={chevron(760, 190)} stroke="var(--color-cm-fresh)" strokeWidth="2.5" />
      <path d={chevron(350, 130)} stroke="var(--color-cm-fresh)" strokeWidth="4.5" />
      {/* Thick chevron: darker lower arm, lighter upper arm laid on top */}
      <path
        d={`M ${inner.x} ${CY - inner.dy} Q 110 ${CY} ${inner.x} ${CY + inner.dy} L ${LEFT} ${CY + inner.armDy}`}
        stroke="var(--color-cm-card)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d={`M ${LEFT} ${CY - inner.armDy} L ${inner.x} ${CY - inner.dy}`}
        stroke="var(--color-cm-fresh)"
        strokeWidth="34"
        strokeLinecap="round"
      />
    </svg>
  );
}
