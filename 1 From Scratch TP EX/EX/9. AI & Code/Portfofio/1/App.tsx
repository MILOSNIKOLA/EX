
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhatIDo from './components/WhatIDo';
import HowIWork from './components/HowIWork';
import PersonalNote from './components/PersonalNote';
import MyVision from './components/MyVision';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <div id="experience" className="bg-white">
          <WhatIDo />
        </div>
        <HowIWork />
        <PersonalNote />
        <MyVision />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
