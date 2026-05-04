import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Company Info */}
                    <div className="lg:col-span-4">
                        <h2
                            className="text-3xl font-bold mb-4"
                            style={{ color: '#C3B091' }}
                        >
                            Shivam UPVC Interiors
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            Premium UPVC doors, windows & interiors. Quality craftsmanship with modern solutions for your dream home and office.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-zinc-900 hover:bg-[#1877F2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-zinc-900 hover:bg-[#E1306C] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/" className="hover:text-[#C3B091] transition-colors">Home</a></li>
                            <li><a href="/services" className="hover:text-[#C3B091] transition-colors">Services</a></li>
                            <li><a href="/projects" className="hover:text-[#C3B091] transition-colors">Projects</a></li>
                            <li><a href="/about" className="hover:text-[#C3B091] transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-[#C3B091] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white text-xl font-semibold mb-5">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/services#upvc-doors" className="hover:text-[#C3B091] transition-colors">UPVC Doors</a></li>
                            <li><a href="/services#upvc-windows" className="hover:text-[#C3B091] transition-colors">UPVC Windows</a></li>
                            <li><a href="/services#partition" className="hover:text-[#C3B091] transition-colors">Laser Cut Partitions</a></li>
                            <li><a href="/services#kitchen" className="hover:text-[#C3B091] transition-colors">Kitchen Interiors</a></li>
                            <li><a href="/services#commercial" className="hover:text-[#C3B091] transition-colors">Commercial Projects</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white text-xl font-semibold mb-5">Contact Info</h3>

                        <div className="space-y-6 text-sm">
                            <div className="flex gap-3">
                                <MapPin size={18} className="mt-1 text-[#C3B091]" />
                                <p className="text-gray-400">
                                    XYZ, Tamil Nadu, India
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C3B091]" />
                                <a href="tel:+917760408660" className="hover:text-white transition-colors">
                                    +91 90000 00001
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#C3B091]" />
                                <a href="mailto:info@sivaminteriors.com" className="hover:text-white transition-colors">
                                    info@sivaminteriors.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-[#C3B091]" />
                                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-zinc-900 mt-16 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Shivam UPVC Interiors. All Rights Reserved.</p>
                    <p className="mt-1 text-xs">Premium Interior Solutions | Crafted with Excellence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;