
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Frontend Developer with a <span className="text-indigo-600">Pragmatic</span> Approach.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
            I build functional, responsive, and well-structured websites, with particular attention to clean code, readability, and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all text-center">
              Discover My Story
            </a>
            <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-all text-center">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
