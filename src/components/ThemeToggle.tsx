import React from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <button
      onClick={toggleTheme}
      className={`relative group flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105`}
      title={`切換至${theme === 'blue' ? '橘色' : '藍色'}主題`}
    >
      <div className="relative">
        <Palette className="w-5 h-5 text-white" />
        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${colors.primary} rounded-full animate-pulse`}></div>
      </div>
      <span className="text-sm text-white font-medium">
        {theme === 'blue' ? '🔵 藍色系' : '🟠 橘色系'}
      </span>
      
      {/* Theme Preview */}
      <div className="flex space-x-1 ml-2">
        <div className={`w-2 h-2 bg-gradient-to-r ${colors.primary} rounded-full`}></div>
        <div className={`w-2 h-2 bg-gradient-to-r ${colors.secondary} rounded-full`}></div>
        <div className={`w-2 h-2 bg-gradient-to-r ${colors.accent} rounded-full`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;