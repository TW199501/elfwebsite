import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import HomePageDesktop from './desktop/HomePageDesktop';
import HomePageMobile from './mobile/HomePageMobile';
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