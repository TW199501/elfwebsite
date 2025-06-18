import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadLocale, detectBrowserLanguage, LANGUAGE_CONFIG } from '../locales';

export type Language = 'en' | 'zh-TW' | 'zh-CN';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  availableLanguages: { code: Language; name: string; flag: string }[];
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // 優先從 localStorage 讀取，否則自動檢測
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && LANGUAGE_CONFIG.supportedLanguages.includes(savedLang)) {
      return savedLang;
    }
    return detectBrowserLanguage();
  });

  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // 載入翻譯檔案
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const localeData = await loadLocale(language);
        setTranslations(localeData);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // 載入失敗時使用英文作為後備
        if (language !== LANGUAGE_CONFIG.fallbackLanguage) {
          const fallbackData = await loadLocale(LANGUAGE_CONFIG.fallbackLanguage);
          setTranslations(fallbackData);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  // 儲存語言設定
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[key] || key;
    
    // 處理參數替換
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return text;
  };

  const availableLanguages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'zh-TW' as Language, name: '繁體中文', flag: '🇹🇼' },
    { code: 'zh-CN' as Language, name: '简体中文', flag: '🇨🇳' }
  ];

  return (
    <I18nContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      availableLanguages, 
      isLoading 
    }}>
      {children}
    </I18nContext.Provider>
  );
};