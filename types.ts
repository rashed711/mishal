
import { ReactNode } from 'react';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface Content {
  [key: string]: any; 
}

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
  dir: Direction;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
