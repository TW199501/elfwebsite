import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'blue' | 'orange';

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
  const [theme, setTheme] = useState<Theme>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'blue' || savedTheme === 'orange')) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'blue' ? 'orange' : 'blue';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getThemeColors = (): ThemeColors => {
    if (theme === 'orange') {
      return {
        primary: 'from-orange-300 to-red-400',
        secondary: 'from-amber-300 to-orange-400',
        accent: 'from-yellow-300 to-orange-300',
        gradient: 'from-orange-300 to-red-400',
        gradientHover: 'from-orange-400 to-red-500',
        textGradient: 'from-orange-200 to-red-200',
        bgGradient: 'from-gray-900 via-orange-800 to-red-800',
        glowColor: 'rgba(251, 146, 60, 0.5)',
        borderColor: 'border-orange-300/50'
      };
    }
    
    return {
      primary: 'from-cyan-500 to-blue-600',
      secondary: 'from-blue-500 to-purple-600',
      accent: 'from-purple-500 to-pink-600',
      gradient: 'from-cyan-500 to-blue-600',
      gradientHover: 'from-cyan-600 to-blue-700',
      textGradient: 'from-cyan-400 to-blue-400',
      bgGradient: 'from-gray-900 via-blue-900 to-purple-900',
      glowColor: 'rgba(6, 182, 212, 0.3)',
      borderColor: 'border-cyan-500/30'
    };
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};