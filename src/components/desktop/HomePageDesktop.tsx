import React from 'react';
import { 
  Bot,
  Truck,
  Package,
  Globe,
  User,
  Calculator,
  MessageCircle,
  HelpCircle,
  Route,
  QrCode,
  Eye,
  Cpu,
  Zap
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { PageType } from '../../types';
import ThemeToggle from '../ThemeToggle';

interface HomePageDesktopProps {
  onPageChange: (page: PageType) => void;
}

const HomePageDesktop: React.FC<HomePageDesktopProps> = ({ onPageChange }) => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div className={`min-h-screen ${colors.bgColor} ${colors.textColor} overflow-hidden relative`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient}`}></div>
        {colors.bgColor !== 'bg-white' && (
          <div className="absolute inset-0 opacity-20">
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${colors.primary} rounded-full mix-blend-multiply filter blur-xl animate-pulse`}></div>
            <div className={`absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r ${colors.secondary} rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000`}></div>
            <div className={`absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r ${colors.accent} rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000`}></div>
          </div>
        )}
      </div>

      {/* Cyber Grid Pattern for dark themes */}
      {colors.bgColor !== 'bg-white' && <div className="fixed inset-0 opacity-10 cyber-grid"></div>}

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary} rounded-xl flex items-center justify-center relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Cpu className="w-7 h-7 text-white relative z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                  一路發集運網
                </span>
              </h1>
              <p className="text-sm text-gray-500">AI智能集運 • 全球直送台灣</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 ${colors.cardBg} rounded-full mb-6`}>
              <div className={`w-2 h-2 bg-gradient-to-r ${colors.primary} rounded-full animate-pulse`}></div>
              <span className="text-sm font-medium">AI智能的智慧物流</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                智能集運網
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-6 text-base">
              <span className="flex items-center space-x-1">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>AI智能</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Truck className="w-5 h-5 text-purple-400" />
                <span>5G追蹤</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Package className="w-5 h-5 text-green-400" />
                <span>區塊鏈安全</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>雲端大數據</span>
              </span>
            </div>
            
            <p className={`text-lg ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              上海 • 深圳 • 日本 • 韓國 • 美國 • 德國 → 台灣
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 text-center mb-16">
          {[
            { number: '99.9%', label: 'AI準確率', color: 'text-cyan-400' },
            { number: '5G', label: '實時追蹤', color: 'text-purple-400' },
            { number: '24/7', label: 'AI客服', color: 'text-blue-400' },
            { number: '50萬+', label: '智能配送', color: 'text-red-400' }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in-delay">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 智能查詢區塊 */}
        <div className="mb-16 animate-fade-in-delay">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className={`w-12 h-12 bg-gradient-to-br ${colors.primary} rounded-xl flex items-center justify-center`}>
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="輸入運單號或掃描QR Code進行AI智能追蹤"
              className={`w-full pl-6 pr-32 py-4 ${colors.bgColor === 'bg-white' ? 'bg-gray-50' : 'bg-gray-800/50'} border-2 ${colors.borderColor} rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none ${colors.textColor} placeholder-gray-500 text-lg`}
            />
            <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2`}>
              <Eye className="w-5 h-5" />
              <span>智能追蹤</span>
            </button>
          </div>
        </div>

        {/* 智能服務列 */}
        <div className="mb-16 animate-fade-in-delay">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                AI智能服務
              </span>
            </h2>
            <p className={`text-lg ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
              運用最新AI技術，提供您最優質的集運體驗
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {[
              {
                icon: Calculator,
                title: 'AI智能運費計算器',
                description: '精準計算運費成本',
                color: colors.primary
              },
              {
                icon: MessageCircle,
                title: '智能客服中心',
                description: '24小時AI客服支援',
                color: colors.secondary
              },
              {
                icon: HelpCircle,
                title: '智能線上諮詢',
                description: '專業問題即時解答',
                color: colors.accent
              },
              {
                icon: Route,
                title: '智能集運路線',
                description: '最佳路線智能規劃',
                color: colors.gradient
              },
              {
                icon: Truck,
                title: '智能追蹤',
                description: '即時包裹狀態追蹤',
                color: colors.primary
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`${colors.cardBg} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer group text-center`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-bold ${colors.textColor} mb-2`}>{service.title}</h3>
                <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-8 mb-16 animate-fade-in-delay">
          {[
            {
              icon: '🇰🇷',
              title: '韓國館',
              description: 'K-Beauty、K-Fashion、K-POP周邊',
              action: () => onPageChange('korea')
            },
            {
              icon: '🇯🇵',
              title: '日本館',
              description: '日系美妝、動漫周邊、電子產品',
              action: () => {}
            },
            {
              icon: '🇺🇸',
              title: '美國館',
              description: '品牌服飾、保健食品、3C產品',
              action: () => {}
            },
            {
              icon: '🇩🇪',
              title: '德國館',
              description: '精品工具、汽車用品、保養品',
              action: () => {}
            }
          ].map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className={`${colors.cardBg} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold ${colors.textColor} mb-2`}>{item.title}</h3>
              <p className={`${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`${colors.cardBg} backdrop-blur-sm rounded-3xl p-12 text-center animate-fade-in-delay-2`}>
          <h2 className="text-4xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
              立即開始您的集運之旅
            </span>
          </h2>
          <p className={`text-lg ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            加入一路發集運網，享受AI智能集運服務
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => onPageChange('korea')}
              className={`bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3`}
            >
              <Globe className="w-6 h-6" />
              <span>開始集運</span>
            </button>
            
            <button
              onClick={() => onPageChange('login')}
              className={`${colors.cardBg} border-2 ${colors.borderColor} ${colors.textColor} px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center space-x-3`}
            >
              <User className="w-6 h-6" />
              <span>會員登入</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDesktop;