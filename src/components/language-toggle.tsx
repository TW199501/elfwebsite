import React from 'react';
import { Menu } from '@headlessui/react';
import { Languages, ChevronDown } from 'lucide-react';
import { useI18n, Language } from '../contexts/i18n-context-utils';
import { useTheme } from '../contexts/theme-context-utils';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useI18n();
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`relative group flex items-center space-x-2 px-3 py-2 backdrop-blur-sm border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${colors.cardBg}`}
        title="切換語言 / Switch Language"
        type="button"
      >
        <div className="relative">
          <Languages className={`w-4 h-4 ${colors.textColor}`} />
          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${colors.primary} rounded-full animate-pulse`}></div>
        </div>
        <span className={`text-xs font-medium ${colors.textColor}`}>{currentLanguage?.flag}</span>
        <ChevronDown className={`w-3 h-3 ${colors.textColor} transition-transform duration-200`} />
      </Menu.Button>
      <Menu.Items
        className={`absolute right-0 mt-2 w-48 ${colors.cardBg} backdrop-blur-md border-2 ${colors.borderColor} rounded-lg overflow-hidden shadow-xl z-50`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {availableLanguages.map((lang) => (
          <Menu.Item key={lang.code}>
            {({ active }) => (
              <button
                onClick={() => setLanguage(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                  language === lang.code
                    ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                    : `${colors.textColor} ${active ? 'bg-white/10 shadow-md' : ''}`
                }`}
                type="button"
                style={{ border: 'none', outline: 'none' }}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1">
                  <div className={`font-medium ${language === lang.code ? 'text-white' : colors.textColor}`}>{lang.name}</div>
                  <div className={`text-xs ${language === lang.code ? 'text-white/80' : 'text-gray-500'}`}>{lang.code}</div>
                </div>
                {language === lang.code && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LanguageToggle;