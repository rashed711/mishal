import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import TabbedServices from './TabbedServices';
import WhyUs from './WhyUs';
import Team from './Team';
import Articles from './Articles';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
    const { lang } = useLanguage();
    return (
        <div className={lang === 'ar' ? 'font-cairo' : 'font-sans'}>
            <Header />
            <main>
                <Hero />
                <About />
                <WhyUs />
                <TabbedServices />
                <Team />
                <Articles />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;