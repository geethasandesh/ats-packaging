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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
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
        "flex flex-col py-10 relative group/feature dark:border-neutral-800",
        // Add left border except for the 4th card (index 4)
        index !== 4 && "lg:border-l dark:border-neutral-800",
        // Add right border except for 3rd and 6th cards (index 2 and 5)
        (index === 0 || (![2, 5].includes(index))) && "lg:border-r dark:border-neutral-800",
        // Add bottom border for first row only
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}>
      {(index < 3) && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {(index >= 3) && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
