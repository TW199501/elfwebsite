import { createContext, useContext } from 'react';

export type Theme = 'blue' | 'orange' | 'white';

export interface ThemeColors {
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

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  getThemeColors: () => ThemeColors;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
