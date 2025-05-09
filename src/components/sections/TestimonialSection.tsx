import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { checkInView } = useAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      checkInView();
    }
  }, [checkInView]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Parent",
      quote: "The AI integration has transformed my child's learning experience. The personalized approach helped them improve in subjects they previously struggled with.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Student, Grade 11",
      quote: "The AI tutor helps me understand complex concepts at my own pace. The lecture summaries make it so much easier to review for exams.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      role: "Science Teacher",
      quote: "The AI tools have revolutionized how I teach. I can now focus more on individual student needs rather than administrative tasks.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-primary-900" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="animated-item fade-up mb-4 text-3xl font-bold text-white md:text-4xl">
            What Our Community Says
          </h2>
          <p className="animated-item fade-up mx-auto max-w-3xl text-xl text-primary-200">
            Hear from students, parents, and teachers about their experiences with our AI-enhanced education.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="animated-item fade-up relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-10 w-10 text-primary-200 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <blockquote className="mb-6 text-lg md:text-xl text-gray-700 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-primary-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;