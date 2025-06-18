import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import RegisterPageDesktop from './desktop/RegisterPageDesktop';
import RegisterPageMobile from './mobile/RegisterPageMobile';

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