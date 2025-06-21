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
import { useI18n } from '../../contexts/i18n-context-utils';

interface DesktopFooterProps {
  colors: ThemeColors;
}

const DesktopFooter: React.FC<DesktopFooterProps> = ({ colors }) => {
  const { t } = useI18n();

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
                {t('footer.company.title')}
              </span>
            </div>
            <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              {t('footer.company.desc')}
            </p>
          </div>

          {/* AI智能服務 */}
          <div>
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>{t('footer.services.china')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>{t('footer.services.japan')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Truck className="w-4 h-4" />
                <span>{t('footer.services.korea')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Package className="w-4 h-4" />
                <span>{t('footer.services.usa')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} hover:${colors.textColor} cursor-pointer transition-colors duration-300 flex items-center space-x-2`}>
                <Globe className="w-4 h-4" />
                <span>{t('footer.services.germany')}</span>
              </li>
            </ul>
          </div>

          {/* 各國館代購 */}
          <div>
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>{t('footer.halls.title')}</h3>
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
            <h3 className={`text-lg font-bold ${colors.textColor} mb-4`}>{t('footer.contact.title')}</h3>
            <ul className="space-y-2">
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <MessageCircle className="w-4 h-4" />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <Bot className="w-4 h-4" />
                <span>{t('footer.contact.email')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <HelpCircle className="w-4 h-4" />
                <span>{t('footer.contact.service')}</span>
              </li>
              <li className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2`}>
                <Route className="w-4 h-4" />
                <span>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className={`border-t ${colors.borderColor} mt-8 pt-8 text-center`}>
          <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;