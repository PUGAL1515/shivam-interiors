import React from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';
import aboutImage from '../assets/image.png';

const About = () => {
  return (
    <section id="about" className="pt-8 pb-20 bg-[#FDFCEB] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C3B091] font-medium tracking-[3px] text-sm">OUR STORY</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight text-[#1A1A1A]">
            Crafting Timeless Homes<br />
            <span className="text-[#C3B091]">Since 2016</span>
          </h2>
          <div className="w-20 h-1 bg-[#C3B091] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed text-[#1A1A1A]/90">
              <p>
                <span className="font-semibold text-[#C3B091]">Shivam UPVC Interiors</span> is a trusted name in premium interior solutions. 
                We specialize in transforming ordinary spaces into luxurious, functional homes using high-quality UPVC, PVC, and SPC materials.
              </p>
              <p>
                With a passion for craftsmanship and attention to every detail, we deliver elegant interiors that stand the test of time.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group bg-white hover:bg-[#F5F0E8] border border-[#C3B091]/20 hover:border-[#C3B091]
                            p-7 rounded-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="font-semibold text-xl mb-2 text-[#C3B091]">Expert Craftsmanship</h4>
                <p className="text-[#1A1A1A]/70">Premium materials and precision installation</p>
              </div>

              <div className="group bg-white hover:bg-[#F5F0E8] border border-[#C3B091]/20 hover:border-[#C3B091]
                            p-7 rounded-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="font-semibold text-xl mb-2 text-[#C3B091]">Client First</h4>
                <p className="text-[#1A1A1A]/70">Personalized designs and exceptional service</p>
              </div>
            </div>

            <button className="mt-6 bg-[#C3B091] hover:bg-[#1A1A1A] text-white px-10 py-4 rounded-2xl font-semibold
                             transition-all duration-300 hover:scale-105 shadow-lg">
              Know More About Us
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#C3B091]/10">
              <img
                src={aboutImage}
                alt="Shivam Interiors Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-3xl shadow-2xl border border-[#C3B091]/30 
                          transition-all duration-500 group-hover:-translate-y-3">
              <div className="flex items-center gap-4">
                <img
                  src={sivamLogo}
                  alt="Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <p className="font-bold text-xl tracking-tight">SHIVAM</p>
                  <p className="text-[#C3B091] -mt-1">UPVC INTERIORS</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;