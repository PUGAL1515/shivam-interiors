import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col items-end z-50 space-y-3 pr-2">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
      >
        <FaFacebookF className="text-xl text-[#1877F2] group-hover:scale-110 transition-transform" />
      </a>

      {/* Instagram */}
      <a
  href="https://www.instagram.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
>
  <FaInstagram className="text-xl text-pink-500 group-hover:scale-110 transition-transform" />
</a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
      >
        <FaLinkedinIn className="text-xl text-[#0A66C2] group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
      >
        <FaWhatsapp className="text-xl text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};

export default SocialMediaIcons;