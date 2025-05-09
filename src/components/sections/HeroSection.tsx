import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

const HeroSection = () => {
  const { animateElement } = useAnimation();

  useEffect(() => {
    // Animate elements as soon as the component mounts
    animateElement('.hero-title');
    animateElement('.hero-subtitle', 200);
    animateElement('.hero-cta', 400);
  }, [animateElement]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary-400 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="hero-title animated-item fade-up text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to the Future of Education
        </h1>
        <p className="hero-subtitle animated-item fade-up text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Empowering Education with AI - Where Innovation Meets Learning Excellence
        </p>
        <div className="hero-cta animated-item fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#features" className="btn btn-secondary">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#about" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-800">
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;