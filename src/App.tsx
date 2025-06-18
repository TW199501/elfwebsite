import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Plane, 
  Truck, 
  Package, 
  Globe, 
  Shield, 
  Clock, 
  DollarSign,
  Search,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Calculator,
  Users,
  Award,
  CheckCircle,
  ShoppingCart,
  Heart,
  Zap,
  Cpu,
  Wifi,
  Smartphone,
  Bot,
  QrCode,
  Scan,
  BarChart3,
  TrendingUp,
  Rocket,
  Database,
  Cloud,
  Eye,
  Bell,
  Lock
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('shipping');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTracking = () => {
    setIsTracking(true);
    setTimeout(() => setIsTracking(false), 2000);
  };

  const services = [
    {
      id: 'shipping',
      name: 'AI智能集運',
      icon: Cpu,
      description: '運用AI技術優化路線，從上海、深圳、日本、韓國、美國、德國智能集運回台灣',
      features: ['AI路線優化', '智能包裝建議', '自動清關處理', '即時狀態更新'],
      locations: ['上海', '深圳', '日本', '韓國', '美國', '德國'],
      price: 'NT$150/公斤起',
      tech: 'AI驅動'
    },
    {
      id: 'shopping',
      name: '智慧代購服務', 
      icon: Bot,
      description: 'AI助手協助代購，智能比價系統，確保您買到最優惠的商品',
      features: ['AI智能比價', '自動商品驗收', '區塊鏈溯源', '智能風險評估'],
      locations: ['淘寶天貓', '京東', '日本樂天', '韓國購物', '美國亞馬遜', '德國購物'],
      price: '代購費5%起',
      tech: '機器學習'
    },
    {
      id: 'express',
      name: '5G快遞網絡',
      icon: Rocket,
      description: '5G物聯網技術，實時追蹤每個包裹，最快3-5天送達台灣',
      features: ['5G實時追蹤', 'IoT感應器監控', '預測性配送', '無人機配送'],
      locations: ['全球快遞網絡', 'DHL', 'FedEx', 'UPS'],
      price: 'NT$350/公斤起',
      tech: '5G+IoT'
    }
  ];

  const techFeatures = [
    {
      icon: Eye,
      title: 'AI視覺檢測',
      description: '自動檢測包裹完整性，確保商品安全',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: '區塊鏈溯源',
      description: '每個包裹都有唯一數位身份證',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bell,
      title: '智能通知',
      description: 'LINE Bot即時推送包裹狀態更新',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: '大數據分析',
      description: '預測最佳配送時間和路線',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const shippingRoutes = [
    {
      country: '中國大陸',
      cities: ['上海', '深圳'],
      flag: '🇨🇳',
      timeframe: '7-10天',
      price: 'NT$150/公斤起',
      popular: true,
      tech: 'AI優化路線',
      tracking: '5G實時追蹤'
    },
    {
      country: '日本',
      cities: ['東京', '大阪', '名古屋'],
      flag: '🇯🇵',
      timeframe: '5-7天',
      price: 'NT$200/公斤起',
      popular: true,
      tech: '智能清關',
      tracking: 'IoT感應器'
    },
    {
      country: '韓國',
      cities: ['首爾', '釜山'],
      flag: '🇰🇷',
      timeframe: '5-7天',
      price: 'NT$180/公斤起',
      popular: false,
      tech: '自動分揀',
      tracking: '區塊鏈驗證'
    },
    {
      country: '美國',
      cities: ['洛杉磯', '紐約', '舊金山'],
      flag: '🇺🇸',
      timeframe: '10-14天',
      price: 'NT$280/公斤起',
      popular: true,
      tech: '預測配送',
      tracking: '衛星定位'
    },
    {
      country: '德國',
      cities: ['柏林', '慕尼黑', '漢堡'],
      flag: '🇩🇪',
      timeframe: '12-16天',
      price: 'NT$320/公斤起',
      popular: false,
      tech: '智能倉儲',
      tracking: 'RFID追蹤'
    }
  ];

  const advantages = [
    {
      icon: Cpu,
      title: 'AI智能系統',
      description: '人工智能優化每個環節，提升效率降低成本',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: '區塊鏈安全',
      description: '去中心化技術確保每筆交易透明可追溯',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: Wifi,
      title: '5G實時追蹤',
      description: '超高速網絡實現毫秒級包裹狀態更新',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: Cloud,
      title: '雲端大數據',
      description: '海量數據分析預測最佳配送方案',
      gradient: 'from-orange-400 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: '陳小姐',
      location: '台北',
      content: 'AI推薦的日本商品超準確！而且包裹追蹤比Google地圖還精準，科技感十足！',
      rating: 5,
      service: 'AI日本代購',
      avatar: '👩‍💼'
    },
    {
      name: '王先生',
      location: '高雄',
      content: '5G追蹤系統太厲害了，可以看到包裹在飛機上的即時位置，孩子都覺得很神奇！',
      rating: 5,
      service: '5G美國集運',
      avatar: '👨‍💻'
    },
    {
      name: '李太太',
      location: '台中',
      content: 'LINE Bot會主動提醒包裹狀態，還會推薦最佳取貨時間，真的很智能！',
      rating: 5,
      service: '智能淘寶代購',
      avatar: '👩‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <Cpu className="w-7 h-7 text-white relative z-10" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  一路發集運網
                </span>
                <div className="text-xs text-gray-400 flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>AI-Powered Shipping</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['首頁', 'AI集運', '智慧代購', '科技追蹤', '大數據分析', '聯絡我們'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleTimeString('zh-TW')}
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['首頁', 'AI集運', '智慧代購', '科技追蹤', '大數據分析', '聯絡我們'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="首頁" className="relative h-screen flex items-center justify-center">
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI驅動的智能物流</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              一路發
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl">智能集運網</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            🤖 AI智能 • 🚀 5G追蹤 • 🔗 區塊鏈安全 • ☁️ 雲端大數據
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400">
            上海 • 深圳 • 日本 • 韓國 • 美國 • 德國 ➜ 台灣
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              <span>啟動AI集運</span>
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>智慧代購</span>
            </button>
          </div>

          {/* Tech Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">AI準確率</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">5G</div>
              <div className="text-sm text-gray-400">實時追蹤</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">AI客服</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-400">50萬+</div>
              <div className="text-sm text-gray-400">智能配送</div>
            </div>
          </div>
        </div>

        {/* Smart Tracking Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl mx-auto px-4">
          <div className="bg-black/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <QrCode className="w-6 h-6 text-cyan-400" />
                <Scan className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <input
                type="text"
                placeholder="輸入運單號或掃描QR Code進行AI智能追蹤"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-400"
              />
              <button 
                onClick={handleTracking}
                disabled={isTracking}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
              >
                {isTracking ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>AI分析中</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>智能追蹤</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                核心科技
              </span>
            </h2>
            <p className="text-xl text-gray-400">運用最新科技革新物流體驗</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="AI集運" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                智能服務
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI驅動的全方位物流解決方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                    activeService === service.id ? 'ring-2 ring-cyan-500 bg-white/10' : ''
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-3 py-1">
                        <span className="text-xs text-purple-400 font-medium">{service.tech}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{service.price}</span>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                        啟動服務
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Smart Shipping Routes */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                智能集運路線
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shippingRoutes.map((route, index) => (
                <div key={index} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                  {route.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      🔥 熱門
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{route.flag}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{route.country}</h4>
                      <p className="text-sm text-gray-400">{route.cities.join('、')}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">運送時間:</span>
                      <span className="font-semibold text-white">{route.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">運費:</span>
                      <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{route.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">科技:</span>
                      <span className="text-green-400 text-sm">{route.tech}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">追蹤:</span>
                      <span className="text-purple-400 text-sm">{route.tracking}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg transition-all duration-300 group-hover:scale-105">
                    選擇智能路線
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                科技優勢
              </span>
            </h2>
            <p className="text-xl text-gray-400">領先業界的智能物流技術</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${advantage.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">6+</div>
              <div className="text-gray-300">AI服務國家</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50萬+</div>
              <div className="text-gray-300">智能集運</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300">AI準確率</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300">智能客服</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Calculator */}
      <section id="科技追蹤" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI智能運費計算器
                </span>
              </h2>
              <p className="text-gray-400">人工智能即時計算最優惠運費</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>寄送國家</span>
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                  <option className="bg-gray-800">🇨🇳 中國 - 上海 (AI優化)</option>
                  <option className="bg-gray-800">🇨🇳 中國 - 深圳 (5G追蹤)</option>
                  <option className="bg-gray-800">🇯🇵 日本 (智能清關)</option>
                  <option className="bg-gray-800">🇰🇷 韓國 (區塊鏈)</option>
                  <option className="bg-gray-800">🇺🇸 美國 (預測配送)</option>
                  <option className="bg-gray-800">🇩🇪 德國 (RFID追蹤)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>收件地區</span>
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                  <option className="bg-gray-800">台北市</option>
                  <option className="bg-gray-800">新北市</option>
                  <option className="bg-gray-800">桃園市</option>
                  <option className="bg-gray-800">台中市</option>
                  <option className="bg-gray-800">台南市</option>
                  <option className="bg-gray-800">高雄市</option>
                  <option className="bg-gray-800">其他縣市</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span>重量 (公斤)</span>
                </label>
                <input 
                  type="number" 
                  placeholder="AI將自動優化包裝"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>智能服務</span>
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                  <option className="bg-gray-800">🤖 AI智能集運</option>
                  <option className="bg-gray-800">⚡ 5G快速集運</option>
                  <option className="bg-gray-800">🛒 智慧代購服務</option>
                </select>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Cpu className="w-5 h-5" />
              <span>AI智能計算運費</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                客戶科技體驗
              </span>
            </h2>
            <p className="text-xl text-gray-400">聽聽客戶對我們AI服務的評價</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-3 py-1">
                    <div className="text-xs text-cyan-400 font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="聯絡我們" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  智能客服中心
                </span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                AI客服24/7為您服務，解答集運代購相關問題
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <div className="text-lg font-semibold">AI智能客服</div>
                    <div className="text-gray-300">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-lg font-semibold">智能信箱</div>
                    <div className="text-gray-300">ai@yilfa.com.tw</div>
                  </div>
                </div>
                <div className="flex items-center text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <div className="text-lg font-semibold">智能總部</div>
                    <div className="text-gray-300">台北市信義區科技大樓</div>
                  </div>
                </div>
                <div className="flex items-center text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <Bot className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <div className="text-lg font-semibold">LINE AI Bot</div>
                    <div className="text-gray-300">@yilfa_ai_bot</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-cyan-400" />
                <span>智能線上諮詢</span>
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="您的姓名"
                    className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="聯絡電話"
                    className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="電子信箱"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white">
                  <option className="bg-gray-800">🤖 AI智能集運</option>
                  <option className="bg-gray-800">🛒 智慧代購服務</option>
                  <option className="bg-gray-800">⚡ 5G快遞服務</option>
                  <option className="bg-gray-800">🔧 技術支援</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="請描述您的需求，AI將為您提供最佳解決方案"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <span>提交給AI處理</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">一路發集運網</span>
                  <div className="text-xs text-gray-400">AI-Powered Shipping</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                運用人工智能、5G、區塊鏈等前沿科技，為台灣客戶提供最智能的全球購物解決方案。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI智能服務</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><Cpu className="w-3 h-3" /><span>AI中國集運</span></a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><Bot className="w-3 h-3" /><span>智能日本集運</span></a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><Rocket className="w-3 h-3" /><span>5G韓國集運</span></a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><Cloud className="w-3 h-3" /><span>雲端美國集運</span></a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><Database className="w-3 h-3" /><span>區塊鏈德國集運</span></a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">智慧代購</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors">🤖 AI淘寶代購</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">🔍 智能天貓代購</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">🇯🇵 日本AI代購</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">🇰🇷 韓國智能代購</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">🇺🇸 美國雲端代購</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">智能聯絡</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>AI客服: 02-1234-5678</span></li>
                <li className="flex items-center space-x-2"><Mail className="w-4 h-4 text-blue-400" /><span>ai@yilfa.com.tw</span></li>
                <li className="flex items-center space-x-2"><Clock className="w-4 h-4 text-purple-400" /><span>AI服務: 24/7全年無休</span></li>
                <li className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span>台北市信義區科技大樓</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 一路發集運網 AI-Powered Shipping. 版權所有 | Powered by AI & 5G Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;