import React from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#C3B091]/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tighter mb-6">
          SHIVAM<br />
          UPVC INTERIORS
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/95 mb-10 font-light leading-relaxed">
          Expert in Premium UPVC False Ceilings, PVC Wall Paneling, SPC Flooring &amp; 
          Modern Interior Solutions across Chennai and Tamil Nadu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="tel:+917760408660"
            className="bg-white text-[#C3B091] hover:bg-[#F5F0E8] px-11 py-4 rounded-full 
                       font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl 
                       flex items-center gap-3"
          >
            📞 Call Us: +91 77604 08660
          </a>

          <button className="border-2 border-white/90 hover:bg-white hover:text-[#C3B091] 
                           px-11 py-4 rounded-full font-medium text-lg transition-all duration-300">
            Browse Our Projects
          </button>
        </div>

        {/* Services Highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            UPVC False Ceilings
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            PVC Wall Paneling
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            SPC Vinyl Flooring
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm opacity-90">
          <div>✦ 8+ Years Experience</div>
          <div>✦ 200+ Projects Completed</div>
          <div>✦ Chennai • Tamil Nadu</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70">
        <span className="text-xs tracking-widest mb-2">DISCOVER OUR WORK</span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;