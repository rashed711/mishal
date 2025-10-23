import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TabbedServices: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    const tabs = t.tabbedServices.tabs;

    return (
        <section id="services" className="py-20 bg-light-gray overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.tabbedServices.title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-10 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                    {tabs.map((tab: { title: string }, index: number) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-2 px-6 rounded-md font-semibold transition-all duration-300 ${
                                activeTab === index 
                                ? 'bg-navy text-white shadow-lg' 
                                : 'bg-white text-navy hover:bg-navy hover:text-white'
                            }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tabs[activeTab].services.map((service: { title: string }, index: number) => (
                        <div 
                            key={`${activeTab}-${index}`}
                            className={`bg-white p-6 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 opacity-0 rtl:text-right ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{ animationDelay: `${0.05 * index + 0.3}s` }}
                        >
                            <div className="flex-shrink-0 bg-gold text-navy p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TabbedServices;