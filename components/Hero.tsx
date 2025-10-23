import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const images = [
    'https://images.unsplash.com/photo-1589998059171-988d887df646', // Law books
    'https://images.unsplash.com/photo-1562184552-d41c7c2f82c1', // Courthouse
    'https://images.unsplash.com/photo-1508615039623-a25605d2b022', // Justice scale
];

const Hero: React.FC = () => {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            id="home"
            className="relative h-[60vh] md:h-[80vh] text-white flex items-center overflow-hidden bg-navy"
        >
            {/* Background Images for slider */}
            {images.map((src, index) => (
                 <div
                    key={src}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url('${src}')`,
                        opacity: index === currentImageIndex ? 1 : 0,
                    }}
                 />
            ))}
           
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