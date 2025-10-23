import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gold">
        {children}
    </a>
);

const Header: React.FC = () => {
    const { lang, setLang, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const toggleLanguage = () => {
        setLang(lang === 'en' ? 'ar' : 'en');
    };
    
    // Smooth scrolling to section with offset for sticky header
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setActiveLink(targetId); // Immediately set active link on click for instant feedback
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 100; // Estimated height of sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false); // Close mobile menu if open
    };

    // Set active link on scroll
    useEffect(() => {
        const sections = Object.keys(t.nav).map(key => document.getElementById(key)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                // This defines a precise "trigger zone" for activation.
                // -100px from top: Starts observing just below the sticky header.
                // -65% from bottom: Makes the observation area vertically smaller, preventing multiple sections from being active.
                // This ensures only the section truly at the top of the viewport is highlighted.
                rootMargin: '-100px 0px -65% 0px',
                threshold: 0
            }
        );

        sections.forEach(section => {
            if(section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if(section) observer.unobserve(section);
            });
        };
    }, [t.nav]);

    return (
        <header className="bg-navy sticky top-0 z-50 shadow-lg">
            {/* Top Bar */}
            <div className="bg-black bg-opacity-20 text-white text-sm">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>{t.topBar.phone}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>{t.topBar.email}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></SocialIcon>
                        <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg></SocialIcon>
                        <SocialIcon href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.328 0-1.971.753-2.311 1.248h.016v-1.07H7.65v7.225h2.401z"/></svg></SocialIcon>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-2xl font-bold tracking-wider rtl:font-cairo">
                   <span className="text-gold">MISHAL</span> LAW FIRM
                </a>
                
                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-6 rtl:gap-8">
                    {Object.entries(t.nav).map(([key, value]) => (
                        <li key={key}>
                            <a 
                                href={`#${key}`} 
                                onClick={(e) => handleLinkClick(e, key)}
                                className={`py-2 border-b-2 transition-all duration-300 ${activeLink === key ? 'border-gold text-gold' : 'border-transparent hover:text-gold hover:border-gold/50'}`}
                            >
                                {value as string}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleLanguage} className="bg-gold text-navy font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">{t.langSwitch}</button>
                    </li>
                </ul>

                {/* Mobile Nav Button */}
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                 <ul className="flex flex-col items-center gap-4 text-white bg-navy pb-4">
                    {Object.entries(t.nav).map(([key, value]) => (
                        <li key={key}>
                            <a 
                                href={`#${key}`} 
                                onClick={(e) => handleLinkClick(e, key)} 
                                className={`py-2 transition-colors duration-300 ${activeLink === key ? 'text-gold' : 'hover:text-gold'}`}
                            >
                                {value as string}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleLanguage} className="bg-gold text-navy font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">{t.langSwitch}</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;