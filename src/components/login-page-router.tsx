import React from 'react';
import { useIsMobile } from '../hooks/use-is-mobile';
import LoginPageDesktop from './desktop/login-page-desktop';
import LoginPageMobile from './mobile/login-page-mobile';

interface LoginPageRouterProps {
  onBack: () => void;
  onGoToRegister: () => void;
}

const LoginPageRouter: React.FC<LoginPageRouterProps> = ({ onBack, onGoToRegister }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <LoginPageMobile onBack={onBack} onGoToRegister={onGoToRegister} />
  ) : (
    <LoginPageDesktop onBack={onBack} onGoToRegister={onGoToRegister} />
  );
};

export default LoginPageRouter;