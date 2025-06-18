import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import KoreaHallDesktop from './desktop/KoreaHallDesktop';
import KoreaHallMobile from './mobile/KoreaHallMobile';

interface KoreaHallRouterProps {
  onBack: () => void;
}

const KoreaHallRouter: React.FC<KoreaHallRouterProps> = ({ onBack }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <KoreaHallMobile onBack={onBack} />
  ) : (
    <KoreaHallDesktop onBack={onBack} />
  );
};

export default KoreaHallRouter;