import React from 'react'

// Improved SVG logo to closely match the provided ATS logo image
const Logo = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 300 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Red swooshes */}
    <path d="M10 55 Q80 35 150 60 Q220 85 290 50" stroke="#C00" strokeWidth="3" fill="none"/>
    <path d="M10 70 Q80 90 150 70 Q220 50 290 85" stroke="#C00" strokeWidth="3" fill="none"/>
    {/* Striped 'ats' - more accurate, using horizontal lines and mask */}
    <g>
      <mask id="ats-mask">
        <text x="20" y="100" fontFamily="Arial Black,Arial,sans-serif" fontSize="90" fontWeight="bold">ats</text>
      </mask>
      {/* Horizontal stripes */}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect
          key={i}
          x="10"
          y={35 + i * 5}
          width="200"
          height="3"
          fill="#111"
          mask="url(#ats-mask)"
        />
      ))}
    </g>
    {/* Red text below */}
    <text x="15" y="130" fontFamily="Arial Black,Arial,sans-serif" fontSize="13" fill="#C00">ADVANCED TOOLING SYSTEMS GROUP</text>
  </svg>
)

export default Logo 