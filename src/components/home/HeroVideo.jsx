import React, { useRef, useState } from 'react';
import { GridBackgroundDemo } from '../bg/Background';
 
const VIDEO_SRC_1 = '/videos/ats-uk.mp4';
const avatars = [
  '/src/assets/ATS.webp',
  '/src/assets/Bayer.png',
  '/src/assets/henkel.png',
  '/src/assets/Unilever.png',
];
 
const HeroVideo = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
 
  const handleMuteToggle = () => {
    setMuted((m) => !m);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
 
  return (
    <section className="w-full max-w-full overflow-x-hidden flex flex-col items-center justify-center pb-0 mx-auto relative">
      {/* Grid background as absolute layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden md:block">
        <GridBackgroundDemo />
      </div>
      {/* Hero content above background */}
      <div className="relative z-10 w-full">
        {/* Content Row */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between px-4 py-8 md:px-12 md:py-16 gap-8 md:gap-12">
          {/* Left: Headline and buttons */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left">
              Advanced <span className="text-[#8f0d09]">Tooling</span><br className="hidden md:block" /> Systems
            </h1>
            
          </div>
          {/* Right: Supporting text, subheadline, avatars, reviews */}
          <div className="flex-1 flex flex-col items-end justify-center">
            <div className="text-gray-600 text-base md:text-lg text-right max-w-md mb-6">
              Real engineering. Real results. Bespoke capping, packaging, and automation solutions for world-leading brands. Discover how we can elevate your production.
            </div>
            <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-4 text-right">Packaging Worth Trusting</div>
           
          </div>
        </div>
        {/* Video section */}
        <div className="relative w-full flex justify-center items-center mt-4 md:mt-8 px-0 md:px-8">
          <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-visible mb-12">
            <video
              ref={videoRef}
              className="w-full h-[320px] md:h-[480px] object-cover rounded-2xl relative z-10 shadow-[0_8px_40px_0_rgba(31,72,120,0.18),0_1.5px_8px_0_rgba(56,189,248,0.08)]"
              src={VIDEO_SRC_1}
              autoPlay
              loop
              muted={muted}
              playsInline
            />
            {/* Mute button */}
            <button
              onClick={handleMuteToggle}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-10 text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HeroVideo;
 