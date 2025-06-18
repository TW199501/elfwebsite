import React, { useState } from 'react';
import { ThemeProvider } from './contexts/theme-context';
import { I18nProvider } from './contexts/i18n-context';
import { useI18n } from './contexts/i18n-context-utils';

import HomePageRouter from './components/home-page-router';
import KoreaHallRouter from './components/korea-hall-router';
import LoginPageRouter from './components/login-page-router';
import RegisterPageRouter from './components/register-page-router';
import LoadingScreen from './components/loading-screen';

const AppContent: React.FC = () => {
  // 只在 function 內呼叫 useI18n，避免 context 綁死
  const [currentPage, setCurrentPage] = useState<'home' | 'korea' | 'login' | 'register'>('home');
  const { isLoading } = useI18n();


  // 顯示載入畫面直到翻譯檔案載入完成
  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'korea':
        return <KoreaHallRouter onBack={() => setCurrentPage('home')} />;
      case 'login':
        return (
          <LoginPageRouter
            onBack={() => setCurrentPage('home')}
            onGoToRegister={() => setCurrentPage('register')}
          />
        );
      case 'register':
        return (
          <RegisterPageRouter
            onBack={() => setCurrentPage('home')}
            onGoToLogin={() => setCurrentPage('login')}
          />
        );
      default:
        return (
          <HomePageRouter
            onPageChange={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
};

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
