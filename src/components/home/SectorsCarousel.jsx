import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const sectors = [
  {
    label: 'Pharmaceutical',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="16" height="36" rx="8" stroke="#222" strokeWidth="3" fill="none" />
        <circle cx="38" cy="38" r="8" stroke="#222" strokeWidth="3" fill="none" />
        <line x1="30" y1="38" x2="46" y2="38" stroke="#222" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: 'Automotive',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="24" width="36" height="16" rx="8" stroke="#222" strokeWidth="3" fill="none" />
        <rect x="16" y="16" width="24" height="12" rx="6" stroke="#222" strokeWidth="3" fill="none" />
        <circle cx="18" cy="44" r="3" fill="#222" />
        <circle cx="38" cy="44" r="3" fill="#222" />
      </svg>
    ),
  },
  {
    label: 'Food & Beverage',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 12v20" stroke="#222" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="28" cy="40" rx="10" ry="6" stroke="#222" strokeWidth="3" fill="none" />
        <rect x="20" y="12" width="16" height="8" rx="4" stroke="#222" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Medical',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="28" width="32" height="16" rx="8" stroke="#222" strokeWidth="3" fill="none" />
        <path d="M28 32v8M24 36h8" stroke="#222" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Home Care',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32L28 16L46 32" stroke="#222" strokeWidth="3" fill="none" />
        <rect x="16" y="32" width="24" height="14" rx="3" stroke="#222" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Personal Care',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 44c8-16 16-16 24 0" stroke="#222" strokeWidth="3" fill="none" />
        <circle cx="28" cy="28" r="8" stroke="#222" strokeWidth="3" fill="none" />
        <circle cx="28" cy="44" r="2" fill="#222" />
      </svg>
    ),
  },
];

const SectorsCarousel = () => {
  const trackRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const cards = track.querySelectorAll('.sector-card');
      const cardWidth = cards[0]?.offsetWidth || 0;
      const totalCards = cards.length;
      const totalWidth = cardWidth * totalCards;
      gsap.to(track, {
        x: -totalWidth / 2,
        duration: 18,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2)),
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Duplicate sectors for infinite scroll
  const displaySectors = [...sectors, ...sectors];

  return (
    <SectionWrapper>
      <h2 className="section-title">Sectors we work in</h2>
      <div className="section-subtitle">Expertise across industries for every packaging need</div>
      <CarouselOuter>
        <CarouselTrack ref={trackRef}>
          {displaySectors.map((sector, i) => (
            <SectorCard className="sector-card" key={i}>
              <div className="icon">{sector.icon}</div>
              <div className="label">{sector.label}</div>
            </SectorCard>
          ))}
        </CarouselTrack>
      </CarouselOuter>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #eaf6ff 0%, #f5fbff 100%);
  padding: 64px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
    text-align: center;
    text-shadow: 0 2px 16px rgba(56,189,248,0.10);
  }
  .section-subtitle {
    font-size: 1.1rem;
    color: #2563eb;
    opacity: 0.7;
    margin-bottom: 2.2rem;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
`;

const CarouselOuter = styled.div`
  width: 100vw;
  max-width: 1440px;
  overflow: hidden;
  padding: 0 0.5rem;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 2.5rem;
  will-change: transform;
`;

const SectorCard = styled.div`
  min-width: 180px;
  max-width: 200px;
  height: 220px;
  background: rgba(255,255,255,0.55);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31,72,120,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s, transform 0.3s, border 0.3s, background 0.3s;
  border: 1.5px solid rgba(56,189,248,0.10);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  .icon {
    margin-bottom: 1.2rem;
    svg {
      display: block;
      width: 64px;
      height: 64px;
      stroke: #222;
      transition: transform 0.3s, stroke 0.3s, filter 0.3s;
      filter: drop-shadow(0 2px 8px rgba(56,189,248,0.04));
    }
  }
  .label {
    color: #222;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.01em;
    text-shadow: 0 2px 8px rgba(56,189,248,0.08);
  }
  &:hover {
    box-shadow: 0 16px 48px 0 rgba(56,189,248,0.18);
    border: 1.5px solid #38bdf8;
    background: rgba(255,255,255,0.75);
    transform: translateY(-8px) scale(1.06);
    .icon svg {
      transform: scale(1.13) rotate(-4deg);
      stroke: #2563eb;
      filter: drop-shadow(0 4px 16px #38bdf8);
    }
  }
`;

export default SectorsCarousel; 