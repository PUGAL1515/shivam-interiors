import React, { useState, useEffect } from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';

// Import all your images
import partition01 from '../assets/partition01.jpeg';
import kitchen01 from '../assets/kitchen01.jpeg';
import Wardrobe01 from '../assets/Wardrobe01.jpeg';
import Wardrobe02 from '../assets/Wardrobe02.jpeg';
import tvunit01 from '../assets/tvunit01.jpeg';
import tvunit02 from '../assets/tvunit02.jpeg';
import tvunit03 from '../assets/tvunit03.jpeg';
import tvunit04 from '../assets/tvunit04.jpeg';
import tvunit05 from '../assets/tvunit05.jpeg';

const backgroundImages = [
  partition01, kitchen01, Wardrobe01, Wardrobe02,
  tvunit01, tvunit02, tvunit03, tvunit04, tvunit05
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const togglePause = () => setIsPaused(!isPaused);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Slideshow - Full Screen with proper image display */}
      <div className="absolute inset-0 bg-black">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Using background-image for perfect full-screen display without zoom */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay - Enhanced for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      
      {/* Bottom Gradient for better button visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Pause/Play Button - Clean, Compact Design */}
      <button
        onClick={togglePause}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 group"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        <div className="relative flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          
          {/* Icon */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {isPaused ? (
              // Play Icon
              <svg 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 3L19 12L5 21V3Z" 
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Pause Icon
              <svg 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
              </svg>
            )}
          </div>

          {/* Status Text - Smaller, cleaner */}
          <span className="text-white text-xs font-medium tracking-wider uppercase">
            {isPaused ? 'Play' : 'Pause'}
          </span>

          {/* Progress Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-white/30">
            <div 
              className={`h-full rounded-full bg-white transition-all duration-1000 ${
                isPaused ? 'w-0' : 'w-full'
              }`}
              style={{ 
                transitionTimingFunction: 'linear'
              }}
            ></div>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white pt-8 pb-20">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-[#FDFCEB]/30">
            <img src={sivamLogo} alt="Shivam Interiors" className="h-16 w-auto object-contain" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-1px] mb-6">
          TRANSFORMING SPACES<br />
          <span className="text-[#FDFCEB] tracking-[-0.5px]">INTO TIMELESS HOMES</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed">
          Premium UPVC Interiors • False Ceilings • Wall Paneling • SPC Flooring<br />
          Creating Luxury Living Spaces Across Chennai &amp; Tamil Nadu Since 2016
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 -mt-10">
          {["UPVC Wall Paneling", "SPC Luxury Flooring", "Modular Kitchens", "Wardrobes & TV Units", "UPVC False Ceilings"].map((service, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/30 hover:border-[#FDFCEB] hover:bg-white/20 transition-all text-sm md:text-base">
              {service}
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <div className="text-white/80 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm pb-4">
          <div>✦ 8+ Years of Excellence</div>
          <div>✦ 250+ Happy Homes</div>
          <div>✦ Vellore • Chennai • Coimbatore • Bangalore</div>
          <div>✦ 100% Satisfaction Guaranteed</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;