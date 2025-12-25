
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          MILOS<span className="text-indigo-600">NIKOLA</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
          <a href="#work" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How I Work</a>
          <a href="#contact" className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-md active:scale-95">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
