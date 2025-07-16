import React from 'react';
 
const capabilities = [
  {
    title: 'Capping Machines',
    description: 'Complete range for all applications: linear, rotary, pump/spray trigger tightening, and more.',
    link: '/products/capping-machines',
    image: '/images/1.jpg',
  },
  {
    title: 'Bottle Unscramblers',
    description: 'Versatile systems for sorting and orientating multiple container formats.',
    link: '/products/bottle-unscramblers',
    image: '/images/2.jpg',
  },
  {
    title: 'Pump & Trigger Feeding',
    description: 'Precision feeding systems for pumps and triggers, up to 300upm.',
    link: '/products/pump-trigger',
    image: '/images/3.jpg',
  },
  {
    title: 'Turnkey Filling Lines',
    description: 'Complete filling line solutions from 10ml to 200-litre with diverse filling technologies.',
    link: '/products/turnkey-filling-lines',
    image: '/images/4.jpg',
  },
  {
    title: 'Bespoke Packaging Solutions',
    description: 'Custom automation, conveyors, ultrasonic welding, assembly systems, and more.',
    link: '/products/bespoke-packaging',
    image: '/images/5.jpg',
  },
  {
    title: 'Food & Beverage Lines (FBL)',
    description: 'The most complete range of food manufacturing machinery in the UK & Ireland.',
    link: '/products/food-beverage-lines',
    image: '/images/6.jpg',
  },
 
 
];
 
function CapabilityCard({ title, description, link, image }) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow flex flex-col overflow-hidden group max-w-sm mx-auto">
      {/* Image section */}
      <div className="relative w-full h-60 bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-50 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105" />
        {/* Top-right action button */}
        <a href={link} className="absolute top-4 right-4 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md border border-gray-200 group-hover:scale-110 transition-transform z-10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </a>
      </div>
      {/* Content section */}
      <div className="flex-1 bg-gray-50 p-4 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
        <div className="flex flex-1 items-end">
          <a href={link} className="mt-4 inline-flex items-center gap-1 text-[#8f0d09] font-semibold text-sm hover:underline transition-colors whitespace-nowrap self-start">
            View More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f0d09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default function Capabilities() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#8f0d09]">
        Our Capabilities
      </h2>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        {capabilities.map((cap, idx) => (
          <CapabilityCard key={idx} {...cap} />
        ))}
      </div>
    </section>
  );
}