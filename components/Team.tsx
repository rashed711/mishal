import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TeamMember {
    name: string;
    title: string;
}

const memberImages = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    'https://images.unsplash.com/photo-1580852300654-034f80071044',
    'https://images.unsplash.com/photo-1627161683011-c9594825a358',
    'https://images.unsplash.com/photo-1592823985310-d293e214585c',
];

const TeamMemberCard: React.FC<{ member: TeamMember; imageIndex: number; isVisible: boolean; index: number }> = ({ member, imageIndex, isVisible, index }) => (
    <div 
        className={`group relative overflow-hidden rounded-lg shadow-lg w-72 h-96 flex-shrink-0 transition-all duration-500 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        style={{ animationDelay: `${0.1 * index}s` }}
    >
        <img 
            src={memberImages[imageIndex % memberImages.length]} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full rtl:right-0">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gold">{member.title}</p>
        </div>
    </div>
);

const Team: React.FC = () => {
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
        <section id="team" className="py-20 bg-white overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t.team.title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {t.team.members.map((member: TeamMember, index: number) => (
                        <TeamMemberCard 
                            key={`member-${index}`} 
                            member={member} 
                            imageIndex={index}
                            isVisible={isVisible}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;