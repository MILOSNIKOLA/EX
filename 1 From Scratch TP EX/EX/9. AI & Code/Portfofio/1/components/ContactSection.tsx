
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to build something <br className="hidden md:block" /> meaningful together?</h2>
            <p className="text-slate-400 text-xl max-w-xl mx-auto">
              Whether you have a specific project in mind or just want to connect, I'm always open to professional conversations.
            </p>
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@milosnikola.com" 
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
              >
                Send an Email
              </a>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">GitHub</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
