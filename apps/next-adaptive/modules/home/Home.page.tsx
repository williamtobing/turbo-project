'use client';

import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { PageLoader } from '@/components/organisms';
import { Home as HomeBrowser } from './browser/Home.browser';
import { Home as HomeMobile } from './mobile/Home.mobile';

// TODO: add global wrapper to handle user agent
const HomePage: React.FC = () => {
  const [isWindowLoading, setIsWindowLoading] = useState(true);

  useEffect(() => setIsWindowLoading(false), []);

  if (isWindowLoading) return <PageLoader />;

  if (isBrowser) return <HomeBrowser />;
  if (isMobile) return <HomeMobile />;

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="font-bold italic">Device not detected</p>
    </div>
  );
};

export default HomePage;
