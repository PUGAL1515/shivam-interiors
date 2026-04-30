import React from 'react';

const MaterialsWeUse = () => {
  return (
    <section id="materials" className="py-2 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C3B091] font-medium tracking-widest text-sm">PREMIUM PARTNERS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Materials We Use
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We partner with top-tier brands to ensure durability, style, and sustainability in every project.
          </p>
        </div>

        {/* Brands Grid - More Compact & Eye-catching */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          
          {/* Brand Card */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C3B091]/20">
            <div className="h-44 bg-white flex items-center justify-center p-6 border-b border-gray-50">
              <img 
                src="/assets/brands/kaka.jpg" 
                alt="KAKA" 
                className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">KAKA</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                High-quality UPVC materials known for durability and modern aesthetic.
              </p>
            </div>
          </div>

          {/* Repeat for other brands with shorter descriptions */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C3B091]/20">
            <div className="h-44 bg-white flex items-center justify-center p-6 border-b border-gray-50">
              <img 
                src="/assets/brands/polywood.jpg" 
                alt="POLYWOOD" 
                className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">POLYWOOD</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                Eco-friendly HDPE materials made from recycled plastics.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C3B091]/20">
            <div className="h-44 bg-white flex items-center justify-center p-6 border-b border-gray-50">
              <img 
                src="/assets/brands/woodwin.jpg" 
                alt="WOODWIN" 
                className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WOODWIN</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                Premium wood-like finishes with elegance and low maintenance.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C3B091]/20">
            <div className="h-44 bg-white flex items-center justify-center p-6 border-b border-gray-50">
              <img 
                src="/assets/brands/decorplast.jpg" 
                alt="DECORPLAST" 
                className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DECORPLAST</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                Innovative plastic composites with high versatility and wear resistance.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C3B091]/20">
            <div className="h-44 bg-white flex items-center justify-center p-6 border-b border-gray-50">
              <img 
                src="/assets/brands/jomsons.jpg" 
                alt="JOMSON'S" 
                className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">JOMSON'S</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                Fire-proof and termite-proof materials ensuring safety and longevity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaterialsWeUse;