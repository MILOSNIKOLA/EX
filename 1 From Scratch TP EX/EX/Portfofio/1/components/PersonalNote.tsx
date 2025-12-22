
import React from 'react';

const PersonalNote: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full -z-10 opacity-60 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/cooking/800/600" 
                alt="Cooking/Creative metaphor" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-8 border-indigo-50/50 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">A More Personal Note</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Outside of coding, I enjoy cooking, creating dishes, and experimenting.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium text-indigo-600">
              "This passion reflects my approach to work: patience, method, creativity, and attention to detail."
            </p>
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-[0.2em]">The Purpose of this Portfolio</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Find a meaningful position in web development</li>
                <li>• Work with direct clients, locally and internationally</li>
                <li>• Develop personal projects and SaaS products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalNote;
