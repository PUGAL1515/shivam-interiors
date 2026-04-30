import React from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';
import aboutImage from '../assets/image.png';

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">   {/* Reduced padding */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title - Compact */}
        <div className="text-center mb-12">
          <span className="text-[#C3B091] font-medium tracking-widest text-sm">OUR STORY</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            About Shivam UPVC Interiors
          </h2>
          <div className="w-16 h-1 bg-[#C3B091] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">   {/* Reduced gap */}
          
          {/* Left Side - Text */}
          <div className="space-y-6">   {/* Reduced spacing */}
            <div className="prose prose-base text-gray-700">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-[#C3B091]">Shivam UPVC Interiors</span> is a trusted premium interior company 
                specializing in UPVC False Ceilings, PVC Wall Paneling, SPC Flooring & modern interiors.
              </p>

              <p>
                With extensive experience, we transform ordinary spaces into elegant and functional environments 
                using quality materials and expert craftsmanship.
              </p>
            </div>

            {/* Highlights - More Compact */}
            <div className="grid grid-cols-2 gap-5 pt-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C3B091]/10 flex items-center justify-center text-xl flex-shrink-0">
                  🏠
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">Expert Craftsmanship</h4>
                  <p className="text-sm text-gray-600">Premium materials & precision</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C3B091]/10 flex items-center justify-center text-xl flex-shrink-0">
                  ⭐
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">Client Focused</h4>
                  <p className="text-sm text-gray-600">Personalized service</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#C3B091] hover:bg-[#A67C5D] text-white px-8 py-3 rounded-full font-medium text-sm transition-all">
                Know More About Us
              </button>
            </div>
          </div>

          {/* Right Side - Image (Minimized) */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">   {/* Changed to aspect-video for smaller height */}
              <img 
                src={aboutImage} 
                alt="Shivam UPVC Interiors"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small Accent Box */}
            <div className="absolute -bottom-5 -left-5 bg-white px-5 py-4 rounded-xl shadow-lg border border-[#EDE4D9]">
              <div className="flex items-center gap-3">
                <img 
                  src={sivamLogo} 
                  alt="Logo" 
                  className="h-9 w-auto"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Shivam UPVC</p>
                  <p className="text-[#C3B091]">Interiors</p>
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