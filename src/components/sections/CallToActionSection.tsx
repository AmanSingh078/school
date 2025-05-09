import React, { useRef, useEffect } from 'react';
import { GraduationCap, UserRound, Users } from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  delay: number;
}

const RoleCard: React.FC<RoleCardProps> = ({ 
  icon, title, description, buttonText, href, delay 
}) => {
  return (
    <div 
      className="animated-item fade-up card p-8 text-center flex flex-col items-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-800">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <a 
        href={href} 
        className="mt-auto btn btn-primary w-full"
      >
        {buttonText}
      </a>
    </div>
  );
};

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { checkInView } = useAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      checkInView();
    }
  }, [checkInView]);

  const roles = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "For Students",
      description: "Access your personalized learning path, assignments, and AI tutoring support.",
      buttonText: "Student Portal",
      href: "#student-portal",
    },
    {
      icon: <UserRound className="h-8 w-8" />,
      title: "For Teachers",
      description: "Manage your classes, access AI tools, and track student performance.",
      buttonText: "Teacher Dashboard",
      href: "#teacher-dashboard",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "For Parents",
      description: "Stay informed about your child's progress, events, and communicate with teachers.",
      buttonText: "Parent Portal",
      href: "#parent-portal",
    },
  ];

  return (
    <section className="section bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="animated-item fade-up mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Join Our AI-Powered Learning Community
          </h2>
          <p className="animated-item fade-up mx-auto max-w-3xl text-xl text-gray-600">
            Experience the next generation of education tailored to your role.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
              buttonText={role.buttonText}
              href={role.href}
              delay={100 * index}
            />
          ))}
        </div>

        <div className="mt-16 animated-item fade-up text-center">
          <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-r from-primary-800 to-primary-600 p-8 md:p-12 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-white">Ready to Transform Learning?</h3>
            <p className="mb-6 text-primary-100">
              Schedule a tour of our campus and see our AI-integrated education in action.
            </p>
            <a href="#contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Request a Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;