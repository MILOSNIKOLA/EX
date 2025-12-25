
import React from 'react';

const MyVision: React.FC = () => {
  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">My Vision</h2>
          <p className="text-indigo-100 text-xl leading-relaxed">
            In the medium term, my goal is clear: to make a living from the web through personal projects, remote freelance work, or a stable position with growth opportunities.
          </p>
          <div className="h-0.5 w-full bg-indigo-400/30"></div>
          <p className="text-2xl font-light italic">
            "I aim to build something long-lasting, professional, and aligned with my values."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyVision;
