import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, getThemeColors } = useTheme();
  const colors = getThemeColors();

  const getThemeIcon = () => {
    switch (theme) {
      case 'white':
        return '⚪';
      case 'orange':
        return '🟠';
      default:
        return '🔵';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative group flex items-center space-x-2 px-3 py-2 backdrop-blur-sm border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${colors.cardBg}`}
      title="切換主題"
    >
      <div className="relative">
        <Palette className={`w-4 h-4 ${colors.textColor}`} />
        <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${colors.primary} rounded-full animate-pulse`}></div>
      </div>
      <span className={`text-xs font-medium ${colors.textColor}`}>
        {getThemeIcon()}
      </span>
      
      {/* Theme Preview */}
      <div className="flex space-x-1">
        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.primary} rounded-full`}></div>
        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.secondary} rounded-full`}></div>
        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.accent} rounded-full`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;