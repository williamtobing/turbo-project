import React, { ReactElement } from 'react';
import { palette } from '@/theme.config';

const IcoCodeSSlash: React.FC<
  { palette?: string; variant: 'line' | 'fill' } & React.SVGProps<SVGSVGElement>
> = (props): ReactElement => (
  <React.Fragment>
    {props.variant === 'line' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        {...props}
      >
        <path
          d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"
          fill={props.palette ?? palette.bunker}
        ></path>
      </svg>
    )}

    {props.variant === 'fill' && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        {...props}
      >
        <path
          d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"
          fill={props.palette ?? palette.bunker}
        ></path>
      </svg>
    )}
  </React.Fragment>
);

export default IcoCodeSSlash;
