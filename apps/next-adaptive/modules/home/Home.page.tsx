'use client';

import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { Home as HomeBrowser } from './browser/Home.browser';
import { Home as HomeMobile } from './mobile/Home.mobile';

const HomePage: React.FC = () => {
  const [isWindowloading, setIsWindowloading] = useState(true);

  useEffect(() => setIsWindowloading(false), []);

  if (isWindowloading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="animate-pulse font-bold italic">Loading&hellip;</p>
      </div>
    );

  if (isBrowser) return <HomeBrowser />;
  if (isMobile) return <HomeMobile />;

  return <p>Device not detected</p>;
};

export default HomePage;
