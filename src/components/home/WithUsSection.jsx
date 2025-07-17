import React from "react";

const WithUsCards = [
  {
    title: "Trusted by Global Brands ",
    description: "We partner with industry leaders to deliver world-class packaging solutions.",
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#e0f2fe" />
        <path d="M16 32l8-8 8 8" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="20" r="4" stroke="#2563eb" strokeWidth="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Decades of Experience",
    description: "Our expertise ensures reliability, innovation, and quality in every project.",
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#f3e8ff" />
        <path d="M24 14v12l8 4" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="10" stroke="#8b5cf6" strokeWidth="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Comprehensive Support",
    description: "From consultation to after-sales, we're with you every step of the way.",
    icon: (
      <svg width="38" height="38" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#fef9c3" />
        <path d="M16 28l8 8 8-8" stroke="#f59e42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="20" r="4" stroke="#f59e42" strokeWidth="2" fill="#fff"/>
      </svg>
    ),
  },
];

export default function WithUsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mb-10 px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#8f0d09] drop-shadow-lg">
        We Are With You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {WithUsCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-2xl transition group"
            style={{
              background: "linear-gradient(135deg, #f8fafc 60%, #e0f2fe 100%)"
            }}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-[#8f0d09] group-hover:text-[#a91a1a] transition-colors">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 