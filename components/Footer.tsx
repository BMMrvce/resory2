import React from 'react';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-950 text-white border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="Shine Lavish Logo"
                className="w-12 h-12 rounded-lg object-cover shadow-[0_0_20px_rgba(52,160,109,0.4)] border border-primary-500/30"
              />
              <span className="text-3xl font-serif font-bold text-glow text-accent-sand">Shine Lavish</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Experience the ultimate luxury amidst nature. A perfect blend of comfort, adventure, and tranquility awaiting your arrival.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 border border-white/5 hover:border-primary-500"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 border border-white/5 hover:border-primary-500"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 border border-white/5 hover:border-primary-500"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-accent-gold">Quick Explore</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('accommodations')} className="text-gray-400 hover:text-accent-sand hover:translate-x-2 inline-block transition-transform duration-300">Our Accommodations</button></li>
              <li><button onClick={() => scrollToSection('activities')} className="text-gray-400 hover:text-accent-sand hover:translate-x-2 inline-block transition-transform duration-300">Activities</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-accent-sand hover:translate-x-2 inline-block transition-transform duration-300">Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-accent-sand hover:translate-x-2 inline-block transition-transform duration-300">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-accent-gold">Get in Touch</h3>
            <div className="flex items-start space-x-4 group">
              <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                <MapPin className="text-primary-400 w-5 h-5" />
              </div>
              <span className="text-gray-300 font-light">Devagere, Bengaluru,<br/>Karnataka 560074</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                <Phone className="text-primary-400 w-5 h-5" />
              </div>
              <span className="text-gray-300 font-light">+91 91106 06362</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                <Mail className="text-primary-400 w-5 h-5" />
              </div>
              <span className="text-gray-300 font-light">reservations@shinelavishretreat.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-center text-gray-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Shine Lavish Retreat. All rights reserved.</p>
          <span className="text-gray-600">Built by </span>
          <a href="https://tantravruksha.in" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-white transition-colors font-medium">tantravruksha.in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;