import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Smartphone, 
  Shield, 
  Zap, 
  ArrowLeft,
  User,
  Calendar,
  MapPin,
  CheckCircle,
  Gift,
  Star,
  Crown,
  Sparkles,
  Rocket,
  Award
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface RegisterPageDesktopProps {
  onBack: () => void;
  onGoToLogin: () => void;
}

const RegisterPageDesktop: React.FC<RegisterPageDesktopProps> = ({ onBack, onGoToLogin }) => {
  const [step, setStep] = useState<'info' | 'verification' | 'success'>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    address: '',
    referralCode: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = '請輸入姓名';
    if (!formData.email.trim()) newErrors.email = '請輸入電子信箱';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = '請輸入有效的電子信箱';
    if (!formData.phone.trim()) newErrors.phone = '請輸入手機號碼';
    else if (!/^09\d{8}$/.test(formData.phone)) newErrors.phone = '請輸入有效的手機號碼';
    if (!formData.password) newErrors.password = '請輸入密碼';
    else if (formData.password.length < 8) newErrors.password = '密碼至少需要8個字元';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = '密碼確認不一致';
    if (!formData.address.trim()) newErrors.address = '請輸入地址';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('verification');
      setCountdown(60);
    }, 2000);
  };

  const handleVerification = () => {
    if (verificationCode.length !== 6) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  const resendCode = () => {
    setCountdown(60);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return 'from-red-500 to-red-600';
    if (passwordStrength <= 2) return 'from-orange-500 to-orange-600';
    if (passwordStrength <= 3) return 'from-yellow-500 to-yellow-600';
    if (passwordStrength <= 4) return 'from-blue-500 to-blue-600';
    return 'from-green-500 to-green-600';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return '弱';
    if (passwordStrength <= 2) return '普通';
    if (passwordStrength <= 3) return '中等';
    if (passwordStrength <= 4) return '強';
    return '非常強';
  };

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
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className={`flex items-center space-x-2 text-gray-500 hover:${colors.textColor} transition-colors duration-300`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回首頁</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${colors.primary} rounded-lg flex items-center justify-center`}>
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-lg font-bold bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                智能集運網
              </span>
              <div className="text-xs text-gray-500">AI智能註冊系統</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 -mt-20">
        <div className="w-full max-w-2xl">
          {/* Register Card */}
          <div className={`${colors.cardBg} backdrop-blur-md border-2 ${colors.borderColor} rounded-2xl p-8 shadow-2xl`}>
            {step === 'info' && (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.secondary} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
                    <Sparkles className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${colors.secondary} bg-clip-text text-transparent`}>
                      加入AI集運
                    </span>
                  </h1>
                  <p className="text-gray-500">開啟您的智能物流新體驗</p>
                </div>

                {/* Welcome Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className={`${colors.cardBg} border-2 ${colors.borderColor} rounded-lg p-4 text-center`}>
                    <Gift className={`w-8 h-8 mx-auto mb-2`} style={{ color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee' }} />
                    <div className={`text-sm font-medium ${colors.textColor}`}>新會員禮</div>
                    <div className="text-xs text-gray-500">NT$100運費券</div>
                  </div>
                  <div className={`${colors.cardBg} border-2 ${colors.borderColor} rounded-lg p-4 text-center`}>
                    <Star className={`w-8 h-8 mx-auto mb-2`} style={{ color: colors.textGradient.includes('orange') ? '#f97316' : '#3b82f6' }} />
                    <div className={`text-sm font-medium ${colors.textColor}`}>VIP服務</div>
                    <div className="text-xs text-gray-500">專屬客服</div>
                  </div>
                  <div className={`${colors.cardBg} border-2 ${colors.borderColor} rounded-lg p-4 text-center`}>
                    <Crown className={`w-8 h-8 mx-auto mb-2`} style={{ color: colors.textGradient.includes('orange') ? '#a855f7' : '#8b5cf6' }} />
                    <div className={`text-sm font-medium ${colors.textColor}`}>AI優先</div>
                    <div className="text-xs text-gray-500">智能推薦</div>
                  </div>
                </div>

                {/* Registration Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 姓名 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      姓名 *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="請輸入您的姓名"
                        className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 ${
                          errors.name ? 'border-red-500' : colors.borderColor
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* 電子信箱 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      電子信箱 *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="請輸入您的信箱"
                        className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 ${
                          errors.email ? 'border-red-500' : colors.borderColor
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* 手機號碼 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      手機號碼 *
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="09xxxxxxxx"
                        className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 ${
                          errors.phone ? 'border-red-500' : colors.borderColor
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* 生日 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      生日
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="date"
                        value={formData.birthday}
                        onChange={(e) => handleInputChange('birthday', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* 密碼 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      密碼 *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="至少8個字元"
                        className={`w-full pl-10 pr-12 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 ${
                          errors.password ? 'border-red-500' : colors.borderColor
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:${colors.textColor} transition-colors duration-300`}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-300 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${getPasswordStrengthColor()} transition-all duration-300`}
                              style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{getPasswordStrengthText()}</span>
                        </div>
                      </div>
                    )}
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                  </div>

                  {/* 確認密碼 */}
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      確認密碼 *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="再次輸入密碼"
                        className={`w-full pl-10 pr-12 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 ${
                          errors.confirmPassword ? 'border-red-500' : colors.borderColor
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:${colors.textColor} transition-colors duration-300`}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* 地址 */}
                <div className="mt-6">
                  <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                    收件地址 *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="請輸入完整收件地址"
                      rows={3}
                      className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300 resize-none ${
                        errors.address ? 'border-red-500' : colors.borderColor
                      }`}
                    />
                  </div>
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>

                {/* 推薦碼 */}
                <div className="mt-6">
                  <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                    推薦碼 (選填)
                  </label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={formData.referralCode}
                      onChange={(e) => handleInputChange('referralCode', e.target.value)}
                      placeholder="輸入推薦碼可獲得額外優惠"
                      className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* 服務條款 */}
                <div className="mt-6">
                  <label className="flex items-start space-x-3 text-sm text-gray-500">
                    <input 
                      type="checkbox" 
                      className="mt-1 rounded border-gray-500 bg-transparent text-orange-500 focus:ring-orange-500"
                    />
                    <span>
                      我已閱讀並同意
                      <a href="#" className={`hover:text-orange-400 transition-colors duration-300 mx-1`}
                        style={{ 
                          color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                        }}
                      >
                        服務條款
                      </a>
                      和
                      <a href="#" className={`hover:text-orange-400 transition-colors duration-300 mx-1`}
                        style={{ 
                          color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                        }}
                      >
                        隱私政策
                      </a>
                    </span>
                  </label>
                </div>

                {/* Register Button */}
                <button
                  onClick={handleRegister}
                  disabled={isLoading}
                  className={`w-full mt-6 bg-gradient-to-r ${colors.secondary} hover:${colors.secondary.replace('to-', 'hover:to-').replace('from-', 'hover:from-')} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>AI處理中...</span>
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5" />
                      <span>創建AI帳戶</span>
                    </>
                  )}
                </button>

                {/* Login Link */}
                <div className="text-center mt-6">
                  <span className="text-gray-500">已經有帳號了？</span>
                  <button 
                    onClick={onGoToLogin}
                    className={`hover:text-orange-400 transition-colors duration-300 ml-1`}
                    style={{ 
                      color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                    }}
                  >
                    立即登入
                  </button>
                </div>
              </>
            )}

            {/* Verification Step */}
            {step === 'verification' && (
              <>
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.accent} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${colors.accent} bg-clip-text text-transparent`}>
                      驗證手機號碼
                    </span>
                  </h1>
                  <p className="text-gray-500">
                    驗證碼已發送至 {formData.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1***$3')}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                      驗證碼
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="請輸入6位數驗證碼"
                      maxLength={6}
                      className={`w-full px-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 text-center text-2xl tracking-widest transition-all duration-300`}
                    />
                  </div>

                  <div className="text-center">
                    {countdown > 0 ? (
                      <span className="text-gray-500">重新發送驗證碼 ({countdown}s)</span>
                    ) : (
                      <button
                        onClick={resendCode}
                        className={`hover:text-orange-400 transition-colors duration-300`}
                        style={{ 
                          color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                        }}
                      >
                        重新發送驗證碼
                      </button>
                    )}
                  </div>

                  <button
                    onClick={handleVerification}
                    disabled={isLoading || verificationCode.length !== 6}
                    className={`w-full bg-gradient-to-r ${colors.accent} hover:${colors.accent.replace('to-', 'hover:to-').replace('from-', 'hover:from-')} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>驗證中...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>完成驗證</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}

            {/* Success Step */}
            {step === 'success' && (
              <>
                <div className="text-center">
                  <div className={`w-32 h-32 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                    <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                    <CheckCircle className="w-16 h-16 text-white relative z-10" />
                  </div>

                  <h1 className="text-4xl font-bold mb-4">
                    <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      歡迎加入！
                    </span>
                  </h1>
                  
                  <p className={`text-xl ${colors.textColor} mb-8`}>
                    🎉 恭喜您成功註冊智能集運網
                  </p>

                  {/* Welcome Benefits */}
                  <div className={`${colors.cardBg} border-2 ${colors.borderColor} rounded-xl p-6 mb-8`}>
                    <h3 className={`text-lg font-bold ${colors.textColor} mb-4 flex items-center justify-center space-x-2`}>
                      <Gift className={`w-5 h-5`} style={{ color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee' }} />
                      <span>新會員專屬禮遇</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <span className={colors.textColor}>NT$100 運費優惠券</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${colors.secondary} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <span className={colors.textColor}>VIP專屬客服</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${colors.accent} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <span className={colors.textColor}>AI智能推薦</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <span className={colors.textColor}>首次集運免手續費</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={onGoToLogin}
                      className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <Zap className="w-5 h-5" />
                      <span>立即登入開始使用</span>
                    </button>
                    
                    <button
                      onClick={onBack}
                      className={`w-full ${colors.cardBg} border-2 ${colors.borderColor} ${colors.textColor} py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-md`}
                    >
                      返回首頁
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>您的個人資料受到256位元加密技術保護</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPageDesktop;