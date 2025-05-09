import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AnnouncementsSection from './components/sections/AnnouncementsSection';
import TestimonialSection from './components/sections/TestimonialSection';
import CallToActionSection from './components/sections/CallToActionSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <AnnouncementsSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;