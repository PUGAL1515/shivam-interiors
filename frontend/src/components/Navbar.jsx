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
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
       <Link to="/" className="flex items-center gap-3 group">
  <div className="bg-white p-3.5 rounded-[28px] shadow-md overflow-hidden">
    <img
      src={sivamLogo}
      alt="Shivam Interiors"
      className="h-12 w-auto object-contain transform scale-150"
    />
  </div>
  <div>
    <p className="text-2xl font-bold tracking-tighter text-white">SHIVAM</p>
    <p className="text-sm -mt-1 text-[#FDFCEB] font-medium tracking-[2px]">INTERIORS</p>
  </div>
</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-[#FDFCEB] transition-all ${isActive('/') ? 'text-[#FDFCEB] font-semibold' : ''}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-[#FDFCEB] transition-all ${isActive('/services') ? 'text-[#FDFCEB] font-semibold' : ''}`}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`hover:text-[#FDFCEB] transition-all ${isActive('/projects') ? 'text-[#FDFCEB] font-semibold' : ''}`}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-[#FDFCEB] transition-all ${isActive('/about') ? 'text-[#FDFCEB] font-semibold' : ''}`}
            >
              ABOUT
            </Link>
          </li>

          {/* ✅ NEW CONTACT MENU */}
          <li>
            <Link
              to="/contact"
              className={`hover:text-[#FDFCEB] transition-all ${isActive('/contact') ? 'text-[#FDFCEB] font-semibold' : ''}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-[#FDFCEB] transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+91 90000 00001</span>
          </a>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="bg-[#FDFCEB] hover:bg-white text-[#1A1A1A] font-semibold px-8 py-3.5 rounded-2xl text-sm tracking-widest transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              GET FREE QUOTE
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 hover:text-[#FDFCEB]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#FDFCEB]/20">
          <div className="px-6 py-10 flex flex-col gap-6 text-lg font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>

            {/* ✅ CONTACT ADDED */}
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <a href="tel:+919876543210" className="flex items-center gap-3 text-[#FDFCEB] mt-6">
              <Phone size={22} /> +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;