import React, { useState } from 'react';
import { Plus, Search, FolderOpen, Home, Eye } from 'lucide-react';

// Fallback images data
const fallbackImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
];

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Luxury Penthouse",
    category: "residential",
    location: "Marina Drive, Mumbai",
    area: "4500 sq.ft",
    year: "2024",
    client: "Mr. Rajesh Khanna",
    duration: "6 months",
    description: "Stunning penthouse with modern minimalist design and ocean views.",
    longDescription: "A luxurious penthouse offering breathtaking views and premium finishes. Every element crafted for luxury living with smart home automation and imported marble flooring.",
    image: fallbackImages[0],
    features: ["Smart Home Automation", "Imported Marble Flooring", "Custom Italian Furniture"]
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "commercial",
    location: "Business Bay, Delhi",
    area: "25000 sq.ft",
    year: "2023",
    client: "TechCorp Solutions",
    duration: "8 months",
    description: "Modern workspace designed for collaboration and innovation.",
    longDescription: "State-of-the-art corporate office with flexible workspaces, biophilic design, and smart meeting rooms.",
    image: fallbackImages[1],
    features: ["Biophilic Design", "Smart Meeting Rooms", "Wellness Zones"]
  },
  {
    id: 3,
    title: "Boutique Hotel",
    category: "hospitality",
    location: "Jodhpur, Rajasthan",
    area: "12000 sq.ft",
    year: "2024",
    client: "Heritage Hotels Group",
    duration: "10 months",
    description: "Luxury boutique hotel blending tradition with modern comfort.",
    longDescription: "Heritage-inspired boutique hotel with royal experience, featuring traditional Rajasthani architecture.",
    image: fallbackImages[2],
    features: ["Heritage Architecture", "Spa & Wellness Center", "Rooftop Restaurant"]
  },
  {
    id: 4,
    title: "Eco Villa",
    category: "residential",
    location: "Coorg, Karnataka",
    area: "3200 sq.ft",
    year: "2024",
    client: "Mr. & Mrs. Nair",
    duration: "7 months",
    description: "Sustainable luxury villa with solar energy and nature integration.",
    longDescription: "Eco-friendly villa harmonizing luxury and sustainability with solar panels and rainwater harvesting.",
    image: fallbackImages[3],
    features: ["Solar Energy System", "Rainwater Harvesting", "Natural Ventilation"]
  },
  {
    id: 5,
    title: "Fine Dining Restaurant",
    category: "commercial",
    location: "Andheri, Mumbai",
    area: "2800 sq.ft",
    year: "2023",
    client: "Gourmet Concepts",
    duration: "4 months",
    description: "Industrial chic restaurant with artistic ambiance.",
    longDescription: "Trendy restaurant combining industrial charm with modern elegance.",
    image: fallbackImages[4],
    features: ["Open Kitchen Concept", "Custom Lighting Design", "Live Music Stage"]
  },
  {
    id: 6,
    title: "Minimalist Apartment",
    category: "residential",
    location: "Bangalore",
    area: "1800 sq.ft",
    year: "2024",
    client: "Ms. Anjali Menon",
    duration: "3 months",
    description: "Clean lines and functional design for urban living.",
    longDescription: "Minimalist apartment embracing 'less is more' philosophy.",
    image: fallbackImages[6],
    features: ["Hidden Storage", "Multi-functional Furniture", "Smart Space Planning"]
  },
  {
    id: 7,
    title: "Luxury Showroom",
    category: "commercial",
    location: "Connaught Place, Delhi",
    area: "5000 sq.ft",
    year: "2023",
    client: "Luxury Auto Brands",
    duration: "6 months",
    description: "Premium automotive showroom with immersive experience.",
    longDescription: "Luxury showroom creating memorable brand experience.",
    image: fallbackImages[7],
    features: ["Interactive Displays", "VIP Lounge", "Test Drive Studio"]
  }
];

const categoriesData = [
  { id: "all", name: "All Projects", count: projectsData.length },
  { id: "residential", name: "Residential", count: projectsData.filter(p => p.category === "residential").length },
  { id: "commercial", name: "Commercial", count: projectsData.filter(p => p.category === "commercial").length },
  { id: "hospitality", name: "Hospitality", count: projectsData.filter(p => p.category === "hospitality").length }
];

const ExistingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on category and search
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUseProject = (project) => {
    setSelectedProject(project);
    console.log('Selected project:', project);
    alert(`You selected: ${project.title}\n\nProject details will be loaded for editing.`);
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
              <span className="text-2xl font-bold tracking-tight">InteriorStudio</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium text-black/60 hover:text-black transition-colors">
                Dashboard
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-black text-[#FDFCEB] rounded-full hover:bg-black/90 transition-all">
                My Projects
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent">
            Choose a Project Template
          </h1>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Start from one of our previous projects and customize it to fit your needs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 flex-wrap justify-center">
            {categoriesData.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-black text-[#FDFCEB] shadow-md'
                    : 'bg-white border border-black/20 text-black/70 hover:border-black/40 hover:shadow-sm'
                }`}
              >
                {cat.name} <span className="opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
            <input
              type="text"
              placeholder="Search by title, location, or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white rounded-full border border-black/20 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-black/5 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full capitalize font-medium">
                    {project.category}
                  </span>
                  <button
                    onClick={() => handleUseProject(project)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-white text-black rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white shadow-lg flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Use Template
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-black/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/50 mb-3 flex items-center gap-1">
                    📍 {project.location}
                  </p>
                  <p className="text-sm text-black/70 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60">📐 {project.area}</span>
                    <span className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60">📅 {project.year}</span>
                    <span className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60">⏱️ {project.duration}</span>
                  </div>
                  <div className="pt-3 border-t border-black/10">
                    <p className="text-xs text-black/50 flex items-center gap-1">
                      <span className="font-medium">Client:</span> {project.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FolderOpen className="w-20 h-20 text-black/20 mx-auto mb-5" />
            <h3 className="text-xl font-medium text-black/60 mb-2">No projects found</h3>
            <p className="text-black/40">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Selected Project Preview Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="bg-[#FDFCEB] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-black/60 mb-4">{selectedProject.location}</p>
                <p className="text-black/80 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-lg">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-black/5 rounded-xl">
                  <div>
                    <p className="text-xs text-black/50">Area</p>
                    <p className="font-semibold">{selectedProject.area}</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50">Year</p>
                    <p className="font-semibold">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50">Duration</p>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50">Client</p>
                    <p className="font-semibold">{selectedProject.client}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      alert(`Starting new project based on: ${selectedProject.title}`);
                      setSelectedProject(null);
                    }}
                    className="flex-1 py-3 bg-black text-[#FDFCEB] rounded-xl font-semibold hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Use This Template
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 border border-black/20 rounded-xl font-medium hover:border-black/40 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black/50 text-sm">
          <p>© 2024 InteriorStudio — Transform your space with confidence</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
          animation-duration: 0.2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ExistingProjects;