import React from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';
import we from '../assets/we.png';

const WhoWeAre = () => {
  return (
    <section id="whoweare" className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="text-[#C3B091] font-medium tracking-widest">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Interior Designers in Chennai & Tamil Nadu
          </h2>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

  {/* ================= LEFT CONTENT ================= */}
  <div className="w-full lg:w-1/2 space-y-8">

    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
      Premium UPVC Interior Solutions —{" "}
      <span className="text-[#C3B091]">
        Shivam UPVC Interiors
      </span>
    </h3>

    <div className="text-gray-700 leading-relaxed space-y-4 text-[17px]">
      <p>
        At Shivam UPVC Interiors, we are passionate creators of exceptional living spaces.
        With years of experience, we specialize in transforming houses into modern,
        elegant, and durable homes using premium UPVC materials.
      </p>
      <p>
        We focus on quality craftsmanship, innovative designs, and customer satisfaction.
        Our solutions offer low maintenance, water resistance, fire resistance, and termite protection —
        making your dream home both beautiful and long-lasting.
      </p>
    </div>

    {/* Why Choose Us */}
    <div className="pt-4">
      <h4 className="font-semibold text-xl text-gray-900 mb-6">
        Why Choose Us?
      </h4>

      <div className="space-y-6">

        <div className="flex gap-4">
          <div className="text-3xl">👷‍♂️</div>
          <div>
            <h5 className="font-semibold text-lg">Professional Team</h5>
            <p className="text-gray-600">
              Experienced designers and skilled craftsmen dedicated to perfection.
            </p>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-4">
            100% Interior Proofs
          </h5>

          <div className="grid grid-cols-3 gap-4">
  <div className="bg-[#C3B091]/20 p-4 rounded-xl text-center hover:bg-[#C3B091]/30 transition">
    💧
    <span className="block mt-2 font-medium">Water Proof</span>
  </div>

  <div className="bg-[#C3B091]/20 p-4 rounded-xl text-center hover:bg-[#C3B091]/30 transition">
    🔥
    <span className="block mt-2 font-medium">Fire Proof</span>
  </div>

  <div className="bg-[#C3B091]/20 p-4 rounded-xl text-center hover:bg-[#C3B091]/30 transition">
    🛡️
    <span className="block mt-2 font-medium">Termite Proof</span>
  </div>
</div>
        </div>

      </div>
    </div>

  </div>

  {/* ================= RIGHT IMAGE ================= */}
  <div className="w-full lg:w-1/2 flex justify-center">

    <div className="relative w-full max-w-md">

      <img
        src={we}
        alt="Interior Project"
        className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
      />

      {/* Badge */}
      <div className="absolute -bottom-5 right-3 bg-white px-4 py-3 rounded-xl shadow-md flex items-center gap-2">
        <img src={sivamLogo} className="h-8" />
        <div>
          <p className="text-sm font-bold">SHIVAM UPVC</p>
          <p className="text-xs text-[#C3B091]">INTERIORS</p>
        </div>
      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
};

export default WhoWeAre;