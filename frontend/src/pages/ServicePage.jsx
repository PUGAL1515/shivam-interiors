import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, Star, Zap } from 'lucide-react';

// Production Ready API URL
const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'https://shivam-interiors.33threads.in';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const url = `${API_BASE_URL}/api/services/`;
        console.log('🌐 Fetching services from:', url);

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        setServices(data);
        setError(null);
      } catch (err) {
        console.error('API Fetch Error:', err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const openModal = (service) => {
    const images = service.images?.map(img => img.image).filter(Boolean) || [];
    setSelectedService(service);
    setModalImages(images);
    setModalCurrentIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "8+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "10+", label: "Awards Won" }
  ];

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCEB] to-[#1A1A1A] flex items-center justify-center text-[#C9A96E] text-xl">
        Loading Premium Services...
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCEB] to-[#1A1A1A] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <p className="text-[#3A3A3A]">Backend server might be restarting. Please refresh after some time.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .floating { animation: float 6s ease-in-out infinite; }
          .slide-left { animation: slideInLeft 0.8s ease-out forwards; }
          .slide-right { animation: slideInRight 0.8s ease-out forwards; }
          .service-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .service-card:hover {
            transform: translateY(-8px);
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-[#FDFCEB] via-[#F5F2E8] to-[#1A1A1A]">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-left space-y-6">
                <div className="mt-12 inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full border border-[#C9A96E]/30 w-fit">
                  <Sparkles className="w-4 h-4 text-[#C9A96E]" />
                  <span className="text-xs font-mono tracking-wider text-[#1A1A1A]">Premium Interior Solutions</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-[#1A1A1A]">Transform Your</span>
                  <br />
                  <span className="text-[#C9A96E]">Space With Elegance</span>
                </h1>
                <p className="text-lg text-[#3A3A3A] leading-relaxed max-w-lg">
                  Experience luxury redefined with our premium interior design services. 
                  From concept to completion, we bring your vision to life.
                </p>
                
                <div className="grid grid-cols-4 gap-4 pt-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[#C9A96E]">{stat.value}</div>
                      <div className="text-xs text-[#3A3A3A] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="group bg-[#1A1A1A] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#C9A96E] hover:text-black transition-all duration-300 text-sm">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="slide-right">
                <div className="floating relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#C9A96E]/20 to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-[#C9A96E]/30 shadow-xl">
                    <div className="text-center">
                      <div className="text-5xl mb-3">✨</div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Premium Quality</h3>
                      <p className="text-sm text-[#3A3A3A]">Certified materials with 10-year warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative pt-4 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#C9A96E] text-xs tracking-[4px] font-mono">OUR EXPERTISE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
                Services We <span className="text-[#C9A96E]">Provide</span>
              </h2>
              <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const firstImage = service.images?.[0]?.image;
                
                return (
                  <div 
                    key={service.id}
                    className="service-card group cursor-pointer"
                    onClick={() => openModal(service)}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img 
                          src={firstImage || 'https://placehold.co/600x400/1f1f1f/C9A96E'} 
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 bg-[#C9A96E] text-black px-2 py-1 rounded-md text-xs font-bold">
                          Premium
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors line-clamp-1">
                            {service.name}
                          </h3>
                          <div className="w-7 h-7 rounded-full bg-[#C9A96E]/10 flex items-center justify-center group-hover:bg-[#C9A96E] transition-all flex-shrink-0 ml-2">
                            <ArrowRight className="w-3 h-3 text-[#C9A96E] group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        
                        <p className="text-[#3A3A3A] text-sm leading-relaxed line-clamp-2 mb-3">
                          {service.long_description || service.description || "Premium interior design services tailored to your needs."}
                        </p>
                        
                        {service.features && service.features.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {service.features.slice(0, 3).map((feature, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-[#C9A96E]/10 text-[#C9A96E] rounded-md">
                                {feature.length > 20 ? feature.slice(0, 20) + '...' : feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {services.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#3A3A3A]">No services available at the moment.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C9A96E]/10 px-3 py-1 rounded-full mb-4">
                  <Star className="w-3 h-3 text-[#C9A96E]" />
                  <span className="text-xs text-[#C9A96E]">Limited Time Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ready to Create Your Dream Space?
                </h2>
                <p className="text-gray-300 text-base mb-6">
                  Book your free consultation today and get a personalized design proposal
                </p>
                <button className="bg-[#C9A96E] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center gap-2 group text-sm">
                  Get Free Quote
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl mb-1">🎯</div>
                  <div className="text-white font-bold text-sm">100%</div>
                  <div className="text-xs text-gray-300">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-white font-bold text-sm">24/7</div>
                  <div className="text-xs text-gray-300">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl mb-1">💰</div>
                  <div className="text-white font-bold text-sm">Best Price</div>
                  <div className="text-xs text-gray-300">Guarantee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-white font-bold text-sm">10 Year</div>
                  <div className="text-xs text-gray-300">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                <button onClick={closeModal} className="text-white hover:text-[#C9A96E] transition-colors">
                  <X size={28} />
                </button>
              </div>
              
              <div className="relative rounded-xl overflow-hidden bg-black">
                {modalImages.length > 0 ? (
                  <img 
                    src={modalImages[modalCurrentIndex]} 
                    alt="" 
                    className="max-h-[70vh] w-full object-contain"
                  />
                ) : (
                  <p className="text-white p-12 text-center">No images available</p>
                )}

                {modalImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => setModalCurrentIndex((p) => (p - 1 + modalImages.length) % modalImages.length)} 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#C9A96E] text-white p-3 rounded-full transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={() => setModalCurrentIndex((p) => (p + 1) % modalImages.length)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#C9A96E] text-white p-3 rounded-full transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicePage;