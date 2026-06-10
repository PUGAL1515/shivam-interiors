import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/services/`);

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setServices(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching services:", error);

        setServices([
          {
            name: "Hall Partition",
            description:
              "Stylish and functional hall partitions that beautifully divide your space while adding elegance.",
            image:
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
          },
          {
            name: "TV Unit",
            description:
              "Modern and elegant TV units with smart storage solutions and premium finishes.",
            image:
              "https://images.unsplash.com/photo-1598928506733-22b5b9ec3d3d?q=80&w=2070",
          },
          {
            name: "Wardrobe",
            description:
              "Custom-designed wardrobes tailored to your space with maximum storage and elegant finish.",
            image:
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center text-xl">
        Loading our premium services...
      </div>
    );
  }

  return (
    <section id="services" className="pt-6 pb-16 bg-[#FDFCEB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C3B091] font-medium tracking-[4px] text-sm">
            WHAT WE OFFER
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight text-[#1A1A1A]">
            Our Signature Services
          </h2>

          <div className="w-24 h-1 bg-[#C3B091] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-[#FDFCEB]"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">
                  {service.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 line-clamp-4">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 text-[#C3B091] hover:text-[#1A1A1A] font-semibold group/btn text-lg"
                >
                  Discover More
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <button className="bg-[#C3B091] hover:bg-[#1A1A1A] text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;