import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const duration = 1800;
          const increment = Math.ceil(end / (duration / 16));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className="text-5xl md:text-6xl font-bold tracking-tighter text-[#F4E9D8] 
                 drop-shadow-[0_0_20px_rgba(196,177,89,0.5)] 
                 group-hover:drop-shadow-[0_0_30px_rgba(196,177,89,0.7)] 
                 transition-all duration-700"
    >
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C3B091_0.7px,transparent_1px)] bg-[length:50px_50px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          
          {/* Stat 1 */}
          <div className="text-center group">
            <div className="mb-4 transition-transform duration-500 group-hover:scale-105">
              <AnimatedCounter end={3} />
            </div>
            <p className="text-[#E8D9C0] font-semibold text-lg tracking-widest uppercase mt-2">
              YEARS FREE SERVICES
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent mx-auto mt-4"></div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group">
            <div className="mb-4 transition-transform duration-500 group-hover:scale-105">
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <p className="text-[#E8D9C0] font-semibold text-lg tracking-widest uppercase mt-2">
              YEARS OF WARRANTY
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent mx-auto mt-4"></div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className="mb-4 transition-transform duration-500 group-hover:scale-105">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <p className="text-[#E8D9C0] font-semibold text-lg tracking-widest uppercase mt-2">
              YEARS EXPERIENCE
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent mx-auto mt-4"></div>
          </div>

          {/* Stat 4 */}
          <div className="text-center group">
            <div className="mb-4 transition-transform duration-500 group-hover:scale-105">
              <AnimatedCounter end={1000} suffix="+" />
            </div>
            <p className="text-[#E8D9C0] font-semibold text-lg tracking-widest uppercase mt-2">
              PROJECTS COMPLETED
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#C3B091] to-transparent mx-auto mt-4"></div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="group relative px-12 py-5 rounded-full 
                       bg-gradient-to-r from-[#C3B091] to-[#D4BFA8] 
                       text-black font-bold text-lg tracking-wider
                       overflow-hidden transition-all duration-300 
                       hover:scale-105 hover:shadow-xl hover:shadow-[#C3B091]/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              READ MORE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;