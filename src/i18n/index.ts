import { Language } from '../contexts/I18nContext';

// 動態載入語言檔案的函數
export const loadLocale = async (language: Language): Promise<Record<string, string>> => {
  try {
    switch (language) {
      case 'en':
        const enModule = await import('./en');
        return enModule.default;
      case 'zh-TW':
        const zhTWModule = await import('./zh-tw');
        return zhTWModule.default;
      case 'zh-CN':
        const zhCNModule = await import('./zh-cn');
        return zhCNModule.default;
      default:
        // 預設載入英文
        const defaultModule = await import('./en');
        return defaultModule.default;
    }
  } catch (error) {
    console.error(`Failed to load locale ${language}:`, error);
    // 載入失敗時回退到英文
    const fallbackModule = await import('./en');
    return fallbackModule.default;
  }
};

// 語言配置
export const LANGUAGE_CONFIG = {
  defaultLanguage: 'en' as Language,
  fallbackLanguage: 'en' as Language,
  supportedLanguages: ['en', 'zh-TW', 'zh-CN'] as Language[],
  
  // 瀏覽器語言映射
  browserLanguageMap: {
    'zh-TW': ['zh-TW', 'zh-Hant', 'zh-HK', 'zh-MO'],
    'zh-CN': ['zh-CN', 'zh-Hans', 'zh-SG', 'zh'],
    'en': ['en', 'en-US', 'en-GB', 'en-AU', 'en-CA']
  }
};

// 檢測瀏覽器語言
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  
  // 檢查每個支援的語言
  for (const [lang, variants] of Object.entries(LANGUAGE_CONFIG.browserLanguageMap)) {
    if (variants.some(variant => browserLang.toLowerCase().startsWith(variant.toLowerCase()))) {
      return lang as Language;
    }
  }
  
  return LANGUAGE_CONFIG.defaultLanguage;
};