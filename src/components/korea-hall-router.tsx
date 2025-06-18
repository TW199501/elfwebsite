import React from 'react';
import { useIsMobile } from '../hooks/use-is-mobile';
import KoreaHallDesktop from './desktop/korea-hall-desktop';
import KoreaHallMobile from './mobile/korea-hall-mobile';

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