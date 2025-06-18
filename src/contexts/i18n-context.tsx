import React, { useState, useEffect } from 'react';
import { loadLocale, LANGUAGE_CONFIG } from '../i18n';
import { I18nContext, Language } from './i18n-context-utils';

// 只 export I18nProvider，context/hook/type 都從 i18n-context-utils 匯入

const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 預設語言永遠為繁體中文
  const [language, setLanguageState] = useState<Language>('zh-TW');

  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // 語言切換函數
  const setLanguage = (lang: Language) => {
    if (!LANGUAGE_CONFIG.supportedLanguages.includes(lang)) {
      console.warn(`[I18n] Unsupported language: ${lang}`);
      return;
    }
    console.log('setLanguage called:', lang, 'current context.language:', language, 'localStorage:', localStorage.getItem('language'));
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };




  // 載入翻譯檔案
  useEffect(() => {
    console.log('[useEffect] language changed:', language, 'localStorage:', localStorage.getItem('language'));

    let isActive = true;
    const currentLang = language;
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        console.log('I18nContext: Loading translations for:', currentLang);
        const localeData = await loadLocale(currentLang);
        if (isActive && language === currentLang) {
          setTranslations(localeData);
          console.log('I18nContext: Translations loaded successfully for:', currentLang, 'Keys:', Object.keys(localeData).length);
        }
      } catch (error) {
        console.error('I18nContext: Failed to load translations for', currentLang, ':', error);
        // 載入失敗時使用英文作為後備
        if (currentLang !== LANGUAGE_CONFIG.fallbackLanguage) {
          try {
            const fallbackData = await loadLocale(LANGUAGE_CONFIG.fallbackLanguage);
            if (isActive && language === currentLang) {
              setTranslations(fallbackData);
              console.log('I18nContext: Fallback translations loaded');
            }
          } catch (fallbackError) {
            console.error('I18nContext: Failed to load fallback translations:', fallbackError);
          }
        }
      } finally {
        if (isActive && language === currentLang) {
          setIsLoading(false);
        }
      }
    };

    loadTranslations();
    return () => {
      isActive = false;
    };
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[key];
    
    if (!text) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      text = key;
    }
    
    // 處理參數替換
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return text;
  };

  // 語言切換順序：繁體中文、英文、簡體中文
  const availableLanguages = [
    { code: 'zh-TW' as Language, name: '繁體中文', flag: '🇹🇼' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'zh-CN' as Language, name: '简体中文', flag: '🇨🇳' }
  ];

  console.log('I18nContext: Current language:', language, 'Translations loaded:', Object.keys(translations).length > 0);

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

export { I18nProvider };