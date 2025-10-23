
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhyUs: React.FC = () => {
    const { t, dir } = useLanguage();
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

    const textAnimation = isVisible ? (dir === 'ltr' ? 'animate-fade-in-right' : 'animate-fade-in-left') : '';
    const imageAnimation = isVisible ? (dir === 'ltr' ? 'animate-fade-in-left' : 'animate-fade-in-right') : '';

    return (
        <section 
            ref={sectionRef}
            className="relative py-20 bg-fixed bg-cover bg-center text-white overflow-hidden"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1568992687947-868a62a9f521')` }}
        >
            <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className={`rtl:text-right opacity-0 ${textAnimation}`} style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.whyUs.title}</h2>
                        <div className="w-20 h-1 bg-gold mb-4 rtl:ml-auto"></div>
                        <h3 className="text-xl font-bold text-gray-300 mb-4">{t.whyUs.subtitle}</h3>
                        <p className="leading-relaxed mb-6 text-gray-200">
                           {t.whyUs.content}
                        </p>
                        <ul className="space-y-4">
                           {t.whyUs.points.map((point: string, index: number) => (
                                <li 
                                    key={index} 
                                    className={`flex items-center gap-3 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
                                    style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                                >
                                    <div className="bg-gold text-navy rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span>{point}</span>
                                </li>
                           ))}
                        </ul>
                    </div>
                    <div className={`hidden md:block opacity-0 ${imageAnimation}`} style={{ animationDelay: '0.3s' }}>
                        <img 
                            src="https://images.unsplash.com/photo-1598586959924-aa68d8557345" 
                            alt="Justice Scale" 
                            className="rounded-full shadow-2xl mx-auto w-80 h-80 object-cover border-4 border-gold"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;