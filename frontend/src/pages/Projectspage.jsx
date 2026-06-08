import React, { useState } from 'react';
import { Home, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images
import tvUnit1 from "../assets/tvunit01.jpeg";
import tvUnit2 from "../assets/tvunit02.jpeg";
import tvUnit3 from "../assets/tvunit03.jpeg";
import tvUnit4 from "../assets/tvunit04.jpeg";
import tvUnit5 from "../assets/tvunit05.jpeg";

import wardrobe1 from "../assets/Wardrobe01.jpeg";
import wardrobe2 from "../assets/Wardrobe02.jpeg";

import partition1 from "../assets/partition01.jpeg";
import partition2 from "../assets/Partition.webp";

const categories = [
  {
    id: "tv-unit",
    title: "TV Unit",
    images: [tvUnit1, tvUnit2, tvUnit3, tvUnit4, tvUnit5],
    desc: "Elegant Entertainment Centers"
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    images: [wardrobe1, wardrobe2],
    desc: "Custom Storage Solutions"
  },
  {
    id: "partition",
    title: "Hall Partition",
    images: [partition1, partition2],
    desc: "Modern Space Dividers"
  }
];

const ExistingProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCategory = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    if (!selectedCategory) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedCategory.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    if (!selectedCategory) return;
    setCurrentImageIndex((prev) => 
      prev === selectedCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFCEB] font-['Inter',system-ui,-apple-system,sans-serif]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#FDFCEB]/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-[#FDFCEB]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Sivam Interiors</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Our Recent Projects
          </h1>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Click on any project to view complete gallery
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => openCategory(cat)}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={cat.images[0]}
                alt={cat.title}
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-3xl font-semibold">{cat.title}</h3>
                <p className="text-white/80 text-sm mt-1">{cat.desc}</p>
                <p className="text-white/60 text-xs mt-2">Click to view gallery →</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ====================== COMPACT IMAGE SLIDER MODAL ====================== */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Modal Header with Cancel Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedCategory.title}</h2>
                <p className="text-gray-600 text-sm">{selectedCategory.desc}</p>
              </div>
              <button
                onClick={closeModal}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-xl transition-all"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>

            {/* Image Area */}
            <div className="relative bg-black p-4">
              <img
                src={selectedCategory.images[currentImageIndex]}
                alt={`${selectedCategory.title} ${currentImageIndex + 1}`}
                className="w-full max-h-[65vh] object-contain mx-auto rounded-2xl"
              />

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-1.5 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {selectedCategory.images.length}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 text-center text-xs text-gray-500 bg-gray-50">
              Click arrows or drag to navigate • Sivam Interiors
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black/50 text-sm">
          <p>© 2026 Sivam Interiors — Premium Interior Solutions</p>
        </div>
      </footer>
    </div>
  );
};

export default ExistingProjects;