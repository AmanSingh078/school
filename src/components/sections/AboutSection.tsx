import React, { useEffect, useRef } from 'react';
import { useAnimation } from '../../hooks/useAnimation';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { checkInView } = useAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      checkInView();
    }
  }, [checkInView]);

  return (
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Image side */}
          <div className="animated-item fade-right">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8471958/pexels-photo-8471958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Students using AI technology in classroom"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <div className="rounded-xl bg-secondary-500 p-6 text-white shadow-lg">
                  <p className="text-lg font-semibold">15+ Years</p>
                  <p className="text-sm">Of Excellence</p>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 hidden sm:block">
                <div className="rounded-xl bg-primary-800 p-6 text-white shadow-lg">
                  <p className="text-lg font-semibold">AI Powered</p>
                  <p className="text-sm">Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="animated-item fade-left">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-6">
              About Our School
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                At AI School, we blend traditional educational excellence with cutting-edge 
                technology to create a unique learning environment where students thrive.
                Our institution is committed to preparing students for the future by integrating
                artificial intelligence tools into everyday learning.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-bold text-xl text-gray-900">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower students with knowledge and technological skills that will make them 
                    leaders in an AI-driven world.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-bold text-xl text-gray-900">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the premier educational institution that seamlessly blends human teaching 
                    excellence with artificial intelligence to personalize and enhance learning.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-xl text-primary-800 mb-2">
                  AI Integration Highlights
                </h3>
                <p className="text-gray-700">
                  Our smart tools revolutionize education through AI-powered attendance tracking, 
                  automated lecture summaries, personalized learning paths, and 24/7 virtual 
                  student support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;