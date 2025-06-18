import React from 'react';
import { ArrowLeft, MapPin, Clock, Star, Heart, Share2 } from 'lucide-react';
import { useTheme } from '../../contexts/theme-context';
import { useI18n } from '../../contexts/i18n-context';

interface KoreaHallMobileProps {
  onBack: () => void;
}

const KoreaHallMobile: React.FC<KoreaHallMobileProps> = ({ onBack }) => {
  const { getThemeColors } = useTheme();
  const { t } = useI18n();
  const colors = getThemeColors();

  return (
    <div className={`min-h-screen ${colors.bgColor}`}>
      {/* Header */}
      <div className={`${colors.cardBg} border-b ${colors.borderColor} sticky top-0 z-10`}>
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onBack}
            className={`p-2 rounded-lg ${colors.cardBg} border ${colors.borderColor} transition-colors`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold">{t('korea.title')}</h1>
          <div className="flex items-center gap-2">
            <button className={`p-2 rounded-lg ${colors.cardBg} border ${colors.borderColor} transition-colors`}>
              <Heart className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-lg ${colors.cardBg} border ${colors.borderColor} transition-colors`}>
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Store Info */}
        <div className={`${colors.cardBg} rounded-xl p-6 mb-6 border ${colors.borderColor}`}>
          <h2 className="text-xl font-bold mb-3">{t('korea.title')}</h2>
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-semibold">4.8</span>
            <span className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>(2,341 {t('korea.product.reviews')})</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{t('korea.subtitle')}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{t('korea.available')}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className={`${colors.cardBg} border ${colors.borderColor} rounded-lg p-3 text-center`}>
              <div className="text-lg font-bold text-red-500 mb-1">1000+</div>
              <div className="text-xs text-gray-500">{t('korea.stats.products')}</div>
            </div>
            <div className={`${colors.cardBg} border ${colors.borderColor} rounded-lg p-3 text-center`}>
              <div className="text-lg font-bold text-blue-500 mb-1">24H</div>
              <div className="text-xs text-gray-500">{t('korea.stats.shipping')}</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className={`flex-1 bg-gradient-to-r ${colors.gradient} text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300`}>
              {t('korea.startShopping')}
            </button>
            <button className={`px-4 py-3 rounded-lg border ${colors.borderColor} ${colors.cardBg} transition-all duration-300`}>
              {t('korea.contact')}
            </button>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">{t('korea.categories.title')}</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: t('korea.categories.beauty'), items: 120, icon: '💄' },
              { name: t('korea.categories.fashion'), items: 85, icon: '👗' },
              { name: t('korea.categories.food'), items: 65, icon: '🍜' },
              { name: t('korea.categories.kpop'), items: 45, icon: '🎵' },
              { name: t('korea.categories.lifestyle'), items: 90, icon: '🏠' },
              { name: t('korea.categories.electronics'), items: 30, icon: '📱' }
            ].map((category, index) => (
              <div
                key={index}
                className={`${colors.cardBg} border ${colors.borderColor} rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
                <p className={`text-xs ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{category.items} 件</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items - Waterfall Layout */}
        <div>
          <h3 className="text-lg font-bold mb-4">{t('korea.popular.title')}</h3>
          <div className="columns-2 gap-4">
            {[
              {
                name: 'LANEIGE 蘭芝水庫面膜',
                description: '韓國超人氣保濕面膜',
                price: 'NT$1,299',
                originalPrice: 'NT$1,599',
                rating: 4.9,
                reviews: 1234,
                image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '熱銷',
                height: 'h-64'
              },
              {
                name: 'BLACKPINK 官方T恤',
                description: '正版授權商品',
                price: 'NT$899',
                originalPrice: 'NT$1,199',
                rating: 4.8,
                reviews: 856,
                image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '限量',
                height: 'h-72'
              },
              {
                name: '韓式泡菜拉麵',
                description: '正宗韓國進口',
                price: 'NT$299',
                originalPrice: 'NT$399',
                rating: 4.7,
                reviews: 567,
                image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '新品',
                height: 'h-60'
              },
              {
                name: '韓國護膚套裝',
                description: '多步驟護膚程序',
                price: 'NT$2,199',
                originalPrice: 'NT$2,899',
                rating: 4.9,
                reviews: 432,
                image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '推薦',
                height: 'h-68'
              },
              {
                name: 'BTS 限量周邊',
                description: '官方授權商品',
                price: 'NT$1,599',
                originalPrice: 'NT$1,999',
                rating: 4.8,
                reviews: 789,
                image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '限量',
                height: 'h-80'
              },
              {
                name: '韓式海苔零食',
                description: '健康美味零食',
                price: 'NT$199',
                originalPrice: 'NT$299',
                rating: 4.6,
                reviews: 234,
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '特價',
                height: 'h-56'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`${colors.cardBg} border ${colors.borderColor} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer mb-4 break-inside-avoid`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full ${item.height} object-cover`}
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`bg-gradient-to-r ${colors.gradient} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <button className="w-7 h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <Heart className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h4 className="font-bold text-sm mb-1 line-clamp-1">{item.name}</h4>
                  <p className={`text-xs ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-2 line-clamp-1`}>
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium">{item.rating}</span>
                    <span className="text-xs text-gray-500">({item.reviews})</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`text-sm font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                      {item.price}
                    </span>
                    <span className="text-xs text-gray-500 line-through ml-1">
                      {item.originalPrice}
                    </span>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-2 rounded-lg text-sm font-medium transition-all duration-300`}>
                    {t('korea.product.addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreaHallMobile;