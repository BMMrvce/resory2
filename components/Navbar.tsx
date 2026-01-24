import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        scrolled ? 'glass-nav py-3 border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 group relative z-50">
          <div className="p-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full group-hover:from-primary-300 group-hover:to-primary-500 transition-all shadow-lg shadow-primary-500/30">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-wide text-white drop-shadow-md group-hover:text-primary-200 transition-colors">
            Shine Lavish
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-primary-300 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('accommodations')}
            className="px-8 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary-500/40 transform hover:-translate-y-0.5 border border-white/10"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-primary-950/98 backdrop-blur-3xl transition-all duration-500 z-40 flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="text-3xl font-serif font-medium tracking-wide text-white hover:text-primary-400 transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('accommodations')}
          className="mt-8 px-10 py-4 bg-primary-600 text-white rounded-full text-xl font-bold shadow-xl shadow-primary-900/50"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;