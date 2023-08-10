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
      animation: { 'spin-2s': 'spin 2s linear infinite' },
      boxShadow: {
        // TODO: complete this
        'neu-bunker-5': `5px 5px 0px ${palette.bunker}`,
        'neu-daisyBush-5': `5px 5px 0px ${palette.daisyBush}`,
        'neu-chalky-5': `5px 5px 0px ${palette.chalky}`,

        'neu-chalky-4': `4px 4px 0px ${palette.chalky}`,
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
