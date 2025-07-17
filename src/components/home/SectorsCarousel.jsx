// Simple cn replacement
function cn(...args) {
  return args.filter(Boolean).join(' ');
}

import {
  IconCarFilled,
  IconGlassFilled,
  IconNurse,
IconHomeHeart,
IconEmpathize,
  IconPillFilled
,
} from "@tabler/icons-react";
import pharmaImg from '../../assets/Sectors/pharma.jpg';
import autoImg from '../../assets/Sectors/auto.jpg';
import foodImg from '../../assets/Sectors/food.jpg';
import medicineImg from '../../assets/Sectors/medicine.jpg';
import homeCareImg from '../../assets/Sectors/home care.jpg';
import personalCareImg from '../../assets/Sectors/personal care.jpg';

const sectorIllustrations = [
  pharmaImg,        // Pharmaceutical
  autoImg,          // Automotive
  foodImg,          // Food & Beverage
  medicineImg,      // Medical
  homeCareImg,      // Home Care
  personalCareImg,  // Personal Care
];

export function SectorsCarousel() {
  const features = [
    {
      title: "Pharmaceutical",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconPillFilled
 />,
    },
    {
      title: "Automotive",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconCarFilled />,
    },
    {
      title: "Food & Beverage",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconGlassFilled
      />,
    },
    {
      title: "Medical",
      description: "We just cannot be taken down by anyone.",
      icon: <IconNurse
      />,
    },
    {
      title: "Home Care",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconHomeHeart />,
    },
    {
      title: "Personal Care",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconEmpathize />,
    },
    
  ];
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#8f0d09]">Sectors We Work In</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between py-0 px-0 mb-8 bg-white rounded-2xl shadow-md border border-neutral-100 relative group/feature dark:border-neutral-800 transition-all duration-200 overflow-hidden",
        index !== 4 && "lg:border-l dark:border-neutral-800",
        (index === 0 || (![2, 5].includes(index))) && "lg:border-r dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
      style={{
        borderLeft: (window.innerWidth < 1024) ? 'none' : undefined,
        borderRight: (window.innerWidth < 1024) ? 'none' : undefined,
        borderBottom: (window.innerWidth < 1024) ? 'none' : undefined,
        background: '#fff',
        boxShadow: '0 2px 12px 0 rgba(31,72,120,0.07)',
        minHeight: '320px',
        minWidth: 0,
        maxWidth: '100%',
      }}
    >
      {/* Top half: Full-width image */}
      <div className="w-full h-40 md:h-44 lg:h-48 flex-shrink-0">
        <img
          src={sectorIllustrations[index]}
          alt={title + ' illustration'}
          className="w-full h-full object-cover rounded-t-2xl"
          loading="lazy"
        />
      </div>
      {/* Bottom half: Content */}
      <div className="flex flex-col items-center justify-center py-5 px-4">
        <div className="mb-2 relative z-10 flex items-center justify-center w-10 h-10 text-[#8f0d09] bg-[#f8eaea] rounded-full shadow-sm">
          <span className="text-xl">{icon}</span>
        </div>
        <div className="text-base font-bold mb-1 relative z-10 text-center px-2 text-neutral-900 dark:text-neutral-100" style={{letterSpacing: '0.01em'}}>
          {title}
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center max-w-xs relative z-10 px-2" style={{fontWeight: 400}}>
          {description}
        </p>
      </div>
      {/* No hover overlays */}
    </div>
  );
};
