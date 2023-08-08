import React from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { Icon } from '@/components/atoms';
import { palette } from '@/theme.config';

const PageLoader: React.FC = () => {
  if (isBrowser)
    return (
      <React.Fragment>
        <div className="flex h-screen items-center justify-center">
          <div className="flex animate-pulse space-x-2 font-bold italic">
            <Icon.IcoReact
              className="animate-spin-2s h-10 w-10"
              palette={palette.bunker}
            />
            <Icon.IcoReact
              className="animate-spin-2s h-10 w-10"
              palette={palette.daisyBush}
            />
            <Icon.IcoReact
              className="animate-spin-2s h-10 w-10"
              palette={palette.chalky}
            />
            <Icon.IcoReact
              className="animate-spin-2s h-10 w-10"
              palette={palette.skyBlue}
            />
          </div>
        </div>
      </React.Fragment>
    );

  if (isMobile)
    return (
      <React.Fragment>
        <div className="flex h-screen items-center justify-center">
          <div className="flex animate-pulse space-x-2 font-bold italic">
            <Icon.IcoReact
              className="h-10 w-10 animate-bounce"
              palette={palette.bunker}
            />
            <Icon.IcoReact
              className="h-10 w-10 animate-bounce"
              palette={palette.daisyBush}
            />
            <Icon.IcoReact
              className="h-10 w-10 animate-bounce"
              palette={palette.chalky}
            />
            <Icon.IcoReact
              className="h-10 w-10 animate-bounce"
              palette={palette.skyBlue}
            />
          </div>
        </div>
      </React.Fragment>
    );
};

export default PageLoader;
