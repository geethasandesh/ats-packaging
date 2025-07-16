import React from 'react';
import styled from 'styled-components';
import henkelLogo from '../../assets/henkel.png';
import unileverLogo from '../../assets/Unilever.png';
import pgLogo from '../../assets/p-g.png';
import bayerLogo from '../../assets/Bayer.png';
import cocaColaLogo from '../../assets/coca-cola.png';
import compoLogo from '../../assets/compo.png';
import froschLogo from '../../assets/Frosch.png';
import mondelezLogo from '../../assets/mondelez.png';
import nestleLogo from '../../assets/nestle.png';
import pepsicoLogo from '../../assets/pepsico.png';
import reckittLogo from '../../assets/reckitt.png';

const brands = [
  {
    name: 'Henkel',
    logo: henkelLogo,
  },
  {
    name: 'Unilever',
    logo: unileverLogo,
  },
  {
    name: 'P&G',
    logo: pgLogo,
  },
  {
    name: 'Nestle',
    logo: nestleLogo,
  },
  {
    name: 'Mondelez',
    logo: mondelezLogo,
  },
  {
    name: 'Bayer',
    logo: bayerLogo,
  },
  {
    name: 'Frosch',
    logo: froschLogo,
  },
  {
    name: 'Reckitt Benckiser',
    logo: reckittLogo,
  },
  {
    name: 'PepsiCo',
    logo: pepsicoLogo,
  },
  {
    name: 'Coca-Cola',
    logo: cocaColaLogo,
  },
  {
    name: 'Compo',
    logo: compoLogo,
  },
];

const BrandCard = ({ logo, name }) => (
  <StyledWrapper>
    <div className="outer">
      <div className="dot" />
      <div className="card">
        <div className="ray" />
        <div className="brand-logo">
          <img src={logo} alt={name + ' logo'} />
        </div>
        <div className="line topl" />
        <div className="line leftl" />
        <div className="line bottoml" />
        <div className="line rightl" />
      </div>
    </div>
  </StyledWrapper>
);

const BrandsSection = () => (
  <SectionWrapper>
    <h2 className="brands-title text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
      Brands
    </h2>
    <BrandsGrid>
      {brands.map((brand) => (
        <BrandCard key={brand.name} logo={brand.logo} name={brand.name} />
      ))}
    </BrandsGrid>
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #f7fafc 0%, #eaf6ff 100%);
  padding: 64px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .brands-title {
    margin-bottom: 2.5rem;
  }
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;
  width: 100%;
  max-width: 1440px;
  padding: 0 2rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StyledWrapper = styled.div`
  .outer {
    width: 100%;
    max-width: 300px;
    height: 180px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #eaf6ff);
    position: relative;
    margin: 0 auto;
  }
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }
  @keyframes moveDot {
    0%, 100% { top: 10%; right: 10%; }
    25% { top: 10%; right: calc(100% - 35px); }
    50% { top: calc(100% - 30px); right: calc(100% - 35px); }
    75% { top: calc(100% - 30px); right: 10%; }
  }
  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #e0e6f7;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #f5f7fa, #eaf6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #222;
    overflow: hidden;
  }
  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.18;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }
  .brand-logo {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    padding: 0;
    box-sizing: border-box;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: grayscale(0.1) brightness(1) drop-shadow(0 2px 8px rgba(31,72,120,0.06));
      transition: filter 0.3s, transform 0.3s;
      display: block;
      margin: 0 auto;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #e0e6f7;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #b8c6e6 30%, #e0e6f7 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #b8c6e6 30%, #e0e6f7 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;

export default BrandsSection; 