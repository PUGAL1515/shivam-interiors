import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[#C3B091] font-medium tracking-widest text-sm">OUR PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Recent Works Gallery
          </h2>
          <div className="w-20 h-1 bg-[#C3B091] mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project Item */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a9c?q=80&w=2070" 
              alt="Wardrobe"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">Wardrobe</h3>
              <p className="text-white/80 text-sm mt-1">Custom Storage Solutions</p>
            </div>
          </div>

          {/* Project Item 2 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd5b8c4c8e9a?q=80&w=2070" 
              alt="Hall Partition"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">Hall Partition</h3>
              <p className="text-white/80 text-sm mt-1">Modern Space Divider</p>
            </div>
          </div>

          {/* Project Item 3 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070" 
              alt="TV Unit"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">TV Unit</h3>
              <p className="text-white/80 text-sm mt-1">Elegant Entertainment Center</p>
            </div>
          </div>

          {/* You can add more items as needed */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600210492493-094691112201?q=80&w=2070" 
              alt="Pooja Room"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">Pooja Room</h3>
              <p className="text-white/80 text-sm mt-1">Traditional & Modern Blend</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070" 
              alt="Kitchen"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">Modern Kitchen</h3>
              <p className="text-white/80 text-sm mt-1">Premium Modular Design</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070" 
              alt="Dressing Table"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-2xl font-semibold">Dressing Table</h3>
              <p className="text-white/80 text-sm mt-1">Luxury Vanity Design</p>
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <button className="bg-[#C3B091] hover:bg-[#A67C5D] text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;