import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import atsLogo from '../../assets/advanced_tooling_systems_uk_logo.png';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atsDropdownOpen, setAtsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [consultationDropdownOpen, setConsultationDropdownOpen] = useState(false);
  const [mobileAtsDropdown, setMobileAtsDropdown] = useState(false);
  const [mobileProductsDropdown, setMobileProductsDropdown] = useState(false);
  const [mobileConsultationDropdown, setMobileConsultationDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    {
      label: 'ATS AT A GLANCE',
      href: '/ats-at-glance',
      dropdown: [
        { href: '/ats', label: 'ATS' },
        { href: '/team', label: 'TEAM' },
        { href: '/partners', label: 'PARTNERS' },
        { href: '/news', label: 'NEWS' },
      ],
    },
    {
      label: 'PRODUCTS',
      href: '/products',
      dropdown: [
        { href: '/capping-machines', label: 'Capping Machines' },
        { href: '/bottle-unscramblers', label: 'Bottle Unscramblers' },
        { href: '/pump-trigger', label: 'Pump Trigger' },
        { href: '/trunkey', label: 'Trunkey' },
        { href: '/bespoke-packaging', label: 'Bespoke Packaging' },
        { href: '/food', label: 'Food' },
      ],
    },
    {
      label: 'CONSULTATION',
      href: '/consultation',
      dropdown: [
        { href: '/project-management', label: 'Project Management' },
        { href: '/project-planning', label: 'Project Planning' },
        { href: '/lifecycle-management', label: 'Lifecycle Management' },
        { href: '/trunkey-automation', label: 'Trun-Key Automation' },
      ],
    },
    { href: '/sectors', label: 'SECTORS' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm' : 'bg-gray-50'
      }`}
    >
      <div className="w-full flex flex-row items-center justify-between px-2 sm:px-4 md:px-8 h-12 md:h-14 gap-2 md:gap-0">
        {/* Logo - left */}
        <a href="/" className="flex items-center flex-shrink-0 h-full">
          <img src={atsLogo} alt="ATS Logo" className="h-12 md:h-16 w-auto object-contain" />
        </a>
        {/* Desktop Navigation - center */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-2 sm:gap-6 text-base font-medium flex-wrap h-full">
          {navLinks.filter(link => link.label !== 'CONTACT US').map((link) => {
            if (link.dropdown && link.label === 'ATS AT A GLANCE') {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setAtsDropdownOpen(true)}
                  onMouseLeave={() => setAtsDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="relative px-1 py-1 text-sm text-gray-800 font-sans font-medium hover:text-red-600 transition-colors group flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={atsDropdownOpen}
                  >
                    {link.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-600 rounded origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-gray-100 shadow-lg rounded-xl py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50 ${atsDropdownOpen ? 'opacity-100 pointer-events-auto' : ''}`}
                    onMouseEnter={() => setAtsDropdownOpen(true)}
                    onMouseLeave={() => setAtsDropdownOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            if (link.dropdown && link.label === 'PRODUCTS') {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="relative px-1 py-1 text-sm text-gray-800 font-sans font-medium hover:text-red-600 transition-colors group flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={productsDropdownOpen}
                  >
                    {link.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-600 rounded origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-[200px] bg-white border border-gray-100 shadow-lg rounded-xl py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50 ${productsDropdownOpen ? 'opacity-100 pointer-events-auto' : ''}`}
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            if (link.dropdown && link.label === 'CONSULTATION') {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setConsultationDropdownOpen(true)}
                  onMouseLeave={() => setConsultationDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="relative px-1 py-1 text-sm text-gray-800 font-sans font-medium hover:text-red-600 transition-colors group flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={consultationDropdownOpen}
                  >
                    {link.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-600 rounded origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-[200px] bg-white border border-gray-100 shadow-lg rounded-xl py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-50 ${consultationDropdownOpen ? 'opacity-100 pointer-events-auto' : ''}`}
                    onMouseEnter={() => setConsultationDropdownOpen(true)}
                    onMouseLeave={() => setConsultationDropdownOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-1 py-1 text-sm text-gray-800 font-sans font-medium hover:text-red-600 transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-600 rounded origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            );
          })}
        </nav>
        {/* CONTACT US Button - right */}
        <div className="hidden md:flex items-center ml-2">
          <a
            href="/contact"
            className="px-3 py-1.5 text-white font-sans font-semibold rounded bg-orange-500 hover:bg-orange-600 transition-colors shadow text-sm"
            style={{ minWidth: '80px', textAlign: 'center' }}
          >
            CONTACT US
          </a>
        </div>
        {/* Mobile Nav Toggle */}
        <button className="md:hidden bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl p-2 shadow-md ml-auto" onClick={() => setNavOpen(!navOpen)}>
          <div className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-cyan-700 rounded-full" />
            <span className="block w-6 h-0.5 bg-cyan-700 rounded-full" />
            <span className="block w-6 h-0.5 bg-cyan-700 rounded-full" />
          </div>
        </button>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {navOpen && (
          <div className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-white/30 px-4 py-4 space-y-2 shadow-2xl rounded-b-2xl flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <img src={atsLogo} alt="ATS Logo" className="h-8 w-auto object-contain" />
              <button onClick={() => setNavOpen(false)} className="p-2 rounded-full bg-white/70 shadow hover:bg-gray-100">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            {navLinks.map((link) => {
              if (link.dropdown && link.label === 'ATS AT A GLANCE') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between w-full font-medium py-2 px-3 rounded hover:bg-gray-100 transition">
                      <a href={link.href} className="flex-1" onClick={() => setNavOpen(false)}>{link.label}</a>
                      <button
                        className="ml-2"
                        onClick={e => { e.preventDefault(); setMobileAtsDropdown((open) => !open); }}
                      >
                        <svg className={`w-3 h-3 transition-transform ${mobileAtsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                    {mobileAtsDropdown && (
                      <div className="pl-4 flex flex-col">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="py-2 px-3 rounded hover:bg-gray-50 transition text-sm"
                            onClick={() => setNavOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (link.dropdown && link.label === 'PRODUCTS') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between w-full font-medium py-2 px-3 rounded hover:bg-gray-100 transition">
                      <a href={link.href} className="flex-1" onClick={() => setNavOpen(false)}>{link.label}</a>
                      <button
                        className="ml-2"
                        onClick={e => { e.preventDefault(); setMobileProductsDropdown((open) => !open); }}
                      >
                        <svg className={`w-3 h-3 transition-transform ${mobileProductsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                    {mobileProductsDropdown && (
                      <div className="pl-4 flex flex-col">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="py-2 px-3 rounded hover:bg-gray-50 transition text-sm"
                            onClick={() => setNavOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (link.dropdown && link.label === 'CONSULTATION') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between w-full font-medium py-2 px-3 rounded hover:bg-gray-100 transition">
                      <a href={link.href} className="flex-1" onClick={() => setNavOpen(false)}>{link.label}</a>
                      <button
                        className="ml-2"
                        onClick={e => { e.preventDefault(); setMobileConsultationDropdown((open) => !open); }}
                      >
                        <svg className={`w-3 h-3 transition-transform ${mobileConsultationDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                    {mobileConsultationDropdown && (
                      <div className="pl-4 flex flex-col">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="py-2 px-3 rounded hover:bg-gray-50 transition text-sm"
                            onClick={() => setNavOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (link.label === 'CONTACT US') {
                return (
                  <a
                    key={link.href}
                    className="block font-sans font-semibold py-1.5 px-3 rounded bg-orange-500 text-white shadow hover:bg-orange-600 transition mt-2 text-center text-sm"
                    onClick={() => setNavOpen(false)}
                    style={{ minWidth: '80px' }}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-medium py-2 px-3 rounded hover:bg-gray-100 transition"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
