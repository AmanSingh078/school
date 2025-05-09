import React, { useRef, useEffect } from 'react';
import { 
  UserCheck, 
  Youtube, 
  BellRing, 
  FileCheck, 
  MessagesSquare, 
  Users
} from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`animated-item fade-up card p-6 h-full`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-800">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { checkInView } = useAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      checkInView();
    }
  }, [checkInView]);

  const features = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "AI Attendance Tracking",
      description: "Automated attendance using facial recognition saves time and ensures accuracy while maintaining privacy.",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      title: "Lecture Sharing & AI Summaries",
      description: "Record and share lectures with automated transcription and AI-generated summaries for easy review.",
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: "Smart Notifications",
      description: "Personalized alerts for assignments, exams, and school events based on student schedules and priorities.",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Online Assignments",
      description: "Digital assignment submission with automated grading and personalized feedback for faster improvement.",
    },
    {
      icon: <MessagesSquare className="h-6 w-6" />,
      title: "Chatbot Support",
      description: "24/7 AI assistant to answer questions about coursework, schedules, and school policies instantly.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Parent Portal Access",
      description: "Real-time insights into student performance with detailed analytics and direct communication with teachers.",
    },
  ];

  return (
    <section id="features" className="section bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="animated-item fade-up mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our AI-Powered Features
          </h2>
          <p className="animated-item fade-up mx-auto max-w-3xl text-xl text-gray-600">
            Transforming education with innovative technology that enhances the learning experience for students, 
            teachers, and parents.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={100 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;