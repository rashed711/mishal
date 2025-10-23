import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CTA: React.FC = () => {
    const { t } = useLanguage();
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

    return (
        <section 
            id="contact"
            ref={sectionRef}
            className={`py-20 bg-navy text-white text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-300">{t.cta.subtitle}</p>
                <a 
                    href="#" 
                    className="bg-gold text-navy font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all text-lg transform hover:scale-105"
                >
                    {t.cta.button}
                </a>
            </div>
        </section>
    );
};

export default CTA;