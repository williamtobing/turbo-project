import type { Config } from 'tailwindcss';
import { palette } from './theme.config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...palette },
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        ubuntu: "'Ubuntu', sans-serif",
      },
      animation: {
        'spin-2s': 'spin 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      filter: ['hover', 'focus'],
    },
  },
  plugins: [],
};
export default config;
