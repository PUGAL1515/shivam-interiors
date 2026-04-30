import React from 'react';
import { MapPin } from 'lucide-react'; // Recommended: Install lucide-react for better icons

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
                        Delivering premium interiors across key cities in Karnataka and Tamil Nadu
                    </p>
                </div>

                {/* Service Areas Content */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* Karnataka Column */}
                    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/30">
                        <div className="bg-[#C3B091] py-5 px-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <MapPin className="w-7 h-7" />
                                Karnataka
                            </h3>
                        </div>

                        <div className="p-8">
                            <ul className="space-y-4">
                                {['Bangalore', 'Nelamangala', 'Tumkur', 'Sira', 'Hiriyur', 'Chitradurga', 'Chamarajnagar'].map((city, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group/item"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#C3B091] group-hover/item:scale-125 transition-transform"></div>
                                        <span className="text-lg">{city}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tamil Nadu Column */}
                    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C3B091]/30">
                        <div className="bg-[#C3B091] py-5 px-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <MapPin className="w-7 h-7" />
                                Tamil Nadu
                            </h3>
                        </div>

                        <div className="p-8">
                            <ul className="space-y-4">
                                {['Hosur', 'Krishnagiri', 'Dharmapuri', 'Salem', 'Namakkal', 'Coimbatore'].map((city, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group/item"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#C3B091] group-hover/item:scale-125 transition-transform"></div>
                                        <span className="text-lg">{city}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Decorative Bottom Element */}
                <div className="flex justify-center mt-12">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;