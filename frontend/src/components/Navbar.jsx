import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import sivamLogo from "../assets/sivam-interior-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#1A1A1A] text-white border-b border-[#FDFCEB]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-white p-2.5 sm:p-3 rounded-3xl shadow-md overflow-hidden">
            <img
              src={sivamLogo}
              alt="Shivam Interiors"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold tracking-tighter text-white">SHIVAM</p>
            <p className="text-[10px] sm:text-sm -mt-1 text-[#FDFCEB] font-medium tracking-[2px]">INTERIORS</p>
          </div>
        </Link>

        {/* Desktop Menu with Cream Underline */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm uppercase tracking-widest font-medium">
          {[
            { name: "HOME", path: "/" },
            { name: "SERVICES", path: "/services" },
            { name: "PROJECTS", path: "/projects" },
            { name: "ABOUT", path: "/about" },
            { name: "CONTACT", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative pb-1 transition-all hover:text-[#FDFCEB] 
                  ${isActive(item.path) 
                    ? 'text-[#FDFCEB] font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-[#FDFCEB]' 
                    : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:+919000000001"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-[#FDFCEB] transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+91 90000 00001</span>
          </a>

          <Link to="/contact">
            <button className="bg-[#FDFCEB] hover:bg-white text-[#1A1A1A] font-semibold px-5 sm:px-7 py-3 rounded-2xl text-xs sm:text-sm tracking-widest transition-all duration-300 hover:shadow-xl active:scale-95">
              GET FREE QUOTE
            </button>
          </Link>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#FDFCEB]/20 py-8">
          <div className="px-6 flex flex-col gap-6 text-lg font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`py-3 transition-all ${
                  isActive(item.path)
                    ? "text-[#FDFCEB] border-l-4 border-[#FDFCEB] pl-4 font-semibold"
                    : "hover:text-[#FDFCEB]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-6 border-t border-[#FDFCEB]/10">
              <a
                href="tel:+919000000001"
                className="flex items-center gap-3 text-[#FDFCEB] text-base"
              >
                <Phone size={24} /> +91 90000 00001
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;