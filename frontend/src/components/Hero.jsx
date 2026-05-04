import React from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070')"
                }}
            ></div>

            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white pt-8 pb-24">

                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-[#FDFCEB]/30">
                        <img
                            src={sivamLogo}
                            alt="Shivam Interiors"
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-1px] mb-6">
                    TRANSFORMING SPACES<br />
                    <span className="text-[#FDFCEB] tracking-[-0.5px]">
                        INTO TIMELESS HOMES
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed">
                    Premium UPVC Interiors • False Ceilings • Wall Paneling • SPC Flooring<br />
                    Creating Luxury Living Spaces Across Chennai &amp; Tamil Nadu Since 2016
                </p>

                {/* Highlights */}
                {/* Highlights */}
<div className="flex flex-wrap justify-center gap-4 mb-8 -mt-10">
  {[
    "UPVC False Ceilings",
    "PVC Wall Paneling",
    "SPC Luxury Flooring",
    "Modular Kitchens",
    "Wardrobes & TV Units"
  ].map((service, i) => (
    <div
      key={i}
      className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/30 
      hover:border-[#FDFCEB] hover:bg-white/20 transition-all text-sm md:text-base"
    >
      {service}
    </div>
  ))}
</div>

{/* Trust Line */}
<div className="text-white/80 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm pb-4">
  <div>✦ 8+ Years of Excellence</div>
  <div>✦ 250+ Happy Homes</div>
  <div>✦ Chennai • Coimbatore • Madurai</div>
  <div>✦ 100% Satisfaction Guaranteed</div>
</div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20">
                <span className="block text-xs tracking-[3px] text-white/70 mb-3">
                    SCROLL TO EXPLORE
                </span>
                <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto flex justify-center pt-2">
                    <div className="w-1 h-3 bg-[#FDFCEB] rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;