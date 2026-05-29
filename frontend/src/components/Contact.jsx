import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Compass, Navigation, ChevronRight, Award, Users, MessageCircle, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Thank you! Your message has been received. We'll contact you soon.");
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const tamilNaduCities = [
        'Vellore', 'City 02', 'City 03', 'City 04', 'City 05',
        'City 06', 'City 07', 'City 08'
    ];

    const branches = [
        {
            name: 'Sivam Interiors - Vellore (Arcot Rd)',
            address: '34, Arcot Rd, near UZHAVAR SANDHAI, Vellore, 632012',
            phone: '+91 97917 46459', // Replace with actual number
            email: 'info@sivaminteriors.com' // Replace with actual email
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#FDFCEB]">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#C3B091]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#C3B091]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Modern Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#C3B091]/10 px-5 py-2 rounded-full mb-6 mt-10 relative z-10">
                        <MessageCircle className="w-4 h-4 text-[#C3B091]" />
                        <span className="font-semibold tracking-wider text-sm text-[#C3B091] uppercase">
                            Let's Connect
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Start Your
                        </span>
                        <br />
                        <span className="text-[#C3B091]">Design Journey</span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Share your vision with Sivam Interiors, and let's create something extraordinary together
                    </p>
                </div>

                {/* Three Column Layout */}
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left Column - Service Areas & Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Service Areas Card */}
                        <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C3B091]/10 to-transparent rounded-bl-[100px]"></div>

                            <div className="relative p-6 bg-black/5">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="p-2 bg-[#C3B091]/10 rounded-xl">
                                        <Compass className="w-5 h-5 text-[#C3B091]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Service Coverage</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin className="w-3.5 h-3.5 text-[#C3B091]" />
                                            <span className="text-sm font-semibold text-gray-700">Tamil Nadu</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1.5 ml-5">
                                            {tamilNaduCities.map((city, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5">
                                                    <div className="w-1 h-1 rounded-full bg-[#C3B091]/60"></div>
                                                    <span className="text-xs text-gray-600">{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                </div>

                                <div className="mt-5 pt-4 border-t border-gray-100">
                                    <div className="flex justify-around">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-[#C3B091]">500+</div>
                                            <div className="text-xs text-gray-500">Projects</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-[#C3B091]">1.2k+</div>
                                            <div className="text-xs text-gray-500">Clients</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-[#C3B091]">15+</div>
                                            <div className="text-xs text-gray-500">Years</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className="bg-gradient-to-br from-[#C3B091] to-[#D4C5A8] rounded-3xl p-6 text-white shadow-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5" />
                                <h3 className="font-bold text-lg">Why Choose Sivam Interiors?</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    '15+ Years of Excellence',
                                    '500+ Successful Projects',
                                    'Expert Design Team',
                                    'Premium Materials',
                                    'On-Time Delivery'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Contact Form */}
                    <div className="lg:col-span-5">
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                            <div className="h-2 bg-gradient-to-r from-[#C3B091] via-[#D4C5A8] to-[#C3B091]"></div>

                            <div className="p-8 bg-black/5">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                                    <p className="text-gray-500 text-sm mt-1">We'll get back to you within 24 hours</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 border-b-2 border-gray-200 focus:border-[#C3B091] outline-none transition-all bg-transparent"
                                            placeholder="Full Name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 border-b-2 border-gray-200 focus:border-[#C3B091] outline-none transition-all bg-transparent"
                                            placeholder="Phone Number"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 border-b-2 border-gray-200 focus:border-[#C3B091] outline-none transition-all bg-transparent"
                                            placeholder="Email Address"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3 border-b-2 border-gray-200 focus:border-[#C3B091] outline-none transition-all bg-transparent"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="3"
                                            className="w-full px-5 py-3 border-b-2 border-gray-200 focus:border-[#C3B091] outline-none transition-all bg-transparent resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#C3B091] hover:bg-[#B49F7A] text-white font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info & Branches */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Main Contact */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl text-center bg-black/5">
                            <div className="w-16 h-16 bg-[#C3B091]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#C3B091]" />
                            </div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-1">Call Us</h4>
                            <a
                                href="tel:+9197917 46459"
                                className="text-2xl font-bold text-gray-900 hover:text-[#C3B091] transition-colors"
                            >
                                +91 97917 46459
                            </a>
                            <p className="text-xs text-gray-400 mt-2">Vellore | Tamil Nadu</p>
                        </div>

                        {/* Branch Details */}
                        {branches.map((branch, idx) => (
                            <div key={idx} className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-[#C3B091]/10 rounded-xl shrink-0">
                                        <MapPin className="w-5 h-5 text-[#C3B091]" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-2">{branch.name}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                            {branch.address}
                                        </p>
                                        <div className="space-y-1 text-sm">
                                            <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-[#C3B091] hover:underline">
                                                <Phone className="w-4 h-4" /> {branch.phone}
                                            </a>
                                            <a href={`mailto:${branch.email}`} className="flex items-center gap-2 text-[#C3B091] hover:underline">
                                                <Mail className="w-4 h-4" /> {branch.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Business Hours */}
                        <div className="bg-gray-900 rounded-3xl p-5 shadow-xl">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-white">Business Hours</h4>
                                <Clock className="w-4 h-4 text-[#C3B091]" />
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Mon - Sat</span>
                                    <span className="text-white">9:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-white">10:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section - Added at the bottom */}
                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Navigation className="w-6 h-6 text-[#C3B091]" />
                        <h3 className="text-2xl font-bold text-gray-900">Visit Our Studio</h3>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                        <iframe
                            width="100%"
                            height="480"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=Asthalaxmi+Stainless+Steel+Pipes&output=embed"
                            title="Asthalaxmi Stainless Steel Pipes Location"
                        ></iframe>
                    </div>

                    <div className="text-center mt-4 text-sm text-gray-500">
                        34, Arcot Road, Near Uzhavar Sandhai, Vellore - 632012
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;