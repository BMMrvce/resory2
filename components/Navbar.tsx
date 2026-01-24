import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Accommodations', id: 'accommodations' },
    { name: 'Activities', id: 'activities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group relative z-50">
          <div className="p-2.5 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(52,160,109,0.4)] border border-primary-500/30">
            <Leaf className="text-accent-sand w-6 h-6 fill-white/10" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-serif font-bold tracking-wider text-white drop-shadow-lg leading-none">
              Shine Lavish
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] text-accent-sand uppercase font-light pl-0.5">Retreat & Spa</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-bold uppercase tracking-widest text-primary-100 hover:text-accent-gold transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.6)]"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('accommodations')}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-accent-sand hover:to-white hover:text-primary-800 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(52,160,109,0.3)] hover:shadow-[0_0_30px_rgba(232,223,208,0.5)] transform hover:-translate-y-0.5 border border-primary-400/30"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none relative z-50 p-2 bg-white/10 rounded-lg backdrop-blur-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0c241b]/98 backdrop-blur-3xl transition-all duration-500 z-40 flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="text-3xl font-serif font-medium tracking-wide text-white hover:text-accent-gold transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('accommodations')}
          className="mt-8 px-12 py-4 bg-primary-600 text-white rounded-full text-xl font-bold shadow-xl shadow-primary-500/30"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;