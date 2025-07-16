import React, { useRef, useState, useEffect } from 'react';
import t1 from '../../assets/t1.jpg';
import t2 from '../../assets/t2.jpg';
import t3 from '../../assets/t3.jpg';
import t4 from '../../assets/t4.jpg';
import t5 from '../../assets/t5.jpg';
import t6 from '../../assets/t6.jpg';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';
 
const images = [t1, t2, t3, t4, t5, t6];
const AUTO_SLIDE_INTERVAL = 3000;
const THUMB_SIZE = 100;
 
export default function Trunkey() {
  const [current, setCurrent] = useState(0); // 0 = video, 1+ = images
  const [paused, setPaused] = useState(false);
  const autoSlideRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const thumbContainerRef = useRef(null);
  const thumbRefs = useRef([]);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
 
  // Total items: 1 video + images.length
  const totalItems = 1 + images.length;
 
  useEffect(() => {
    // Only auto-slide for images, not for video
    if (!paused) {
      if (current === 0) {
        // No timer for video, handled by 'ended' event
        clearInterval(autoSlideRef.current);
      } else {
        autoSlideRef.current = setInterval(() => {
          setCurrent((prev) => (prev + 1) % totalItems);
        }, AUTO_SLIDE_INTERVAL);
      }
    } else {
      clearInterval(autoSlideRef.current);
    }
    return () => clearInterval(autoSlideRef.current);
  }, [paused, totalItems, current]);
 
  // Handler for video end
  const handleVideoEnded = () => {
    setCurrent(1); // Go to first image after video
  };
 
  useEffect(() => {
    if (thumbContainerRef.current && thumbRefs.current[current]) {
      const container = thumbContainerRef.current;
      const activeThumb = thumbRefs.current[current];
      const containerRect = container.getBoundingClientRect();
      const thumbRect = activeThumb.getBoundingClientRect();
      const offset = thumbRect.left - containerRect.left - (containerRect.width / 2) + (thumbRect.width / 2);
      container.scrollTo({ left: container.scrollLeft + offset, behavior: 'smooth' });
    }
  }, [current]);
 
  const handleThumbClick = (idx) => {
    setCurrent(idx);
    setPaused(true);
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), 5000);
  };
 
  return (
    <>
      {/* Carousel Section: Video first, then images */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-10 px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Left: Trunkey Info */}
        <div className="flex-1 max-w-xl min-w-[280px] flex flex-col justify-start h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-sans tracking-tight">Turnkey Spray Line Solutions</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-4 font-sans">Our turnkey solutions integrate advanced spray filling, capping, and packaging systems for maximum efficiency and reliability. Explore our spray line in action and see the technology behind seamless production.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Integrated filling, capping, and packaging</li>
            <li>Customizable for various spray products</li>
            <li>High-speed, automated operation</li>
            <li>Minimal changeover and downtime</li>
          </ul>
        </div>
        {/* Right: Carousel Video/Images */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl h-full">
          <div
            key={current}
            className="rounded-3xl shadow-xl overflow-hidden bg-black w-full max-w-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400"
            style={{ aspectRatio: '16/9' }}
          >
            {current === 0 ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src="/videos/spray.mp4"
                  autoPlay
                  muted={isMuted}
                  loop={false}
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ userSelect: 'none', background: 'black' }}
                  title={isMuted ? 'Click to unmute' : 'Click to mute'}
                  onEnded={handleVideoEnded}
                />
                <button
                  type="button"
                  onClick={() => setIsMuted(m => !m)}
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-1 shadow hover:bg-white transition z-10"
                  style={{ lineHeight: 0 }}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <MdVolumeOff className="text-blue-600 text-xl" />
                  ) : (
                    <MdVolumeUp className="text-blue-600 text-xl" />
                  )}
                </button>
              </div>
            ) : (
              <img
                src={images[current - 1]}
                alt={`Turnkey Spray ${current}`}
                className="w-full h-full object-cover rounded-3xl"
                draggable={false}
                style={{ userSelect: 'none' }}
              />
            )}
          </div>
          {/* Thumbnails: first is video, then images */}
          <div
            ref={thumbContainerRef}
            className="flex flex-row gap-3 mt-8 overflow-x-auto w-full max-w-xl px-2 justify-center scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <button
              ref={el => thumbRefs.current[0] = el}
              onClick={() => handleThumbClick(0)}
              className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${current === 0 ? 'border-blue-500 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
              style={{ width: THUMB_SIZE, height: THUMB_SIZE, minWidth: THUMB_SIZE, minHeight: THUMB_SIZE }}
              tabIndex={0}
              aria-label="Show spray video"
            >
              <div className="w-full h-full flex items-center justify-center bg-black text-white text-lg font-bold rounded-xl">
                <span className="mx-auto">🎬</span>
              </div>
            </button>
            {images.map((img, idx) => (
              <button
                key={idx + 1}
                ref={el => thumbRefs.current[idx + 1] = el}
                onClick={() => handleThumbClick(idx + 1)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${current === idx + 1 ? 'border-blue-500 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
                style={{ width: THUMB_SIZE, height: THUMB_SIZE, minWidth: THUMB_SIZE, minHeight: THUMB_SIZE }}
                tabIndex={0}
                aria-label={`Show image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ userSelect: 'none' }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Turnkey Filling Lines Info Section */}
      <section className="w-full flex justify-center mt-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 font-sans">
        <div className="max-w-5xl w-full bg-white/95 rounded-3xl shadow-xl border border-blue-100 p-0 md:p-0">
          <div className="flex flex-col items-center justify-center pt-8 px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 text-center tracking-tight leading-tight">
              Turnkey Filling Lines
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center font-light">
              Complete filling line solutions from 10ml to 200-litre with the most diverse range of filling technologies available. From bottle unscramblers to end of line palletising.
            </p>
          </div>
          {/* Two-Column Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start px-4 md:px-10 mb-8">
            {/* Left Column: Technology */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">The type of liquid filling technology we offer in our equipment includes:</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Volumetric displacement</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Flow-meter for hygienic applications</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>High accuracy weigh filling</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Rotary Gear Pump</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Integrated Clean-in-Place systems</li>
              </ul>
            </div>
            {/* Right Column: Machine Types */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4">With a wide range of different liquid filling machine types including:</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Bench Top systems</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Linear Filling machines (up to 12-heads)</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Twin-track filling machines up to (24-heads)</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Continuous Move / Walking Beam filling solutions</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>High speed rotary (up to 24-heads)</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Drum filling (by weight or flow-meter)</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Monobloc (clean / fill / cap)</li>
                <li className="flex items-start gap-2"><span className="mt-2 w-2 h-2 rounded-full bg-purple-500 inline-block"></span>All available with Ex / FDA / CGMP certification</li>
              </ul>
            </div>
          </div>
          {/* Filling Line Image */}
          <div className="flex justify-center items-center mb-8 px-4">
            <img
              src={t2}
              alt="Turnkey Filling Line"
              className="w-full max-w-3xl rounded-2xl shadow object-contain border border-blue-100 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: '#f3f4f6' }}
            />
          </div>
          {/* Partners and Equipment List */}
          <div className="px-4 md:px-10 pb-10">
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Together with our long-established partners we are able to offer turn-key filling lines for the widest range of products from highly viscous to foamy products. A single source option for your complete filling line ensures it is fully balanced to maximise output. Equipment supplied includes:
            </p>
            <ul className="space-y-2 text-gray-800 list-disc list-inside">
              <li>Bottle Unscramblers</li>
              <li>Liquid Filling Machines</li>
              <li>Capping Machines</li>
              <li>Inkjet Coding</li>
              <li>Induction Sealing</li>
              <li>Labelling</li>
              <li>Automatic Cartoning & Carton Sealing Equipment</li>
              <li>Case-packing & Palletising Systems</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}