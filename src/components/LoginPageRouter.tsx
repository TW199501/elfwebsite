import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import LoginPageDesktop from './desktop/LoginPageDesktop';
import LoginPageMobile from './mobile/LoginPageMobile';

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