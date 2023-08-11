import React, { ReactElement } from 'react';
import { palette } from '@/theme.config';

const IcoMenuUnfold: React.FC<
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
          d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"
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
          d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"
          fill={props.palette || palette.bunker}
        ></path>
      </svg>
    )}
  </React.Fragment>
);

export default IcoMenuUnfold;
