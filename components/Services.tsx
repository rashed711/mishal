import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
    <div 
        className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${0.1 * index}s` }}
    >
        <div className="mb-4 text-gold">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-dark-gray">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-20 bg-light-gray overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.services.title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.map((item: { title: string; description: string; }, index: number) => (
                        <ServiceCard key={index} title={item.title} description={item.description} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;