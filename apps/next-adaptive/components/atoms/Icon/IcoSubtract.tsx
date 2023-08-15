import React, { ReactElement } from 'react';
import { palette } from '@/theme.config';

const IcoSubtract: React.FC<
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
          d="M5 11V13H19V11H5Z"
          fill={props.palette || palette.bunker}
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
          d="M19 11H5V13H19V11Z"
          fill={props.palette || palette.bunker}
        ></path>
      </svg>
    )}
  </React.Fragment>
);

export default IcoSubtract;
