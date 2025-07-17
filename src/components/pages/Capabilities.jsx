import React from 'react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    title: 'Capping Machines',
    description: 'Complete range for all applications: linear, rotary, pump/spray trigger tightening, and more.',
    link: '/capping-machines',
    image: '/images/1.jpg',
  },
  {
    title: 'Bottle Unscramblers',
    description: 'Versatile systems for sorting and orientating multiple container formats.',
    link: '/bottle-unscramblers',
    image: '/images/2.jpg',
  },
  {
    title: 'Pump & Trigger Feeding',
    description: 'Precision feeding systems for pumps and triggers, up to 300upm.',
    link: '/pump-trigger',
    image: '/images/3.jpg',
  },
  {
    title: 'Turnkey Filling Lines',
    description: 'Complete filling line solutions from 10ml to 200-litre with diverse filling technologies.',
    link: '/turnkey-filling-lines',
    image: '/images/4.jpg',
  },
  {
    title: 'Bespoke Packaging Solutions',
    description: 'Custom automation, conveyors, ultrasonic welding, assembly systems, and more.',
    link: '/bespoke-packaging',
    image: '/images/5.jpg',
  },
  {
    title: 'Food & Beverage Lines (FBL)',
    description: 'The most complete range of food manufacturing machinery in the UK & Ireland.',
    link: '/food-beverage-lines',
    image: '/images/6.jpg',
  },
];

function CapabilityCard({ title, description, link, image }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#8f0d09] shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden group max-w-sm mx-auto">
      {/* Image section */}
      <div className="relative w-full h-56 bg-gradient-to-tr from-[#f8eaea] via-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105" />
        {/* Top-left action button */}
        <Link to={link} className="absolute top-4 left-4 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-[#8f0d09] group-hover:scale-110 transition-transform z-10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8f0d09" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </Link>
      </div>
      {/* Content section */}
      <div className="flex-1 bg-white p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-[#8f0d09] text-center">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed text-center mb-6">{description}</p>
        <div className="flex flex-1 items-end justify-center">
          <Link to={link} className="mt-auto inline-flex items-center gap-1 px-5 py-2 rounded-lg bg-[#8f0d09] text-white font-semibold shadow hover:bg-[#a91a1a] transition-colors text-sm">
            View More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#8f0d09]">
        Our Capabilities
      </h2>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {capabilities.map((cap, idx) => (
          <CapabilityCard key={idx} {...cap} />
        ))}
      </div>
    </section>
  );
}