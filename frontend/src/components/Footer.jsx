import React from 'react';
import { Link } from 'react-router-dom';          // ← add this
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

                        {/* Social Icons – keep as <a> (external) */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/1C2whFX2Fe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-zinc-900 hover:bg-[#1877F2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebookF className="text-xl" />
                            </a>

                            <a
                                href="https://www.instagram.com/shivaminteriors0005?igsh=MWN3dWRvdzEzYm5lNA%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-zinc-900 hover:bg-[#E1306C] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram className="text-xl" />
                            </a>

                            <a
                                href="https://youtube.com/@sivashivam-i1c4r?si=6uBC5TsX4uyElooJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-zinc-900 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaYoutube className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links – use Link */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-xl font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="hover:text-[#C3B091] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-[#C3B091] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-[#C3B091] transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#C3B091] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-[#C3B091] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services – use Link (hash still works) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white text-xl font-semibold mb-5">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/services#upvc-doors" className="hover:text-[#C3B091] transition-colors">
                                    UPVC Doors
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#upvc-windows" className="hover:text-[#C3B091] transition-colors">
                                    UPVC Windows
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#partition" className="hover:text-[#C3B091] transition-colors">
                                    Laser Cut Partitions
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#kitchen" className="hover:text-[#C3B091] transition-colors">
                                    Kitchen Interiors
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#commercial" className="hover:text-[#C3B091] transition-colors">
                                    Commercial Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info – keep tel: / mailto: as <a> */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white text-xl font-semibold mb-5">Contact Info</h3>

                        <div className="space-y-6 text-sm">
                            <div className="flex gap-3">
                                <MapPin size={18} className="mt-1 text-[#C3B091] flex-shrink-0" />
                                <p className="text-gray-400 leading-relaxed">
                                    187, Arcot Road, Kagithapattarai,<br />
                                    Vellore, Tamil Nadu 632012
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C3B091]" />
                                <div className="flex flex-col">
                                    <a href="tel:+919363746459" className="hover:text-white transition-colors">
                                        +91 93637 46459
                                    </a>
                                    <a href="tel:+919791746459" className="hover:text-white transition-colors">
                                        +91 97917 46459
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#C3B091]" />
                                <a
                                    href="mailto:shivaminteriors005@gmail.com"
                                    className="hover:text-white transition-colors"
                                >
                                    shivaminteriors005@gmail.com
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