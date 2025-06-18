import React from 'react';
import { ArrowLeft, MapPin, Clock, Star, Heart, Share2 } from 'lucide-react';
import { useTheme } from '../../contexts/theme-context-utils';
import { useI18n } from '../../contexts/i18n-context-utils';

interface KoreaHallDesktopProps {
  onBack: () => void;
}

const KoreaHallDesktop: React.FC<KoreaHallDesktopProps> = ({ onBack }) => {
  const { getThemeColors } = useTheme();
  const { t } = useI18n();
  const colors = getThemeColors();

  return (
    <div className={`min-h-screen ${colors.bgColor}`}>
      {/* Header */}
      <div className={`${colors.cardBg} border-b ${colors.borderColor} sticky top-0 z-10`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <button
            onClick={onBack}
            className={`flex items-center space-x-2 p-3 rounded-lg ${colors.cardBg} border ${colors.borderColor} hover:shadow-md transition-all duration-300`}
          >
            <ArrowLeft className="w-6 h-6" />
            <span>{t('common.back')}</span>
          </button>
          <h1 className="text-2xl font-bold">{t('korea.title')}</h1>
          <div className="flex items-center gap-3">
            <button className={`p-3 rounded-lg ${colors.cardBg} border ${colors.borderColor} hover:shadow-md transition-all duration-300`}>
              <Heart className="w-6 h-6" />
            </button>
            <button className={`p-3 rounded-lg ${colors.cardBg} border ${colors.borderColor} hover:shadow-md transition-all duration-300`}>
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Store Info */}
        <div className={`${colors.cardBg} rounded-2xl p-8 mb-8 border ${colors.borderColor} shadow-lg`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('korea.title')}</h2>
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="text-xl font-semibold">4.8</span>
                <span className={`${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>(2,341 {t('korea.product.reviews')})</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className={`${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{t('korea.subtitle')}</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className={`${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{t('korea.available')}</span>
              </div>
              
              <div className="flex gap-4">
                <button className={`flex-1 bg-gradient-to-r ${colors.gradient} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  {t('korea.startShopping')}
                </button>
                <button className={`px-6 py-4 rounded-xl border ${colors.borderColor} ${colors.cardBg} hover:shadow-md transition-all duration-300`}>
                  {t('korea.contact')}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`${colors.cardBg} border ${colors.borderColor} rounded-xl p-4 text-center`}>
                <div className="text-2xl font-bold text-red-500 mb-2">1000+</div>
                <div className="text-sm text-gray-500">{t('korea.stats.products')}</div>
              </div>
              <div className={`${colors.cardBg} border ${colors.borderColor} rounded-xl p-4 text-center`}>
                <div className="text-2xl font-bold text-blue-500 mb-2">24H</div>
                <div className="text-sm text-gray-500">{t('korea.stats.shipping')}</div>
              </div>
              <div className={`${colors.cardBg} border ${colors.borderColor} rounded-xl p-4 text-center`}>
                <div className="text-2xl font-bold text-green-500 mb-2">98%</div>
                <div className="text-sm text-gray-500">{t('korea.stats.rating')}</div>
              </div>
              <div className={`${colors.cardBg} border ${colors.borderColor} rounded-xl p-4 text-center`}>
                <div className="text-2xl font-bold text-purple-500 mb-2">VIP</div>
                <div className="text-sm text-gray-500">{t('korea.stats.vip')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">{t('korea.categories.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                className={`${colors.cardBg} border ${colors.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:scale-105`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h4 className="font-semibold mb-2">{category.name}</h4>
                <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>{category.items} 件商品</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items */}
        <div>
          <h3 className="text-2xl font-bold mb-6">{t('korea.popular.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'LANEIGE 蘭芝水庫面膜',
                description: '韓國超人氣保濕面膜，深層補水，讓肌膚水潤透亮',
                price: 'NT$1,299',
                originalPrice: 'NT$1,599',
                rating: 4.9,
                reviews: 1234,
                image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '熱銷'
              },
              {
                name: 'BLACKPINK 官方周邊T恤',
                description: '正版授權商品，100%純棉材質，舒適透氣',
                price: 'NT$899',
                originalPrice: 'NT$1,199',
                rating: 4.8,
                reviews: 856,
                image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '限量'
              },
              {
                name: '韓式泡菜拉麵組合',
                description: '正宗韓國進口，辣味十足，搭配泡菜更美味',
                price: 'NT$299',
                originalPrice: 'NT$399',
                rating: 4.7,
                reviews: 567,
                image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
                badge: '新品'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`${colors.cardBg} border ${colors.borderColor} rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`bg-gradient-to-r ${colors.gradient} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                  <p className={`text-sm ${colors.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-2`}>
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500">({item.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`text-xl font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {item.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
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

export default KoreaHallDesktop;