import React from 'react';

const Services = () => {
  const services = [
    "Modular Kitchen",
    "Storage and Wardrobe",
    "Crockery Units",
    "Space Saving Furniture",
    "TV Units",
    "Study Tables",
    "False Ceiling",
    "Lighting Design",
    "Wallpaper",
    "Wall Paint",
    "Bathroom Interior",
    "Pooja Unit",
    "Foyer Designs",
    "Movable Furniture",
    "Kids Bedroom"
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#FDFCEB' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#8C6F4E] uppercase tracking-[3px] text-sm font-medium">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mt-3 tracking-tight">
            End-to-End Interior Solutions
          </h2>
          <p className="mt-4 text-[#4A4035] max-w-2xl mx-auto text-lg">
            From concept to completion, we deliver complete interior solutions tailored to your lifestyle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-[#1F1F1F] hover:text-white transition-all duration-300 rounded-2xl p-6 shadow-sm hover:shadow-xl flex items-center gap-4 border border-transparent hover:border-[#C9A96E]"
            >
              <div className="w-8 h-8 flex-shrink-0 rounded-xl bg-[#C9A96E]/10 group-hover:bg-[#C9A96E]/20 flex items-center justify-center transition-colors">
                <span className="text-[#C9A96E] text-xl font-light group-hover:scale-110 transition-transform">→</span>
              </div>
              
              <h3 className="text-lg font-medium text-[#1F1F1F] group-hover:text-white transition-colors">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-[#C9A96E] hover:bg-[#B38A4F] text-white font-medium px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            Get Your Free Design Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;