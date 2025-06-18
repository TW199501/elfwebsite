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
  Bot,
  Fingerprint,
  Scan,
  QrCode,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface LoginPageDesktopProps {
  onBack: () => void;
  onGoToRegister: () => void;
}

const LoginPageDesktop: React.FC<LoginPageDesktopProps> = ({ onBack, onGoToRegister }) => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone' | 'biometric'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'login' | 'verification' | 'biometric'>('login');
  const [countdown, setCountdown] = useState(0);
  const [biometricStatus, setBiometricStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (loginMethod === 'phone') {
        setStep('verification');
        setCountdown(60);
      } else if (loginMethod === 'biometric') {
        setStep('biometric');
        handleBiometricScan();
      } else {
        console.log('Login successful');
      }
    }, 2000);
  };

  const handleBiometricScan = () => {
    setBiometricStatus('scanning');
    setTimeout(() => {
      setBiometricStatus('success');
      setTimeout(() => {
        console.log('Biometric login successful');
      }, 1000);
    }, 3000);
  };

  const handleVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Verification successful');
    }, 1500);
  };

  const resendCode = () => {
    setCountdown(60);
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
              <div className="text-xs text-gray-500">AI智能登入系統</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 -mt-20">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className={`${colors.cardBg} backdrop-blur-md border-2 ${colors.borderColor} rounded-2xl p-8 shadow-2xl`}>
            {step === 'login' && (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
                    <Bot className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className={`bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent`}>
                      AI智能登入
                    </span>
                  </h1>
                  <p className="text-gray-500">啟動您的專屬AI集運服務</p>
                </div>

                {/* Login Method Tabs */}
                <div className={`flex space-x-1 mb-6 ${colors.cardBg} rounded-lg p-1 border ${colors.borderColor}`}>
                  <button
                    onClick={() => setLoginMethod('email')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 ${
                      loginMethod === 'email' 
                        ? `bg-gradient-to-r ${colors.gradient} text-white` 
                        : `text-gray-500 hover:${colors.textColor}`
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">信箱</span>
                  </button>
                  <button
                    onClick={() => setLoginMethod('phone')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 ${
                      loginMethod === 'phone' 
                        ? `bg-gradient-to-r ${colors.gradient} text-white` 
                        : `text-gray-500 hover:${colors.textColor}`
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="text-sm">手機</span>
                  </button>
                  <button
                    onClick={() => setLoginMethod('biometric')}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 ${
                      loginMethod === 'biometric' 
                        ? `bg-gradient-to-r ${colors.gradient} text-white` 
                        : `text-gray-500 hover:${colors.textColor}`
                    }`}
                  >
                    <Fingerprint className="w-4 h-4" />
                    <span className="text-sm">生物</span>
                  </button>
                </div>

                {/* Email Login Form */}
                {loginMethod === 'email' && (
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                        電子信箱
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="請輸入您的信箱"
                          className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                        密碼
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="請輸入您的密碼"
                          className={`w-full pl-10 pr-12 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:${colors.textColor} transition-colors duration-300`}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Phone Login Form */}
                {loginMethod === 'phone' && (
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${colors.textColor} mb-2`}>
                        手機號碼
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="請輸入您的手機號碼"
                          className={`w-full pl-10 pr-4 py-3 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${colors.textColor} placeholder-gray-500 transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Biometric Login */}
                {loginMethod === 'biometric' && (
                  <div className="text-center py-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${colors.secondary} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
                      <Fingerprint className="w-12 h-12 text-white relative z-10" />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.textColor} mb-2`}>生物識別登入</h3>
                    <p className="text-gray-500 mb-6">使用指紋或面部識別快速登入</p>
                  </div>
                )}

                {/* Additional Options */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <label className="flex items-center space-x-2 text-gray-500">
                    <input type="checkbox" className="rounded border-gray-500 bg-transparent text-orange-500 focus:ring-orange-500" />
                    <span>記住我</span>
                  </label>
                  <a href="#" className={`hover:text-orange-400 transition-colors duration-300`}
                    style={{ 
                      color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                    }}
                  >
                    忘記密碼？
                  </a>
                </div>

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r ${colors.gradient} hover:${colors.gradientHover} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>AI驗證中...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>啟動AI集運</span>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className={`flex-1 border-t ${colors.borderColor}`}></div>
                  <span className="px-4 text-gray-500 text-sm">或</span>
                  <div className={`flex-1 border-t ${colors.borderColor}`}></div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button className={`flex items-center justify-center space-x-2 py-3 px-4 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg hover:shadow-md transition-all duration-300`}>
                    <QrCode className="w-5 h-5 text-green-400" />
                    <span className="text-sm">LINE登入</span>
                  </button>
                  <button className={`flex items-center justify-center space-x-2 py-3 px-4 ${colors.cardBg} border-2 ${colors.borderColor} rounded-lg hover:shadow-md transition-all duration-300`}>
                    <Shield className={`w-5 h-5`} style={{ color: colors.textGradient.includes('orange') ? '#f97316' : '#3b82f6' }} />
                    <span className="text-sm">Google</span>
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-center mt-6">
                  <span className="text-gray-500">還沒有帳號？</span>
                  <button 
                    onClick={onGoToRegister}
                    className={`hover:text-orange-400 transition-colors duration-300 ml-1`}
                    style={{ 
                      color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                    }}
                  >
                    立即註冊
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
                      簡訊驗證
                    </span>
                  </h1>
                  <p className="text-gray-500">
                    驗證碼已發送至 {phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1***$3')}
                  </p>
                </div>

                <div className="space-y-4">
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
                        <span>確認驗證</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}

            {/* Biometric Step */}
            {step === 'biometric' && (
              <>
                <div className="text-center">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 relative transition-all duration-500 ${
                    biometricStatus === 'scanning' 
                      ? `bg-gradient-to-br ${colors.secondary} animate-pulse` 
                      : biometricStatus === 'success'
                      ? `bg-gradient-to-br ${colors.accent}`
                      : biometricStatus === 'error'
                      ? 'bg-gradient-to-br from-red-500 to-pink-600'
                      : `bg-gradient-to-br ${colors.secondary}`
                  }`}>
                    {biometricStatus === 'scanning' && (
                      <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                    )}
                    {biometricStatus === 'success' ? (
                      <CheckCircle className="w-16 h-16 text-white" />
                    ) : biometricStatus === 'error' ? (
                      <AlertCircle className="w-16 h-16 text-white" />
                    ) : (
                      <Scan className="w-16 h-16 text-white" />
                    )}
                  </div>

                  <h1 className="text-3xl font-bold mb-2">
                    <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                      biometricStatus === 'success' 
                        ? colors.accent
                        : biometricStatus === 'error'
                        ? 'from-red-400 to-pink-400'
                        : colors.secondary
                    }`}>
                      {biometricStatus === 'scanning' 
                        ? 'AI掃描中...' 
                        : biometricStatus === 'success'
                        ? '驗證成功！'
                        : biometricStatus === 'error'
                        ? '驗證失敗'
                        : '生物識別驗證'
                      }
                    </span>
                  </h1>
                  
                  <p className="text-gray-500 mb-8">
                    {biometricStatus === 'scanning' 
                      ? 'AI正在分析您的生物特徵...' 
                      : biometricStatus === 'success'
                      ? '歡迎回來！正在為您啟動AI集運服務'
                      : biometricStatus === 'error'
                      ? '請重新嘗試或選擇其他登入方式'
                      : '請將手指放在感應器上或看向攝像頭'
                    }
                  </p>

                  {biometricStatus === 'idle' && (
                    <button
                      onClick={handleBiometricScan}
                      className={`bg-gradient-to-r ${colors.secondary} hover:${colors.secondary.replace('to-', 'hover:to-').replace('from-', 'hover:from-')} text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                      開始掃描
                    </button>
                  )}

                  {biometricStatus === 'error' && (
                    <div className="space-y-3">
                      <button
                        onClick={handleBiometricScan}
                        className={`bg-gradient-to-r ${colors.secondary} hover:${colors.secondary.replace('to-', 'hover:to-').replace('from-', 'hover:from-')} text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                      >
                        重新掃描
                      </button>
                      <button
                        onClick={() => setStep('login')}
                        className={`block mx-auto hover:text-orange-400 transition-colors duration-300`}
                        style={{ 
                          color: colors.textGradient.includes('orange') ? '#fb923c' : '#22d3ee'
                        }}
                      >
                        返回其他登入方式
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>採用256位元加密技術保護您的資料安全</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageDesktop;