import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section 
            id="home"
            className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center"
            style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')` }}
        >
            <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight opacity-0 animate-fade-in-down">{t.hero.title}</h1>
                <p style={{ animationDelay: '0.2s' }} className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up">{t.hero.subtitle}</p>
                <a 
                    href="#contact"
                    style={{ animationDelay: '0.4s' }}
                    className="bg-gold text-navy font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all text-lg transform hover:scale-105 opacity-0 animate-fade-in-up"
                >
                    {t.hero.cta}
                </a>
            </div>
        </section>
    );
};

export default Hero;