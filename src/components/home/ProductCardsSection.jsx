import React from "react";
import ProductCard from "./ProductCard";
import atsLogo from '../../assets/ATS.webp';

// SVG icons for each card
const CappingIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="16" height="10" rx="3"/><rect x="12" y="18" width="8" height="6" rx="2"/><rect x="14" y="24" width="4" height="4" rx="1"/></svg>
);
const BottleIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="12" y="4" width="8" height="6" rx="2"/><rect x="10" y="10" width="12" height="14" rx="4"/><rect x="13" y="24" width="6" height="6" rx="2"/></svg>
);
const PumpIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="8" width="12" height="6" rx="2"/><rect x="12" y="14" width="8" height="10" rx="2"/><path d="M16 4v4"/><path d="M16 24v4"/></svg>
);
const TurnkeyIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="10" width="20" height="12" rx="4"/><path d="M10 22v4h12v-4"/><circle cx="16" cy="16" r="3"/></svg>
);
const BespokeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="16" height="16" rx="4"/><path d="M8 16h16"/><path d="M16 8v16"/></svg>
);
const FBLIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="10" width="20" height="8" rx="3"/><rect x="10" y="18" width="12" height="4" rx="2"/><circle cx="16" cy="24" r="2"/></svg>
);
const HandshakeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#f5f7fa"/><path d="M14 28l6 6c1.5 1.5 4 1.5 5.5 0l8-8c1.5-1.5 1.5-4 0-5.5l-6-6c-1.5-1.5-4-1.5-5.5 0l-8 8c-1.5 1.5-1.5 4 0 5.5z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 34l-2 2c-1.5 1.5-4 1.5-5.5 0l-2-2c-1.5-1.5-1.5-4 0-5.5l2-2" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const cardData = [
  {
    title: "Capping Machines",
    text: "High-speed, precision capping for all container types.",
    link: "/products/capping",
    bottomIcon: <CappingIcon />,
  },
  {
    title: "Bottle Unscramblers",
    text: "Versatile unscramblers for multiple container formats.",
    link: "/products/unscramblers",
    bottomIcon: <BottleIcon />,
  },
  {
    title: "Pump & Trigger Feeding Systems",
    text: "Automated feeding for pumps, triggers, and closures.",
    link: "/products/pump-feeding",
    bottomIcon: <PumpIcon />,
  },
  {
    title: "Turnkey Filling Lines",
    text: "Complete filling solutions for every industry.",
    link: "/products/turnkey",
    bottomIcon: <TurnkeyIcon />,
  },
  {
    title: "Bespoke Packaging Solutions",
    text: "Custom-engineered packaging lines for unique needs.",
    link: "/products/bespoke",
    bottomIcon: <BespokeIcon />,
  },
  {
    title: "Food & Beverage Lines (FBL)",
    text: "Specialized lines for food and beverage packaging.",
    link: "/products/fbl",
    bottomIcon: <FBLIcon />,
  },
  {
    title: "Partners",
    text: "Our trusted business partners worldwide.",
    link: "/partners",
    bottomIcon: <HandshakeIcon />,
  },
  {
    title: "ATS UK Ltd",
    text: "Advanced Tooling Systems UK Ltd",
    link: "/about",
    bottomIcon: <img src={atsLogo} alt="ATS Logo" style={{width:32, height:32, objectFit:'contain', borderRadius:8}} />,
  },
];

export default function ProductCardsSection() {
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
        Innovative Capping & Packaging Solutions
      </h2>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {cardData.map((card, idx) => (
          <ProductCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
} 