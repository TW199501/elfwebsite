import React from 'react';
import { useIsMobile } from '../hooks/use-is-mobile';
import HomePageDesktop from './desktop/home-page-desktop';
import HomePageMobile from './mobile/home-page-mobile';
import { PageType } from '../types';

interface HomePageRouterProps {
  onPageChange: (page: PageType) => void;
}

const HomePageRouter: React.FC<HomePageRouterProps> = ({ onPageChange }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HomePageMobile onPageChange={onPageChange} />
  ) : (
    <HomePageDesktop onPageChange={onPageChange} />
  );
};

export default HomePageRouter;