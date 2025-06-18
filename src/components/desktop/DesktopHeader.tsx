import React from 'react';
import { Cpu } from 'lucide-react';
import { ThemeColors } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';

interface DesktopHeaderProps {
  colors: ThemeColors;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ colors }) => {
  const { t } = useI18n();

  return (
    <header className="relative z-10 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary} rounded-xl flex items-center justify-center relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Cpu className="w-7 h-7 text-white relative z-10" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                {t('header.title')}
              </span>
            </h1>
            <p className="text-sm text-gray-500">{t('header.subtitle')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;