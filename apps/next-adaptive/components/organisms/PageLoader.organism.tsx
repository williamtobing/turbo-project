import React from 'react';
import { Icon } from '@/components/atoms';
import { palette } from '@/theme.config';

const PageLoader: React.FC = () => (
  <React.Fragment>
    <div className="bg-myWhite flex h-[100dvh] items-center justify-center">
      <div className="flex animate-pulse space-x-2 font-bold italic">
        <Icon.IcoReact
          className="animate-spin-2s h-10 w-10"
          palette={palette.bunker}
          variant="line"
        />
        <Icon.IcoReact
          className="animate-spin-2s h-10 w-10"
          palette={palette.daisyBush}
          variant="line"
        />
        <Icon.IcoReact
          className="animate-spin-2s h-10 w-10"
          palette={palette.chalky}
          variant="line"
        />
        <Icon.IcoReact
          className="animate-spin-2s h-10 w-10"
          palette={palette.skyBlue}
          variant="line"
        />
      </div>
    </div>
  </React.Fragment>
);

export default PageLoader;
