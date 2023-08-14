import React, { ReactElement } from 'react';
import { palette } from '@/theme.config';

const Folder: React.FC<
  { isHighlighted: boolean } & React.SVGProps<SVGSVGElement>
> = ({ isHighlighted, ...props }): ReactElement => (
  <svg
    width="137"
    height="99"
    viewBox="0 0 137 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Vector">
      <path
        d="M0 14.4878H122.729C130.611 14.4878 137 19.8931 137 26.561V86.9268C137 93.5947 130.611 99 122.729 99H68.5H14.2708C6.38927 99 0 93.5947 0 86.9268V14.4878Z"
        fill={isHighlighted ? palette.daisyBush : palette.brightGray}
      />
      <path
        d="M0 32.5976V82.0976C0 88.7654 6.38927 94.1707 14.2708 94.1707H122.729C130.611 94.1707 137 88.7654 137 82.0976V31.3902C137 24.7224 130.611 19.3171 122.729 19.3171H62.7917V25.3537C62.7917 29.3544 58.9581 32.5976 54.2292 32.5976H0Z"
        fill={`url(#${isHighlighted ? 'highlight' : 'normal'}_linear)`}
      />
      <path
        d="M0 9.65854C0 4.32427 5.11142 0 11.4167 0H51.375C57.6803 0 62.7917 4.32427 62.7917 9.65854V14.4878H0V9.65854Z"
        fill={isHighlighted ? palette.daisyBush : palette.brightGray}
      />
    </g>
    <defs>
      <linearGradient
        id={`${isHighlighted ? 'highlight' : 'normal'}_linear`}
        x1="0"
        y1="0"
        x2="164.002"
        y2="116.153"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor={isHighlighted ? palette.dullLavender : palette.grayChateau}
        />
        <stop
          offset="1"
          stopColor={isHighlighted ? palette.daisyBush : palette.brightGray}
        />
      </linearGradient>
    </defs>
  </svg>
);

export default Folder;
