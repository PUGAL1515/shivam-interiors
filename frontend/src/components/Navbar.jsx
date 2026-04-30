import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";   // ← Added
import { Menu, X } from "lucide-react";
import sivamLogo from "../assets/sivam-interior-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();   // ← To highlight active page

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 bg-[#C3B091] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="relative">
          <div className="bg-white px-4 py-3 rounded-2xl shadow-lg border border-[#EDE4D9] flex items-center gap-3">
            <img 
              src={sivamLogo} 
              alt="Shivam UPVC Interiors Logo"
              className="h-9 w-auto object-contain"
            />
            <div className="text-xs leading-tight hidden sm:block">
              <p className="font-bold text-gray-900 tracking-tight">SHIVAM UPVC</p>
              <p className="text-[#C3B091] font-medium">INTERIORS</p>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-white/95 text-lg font-medium">
          <li>
            <Link 
              to="/" 
              className={`relative group transition-all duration-300 ${isActive('/') ? 'text-white font-semibold' : 'hover:text-white'}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </li>

          <li>
            <Link 
              to="/services" 
              className={`relative group transition-all duration-300 ${isActive('/services') ? 'text-white font-semibold' : 'hover:text-white'}`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </li>

          

          <li>
            <Link 
              to="/contact" 
              className={`relative group transition-all duration-300 ${isActive('/contact') ? 'text-white font-semibold' : 'hover:text-white'}`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-white text-[#C3B091] hover:bg-[#F5F0E8] 
                         px-7 py-3 rounded-full font-semibold text-sm tracking-wider 
                         transition-all duration-300 hover:shadow-xl hover:scale-105">
          GET FREE QUOTE
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          {open ? (
            <X 
              size={28} 
              onClick={() => setOpen(false)} 
              className="cursor-pointer hover:text-white/80 transition" 
            />
          ) : (
            <Menu 
              size={28} 
              onClick={() => setOpen(true)} 
              className="cursor-pointer hover:text-white/80 transition" 
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#C3B091] border-t border-white/20">
          <div className="px-6 py-8 flex flex-col gap-6 text-base text-white">
            <Link to="/" onClick={() => setOpen(false)} className="font-semibold">Home</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="hover:text-white/70 transition">Services</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-white/70 transition">Projects</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-white/70 transition">Contact</Link>
            
            <button className="mt-4 bg-white text-[#C3B091] py-3.5 rounded-full font-semibold text-base w-full">
              GET FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;