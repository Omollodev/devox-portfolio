import React from "react";

/* Broken D mark. The D follows the theme text colour; the coral arc stays. */
function Logo({ size = 40 }) {
  return (
    <svg
      viewBox="20 6 96 100"
      width={size}
      height={size * 1.04}
      role="img"
      aria-label="DevoxSec logo"
    >
      <path
        d="M56 24H30v72h26c20 0 33-10 38-26"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M96 60C96 38 82 24 56 24"
        fill="none"
        stroke="#e8473c"
        strokeWidth="12"
        strokeLinecap="round"
        transform="translate(9 -9)"
      />
    </svg>
  );
}

export default Logo;
