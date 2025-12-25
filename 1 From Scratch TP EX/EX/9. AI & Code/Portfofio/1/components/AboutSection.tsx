
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
          <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-indigo-100 pl-6">
            "My background is unconventional, but it has helped me develop essential qualities for web development: resilience, autonomy, and perseverance."
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-3xl font-bold text-indigo-600 mb-1">3+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Focused Learning</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-3xl font-bold text-indigo-600 mb-1">40</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Age of New Chapter</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 space-y-8 text-slate-600 text-lg leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">My Background</h3>
            <p>
              After a long period marked by health constraints, I made a conscious decision, at the age of 40, to take control of my professional life and transition into a field that truly makes sense to me.
            </p>
            <p className="mt-4">
              Since 2022, I have been seriously and consistently dedicated to learning web development, investing several hours a day with discipline, focus, and determination.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Why Web Development?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-indigo-600">•</span>
                <span>A strong desire to create concrete, useful projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-indigo-600">•</span>
                <span>The need to work in an autonomous and structured way</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-indigo-600">•</span>
                <span>The search for a profession that is compatible with my situation, but above all meaningful and sustainable</span>
              </li>
            </ul>
          </div>
          
          <p className="font-medium text-slate-900">
            Today, web development has become a real life project, built step by step, with patience and commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
