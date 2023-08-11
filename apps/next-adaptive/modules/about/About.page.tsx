'use client';

import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { PageLoader } from '@/components/organisms';
import { About as AboutBrowser } from './browser/About.browser';
import { About as AboutMobile } from './mobile/About.mobile';

// TODO: add global wrapper to handle user agent
const AboutPage: React.FC = () => {
  const [isWindowLoading, setIsWindowLoading] = useState(true);

  useEffect(() => setIsWindowLoading(false), []);

  if (isWindowLoading) return <PageLoader />;

  if (isBrowser) return <AboutBrowser />;
  if (isMobile) return <AboutMobile />;

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <p className="font-bold italic">Device not detected</p>
    </div>
  );
};

export default AboutPage;
