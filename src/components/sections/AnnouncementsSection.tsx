import React, { useRef, useEffect } from 'react';
import { CalendarDays, Bot } from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

interface Notice {
  id: number;
  title: string;
  date: string;
  summary: string;
  isPriority?: boolean;
}

interface ImportantDate {
  id: number;
  title: string;
  date: string;
}

const AnnouncementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { checkInView } = useAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      checkInView();
    }
  }, [checkInView]);

  const latestNotices: Notice[] = [
    {
      id: 1,
      title: "Annual Science Fair Registration Open",
      date: "Oct 15, 2025",
      summary: "Register now for our yearly science fair. Projects showcasing AI applications are encouraged.",
      isPriority: true,
    },
    {
      id: 2,
      title: "Parent-Teacher Conference Schedule",
      date: "Oct 20, 2025",
      summary: "Schedule your appointments for the upcoming parent-teacher meetings via the parent portal.",
    },
    {
      id: 3,
      title: "New AI Lab Opening Ceremony",
      date: "Nov 5, 2025",
      summary: "Join us for the ribbon-cutting of our state-of-the-art AI laboratory with guest speakers from tech industry.",
      isPriority: true,
    },
  ];

  const importantDates: ImportantDate[] = [
    {
      id: 1,
      title: "Fall Break",
      date: "Oct 21-25, 2025",
    },
    {
      id: 2,
      title: "Winter Concert",
      date: "Dec 12, 2025",
    },
    {
      id: 3,
      title: "Final Exams",
      date: "Dec 15-19, 2025",
    },
    {
      id: 4,
      title: "Winter Break",
      date: "Dec 23 - Jan 6, 2026",
    },
  ];

  return (
    <section className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="animated-item fade-up mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Announcements
          </h2>
          <p className="animated-item fade-up mx-auto max-w-3xl text-xl text-gray-600">
            Stay updated with the latest information and upcoming events at AI School.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Latest Notices */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Latest Notices</h3>
            <div className="space-y-6">
              {latestNotices.map((notice) => (
                <div 
                  key={notice.id} 
                  className={`animated-item fade-right card p-6 ${
                    notice.isPriority ? 'border-l-4 border-primary-600' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-900">{notice.title}</h4>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {notice.date}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{notice.summary}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 animated-item fade-up card p-6 border border-secondary-200 bg-secondary-50">
              <div className="flex items-center">
                <Bot className="h-6 w-6 text-secondary-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">AI Notices Summary</h4>
              </div>
              <p className="mt-2 text-gray-600">
                This week features the Science Fair registration opening, parent-teacher conferences, 
                and the AI Lab inauguration. Don't miss the last date for Science Fair sign-ups and 
                schedule your parent-teacher meetings early for better time slots.
              </p>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Important Dates</h3>
            <div className="animated-item fade-left card p-6 bg-primary-50 border border-primary-100">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-6 w-6 text-primary-600 mr-2" />
                <h4 className="text-lg font-semibold text-primary-800">School Calendar</h4>
              </div>
              <div className="space-y-4">
                {importantDates.map((item) => (
                  <div key={item.id} className="flex justify-between border-b border-primary-100 pb-2">
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <span className="text-primary-700">{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a href="#calendar" className="text-primary-700 hover:text-primary-800 font-medium flex items-center">
                  View Full Calendar
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;