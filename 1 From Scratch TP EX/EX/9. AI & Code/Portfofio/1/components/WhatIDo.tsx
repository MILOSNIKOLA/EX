
import React from 'react';

const WhatIDo: React.FC = () => {
  const focuses = [
    { title: "Modern Websites", desc: "Building clean, functional sites with the latest web standards." },
    { title: "Responsive Design", desc: "Ensuring a seamless experience across mobile and desktop devices." },
    { title: "Clean Integration", desc: "Expert use of HTML, CSS, and JavaScript for well-structured code." },
    { title: "Continuous Growth", desc: "Constantly improving frontend skills and keeping up with industry shifts." }
  ];

  return (
    <section id="work" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            I prioritize quality, clarity, and steady progress over speed or quantity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focuses.map((f, i) => (
            <div key={i} className="group p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:bg-slate-800 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold">0{i + 1}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
