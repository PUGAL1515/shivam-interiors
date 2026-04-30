import React from 'react';
import tvUnitImage from '../assets/tvunit.avif';
import partitionImage from '../assets/Partition.webp';

const Services = () => {
  return (
    <section id="services" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[#C3B091] font-medium tracking-widest">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Premium Services
          </h2>
          <div className="w-20 h-1 bg-[#C3B091] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Hall Partition Card */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div 
              className="h-72 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${partitionImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">Hall Partition</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Stylish and functional hall partitions that beautifully divide your space 
                while adding elegance and modern appeal.
              </p>
            </div>
          </div>

          {/* TV Unit Card - Using your tvunit.avif */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div 
              className="h-72 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${tvUnitImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">TV Unit</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Modern and elegant TV units with smart storage solutions and premium finishes 
                that enhance your living room.
              </p>
            </div>
          </div>

          {/* Wardrobe Card (Using placeholder for now) */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div 
              className="h-72 bg-cover bg-center relative"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070')" 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">Wardrobe</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Custom-designed wardrobes tailored to your space with maximum storage 
                and elegant finish.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <button className="bg-[#C3B091] hover:bg-[#A67C5D] text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;