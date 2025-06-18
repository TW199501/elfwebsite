import React from 'react';
import { Search } from 'lucide-react';
import { ThemeColors } from '../../types';
import { useI18n } from '../../contexts/i18n-context';

interface MobileSearchBarProps {
  colors: ThemeColors;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const MobileSearchBar: React.FC<MobileSearchBarProps> = ({ 
  colors, 
  placeholder,
  value,
  onChange
}) => {
  const { t } = useI18n();
  const defaultPlaceholder = placeholder || t('search.placeholder');

  return (
    <div className="relative z-10 px-4 pb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder={defaultPlaceholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500`}
        />
      </div>
    </div>
  );
};

export default MobileSearchBar;