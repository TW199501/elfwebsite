import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider, useI18n } from './contexts/I18nContext';
import HomePageRouter from './components/HomePageRouter';
import KoreaHallRouter from './components/KoreaHallRouter';
import LoginPageRouter from './components/LoginPageRouter';
import RegisterPageRouter from './components/RegisterPageRouter';
import LoadingScreen from './components/LoadingScreen';

const AppContent: React.FC = () => {
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