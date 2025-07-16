import React from 'react';
import HeroVideo from '../home/HeroVideo';
import ProductCardsSection from '../home/ProductCardsSection';
import { SectorsCarousel } from '../home/SectorsCarousel';
import BrandsSection from '../home/BrandsSection';
import Capabilities from './Capabilities';
 
const Home = () => {
  return (
    <main>
      <HeroVideo />
      <Capabilities />
      <SectorsCarousel />
      <BrandsSection />
      {/* Add more homepage sections below */}
    </main>
  );
};
 
export default Home;