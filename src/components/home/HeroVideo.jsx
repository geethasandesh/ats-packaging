import React, { useRef, useState } from 'react';

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
    <section className="w-full bg-[#f9fafb] py-12 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          {/* Avatars and rating */}
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="client avatar"
                  className="w-8 h-8 rounded-full border-2 border-white shadow -ml-1 first:ml-0 bg-white object-cover"
                />
              ))}
            </div>
            <span className="ml-4 flex items-center text-sm font-semibold text-gray-700">
              <span className="text-orange-400 text-lg mr-1">★★★★★</span>
              200+ happy clients
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Elevate Your Brand<br />With a High-<br className="hidden md:block" />Performing Website
          </h1>
          {/* Subheadline */}
          <p className="text-lg text-gray-600 mb-8">
            At Volium, we craft high-performance websites designed to help your brand grow, convert, and stand out.
          </p>
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors">
              Let's talk
            </button>
            <button className="text-gray-800 font-semibold underline underline-offset-2 hover:text-orange-500 transition-colors">
              See how it works
            </button>
          </div>
        </div>
        {/* Right: Video with sunburst accent */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-lg">
          {/* Sunburst accent */}
          <div className="absolute -top-8 -right-8 z-0">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.15">
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x="65"
                    y="0"
                    width="10"
                    height="40"
                    rx="5"
                    fill="#FDBA74"
                    transform={`rotate(${i * 30} 70 70)`}
                  />
                ))}
                <circle cx="70" cy="70" r="30" fill="#FDBA74" />
              </g>
            </svg>
          </div>
          {/* Video card */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
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
              className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white"
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