import React from 'react';
import { useIsMobile } from '../hooks/use-is-mobile';
import RegisterPageDesktop from './desktop/register-page-desktop';
import RegisterPageMobile from './mobile/register-page-mobile';

interface RegisterPageRouterProps {
  onBack: () => void;
  onGoToLogin: () => void;
}

const RegisterPageRouter: React.FC<RegisterPageRouterProps> = ({ onBack, onGoToLogin }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <RegisterPageMobile onBack={onBack} onGoToLogin={onGoToLogin} />
  ) : (
    <RegisterPageDesktop onBack={onBack} onGoToLogin={onGoToLogin} />
  );
};

export default RegisterPageRouter;