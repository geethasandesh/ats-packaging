import React from 'react';
import Carousel from '../ui/Carousel';
import i1 from '../../assets/i1.jpg';
import i3 from '../../assets/i3.jpg';
import i4 from '../../assets/i4.jpg';
import i5 from '../../assets/i5.jpg';
import i7 from '../../assets/i7.jpg';
import i8 from '../../assets/i8.jpg';
import i9 from '../../assets/i9.jpg';
import i10 from '../../assets/i10.jpg';
 
const slideData = [
  {
    title: 'Capping Machines',
    button: 'Explore',
    src: i1,
  },
  {
    title: 'Bottle Unscramblers',
    button: 'Explore',
    src: i3,
  },
  {
    title: 'Pump & Trigger Feeding Systems',
    button: 'Explore',
    src: i4,
  },
  {
    title: 'Turnkey Filling Lines',
    button: 'Explore',
    src: i5,
  },
  {
    title: 'Bespoke Packaging Solutions',
    button: 'Explore',
    src: i7,
  },
  {
    title: 'Food & Beverage Lines (FBL)',
    button: 'Explore',
    src: i8,
  },
];
 
const sliderImages = [i1, i3, i4, i5, i7, i8, i9, i10];
 
function InfiniteSlider() {
  return (
    <div className="w-full overflow-hidden py-10 mt-24 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="flex gap-8 animate-slide-infinite" style={{ minWidth: '200%' }}>
        {[...sliderImages, ...sliderImages].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Capping Machine"
            className="h-40 w-auto rounded-xl shadow-md object-cover select-none pointer-events-none"
            draggable={false}
            loading="lazy"
          />
        ))}
      </div>
      <style>{`
        @keyframes slide-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide-infinite 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
 
export default function Products() {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h1 className="text-4xl md:text-6xl font-sans font-semibold text-black mb-12 text-center font-sans tracking-tight">Products</h1>
      <Carousel slides={slideData} />
      {/* Add margin below carousel before slider */}
      <div className="mb-24" />
      <InfiniteSlider />
    </div>
  );
}
 
 