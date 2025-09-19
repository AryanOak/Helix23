import React from "react";

/**
 * Simple, elegant DNA SVG component.
 * - Transparent background
 * - Smooth dual-strands using gradient strokes
 * - Soft glow (SVG filter)
 * - Subtle vertical float + very slow rotation
 *
 * Place inside your hero right column. Size is responsive.
 */
export default function DNA({ className = "", width = 360, height = 520 }) {
  return (
    <div className={`dna-wrap ${className}`} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        className="dna-svg"
        viewBox="0 0 200 400"
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "transparent" }}
      >
        <defs>
          {/* glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* strand gradients */}
          <linearGradient id="gradLeft" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#CDB3FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#A477FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#7A4BFF" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="gradRight" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E2C9FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#8D5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#5B30D9" stopOpacity="1" />
          </linearGradient>

          {/* small subtle glow around rungs */}
          <linearGradient id="rungGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#d9ccff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#c9b1ff" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* faint halo behind whole DNA */}
        <ellipse cx="100" cy="200" rx="68" ry="140" fill="#7a4bff" opacity="0.04" />

        {/* left strand (smooth path) */}
        <path
          d="M50 24
             C 120 70, 20 150, 110 210
             C 190 270, 40 320, 120 376"
          fill="none"
          stroke="url(#gradLeft)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          opacity="1"
        />

        {/* right strand (smooth mirrored path) */}
        <path
          d="M150 24
             C 80 70, 180 150, 90 210
             C 10 270, 160 320, 80 376"
          fill="none"
          stroke="url(#gradRight)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          opacity="1"
        />

        {/* rungs (evenly spaced pairs) */}
        {/* I'll generate several rungs at specific Y positions - adjust positions if you like */}
        {[
          40, 76, 112, 148, 184, 220, 256, 292, 328, 364
        ].map((y, i) => {
          // compute the left/right x positions to mimic twist (small offsets for a nicer curve)
          const leftX = 50 + (i % 2 === 0 ? -6 : 6) + Math.sin(i * 0.9) * 4;
          const rightX = 150 + (i % 2 === 0 ? 6 : -6) + Math.cos(i * 0.9) * 4;
          const rungLength = Math.max(18, rightX - leftX);

          return (
            <g key={i} transform={`translate(0, ${y})`}>
              {/* the thin bar */}
              <rect
                x={leftX}
                y={-3.5}
                width={rungLength}
                height={7}
                rx={3.5}
                fill="url(#rungGrad)"
                opacity={0.98}
                filter="url(#glow)"
              />
              {/* small dots at left/right ends for stylized caps */}
              <circle cx={leftX} cy={0} r="3.4" fill="#d7c4ff" opacity="0.95" filter="url(#glow)" />
              <circle cx={rightX} cy={0} r="3.4" fill="#d7c4ff" opacity="0.95" filter="url(#glow)" />
            </g>
          );
        })}

        {/* subtle glossy highlights along each strand (thin strokes) */}
        <path
          d="M54 28 C 120 74, 24 148, 114 210 C 192 268, 44 318, 124 372"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.08"
        />
        <path
          d="M146 28 C 80 74, 176 148, 86 210 C 8 268, 156 318, 76 372"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.06"
        />
      </svg>
    </div>
  );
}
