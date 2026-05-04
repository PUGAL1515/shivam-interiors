import React, { useState, useEffect } from 'react';
import { 
  Home, Award, Users, Heart, Zap, 
  Star, Quote, Calendar, MapPin, Phone, Mail, 
  ArrowRight, TrendingUp, CheckCircle
} from 'lucide-react';

// Custom Social Icons (since Lucide removed brand icons)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4a10 10 0 0 1-3 7 10 10 0 0 1-7 3 10 10 0 0 1-7-3 10 10 0 0 1-3-7"/>
    <path d="M18 2L6 22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const AboutPage = () => {
  const [animatedCounts, setAnimatedCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });

  const stats = [
    { id: 'projects', label: 'Projects Completed', value: 248, icon: Home },
    { id: 'clients', label: 'Happy Clients', value: 186, icon: Users },
    { id: 'years', label: 'Years of Excellence', value: 12, icon: Calendar },
    { id: 'awards', label: 'Design Awards', value: 24, icon: Award }
  ];

  useEffect(() => {
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    
    stats.forEach(stat => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setAnimatedCounts(prev => ({ ...prev, [stat.id]: stat.value }));
          clearInterval(timer);
        } else {
          setAnimatedCounts(prev => ({ ...prev, [stat.id]: Math.floor(current) }));
        }
      }, stepTime);
    });
  }, []);

  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", years: "15+ years", projects: "120+ projects" },
    { name: "Michael Chen", role: "Lead Interior Architect", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", years: "12+ years", projects: "95+ projects" },
    { name: "Priya Sharma", role: "Senior Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", years: "8+ years", projects: "70+ projects" },
    { name: "David Martinez", role: "Project Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", years: "10+ years", projects: "85+ projects" }
  ];

  const values = [
    { icon: Heart, title: "Passion for Design", description: "We pour our hearts into every project, creating spaces that inspire and delight." },
    { icon: TrendingUp, title: "Innovation First", description: "Staying ahead with latest trends, technologies, and sustainable practices." },
    { icon: Users, title: "Client-Centric", description: "Your vision is our mission. We collaborate closely to bring your dreams to life." },
    { icon: Zap, title: "Attention to Detail", description: "Every element matters. We obsess over the smallest details for perfection." }
  ];

  const testimonials = [
    { name: "Rahul Mehta", project: "Luxury Penthouse, Mumbai", text: "Absolutely transformed our space! The team understood our vision perfectly and delivered beyond expectations.", rating: 5 },
    { name: "Anjali Nair", project: "Eco Villa, Coorg", text: "Professional, creative, and a pleasure to work with. Our home feels like a dream come true.", rating: 5 },
    { name: "Vikram Singh", project: "Corporate HQ, Delhi", text: "Best decision we made for our office. The design improved productivity and employee satisfaction.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCEB] font-['Inter',system-ui,-apple-system,sans-serif]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#FDFCEB]/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-[#FDFCEB]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">InteriorStudio</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Portfolio</a>
              <a href="#" className="text-sm font-medium text-black transition-colors font-semibold">About</a>
              <a href="#" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Services</a>
              <a href="#" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Contact</a>
            </nav>
            <button className="px-5 py-2 text-sm font-medium bg-black text-[#FDFCEB] rounded-full hover:bg-black/90 transition-all">
              Start a Project
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full mb-6">
                <Award className="w-4 h-4 text-black" />
                <span className="text-xs font-medium">12+ Years of Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Crafting Spaces 
                <span className="block text-black/60">That Inspire</span>
              </h1>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
                We believe that great design transforms lives. Our team of passionate designers 
                creates spaces that are not just beautiful, but deeply personal and functional.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-black text-[#FDFCEB] rounded-full font-semibold hover:bg-black/90 transition-all flex items-center gap-2 group">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 border border-black/20 rounded-full font-semibold hover:border-black/40 transition-all">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" alt="Interior" className="rounded-2xl shadow-xl w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400" alt="Interior" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400" alt="Interior" className="rounded-2xl shadow-xl w-full h-56 object-cover" />
                  <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400" alt="Interior" className="rounded-2xl shadow-xl w-full h-56 object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FDFCEB]">12+</div>
                  <div className="text-xs text-[#FDFCEB]/80">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Improved spacing */}
      <section className="py-20 border-y border-black/10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center group">
                <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{animatedCounts[stat.id]}+</div>
                <div className="text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full mb-6">
                <Heart className="w-4 h-4 text-black" />
                <span className="text-xs font-medium">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">From a Dream to Reality</h2>
              <p className="text-black/70 leading-relaxed mb-4">
                Founded in 2012, InteriorStudio began as a small collective of design enthusiasts 
                with a shared vision: to create spaces that tell stories and evoke emotions.
              </p>
              <p className="text-black/70 leading-relaxed mb-6">
                Today, we're proud to be one of the most recognized interior design studios, 
                having transformed over 200 spaces across residential, commercial, and hospitality sectors.
              </p>
              <div className="flex items-center gap-4 p-5 bg-black/5 rounded-xl">
                <Quote className="w-8 h-8 text-black/30" />
                <p className="text-sm italic text-black/70">"Design is not just what it looks like, it's how it makes you feel."</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-black/5 rounded-2xl" />
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" alt="Our Studio" className="rounded-2xl shadow-2xl relative z-10 w-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-black/60 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-5 h-5 text-[#FDFCEB]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section - New section replacing timeline */}
      <section className="py-24 bg-black text-[#FDFCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-[#FDFCEB]/70 max-w-2xl mx-auto">What makes us different from the rest</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDFCEB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">End-to-End Service</h3>
              <p className="text-[#FDFCEB]/70">From concept to completion, we handle everything</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDFCEB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
              <p className="text-[#FDFCEB]/70">Every project is unique, just like our clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDFCEB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-[#FDFCEB]/70">We respect your time and deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-black/60">Trusted by homeowners and businesses alike</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-black/70 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-black/10">
                  <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-black/50">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#FDFCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">Let's create something beautiful together. Start your design journey today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-[#FDFCEB] text-black rounded-full font-semibold hover:bg-white/90 transition-all flex items-center gap-2 group">
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-[#FDFCEB]/30 rounded-full font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/10 bg-[#FDFCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-[#FDFCEB]" />
                </div>
                <span className="font-bold text-lg">InteriorStudio</span>
              </div>
              <p className="text-sm text-black/60">Creating beautiful spaces that inspire and delight.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Design Street, NY</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 234 567 890</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@interiorstudio.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <TwitterIcon />
                </a>
                <a href="#" className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 mt-8 border-t border-black/10 text-sm text-black/50">
            <p>&copy; 2024 InteriorStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-left {
          from { transform: translateX(-2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-from-right {
          from { transform: translateX(2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-in {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
          animation-duration: 0.7s;
        }
        .slide-in-from-left {
          animation-name: slide-in-from-left;
          animation-duration: 0.7s;
        }
        .slide-in-from-right {
          animation-name: slide-in-from-right;
          animation-duration: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;