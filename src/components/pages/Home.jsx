import React from 'react';
import HeroVideo from '../home/HeroVideo';
import ProductCardsSection from '../home/ProductCardsSection';
import SectorsCarousel from '../home/SectorsCarousel';
import BrandsSection from '../home/BrandsSection';

const Home = () => {
  return (
    <main>
      <HeroVideo />
      <ProductCardsSection />
      <SectorsCarousel />
      <BrandsSection />
      {/* Add more homepage sections below */}
    </main>
  );
};

export default Home; 