import React from 'react';
import gtmaLogo from '../../assets/gtma.png';
import ppmaLogo from '../../assets/ppma.png';
import ukasLogo from '../../assets/ukas.png';

const navLinks1 = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Text Only', href: '#' },
  
];
const navLinks2 = [
  { alt: 'gtma', src: gtmaLogo },
  { alt: 'PPMA', src: ppmaLogo },
  { alt: 'UKAS', src: ukasLogo },
];
const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M7.5 8.5v7m0 0v-7m0 7h-2v-7h2zm4.5 0v-3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V15m0 0h-2v-3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V15z" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { label: 'YouTube', href: 'https://youtube.com', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M10 9.5v5l4.5-2.5-4.5-2.5z" fill="#e11d48"/><rect x="3" y="7" width="18" height="10" rx="5" stroke="#e11d48" strokeWidth="1.5"/></svg>
  ) },
];
const membershipLogos = [
  { alt: 'gtma', src: gtmaLogo },
  { alt: 'PPMA', src: ppmaLogo },
  { alt: 'UKAS', src: ukasLogo },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="w-full px-0 pt-3 pb-2">
      <div className="w-full max-w-none rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl px-2 sm:px-4 py-2 flex flex-col gap-2 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
          {/* Left: Navigation & Social */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto">
            <div className="flex flex-col min-w-[120px] justify-center mb-2 md:mb-0">
              <div className="text-base font-bold mb-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 bg-clip-text text-transparent">Navigation</div>
              <div className="flex flex-row gap-2 sm:gap-3 flex-wrap items-center justify-center md:justify-start">
                {navLinks1.map(link => (
                  <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="hover:text-cyan-400 hover:scale-105 transition-all text-xs sm:text-sm font-light rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col min-w-[120px] justify-center mb-2 md:mb-0">
              <div className="text-base font-bold mb-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 bg-clip-text text-transparent">Connect</div>
              <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:shadow-cyan-400/40 hover:shadow-lg transition-all rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Membership */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto py-1 md:py-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 bg-clip-text text-transparent text-right">
              Membership
            </div>
            <div className="text-xs sm:text-sm md:text-base text-cyan-400 mb-2 font-medium tracking-wide">Our Memberships</div>
            <div className="w-full overflow-x-auto">
              <div className="flex flex-row gap-2 sm:gap-3 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-1 sm:p-2 border border-white/30 items-center justify-center md:justify-end min-w-[180px] sm:min-w-[260px]">
                {membershipLogos.map(logo => (
                  <div
                    key={logo.alt}
                    className="transition-all duration-300 rounded-xl bg-white/40 hover:bg-white/60 shadow-lg p-1 flex items-center justify-center group"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-7 sm:h-10 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 drop-shadow-lg transition-all duration-300"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,180,255,0.12))' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rounded-full" />
        {/* Copyright & Back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
          <div className="text-xs text-gray-700 font-light">©2024 ATS Advanced Tooling Systems UK Ltd</div>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-br from-blue-400 to-cyan-300 text-white rounded-full shadow-lg p-2 hover:scale-110 hover:shadow-cyan-400/50 transition-all border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Back to top"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 19V5M12 5l-7 7M12 5l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}