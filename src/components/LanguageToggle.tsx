import React, { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useTheme } from '../contexts/ThemeContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useI18n();
  const { getThemeColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const colors = getThemeColors();

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center space-x-2 px-3 py-2 backdrop-blur-sm border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${colors.cardBg}`}
        title="切換語言 / Switch Language"
      >
        <div className="relative">
          <Languages className={`w-4 h-4 ${colors.textColor}`} />
          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${colors.primary} rounded-full animate-pulse`}></div>
        </div>
        <span className={`text-xs font-medium ${colors.textColor}`}>
          {currentLanguage?.flag}
        </span>
        <ChevronDown className={`w-3 h-3 ${colors.textColor} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className={`absolute top-full right-0 mt-2 w-48 ${colors.cardBg} backdrop-blur-md border ${colors.borderColor} rounded-lg shadow-xl z-50 overflow-hidden`}>
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                  language === lang.code 
                    ? `bg-gradient-to-r ${colors.gradient} text-white` 
                    : `${colors.textColor} hover:bg-white/10`
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1">
                  <div className={`font-medium ${language === lang.code ? 'text-white' : colors.textColor}`}>
                    {lang.name}
                  </div>
                  <div className={`text-xs ${language === lang.code ? 'text-white/80' : 'text-gray-500'}`}>
                    {lang.code}
                  </div>
                </div>
                {language === lang.code && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;