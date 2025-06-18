import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Filter,
  Search,
  Grid,
  List,
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  Share2,
  Plus,
  Minus,
  Package,
  Truck,
  Shield,
  Clock,
  MapPin,
  Zap,
  Bot,
  Calculator
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface KoreaHallProps {
  onBack: () => void;
}

interface Product {
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

const KoreaHall: React.FC<KoreaHallProps> = ({ onBack }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [exchangeRate, setExchangeRate] = useState(0.024); // KRW to TWD
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showCalculator, setShowCalculator] = useState(false);

  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  // 模擬商品資料
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: '雪花秀 滋陰水乳套裝',
        nameKo: '설화수 자음수 유액 세트',
        brand: '雪花秀 Sulwhasoo',
        category: 'skincare',
        price: { krw: 89000, twd: Math.round(89000 * exchangeRate) },
        originalPrice: { krw: 120000, twd: Math.round(120000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg'],
        rating: 4.8,
        reviews: 2847,
        tags: ['保濕', '抗老', '韓國國寶級'],
        isHot: true,
        isNew: false,
        discount: 26,
        description: '韓國頂級護膚品牌雪花秀的經典套裝，蘊含珍貴韓方成分，深層滋養肌膚。',
        specifications: {
          '容量': '125ml + 125ml',
          '適用膚質': '所有膚質',
          '主要成分': '人參、白參、當歸',
          '產地': '韓國'
        },
        shipping: {
          weight: 0.5,
          size: '20x15x8cm',
          estimatedDays: '5-7天'
        }
      },
      {
        id: '2',
        name: 'BLACKPINK 同款口紅套裝',
        nameKo: '블랙핑크 립스틱 세트',
        brand: 'YSL Beauty',
        category: 'makeup',
        price: { krw: 156000, twd: Math.round(156000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg'],
        rating: 4.9,
        reviews: 1523,
        tags: ['明星同款', '限量版', 'K-POP'],
        isHot: true,
        isNew: true,
        description: 'BLACKPINK代言限量版口紅套裝，包含4支經典色號。',
        specifications: {
          '數量': '4支裝',
          '色號': '#12, #52, #70, #416',
          '質地': '絲絨霧面',
          '產地': '法國'
        },
        shipping: {
          weight: 0.2,
          size: '15x10x5cm',
          estimatedDays: '5-7天'
        }
      },
      {
        id: '3',
        name: 'BTS 防彈少年團 官方周邊T恤',
        nameKo: 'BTS 공식 굿즈 티셔츠',
        brand: 'HYBE Official',
        category: 'fashion',
        price: { krw: 45000, twd: Math.round(45000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'],
        rating: 4.7,
        reviews: 3421,
        tags: ['BTS', '官方周邊', 'K-POP'],
        isHot: true,
        isNew: false,
        description: 'BTS官方授權周邊T恤，100%純棉材質，多種尺寸可選。',
        specifications: {
          '材質': '100% 純棉',
          '尺寸': 'S/M/L/XL/XXL',
          '顏色': '黑色/白色/紫色',
          '產地': '韓國'
        },
        shipping: {
          weight: 0.3,
          size: '25x20x3cm',
          estimatedDays: '5-7天'
        }
      },
      {
        id: '4',
        name: '韓國人氣泡麵組合包',
        nameKo: '인기 라면 세트',
        brand: '農心 Nongshim',
        category: 'food',
        price: { krw: 28000, twd: Math.round(28000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg'],
        rating: 4.6,
        reviews: 892,
        tags: ['韓式料理', '辛拉麵', '人氣商品'],
        isHot: false,
        isNew: false,
        description: '包含辛拉麵、安城湯麵等韓國人氣泡麵，共20包裝。',
        specifications: {
          '數量': '20包裝',
          '口味': '辛拉麵、安城湯麵、炸醬麵等',
          '保存期限': '12個月',
          '產地': '韓國'
        },
        shipping: {
          weight: 2.5,
          size: '40x30x15cm',
          estimatedDays: '7-10天'
        }
      },
      {
        id: '5',
        name: 'GENTLE MONSTER 太陽眼鏡',
        nameKo: '젠틀몬스터 선글라스',
        brand: 'GENTLE MONSTER',
        category: 'fashion',
        price: { krw: 280000, twd: Math.round(280000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg'],
        rating: 4.9,
        reviews: 567,
        tags: ['設計師品牌', '韓國製造', '時尚'],
        isHot: false,
        isNew: true,
        description: '韓國知名設計師眼鏡品牌，獨特設計風格，明星愛用。',
        specifications: {
          '鏡框材質': '醋酸纖維',
          '鏡片': 'UV400防護',
          '尺寸': '145-52-20',
          '產地': '韓國'
        },
        shipping: {
          weight: 0.2,
          size: '18x8x6cm',
          estimatedDays: '5-7天'
        }
      },
      {
        id: '6',
        name: '韓國蜂蜜柚子茶禮盒',
        nameKo: '꿀유자차 선물세트',
        brand: 'KJ Food',
        category: 'food',
        price: { krw: 35000, twd: Math.round(35000 * exchangeRate) },
        images: ['https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'],
        rating: 4.5,
        reviews: 1234,
        tags: ['健康飲品', '禮盒裝', '韓國特產'],
        isHot: false,
        isNew: false,
        description: '韓國傳統蜂蜜柚子茶，精美禮盒包裝，送禮自用兩相宜。',
        specifications: {
          '容量': '1kg x 2罐',
          '成分': '柚子、蜂蜜、糖',
          '保存期限': '24個月',
          '產地': '韓國'
        },
        shipping: {
          weight: 2.2,
          size: '25x20x12cm',
          estimatedDays: '7-10天'
        }
      }
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, [exchangeRate]);

  const categories = [
    { id: 'all', name: '全部商品', icon: '🛍️' },
    { id: 'skincare', name: 'K-Beauty 美妝', icon: '💄' },
    { id: 'makeup', name: '彩妝用品', icon: '💋' },
    { id: 'fashion', name: 'K-Fashion 服飾', icon: '👗' },
    { id: 'food', name: '韓式美食', icon: '🍜' },
    { id: 'kpop', name: 'K-POP 周邊', icon: '🎵' }
  ];

  const sortOptions = [
    { id: 'popular', name: '人氣推薦' },
    { id: 'price-low', name: '價格低到高' },
    { id: 'price-high', name: '價格高到低' },
    { id: 'rating', name: '評價最高' },
    { id: 'newest', name: '最新上架' }
  ];

  // 篩選和排序商品
  useEffect(() => {
    let filtered = products;

    // 分類篩選
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // 搜尋篩選
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nameKo.includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.includes(searchTerm))
      );
    }

    // 排序
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price.twd - b.price.twd);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price.twd - a.price.twd);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: string, quantity: number = 1) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity
    }));
  };

  const formatPrice = (krw: number, twd: number) => {
    return {
      krw: krw.toLocaleString('ko-KR'),
      twd: twd.toLocaleString('zh-TW')
    };
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const formattedPrice = formatPrice(product.price.krw, product.price.twd);
    const formattedOriginalPrice = product.originalPrice 
      ? formatPrice(product.originalPrice.krw, product.originalPrice.twd)
      : null;

    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
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
              onClick={() => toggleFavorite(product.id)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                favorites.includes(product.id)
                  ? `bg-gradient-to-r ${colors.gradient} text-white`
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedProduct(product)}
              className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{product.name}</h3>
            <p className="text-gray-400 text-xs">{product.nameKo}</p>
            <p className="text-gray-500 text-xs">{product.brand}</p>
          </div>

          {/* 評價 */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">({product.reviews})</span>
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
            <div className="text-xs text-gray-400">
              ₩{formattedPrice.krw} (匯率: {exchangeRate})
            </div>
          </div>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* 加入購物車按鈕 */}
          <button
            onClick={() => addToCart(product.id)}
            className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient}`}></div>
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${colors.primary} rounded-full mix-blend-multiply filter blur-xl animate-pulse`}></div>
          <div className={`absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r ${colors.secondary} rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000`}></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回首頁</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🇰🇷</div>
                <div>
                  <h1 className="text-2xl font-bold">
                    <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                      韓國館
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">K-Beauty • K-Fashion • K-POP</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* 匯率計算器 */}
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className={`flex items-center space-x-2 px-4 py-2 bg-white/5 border ${colors.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300`}
              >
                <Calculator className="w-4 h-4" />
                <span className="text-sm">匯率: {exchangeRate}</span>
              </button>

              {/* 購物車 */}
              <div className="relative">
                <button className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${colors.gradient} rounded-lg hover:${colors.gradientHover} transition-all duration-300`}>
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm">購物車</span>
                  {Object.keys(cart).length > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {Object.values(cart).reduce((sum, count) => sum + count, 0)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 匯率計算器彈窗 */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">韓幣匯率計算器</h3>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">韓幣 (KRW)</label>
                <input
                  type="number"
                  placeholder="輸入韓幣金額"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white"
                  onChange={(e) => {
                    const krw = parseFloat(e.target.value) || 0;
                    const twd = Math.round(krw * exchangeRate);
                    const twd_input = document.getElementById('twd-input') as HTMLInputElement;
                    if (twd_input) twd_input.value = twd.toString();
                  }}
                />
              </div>
              <div className="text-center text-gray-400">⇅</div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">台幣 (TWD)</label>
                <input
                  id="twd-input"
                  type="number"
                  placeholder="輸入台幣金額"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white"
                  onChange={(e) => {
                    const twd = parseFloat(e.target.value) || 0;
                    const krw = Math.round(twd / exchangeRate);
                    const krw_input = document.querySelector('input[placeholder="輸入韓幣金額"]') as HTMLInputElement;
                    if (krw_input) krw_input.value = krw.toString();
                  }}
                />
              </div>
              <div className="text-center text-sm text-gray-400">
                當前匯率: 1 KRW = {exchangeRate} TWD
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜尋和篩選 */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* 搜尋框 */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋韓國商品..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:border-transparent outline-none text-white placeholder-gray-400"
                style={{ 
                  '--focus-ring-color': colors.glowColor
                } as React.CSSProperties}
              />
            </div>

            {/* 排序和檢視模式 */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:border-transparent outline-none"
                style={{ 
                  '--focus-ring-color': colors.glowColor
                } as React.CSSProperties}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? `bg-gradient-to-r ${colors.gradient} text-white` 
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? `bg-gradient-to-r ${colors.gradient} text-white` 
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 分類標籤 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${colors.gradient} text-white`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 商品列表 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              找到 {filteredProducts.length} 件商品
            </h2>
            <div className="text-sm text-gray-400">
              匯率更新時間: {new Date().toLocaleString('zh-TW')}
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map(product => {
                const formattedPrice = formatPrice(product.price.krw, product.price.twd);
                return (
                  <div key={product.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-white text-lg mb-1">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-2">{product.nameKo}</p>
                            <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-400">({product.reviews})</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xl font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent mb-1`}>
                              NT${formattedPrice.twd}
                            </div>
                            <div className="text-sm text-gray-400">
                              ₩{formattedPrice.krw}
                            </div>
                            <button
                              onClick={() => addToCart(product.id)}
                              className={`mt-3 bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2`}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span>加入購物車</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 服務保證 */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
              韓國館服務保證
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">正品保證</h4>
              <p className="text-gray-400 text-sm">所有商品均為韓國原裝正品</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.secondary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">快速集運</h4>
              <p className="text-gray-400 text-sm">5-7天快速送達台灣</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.accent} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">AI智能推薦</h4>
              <p className="text-gray-400 text-sm">根據喜好推薦熱門商品</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">專業服務</h4>
              <p className="text-gray-400 text-sm">專業韓語客服團隊</p>
            </div>
          </div>
        </div>
      </div>

      {/* 商品詳情彈窗 */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.images[0]} 
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
                </div>
                
                <div>
                  <p className="text-gray-400 mb-2">{selectedProduct.nameKo}</p>
                  <p className="text-gray-500 mb-4">{selectedProduct.brand}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400">({selectedProduct.reviews} 評價)</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent mb-2`}>
                      NT${formatPrice(selectedProduct.price.krw, selectedProduct.price.twd).twd}
                    </div>
                    <div className="text-gray-400">
                      ₩{formatPrice(selectedProduct.price.krw, selectedProduct.price.twd).krw}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{selectedProduct.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">商品規格</h4>
                    <div className="space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400">{key}:</span>
                          <span className="text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">運送資訊</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">重量:</span>
                        <span className="text-white">{selectedProduct.shipping.weight}kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">尺寸:</span>
                        <span className="text-white">{selectedProduct.shipping.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">預計送達:</span>
                        <span className="text-white">{selectedProduct.shipping.estimatedDays}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        addToCart(selectedProduct.id);
                        setSelectedProduct(null);
                      }}
                      className={`flex-1 bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>加入購物車</span>
                    </button>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                        favorites.includes(selectedProduct.id)
                          ? `bg-gradient-to-r ${colors.secondary} text-white`
                          : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(selectedProduct.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KoreaHall;