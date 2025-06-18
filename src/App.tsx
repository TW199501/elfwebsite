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
    <div className="min-h-screen overflow-x-hidden text-white bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bg-blue-500 rounded-full top-1/4 left-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute delay-1000 bg-purple-500 rounded-full top-3/4 right-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bg-pink-500 rounded-full bottom-1/4 left-1/2 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <Cpu className="relative z-10 text-white w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  一路發集運網
                </span>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Zap className="w-3 h-3" />
                  <span>AI-Powered Shipping</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-8">
                {['首頁', 'AI集運', '智慧代購', '科技追蹤', '大數據分析', '聯絡我們'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:text-cyan-400 hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="items-center hidden space-x-4 md:flex">
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
          <div className="border-t border-gray-800 md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['首頁', 'AI集運', '智慧代購', '科技追蹤', '大數據分析', '聯絡我們'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-cyan-400"
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
      <section id="首頁" className="relative flex items-center justify-center min-h-screen pb-40">
        <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-2 mb-6 space-x-2 border rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-cyan-500/30">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">AI驅動的智能物流</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-6xl font-bold md:text-8xl">
            <span className="text-4xl text-white md:text-5xl">智能集運網</span>
          </h1>
          
          <p className="mb-4 text-xl text-gray-300 md:text-2xl">
            🤖 AI智能 • 🚀 5G追蹤 • 🔗 區塊鏈安全 • ☁️ 雲端大數據
          </p>
          <p className="mb-8 text-lg text-gray-400 md:text-xl">
            上海 • 深圳 • 日本 • 韓國 • 美國 • 德國 ➜ 台灣
          </p>
          
          <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
            <button className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105">
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              <span>啟動AI集運</span>
            </button>
            <button className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
              <Bot className="w-5 h-5" />
              <span>智慧代購</span>
            </button>
          </div>

          {/* Tech Stats */}
          <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
            <div className="p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">AI準確率</div>
            </div>
            <div className="p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
              <div className="text-2xl font-bold text-blue-400">5G</div>
              <div className="text-sm text-gray-400">實時追蹤</div>
            </div>
            <div className="p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">AI客服</div>
            </div>
            <div className="p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
              <div className="text-2xl font-bold text-pink-400">50萬+</div>
              <div className="text-sm text-gray-400">智能配送</div>
            </div>
          </div>
        </div>

        {/* Smart Tracking Bar */}
        <div className="absolute w-full max-w-3xl px-4 mx-auto transform -translate-x-1/2 bottom-20 left-1/2">
          <div className="p-6 border border-gray-700 shadow-2xl bg-black/40 backdrop-blur-md rounded-2xl">
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
                className="flex-1 px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg outline-none bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button 
                onClick={handleTracking}
                disabled={isTracking}
                className="flex items-center px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50"
              >
                {isTracking ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
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
      <section className="relative z-10 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                核心科技
              </span>
            </h2>
            <p className="text-xl text-gray-400">運用最新科技革新物流體驗</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 transform border group bg-white/5 backdrop-blur-sm border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="AI集運" className="relative z-10 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                智能服務
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-400">
              AI驅動的全方位物流解決方案
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
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
                      <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="px-3 py-1 border rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                        <span className="text-xs font-medium text-purple-400">{service.tech}</span>
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white">{service.name}</h3>
                    <p className="mb-6 text-gray-400">{service.description}</p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">{service.price}</span>
                      <button className="px-4 py-2 text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105">
                        啟動服務
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Smart Shipping Routes */}
          <div className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
            <h3 className="mb-8 text-3xl font-bold text-center">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                智能集運路線
              </span>
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shippingRoutes.map((route, index) => (
                <div key={index} className="relative p-6 transition-all duration-300 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 group">
                  {route.popular && (
                    <div className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse">
                      🔥 熱門
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <span className="mr-3 text-3xl">{route.flag}</span>
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
                      <span className="font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">{route.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">科技:</span>
                      <span className="text-sm text-green-400">{route.tech}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">追蹤:</span>
                      <span className="text-sm text-purple-400">{route.tracking}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 mt-4 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group-hover:scale-105">
                    選擇智能路線
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative z-10 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                科技優勢
              </span>
            </h2>
            <p className="text-xl text-gray-400">領先業界的智能物流技術</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="text-center transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${advantage.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text group-hover:scale-110">6+</div>
              <div className="text-gray-300">AI服務國家</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text group-hover:scale-110">50萬+</div>
              <div className="text-gray-300">智能集運</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text group-hover:scale-110">99.9%</div>
              <div className="text-gray-300">AI準確率</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text group-hover:scale-110">24/7</div>
              <div className="text-gray-300">智能客服</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Calculator */}
      <section id="科技追蹤" className="relative z-10 py-20">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  AI智能運費計算器
                </span>
              </h2>
              <p className="text-gray-400">人工智能即時計算最優惠運費</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="flex items-center block mb-2 space-x-2 text-sm font-medium text-gray-300">
                  <Globe className="w-4 h-4" />
                  <span>寄送國家</span>
                </label>
                <select className="w-full px-4 py-3 text-white border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option className="bg-gray-800">🇨🇳 中國 - 上海 (AI優化)</option>
                  <option className="bg-gray-800">🇨🇳 中國 - 深圳 (5G追蹤)</option>
                  <option className="bg-gray-800">🇯🇵 日本 (智能清關)</option>
                  <option className="bg-gray-800">🇰🇷 韓國 (區塊鏈)</option>
                  <option className="bg-gray-800">🇺🇸 美國 (預測配送)</option>
                  <option className="bg-gray-800">🇩🇪 德國 (RFID追蹤)</option>
                </select>
              </div>
              <div>
                <label className="flex items-center block mb-2 space-x-2 text-sm font-medium text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>收件地區</span>
                </label>
                <select className="w-full px-4 py-3 text-white border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
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
                <label className="flex items-center block mb-2 space-x-2 text-sm font-medium text-gray-300">
                  <Package className="w-4 h-4" />
                  <span>重量 (公斤)</span>
                </label>
                <input 
                  type="number" 
                  placeholder="AI將自動優化包裝"
                  className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="flex items-center block mb-2 space-x-2 text-sm font-medium text-gray-300">
                  <Rocket className="w-4 h-4" />
                  <span>智能服務</span>
                </label>
                <select className="w-full px-4 py-3 text-white border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option className="bg-gray-800">🤖 AI智能集運</option>
                  <option className="bg-gray-800">⚡ 5G快速集運</option>
                  <option className="bg-gray-800">🛒 智慧代購服務</option>
                </select>
              </div>
            </div>
            
            <button className="flex items-center justify-center w-full py-4 mt-6 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105">
              <Cpu className="w-5 h-5" />
              <span>AI智能計算運費</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                客戶科技體驗
              </span>
            </h2>
            <p className="text-xl text-gray-400">聽聽客戶對我們AI服務的評價</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 transition-all duration-300 border bg-white/5 backdrop-blur-sm border-white/10 rounded-xl hover:bg-white/10 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-300">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 border rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30">
                    <div className="text-xs font-medium text-cyan-400">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="聯絡我們" className="relative z-10 py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  智能客服中心
                </span>
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                AI客服24/7為您服務，解答集運代購相關問題
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 text-white border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
                  <Phone className="w-6 h-6 mr-4 text-cyan-400" />
                  <div>
                    <div className="text-lg font-semibold">AI智能客服</div>
                    <div className="text-gray-300">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center p-4 text-white border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
                  <Mail className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <div className="text-lg font-semibold">智能信箱</div>
                    <div className="text-gray-300">ai@yilfa.com.tw</div>
                  </div>
                </div>
                <div className="flex items-center p-4 text-white border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
                  <MapPin className="w-6 h-6 mr-4 text-purple-400" />
                  <div>
                    <div className="text-lg font-semibold">智能總部</div>
                    <div className="text-gray-300">台北市信義區科技大樓</div>
                  </div>
                </div>
                <div className="flex items-center p-4 text-white border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
                  <Bot className="w-6 h-6 mr-4 text-green-400" />
                  <div>
                    <div className="text-lg font-semibold">LINE AI Bot</div>
                    <div className="text-gray-300">@yilfa_ai_bot</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-white">
                <Smartphone className="w-6 h-6 text-cyan-400" />
                <span>智能線上諮詢</span>
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="您的姓名"
                    className="px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="聯絡電話"
                    className="px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="電子信箱"
                  className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 text-white border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option className="bg-gray-800">🤖 AI智能集運</option>
                  <option className="bg-gray-800">🛒 智慧代購服務</option>
                  <option className="bg-gray-800">⚡ 5G快遞服務</option>
                  <option className="bg-gray-800">🔧 技術支援</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="請描述您的需求，AI將為您提供最佳解決方案"
                  className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                ></textarea>
                <button className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105">
                  <Bot className="w-5 h-5" />
                  <span>提交給AI處理</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-white border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">一路發集運網</span>
                  <div className="text-xs text-gray-400">AI-Powered Shipping</div>
                </div>
              </div>
              <p className="mb-4 text-gray-300">
                運用人工智能、5G、區塊鏈等前沿科技，為台灣客戶提供最智能的全球購物解決方案。
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-cyan-400">AI智能服務</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="flex items-center space-x-2 transition-colors hover:text-cyan-400"><Cpu className="w-3 h-3" /><span>AI中國集運</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 transition-colors hover:text-cyan-400"><Bot className="w-3 h-3" /><span>智能日本集運</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 transition-colors hover:text-cyan-400"><Rocket className="w-3 h-3" /><span>5G韓國集運</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 transition-colors hover:text-cyan-400"><Cloud className="w-3 h-3" /><span>雲端美國集運</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 transition-colors hover:text-cyan-400"><Database className="w-3 h-3" /><span>區塊鏈德國集運</span></a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-purple-400">智慧代購</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="transition-colors hover:text-purple-400">🤖 AI淘寶代購</a></li>
                <li><a href="#" className="transition-colors hover:text-purple-400">🔍 智能天貓代購</a></li>
                <li><a href="#" className="transition-colors hover:text-purple-400">🇯🇵 日本AI代購</a></li>
                <li><a href="#" className="transition-colors hover:text-purple-400">🇰🇷 韓國智能代購</a></li>
                <li><a href="#" className="transition-colors hover:text-purple-400">🇺🇸 美國雲端代購</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-green-400">智能聯絡</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>AI客服: 02-1234-5678</span></li>
                <li className="flex items-center space-x-2"><Mail className="w-4 h-4 text-blue-400" /><span>ai@yilfa.com.tw</span></li>
                <li className="flex items-center space-x-2"><Clock className="w-4 h-4 text-purple-400" /><span>AI服務: 24/7全年無休</span></li>
                <li className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span>台北市信義區科技大樓</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-12 text-center text-gray-300 border-t border-gray-700">
            <p>&copy; 2025 一路發集運網 AI-Powered Shipping. 版權所有 | Powered by AI & 5G Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;