
import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import type { Language, Direction, LanguageContextType, LanguageProviderProps, Content } from '../types';
import { content } from '../constants/content';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);
  
  const value = useMemo(() => {
    const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
    const t: Content = content[lang];
    return { lang, setLang, t, dir };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
