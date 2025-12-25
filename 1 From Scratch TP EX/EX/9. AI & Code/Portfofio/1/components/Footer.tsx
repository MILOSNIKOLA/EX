
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-slate-500 text-sm">
            © {currentYear} Milos Nikola. Built with React and Tailwind CSS.
          </p>
        </div>
        <div className="flex space-x-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#work" className="hover:text-indigo-600 transition-colors">Approach</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
