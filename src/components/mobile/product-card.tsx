import React from 'react';
import { 
  Heart,
  ShoppingCart,
  Star,
  Eye,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Product, ThemeColors } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
  isMobile: boolean;
  colors: ThemeColors;
  exchangeRate: number;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onViewProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  isMobile,
  colors,
  exchangeRate,
  favorites,
  onToggleFavorite,
  onAddToCart,
  onViewProduct
}) => {
  const formatPrice = (krw: number, twd: number) => {
    return {
      krw: krw.toLocaleString('ko-KR'),
      twd: twd.toLocaleString('zh-TW')
    };
  };

  const formattedPrice = formatPrice(product.price.krw, product.price.twd);
  const formattedOriginalPrice = product.originalPrice 
    ? formatPrice(product.originalPrice.krw, product.originalPrice.twd)
    : null;

  return (
    <div className={`${colors.cardBg} backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${isMobile ? 'mb-4' : ''}`}>
      <div className="relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* 標籤 */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isHot && (
            <span className={`bg-gradient-to-r ${colors.gradient} text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1`}>
              <TrendingUp className="w-3 h-3" />
              <span>熱銷</span>
            </span>
          )}
          {product.isNew && (
            <span className={`bg-gradient-to-r ${colors.secondary} text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1`}>
              <Sparkles className="w-3 h-3" />
              <span>新品</span>
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* 操作按鈕 */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onToggleFavorite(product.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              favorites.includes(product.id)
                ? `bg-gradient-to-r ${colors.gradient} text-white`
                : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onViewProduct(product)}
            className="w-8 h-8 bg-white/80 text-gray-600 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={isMobile ? 'p-3' : 'p-4'}>
        <div className="mb-2">
          <h3 className={`font-bold ${colors.textColor} text-sm mb-1 line-clamp-2`}>{product.name}</h3>
          <p className="text-gray-500 text-xs">{product.nameKo}</p>
          <p className="text-gray-600 text-xs">{product.brand}</p>
        </div>

        {/* 評價 */}
        <div className={`flex items-center space-x-2 ${isMobile ? 'mb-2' : 'mb-3'}`}>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* 價格 */}
        <div className="mb-3">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
              NT${formattedPrice.twd}
            </span>
            {formattedOriginalPrice && (
              <span className="text-sm text-gray-500 line-through">
                NT${formattedOriginalPrice.twd}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            ₩{formattedPrice.krw}
          </div>
        </div>

        {/* 標籤 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* 加入購物車按鈕 */}
        <button
          onClick={() => onAddToCart(product.id)}
          className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>加入購物車</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;