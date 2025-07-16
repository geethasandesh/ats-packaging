import React from 'react';
import gtma from '../../assets/gtma.png';
import ppma from '../../assets/ppma.png';
import ukas from '../../assets/ukas.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const services = [
  { label: 'Capping Machines', href: '/capping-machines' },
  { label: 'Bottle Unscramblers', href: '/bottle-unscramblers' },
  { label: 'Turnkey Filling Lines', href: '/trunkey-filling-lines' },
  { label: 'Bespoke Packaging', href: '/bespoke-packaging' },
  { label: 'Consultation', href: '/consultation' },
];
const pages = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Contact', href: '/contact' },
];
const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2C7 2 2 6 2 12c0 5 5 10 10 10s10-5 10-10c0-6-5-10-10-10zm0 13a3 3 0 100-6 3 3 0 000 6z" stroke="#222" strokeWidth="1.5"/></svg>
    ),
    text: 'Parkwood Industrial Estate, Maidstone, UK',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 6.5A4.5 4.5 0 017.5 2h9A4.5 4.5 0 0121 6.5v11A4.5 4.5 0 0116.5 22h-9A4.5 4.5 0 013 17.5v-11z" stroke="#222" strokeWidth="1.5"/><path d="M21 6.5L12 13 3 6.5" stroke="#222" strokeWidth="1.5"/></svg>
    ),
    text: 'sales@atsuk.com',
    link: 'mailto:sales@atsuk.com',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C6.48 21 3 17.52 3 13a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" stroke="#222" strokeWidth="1.5"/></svg>
    ),
    text: '+44 1622 678143',
    link: 'tel:+441622678143',
  },
];
const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin size={24} color="#0A66C2" /> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram size={24} color="#E1306C" /> },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Brand/Description/Social */}
        <div>
          <div className="text-xl font-semibold font-sans tracking-widest mb-2 text-gray-900">ATS PACKAGING</div>
          <div className="text-gray-600 mb-4 text-sm">Advanced packaging solutions and automation for every industry. Precision, quality, and reliability for over 35 years.</div>
          <div className="flex flex-row gap-3 mb-2">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Services */}
        <div>
          <div className="font-bold mb-2 text-gray-900">Services</div>
          <ul className="space-y-1 text-gray-700 text-sm">
            {services.map(service => (
              <li key={service.label}><a href={service.href} className="hover:underline">{service.label}</a></li>
            ))}
          </ul>
        </div>
        {/* Pages */}
        <div>
          <div className="font-bold mb-2 text-gray-900">Pages</div>
          <ul className="space-y-1 text-gray-700 text-sm">
            {pages.map(page => (
              <li key={page.label}><a href={page.href} className="hover:underline">{page.label}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <div className="font-bold mb-2 text-gray-900">Contact Info</div>
          <ul className="space-y-2 text-gray-700 text-sm">
            {contactInfo.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {item.icon}
                {item.link ? (
                  <a href={item.link} className="hover:underline">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Membership */}
        <div>
          <div className="font-bold mb-2 text-gray-900">Membership</div>
          <div className="flex flex-col gap-3 items-start">
            <img src={gtma} alt="GTMA" className="h-10 w-auto" />
            <img src={ppma} alt="PPMA" className="h-10 w-auto" />
            <img src={ukas} alt="UKAS" className="h-10 w-auto" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-xs text-gray-400 text-center">©2024 ATS Advanced Tooling Systems UK Ltd. All rights reserved.</div>
    </footer>
  );
}