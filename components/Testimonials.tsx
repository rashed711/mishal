
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
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
        <section className="py-20 bg-light-gray overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.testimonials.title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {t.testimonials.items.map((item: { quote: string, name: string }, index: number) => (
                         <div 
                            key={index} 
                            className={`bg-white p-8 rounded-lg shadow-lg rtl:text-right opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{ animationDelay: `${0.1 * index}s` }}
                        >
                            <p className="text-dark-gray italic mb-4">"{item.quote}"</p>
                            <p className="font-bold text-navy">- {item.name}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;