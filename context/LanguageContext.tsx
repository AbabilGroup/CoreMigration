import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, translations } from './translations';

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Custom setter that saves to localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('core_migration_locale', newLocale);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === 'undefined') return;

    // 1. Check if preference already exists in localStorage
    const savedLocale = localStorage.getItem('core_migration_locale') as Locale | null;
    const validLocales: Locale[] = ['en', 'mk', 'sr', 'el', 'ro', 'bg', 'be', 'bs', 'tr', 'hr', 'sl', 'sk'];
    if (savedLocale && validLocales.includes(savedLocale)) {
      setLocaleState(savedLocale);
      return;
    }

    // 2. Try browser preferred languages
    const browserLanguages = navigator.languages || [navigator.language || ''];
    for (const lang of browserLanguages) {
      const cleanLang = lang.toLowerCase();
      if (cleanLang.startsWith('sr')) {
        setLocale('sr');
        return;
      }
      if (cleanLang.startsWith('mk')) {
        setLocale('mk');
        return;
      }
      if (cleanLang.startsWith('ro')) {
        setLocale('ro');
        return;
      }
      if (cleanLang.startsWith('el') || cleanLang.startsWith('gr')) {
        setLocale('el');
        return;
      }
      if (cleanLang.startsWith('bg')) {
        setLocale('bg');
        return;
      }
      if (cleanLang.startsWith('be')) {
        setLocale('be');
        return;
      }
      if (cleanLang.startsWith('bs')) {
        setLocale('bs');
        return;
      }
      if (cleanLang.startsWith('tr')) {
        setLocale('tr');
        return;
      }
      if (cleanLang.startsWith('hr')) {
        setLocale('hr');
        return;
      }
      if (cleanLang.startsWith('sl')) {
        setLocale('sl');
        return;
      }
      if (cleanLang.startsWith('sk')) {
        setLocale('sk');
        return;
      }
    }

    // 3. Otherwise, check IP and auto-select language
    const detectCountry = async () => {
      try {
        let countryCode = '';
        
        // Try https://ipapi.co/json/ first since it supports HTTPS for free
        try {
          const res = await fetch('https://ipapi.co/json/');
          if (res.ok) {
            const data = await res.json();
            countryCode = data.country_code || '';
          }
        } catch (e) {
          console.warn('Failed to fetch from ipapi.co, trying fallback');
        }

        // Fallback to http-based ip-api.com if ipapi.co fails (or SSL issues)
        if (!countryCode) {
          try {
            const res = await fetch('https://ip-api.com/json/');
            if (res.ok) {
              const data = await res.json();
              countryCode = data.countryCode || '';
            }
          } catch (e) {
            console.warn('Failed to fetch from ip-api.com');
          }
        }

        if (countryCode) {
          const code = countryCode.toUpperCase();
          let targetLocale: Locale = 'en';

          if (code === 'MK') {
            targetLocale = 'mk'; // Macedonia -> Macedonian
          } else if (code === 'RS' || code === 'ME') {
            targetLocale = 'sr'; // Serbia, Montenegro -> Serbian
          } else if (code === 'RO') {
            targetLocale = 'ro'; // Romania -> Romanian
          } else if (code === 'GR' || code === 'CY') {
            targetLocale = 'el'; // Greece, Cyprus -> Greek
          } else if (code === 'BG') {
            targetLocale = 'bg'; // Bulgaria -> Bulgarian
          } else if (code === 'BY') {
            targetLocale = 'be'; // Belarus -> Belarusian
          } else if (code === 'BA') {
            targetLocale = 'bs'; // Bosnia and Herzegovina -> Bosnian
          } else if (code === 'TR') {
            targetLocale = 'tr'; // Turkey -> Turkish
          } else if (code === 'HR') {
            targetLocale = 'hr'; // Croatia -> Croatian
          } else if (code === 'SI') {
            targetLocale = 'sl'; // Slovenia -> Slovenian
          } else if (code === 'SK') {
            targetLocale = 'sk'; // Slovakia -> Slovak
          } else if (code === 'MD') {
            targetLocale = 'ro'; // Moldova -> Romanian
          }

          setLocale(targetLocale);
        }
      } catch (err) {
        console.warn('Geolocation detection failed, defaulting to English:', err);
      }
    };

    detectCountry();
  }, []);

  // Translation function
  const t = (text: string): string => {
    if (!isMounted) return text; // Before hydration, always render the default English key to prevent hydration mismatch
    
    const translationMap = translations[locale];
    if (translationMap && translationMap[text]) {
      return translationMap[text];
    }
    return text; // Fallback to original text
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
