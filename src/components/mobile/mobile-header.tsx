import React from 'react';
import { Cpu } from 'lucide-react';
import { ThemeColors } from '../../types';
import { useI18n } from '../../contexts/i18n-context';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';

interface MobileHeaderProps {
  colors: ThemeColors;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ colors }) => {
  const { t } = useI18n();

  return (
    <header className="relative z-10 p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${colors.primary} rounded-lg flex items-center justify-center`}>
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">
              <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                {t('header.title')}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;