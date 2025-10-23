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

                <div className={`flex items-center justify-start md:justify-center gap-2 md:gap-4 mb-10 overflow-x-auto scrollbar-hide pb-4 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                    {tabs.map((tab: { title: string, icon: string }, index: number) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-2 px-6 rounded-md font-semibold transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                                activeTab === index 
                                ? 'bg-navy text-white shadow-lg' 
                                : 'bg-white text-navy hover:bg-navy hover:text-white'
                            }`}
                        >
                           <span className="inline-block" dangerouslySetInnerHTML={{ __html: tab.icon }} />
                           <span>{tab.title}</span>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tabs[activeTab].services.map((service: { title: string, image: string }, index: number) => (
                        <div 
                            key={`${activeTab}-${index}`}
                            className={`group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{ animationDelay: `${0.05 * index + 0.3}s` }}
                        >
                            <div className="overflow-hidden h-48">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-navy h-12 flex items-center justify-center">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TabbedServices;