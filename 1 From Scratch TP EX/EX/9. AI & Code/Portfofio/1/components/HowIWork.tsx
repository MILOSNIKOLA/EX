
import React from 'react';

const HowIWork: React.FC = () => {
  const attributes = [
    { label: "Persistent", text: "I don’t give up on a problem until it’s solved." },
    { label: "Reliable", text: "When I start something, I see it through to completion." },
    { label: "Self-sufficient", text: "I know how to learn, research, and move forward independently." },
    { label: "Determined", text: "Once committed, I stay focused until the job is done." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How I Work</h2>
          <div className="h-1.5 w-20 bg-indigo-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {attributes.map((attr, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-indigo-600 mb-2 uppercase tracking-tight">{attr.label}</h4>
              <p className="text-slate-600 leading-relaxed">{attr.text}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-slate-500 font-medium">
          Comfortable working on personal projects, as well as collaborating with clients or professional teams.
        </p>
      </div>
    </section>
  );
};

export default HowIWork;
