import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Articles: React.FC = () => {
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
        <section id="articles" className="py-20 bg-white overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.articlesPlaceholder.title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                    <p className="text-dark-gray mt-4">{t.articlesPlaceholder.subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default Articles;