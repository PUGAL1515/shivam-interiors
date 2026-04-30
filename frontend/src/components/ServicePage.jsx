import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ChefHat, 
  Shirt, 
  Tv, 
  Table, 
  BookOpen, 
  Church, 
  LayoutPanelLeft, 
  DoorClosed,
  Sparkles,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  X
} from 'lucide-react';

const ServicePage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  // Online placeholder images for all services
  const imageSets = {
    upvc: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&h=600&fit=crop"
    ],
    wardrobe: [
      "https://img.interiorcompany.com/interior/webproduct/4-door-contemporary-swing-wardrobe-design-with-loft-storage.png?aio=w-768",
      "https://img.interiorcompany.com/interior/webproduct/4-door-contemporary-swing-wardrobe-design-with-loft-storage.png?aio=w-768",
      "https://images.unsplash.com/photo-1595425970333-2121ae4d7edb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595425970416-2d0adf4d2e1a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
    ],
    kitchen: [
      "https://qarpentri.com/cdn/shop/files/forest-green-white-modern-l-shaped-kitchen-microwave-unit.jpg?v=1720978833",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
    ],
    tv: [
      "https://www.asenseinterior.com/assets/uploads/8ef31d3bb16901b94640759948f121db.webp",
      "https://images.unsplash.com/photo-1598928506733-22b5b9ec3d3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595521624992-48a59aef95ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598928506733-22b5b9ec3d3d?w=800&h=600&fit=crop"
    ],
    dressing: [
      "https://images.woodenstreet.de/image/data/dressing-tables/sharon-dressing-table-revised/updated/honey/updated+new/new-logo/5646564466.jpg",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop"
    ],
    study: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop"
    ],
    pooja: [
      "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/puja-room-1657182773-7ewEb/pooja-2-1659601746-uMicO.jpg",
      "https://images.unsplash.com/photo-1585416354839-5400d3b5ed09?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585416354839-5400d3b5ed09?w=800&h=600&fit=crop"
    ],
    partition: [
      "https://assets-news.housing.com/news/wp-content/uploads/2023/03/24002234/Unique-partition-designs-for-your-home-22.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    ceiling: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOf35aCpcOO0F347uk71p2g7fPOjwuHIh0QpQPqOd9H5ULQ6q",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    bathroom: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
    ]
  };

  const services = [
    {
      id: 1,
      name: "UPVC & SPC Interiors",
      icon: <Home className="w-8 h-8" />,
      description: "Durable and stylish UPVC & SPC solutions for modern interiors, offering longevity and low maintenance.",
      longDescription: "Our UPVC and SPC interior solutions are engineered for durability, style, and low maintenance. Perfect for modern homes and commercial spaces, these materials offer excellent water resistance, termite proofing, and long-lasting performance.",
      features: ["Water Resistant", "Termite Proof", "Low Maintenance", "Eco Friendly", "UV Resistant", "Scratch Resistant"],
      images: imageSets.upvc
    },
    {
      id: 2,
      name: "Wardrobe",
      icon: <Shirt className="w-8 h-8" />,
      description: "Maximize storage with bespoke wardrobes designed to fit your space and style perfectly.",
      longDescription: "Transform your bedroom with our custom-designed wardrobes. From sleek modern designs to classic wooden finishes, we create storage solutions that maximize space while adding elegance to your room.",
      features: ["Custom Sizes", "Multiple Finishes", "Soft Close Doors", "Optimized Storage", "Modular Designs", "Mirror Options"],
      images: imageSets.wardrobe
    },
    {
      id: 3,
      name: "Modular Kitchen",
      icon: <ChefHat className="w-8 h-8" />,
      description: "Custom kitchen designs that combine functionality and aesthetics, tailored to your cooking needs.",
      longDescription: "Experience the joy of cooking in a beautifully designed modular kitchen. Our custom solutions combine functionality with aesthetics, offering smart storage, easy maintenance, and ergonomic designs.",
      features: ["Modular Layouts", "Soft Close Drawers", "Easy To Clean", "Smart Storage", "Premium Hardware", "Custom Finishes"],
      images: imageSets.kitchen
    },
    {
      id: 4,
      name: "TV Unit",
      icon: <Tv className="w-8 h-8" />,
      description: "Modern and functional TV units that enhance your living space with style and storage.",
      longDescription: "Elevate your entertainment experience with our custom TV units. Designed to complement your living room decor while providing smart storage for all your media needs.",
      features: ["Cable Management", "LED Lighting", "Wall Mounted", "Extra Storage", "Modern Designs", "Custom Sizes"],
      images: imageSets.tv
    },
    {
      id: 5,
      name: "Dressing Table",
      icon: <Table className="w-8 h-8" />,
      description: "Elegant dressing tables designed for convenience and to complement your bedroom decor.",
      longDescription: "Start your day right with a beautifully crafted dressing table. Our designs combine style with functionality, featuring ample storage and elegant mirrors.",
      features: ["Mirror Included", "Jewelry Storage", "Comfortable Height", "LED Lighting", "Elegant Designs", "Quality Materials"],
      images: imageSets.dressing
    },
    {
      id: 6,
      name: "Study Table",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Ergonomic study tables that boost productivity with smart design and ample storage.",
      longDescription: "Create the perfect study environment with our ergonomic study tables. Designed for comfort and productivity, featuring smart storage and cable management.",
      features: ["Ergonomic Design", "Book Storage", "Cable Management", "Adjustable Height", "Study Lighting", "Premium Finish"],
      images: imageSets.study
    },
    {
      id: 7,
      name: "Pooja Room",
      icon: <Church className="w-8 h-8" />,
      description: "Spiritual and serene pooja room designs that create a sacred space for your home.",
      longDescription: "Create a peaceful sanctuary in your home with our custom pooja room designs. Blending traditional aesthetics with modern functionality.",
      features: ["Traditional Design", "Vastu Compliant", "Proper Lighting", "Storage Space", "Sacred Atmosphere", "Custom Carvings"],
      images: imageSets.pooja
    },
    {
      id: 8,
      name: "Hall Partition",
      icon: <LayoutPanelLeft className="w-8 h-8" />,
      description: "Stylish partitions to divide your hall, adding functionality and aesthetic appeal.",
      longDescription: "Maximize your living space with elegant hall partitions. Perfect for creating separate zones while maintaining an open, airy feel.",
      features: ["Space Division", "Modern Design", "Glass Options", "Light Weight", "Sound Reduction", "Privacy Solutions"],
      images: imageSets.partition
    },
    {
      id: 9,
      name: "False Ceiling",
      icon: <LayoutPanelLeft className="w-8 h-8" />,
      description: "Enhance your interiors with modern false ceilings that add depth and elegance.",
      longDescription: "Transform your space with stunning false ceiling designs. From simple elegance to complex patterns, we create ceilings that captivate.",
      features: ["POP Design", "Gypsum Board", "Lighting Integration", "Sound Proof", "Thermal Insulation", "Modern Aesthetics"],
      images: imageSets.ceiling
    },
    {
      id: 10,
      name: "Bathroom Doors",
      icon: <DoorClosed className="w-8 h-8" />,
      description: "Waterproof and stylish bathroom doors designed for durability and privacy.",
      longDescription: "Upgrade your bathroom with our premium waterproof doors. Combining style with functionality, these doors offer privacy and durability.",
      features: ["Waterproof", "Privacy Lock", "Easy Installation", "Rust Proof", "Moisture Resistant", "Modern Designs"],
      images: imageSets.bathroom
    }
  ];

  const openModal = (service, index = 0) => {
    setSelectedService(service);
    setModalImages(service.images);
    setModalCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setModalCurrentIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setModalCurrentIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, modalImages.length]);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#C3B091]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C3B091]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C3B091]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#C3B091]/10 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#C3B091]" />
              <span className="font-semibold tracking-wider text-sm text-[#C3B091] uppercase">
                What We Offer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Premium
              </span>
              <br />
              <span className="text-[#C3B091]">Interior Services</span>
            </h1>
            
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Transform your space with our comprehensive range of interior design solutions, 
              crafted with precision and passion for every room in your home
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Years Experience", value: "15+", icon: <Clock className="w-5 h-5" /> },
              { label: "Projects Completed", value: "500+", icon: <CheckCircle className="w-5 h-5" /> },
              { label: "Happy Clients", value: "1200+", icon: <Star className="w-5 h-5" /> },
              { label: "Projects Gallery", value: "1000+", icon: <Images className="w-5 h-5" /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center gap-2 text-[#C3B091] mb-2">
                  {stat.icon}
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => openModal(service, 0)}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Slideshow */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/400x300/f5f5f5/C3B091?text=Image+Coming+Soon';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image Counter Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {service.images.length} photos
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#C3B091]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Images className="w-10 h-10 mx-auto mb-2" />
                      <span className="font-semibold">View Gallery</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Service Icon */}
                  <div className="w-14 h-14 bg-[#C3B091]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#C3B091] transition-colors duration-300">
                    <div className="text-[#C3B091] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-2 bg-transparent border-2 border-[#C3B091] text-[#C3B091] hover:bg-[#C3B091] hover:text-white font-semibold py-2 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <span>View Gallery</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          
        </div>
      </section>

      {/* Modal Gallery - Medium Size */}
      {modalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={closeModal}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedService.name}
              </h3>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative bg-gray-100 p-6 flex items-center justify-center min-h-[400px]">
              <img
                src={modalImages[modalCurrentIndex]}
                alt={`${selectedService.name} - ${modalCurrentIndex + 1}`}
                className="max-w-full max-h-[50vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/f5f5f5/C3B091?text=Image+Not+Found';
                }}
              />
              
              {/* Navigation Arrows */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {modalCurrentIndex + 1} / {modalImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {modalImages.length > 1 && (
              <div className="bg-white px-6 py-4 border-t border-gray-200">
                <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
                  {modalImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                        idx === modalCurrentIndex 
                          ? 'ring-2 ring-[#C3B091] ring-offset-2' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => setModalCurrentIndex(idx)}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/100x100/f5f5f5/C3B091?text=Error';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service Info Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
              <button
                onClick={closeModal}
                className="w-full bg-[#C3B091] hover:bg-[#B49F7A] text-white font-semibold py-2 rounded-lg transition-all duration-300"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePage;