import React, { useEffect, useRef } from 'react';
import sivamLogo from '../assets/sivam-interior-logo.jpeg';
import we from '../assets/we.png';

const WhoWeAre = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          /* Cream and Black Theme Variables */
          :root {
            --cream-bg: #FDFCEB;
            --cream-dark: #F5F3E0;
            --cream-light: #FFFEF5;
            --black: #1A1A1A;
            --black-soft: #2A2A2A;
            --black-light: #3A3A3A;
            --accent-gold: #C9A96E;
          }

          /* Main Section */
          .who-we-are-section {
            background: #FDFCEB;
            position: relative;
            overflow: hidden;
          }

          /* Decorative Background Elements */
          .who-we-are-section::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 80%;
            height: 80%;
            background: radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%);
            pointer-events: none;
          }

          /* Image Animation - Smooth Reveal */
          @keyframes smoothImageReveal {
            0% {
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
              transform: scale(0.95);
              opacity: 0;
            }
            100% {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              transform: scale(1);
              opacity: 1;
            }
          }

          /* Content Animation */
          @keyframes fadeUpContent {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Animation Classes */
          .image-animate {
            animation: smoothImageReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .content-animate {
            animation: fadeUpContent 0.8s ease-out forwards;
          }

          .card-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .card-animate.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Stagger Card Animations */
          .card-animate:nth-child(1) { transition-delay: 0.1s; }
          .card-animate:nth-child(2) { transition-delay: 0.2s; }
          .card-animate:nth-child(3) { transition-delay: 0.3s; }

          /* Image Hover Effect */
          .image-wrapper {
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem;
            box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
          }

          .image-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
            z-index: 1;
            pointer-events: none;
          }

          .image-wrapper:hover::before {
            left: 200%;
          }

          .animated-image {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            height: auto;
            display: block;
          }

          .image-wrapper:hover .animated-image {
            transform: scale(1.03);
          }

          /* Custom floating animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }

          .floating-badge {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <section className="who-we-are-section pt-2 pb-16 px-4 relative" style={{ backgroundColor: '#FDFCEB' }}>
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Section Header - Minimal & Elegant */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-[#C9A96E]"></div>
              <span className="text-[#C9A96E] text-sm tracking-[4px] uppercase font-medium">
                Our Story
              </span>
              <div className="w-8 h-px bg-[#C9A96E]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Who We Are
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Content - XL Text Size */}
            <div ref={contentRef} className="content-animate opacity-0 space-y-8">
              
              {/* Main Quote */}
              <div className="bg-[#1A1A1A] p-8 rounded-2xl relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#C9A96E] rounded-full flex items-center justify-center text-2xl text-white">
                  "
                </div>
                <p className="text-[#FDFCEB] text-xl md:text-2xl leading-relaxed pl-2">
                  We don't just design interiors — we craft lifestyles that blend elegance with functionality
                </p>
              </div>

              {/* Company Introduction - XL Text */}
              <div className="space-y-4">
                <p className="text-[#1A1A1A] leading-relaxed text-2xl  md:text-2xl">
                  <span className="font-bold text-[#C9A96E]">Shivam UPVC Interiors</span> has been a trusted name in Tamil Nadu, 
                  delivering excellence in interior design since 2016.
                </p>
                <p className="text-[#1A1A1A] leading-relaxed text-xl">
                  Our commitment to quality, innovation, and customer satisfaction sets us apart 
                  in creating spaces that inspire and endure.
                </p>
              </div>

              {/* Quick Stats - XL Design */}
              {/* <div className="flex justify-around gap-6 py-6 border-y border-[#C9A96E]/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A96E]">500+</div>
                  <div className="text-sm text-[#3A3A3A] uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div className="w-px h-12 bg-[#C9A96E]/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A96E]">8+</div>
                  <div className="text-sm text-[#3A3A3A] uppercase tracking-wider mt-1">Years</div>
                </div>
                <div className="w-px h-12 bg-[#C9A96E]/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A96E]">100%</div>
                  <div className="text-sm text-[#3A3A3A] uppercase tracking-wider mt-1">Satisfaction</div>
                </div>
              </div> */}

              {/* Features - XL Cards */}
              <div>
  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 flex items-center gap-2">
    <span className="w-6 h-px bg-[#C9A96E]"></span>
    Premium Features
  </h3>
  <div className="flex flex-wrap gap-x-8 gap-y-2">
    {[
      { icon: "💧", title: "100% Water Proof" },
      { icon: "🔥", title: "Fire Resistant" },
      { icon: "🛡️", title: "Termite Proof" }
    ].map((feature, idx) => (
      <div
        key={idx}
        ref={el => cardsRef.current[idx] = el}
        className="card-animate group cursor-pointer"
      >
        <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          <span className="text-lg">{feature.icon}</span>
          <span className="text-[#1A1A1A] text-sm font-medium">
            {feature.title}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>

            {/* Right Side - Optimized Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm md:max-w-md">
                
                {/* Main Image Container */}
                <div 
                  ref={imageRef}
                  className="image-wrapper opacity-0"
                  style={{ animation: 'smoothImageReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
                >
                  <img 
                    src={we} 
                    alt="Shivam Interiors" 
                    className="animated-image rounded-xl"
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none"></div>
                </div>

                {/* Floating Award Badge */}
                <div className="absolute -top-3 -left-3 floating-badge">
                  <div className="bg-black text-[#FDFCEB] px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold leading-none">10+</div>
                      <div className="text-[10px] uppercase tracking-wider">Awards</div>
                    </div>
                  </div>
                </div>

                {/* Logo Badge */}
                <div className="absolute -bottom-3 -right-3">
                  <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-[#C9A96E]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A96E] flex items-center justify-center overflow-hidden">
                        <img src={sivamLogo} alt="Logo" className="h-8 w-auto rounded-full" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1A1A1A] text-sm tracking-tight">SHIVAM</p>
                        <p className="text-[#C9A96E] text-[10px] font-mono tracking-wider">UPVC INTERIORS</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-[#C9A96E]/5"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;