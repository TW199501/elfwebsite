import { 
  Home,
  Bot,
  ShoppingBag,
  User
} from 'lucide-react';
import { NavigationItem } from '../types';

export const getBottomNavItems = (t: (key: string) => string): NavigationItem[] => [
  { id: 'home', label: t('nav.home'), icon: Home },
  { id: 'search', label: t('nav.aiShipping'), icon: Bot },
  { id: 'shop', label: t('nav.shopping'), icon: ShoppingBag },
  { id: 'favorites', label: t('nav.cart'), icon: ShoppingBag },
  { id: 'profile', label: t('nav.profile'), icon: User }
];

export const ITEMS_PER_PAGE = 12;

export const getCategories = (t: (key: string) => string) => [
  { id: 'all', name: t('korea.categories.title'), icon: '🛍️' },
  { id: 'skincare', name: t('korea.categories.beauty'), icon: '💄' },
  { id: 'makeup', name: '彩妝用品', icon: '💋' },
  { id: 'fashion', name: t('korea.categories.fashion'), icon: '👗' },
  { id: 'food', name: t('korea.categories.food'), icon: '🍜' },
  { id: 'kpop', name: t('korea.categories.kpop'), icon: '🎵' }
];

export const getSortOptions = (t: (key: string) => string) => [
  { id: 'popular', name: '人氣推薦' },
  { id: 'price-low', name: '價格低到高' },
  { id: 'price-high', name: '價格高到低' },
  { id: 'rating', name: '評價最高' },
  { id: 'newest', name: '最新上架' }
];