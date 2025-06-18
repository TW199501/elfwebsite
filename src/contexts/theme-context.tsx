import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'blue' | 'orange' | 'white';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  getThemeColors: () => ThemeColors;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  gradientHover: string;
  textGradient: string;
  bgGradient: string;
  glowColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  cardBg: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('white');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'blue' || savedTheme === 'orange' || savedTheme === 'white')) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['white', 'orange', 'blue'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getThemeColors = (): ThemeColors => {
    if (theme === 'white') {
      // 淘寶風格 - 純白背景 + 橘紅色主題
      return {
        primary: 'from-orange-500 to-red-500',
        secondary: 'from-orange-400 to-orange-500',
        accent: 'from-red-500 to-pink-500',
        gradient: 'from-orange-500 to-red-500',
        gradientHover: 'from-orange-600 to-red-600',
        textGradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-white to-orange-50/30',
        glowColor: 'rgba(255, 87, 34, 0.15)',
        borderColor: 'border-orange-200',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        cardBg: 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
      };
    }
    
    if (theme === 'orange') {
      // 淘寶橘色系配色 - 深色版本
      return {
        primary: 'from-orange-400 to-orange-500',
        secondary: 'from-orange-500 to-red-500',
        accent: 'from-yellow-400 to-orange-400',
        gradient: 'from-orange-400 to-orange-500',
        gradientHover: 'from-orange-500 to-orange-600',
        textGradient: 'from-orange-300 to-orange-400',
        bgGradient: 'from-gray-900 via-orange-900/20 to-red-900/20',
        glowColor: 'rgba(251, 146, 60, 0.3)',
        borderColor: 'border-orange-400/30',
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
        cardBg: 'bg-gray-800/50 border border-orange-400/20 backdrop-blur-sm'
      };
    }
    
    return {
      // 藍色科技風
      primary: 'from-cyan-500 to-blue-600',
      secondary: 'from-blue-500 to-purple-600',
      accent: 'from-purple-500 to-pink-600',
      gradient: 'from-cyan-500 to-blue-600',
      gradientHover: 'from-cyan-600 to-blue-700',
      textGradient: 'from-cyan-400 to-blue-400',
      bgGradient: 'from-gray-900 via-blue-900/20 to-purple-900/20',
      glowColor: 'rgba(6, 182, 212, 0.2)',
      borderColor: 'border-cyan-500/20',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      cardBg: 'bg-gray-800/50 border border-cyan-400/20 backdrop-blur-sm'
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};