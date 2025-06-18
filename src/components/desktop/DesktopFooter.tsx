import React from 'react';
import { 
  Cpu,
  Bot,
  MessageCircle,
  HelpCircle,
  Route,
  Truck,
  Package,
  Globe
} from 'lucide-react';
import { ThemeColors } from '../../types';

interface DesktopFooterProps {
  colors: ThemeColors;
}

const DesktopFooter: React.FC<DesktopFooterProps> = ({ colors }) => {
  return (
    <footer className={`relative z-10 ${colors.cardBg} border-t ${colors.borderColor} mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司資訊 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${colors.primary} rounded-lg flex items-center justify-center`}>
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className={`text-lg font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                智能集運網
              </span>
            </div>
            <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              運用人工智慧、5G、區塊鏈等前沿科技，為台灣客戶提供最智能的全球購物解決方案。
            </p>
          </div>

          {/* AI智能服務 */}
          <div>
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>AI智能服務</h3>
            <ul className="space-y-2">
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>AI中國集運</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>智能日本集運</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Truck className="w-4 h-4" />
                <span>5G韓國集運</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Package className="w-4 h-4" />
                <span>雲端美國集運</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Globe className="w-4 h-4" />
                <span>區塊鏈德國集運</span>
              </li>
            </ul>
          </div>

          {/* 各國館代購 */}
          <div>
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>各國館代購</h3>
            <ul className="space-y-2">
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300`}>
                🇰🇷 韓國館
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300`}>
                🇯🇵 日本館
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300`}>
                🇺🇸 美國館
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300`}>
                🇩🇪 德國館
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300`}>
                🇨🇳 中國代購
              </li>
            </ul>
          </div>

          {/* 智能聯絡 */}
          <div>
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>智能聯絡</h3>
            <ul className="space-y-2">
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <MessageCircle className="w-4 h-4" />
                <span>AI客服: 02-1234-5678</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>ai@yilfa.com.tw</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <HelpCircle className="w-4 h-4" />
                <span>AI服務: 24/7全年無休</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <Route className="w-4 h-4" />
                <span>台北市信義區科技大樓</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className={`border-t ${colors.borderColor} mt-8 pt-8 text-center`}>
          <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 智能集運網 AI-Powered Shipping. 版權所有 | Powered by AI & 5G Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;