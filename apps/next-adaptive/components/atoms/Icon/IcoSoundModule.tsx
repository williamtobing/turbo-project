import React, { ReactElement } from 'react';
import { palette } from '@/theme.config';

const IcoSoundModule: React.FC<
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
          d="M21 18V21H19V18H17V16H23V18H21ZM5 18V21H3V18H1V16H7V18H5ZM11 6V3H13V6H15V8H9V6H11ZM11 10H13V21H11V10ZM3 14V3H5V14H3ZM19 14V3H21V14H19Z"
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
          d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"
          fill={props.palette ?? palette.bunker}
        ></path>
      </svg>
    )}
  </React.Fragment>
);

export default IcoSoundModule;
