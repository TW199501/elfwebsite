import React from 'react';
import { NavigationItem, ThemeColors } from '../../types';

interface BottomNavigationProps {
  items: NavigationItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  colors: ThemeColors;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  items, 
  activeTab, 
  onTabChange, 
  colors 
}) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${colors.cardBg} border-t ${colors.borderColor} backdrop-blur-md`}>
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 transition-all duration-200 ${
                isActive 
                  ? `text-orange-500` 
                  : `${colors.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'} hover:text-orange-400`
              }`}
            >
              <div className={`relative ${isActive ? 'transform scale-110' : ''} transition-transform duration-200`}>
                <Icon className="w-6 h-6" />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></div>
                )}
              </div>
              <span className={`text-xs mt-1 font-medium ${isActive ? 'text-orange-500' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;