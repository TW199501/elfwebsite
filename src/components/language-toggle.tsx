import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { useI18n, Language } from '../contexts/i18n-context';
import { useTheme } from '../contexts/theme-context';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, availableLanguages } = useI18n();
  const { getThemeColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const colors = getThemeColors();

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  // 點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: Language) => {
    console.log('Changing language from', language, 'to:', langCode);
    setLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle dropdown, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`relative group flex items-center space-x-2 px-3 py-2 backdrop-blur-sm border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${colors.cardBg}`}
        title="切換語言 / Switch Language"
        type="button"
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

      {/* Dropdown Menu - 使用條件渲染和內聯樣式確保顯示 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9998]" 
          onClick={() => setIsOpen(false)}
          style={{ background: 'transparent' }}
        />
      )}
      
      {isOpen && (
        <div 
          className={`absolute top-full right-0 mt-2 w-48 ${colors.cardBg} backdrop-blur-md border-2 ${colors.borderColor} rounded-lg overflow-hidden`}
          style={{
            zIndex: 9999,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Language option clicked:', lang.code);
                handleLanguageChange(lang.code);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02] ${
                language === lang.code 
                  ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg` 
                  : `${colors.textColor} hover:bg-white/10 hover:shadow-md`
              }`}
              type="button"
              style={{
                border: 'none',
                outline: 'none'
              }}
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
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;