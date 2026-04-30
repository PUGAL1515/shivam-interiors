import React from 'react';

const Stats = () => {
  return (
    <section className="py-12 bg-[#F8F4ED]">

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900">3</h3>
            <p className="text-[#C3B091] font-medium mt-2 text-lg">
              Years Free Services
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900">20+</h3>
            <p className="text-[#C3B091] font-medium mt-2 text-lg">
              Years of Warranty
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900">10+</h3>
            <p className="text-[#C3B091] font-medium mt-2 text-lg">
              Years Experience
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900">1,000+</h3>
            <p className="text-[#C3B091] font-medium mt-2 text-lg">
              Projects Completed
            </p>
          </div>

        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <a 
            href="#"
            className="bg-[#C3B091] hover:bg-[#B39A7A] text-white font-medium px-10 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            Read More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Stats;