import React from 'react';
import { Cpu } from 'lucide-react';
import { useTheme } from '../contexts/theme-context-utils';

const LoadingScreen: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div className={`min-h-screen ${colors.bgColor} ${colors.textColor} flex items-center justify-center`}>
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
          <Cpu className="w-8 h-8 text-white relative z-10" />
        </div>
        <div className="w-8 h-8 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className={`text-lg ${colors.textColor}`}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;