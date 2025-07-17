import React from 'react';
import HeroVideo from '../home/HeroVideo';
import ProductCardsSection from '../home/ProductCardsSection';
import { SectorsCarousel } from '../home/SectorsCarousel';
import BrandsSection from '../home/BrandsSection';
import Capabilities from './Capabilities';
import WithUsSection from '../home/WithUsSection';
const Home = () => {
  return (
    <main>
      <HeroVideo />
      <Capabilities />
      <SectorsCarousel />
      <WithUsSection/>
      <BrandsSection />
      {/* Add more homepage sections below */}
    </main>
  );
};
 
export default Home;