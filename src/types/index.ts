export interface Product {
  id: string;
  name: string;
  nameKo: string;
  brand: string;
  category: string;
  price: {
    krw: number;
    twd: number;
  };
  originalPrice?: {
    krw: number;
    twd: number;
  };
  images: string[];
  rating: number;
  reviews: number;
  tags: string[];
  isHot: boolean;
  isNew: boolean;
  discount?: number;
  description: string;
  specifications: { [key: string]: string };
  shipping: {
    weight: number;
    size: string;
    estimatedDays: string;
  };
}

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

export type Theme = 'blue' | 'orange' | 'white';

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export type PageType = 'home' | 'korea' | 'login' | 'register';