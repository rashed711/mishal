import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
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

  return (
    <section id="about" className="py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`rtl:text-right opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.about.title}</h2>
            <div className="w-20 h-1 bg-gold mb-4 rtl:ml-auto"></div>
            <h3 className="text-xl font-bold text-dark-gray mb-4">{t.about.subtitle}</h3>
            <p className="text-dark-gray leading-relaxed mb-6">
              {t.about.content}
            </p>
            <a
              href="#"
              className="bg-navy text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              {t.about.cta}
            </a>
          </div>
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://picsum.photos/600/400?random=2" 
              alt="Law Firm Office" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;