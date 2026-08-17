import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="font-medium tracking-widest text-sm"
            style={{ color: '#C3B091' }}
          >
            WHERE WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Service Areas
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Providing premium UPVC windows, doors & interior solutions in Vellore, Chennai, Bangalore, Coimbatore and Andhra Pradesh
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Vellore - Main Location */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#C3B091]">
            <div className="bg-[#C3B091] py-5 px-6 text-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Vellore
              </h3>
              <span className="text-white/90 text-sm mt-1 block">Head Office</span>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm">
                UPVC Windows, Doors & Complete Interior Solutions
              </p>
            </div>
          </div>

          {/* Chennai */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/40">
            <div className="bg-gray-800 py-5 px-6 text-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Chennai
              </h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm">
                UPVC Windows, Doors & Interior Design
              </p>
            </div>
          </div>

          {/* Bangalore */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/40">
            <div className="bg-gray-800 py-5 px-6 text-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Bangalore
              </h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm">
                UPVC Windows, Doors & Interior Solutions
              </p>
            </div>
          </div>

          {/* Coimbatore */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/40">
            <div className="bg-gray-800 py-5 px-6 text-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Coimbatore
              </h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm">
                UPVC Windows, Doors & Home Interiors
              </p>
            </div>
          </div>

          {/* Andhra Pradesh */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/40 sm:col-span-2 lg:col-span-1">
            <div className="bg-gray-800 py-5 px-6 text-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Andhra Pradesh
              </h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm">
                UPVC Windows, Doors & Interior Services
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Based in <span className="font-semibold text-[#C3B091]">Vellore</span> — Serving clients across Tamil Nadu, Karnataka & Andhra Pradesh
          </p>
        </div>

        {/* Decorative Line */}
        <div className="flex justify-center mt-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;