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
      fontFamily: { sans: ['var(--font-plus-jakarta-sans)'] },
      animation: { 'spin-2s': 'spin 2s linear infinite' },
      boxShadow: {
        'neu-pureWhite-4': `4px 4px 0px ${palette.pureWhite}`,
        'neu-myWhite-4': `4px 4px 0px ${palette.myWhite}`,
        'neu-grayChateau-4': `4px 4px 0px ${palette.grayChateau}`,
        'neu-brightGray-4': `4px 4px 0px ${palette.brightGray}`,
        'neu-darkGunmetal-4': `4px 4px 0px ${palette.darkGunmetal}`,
        'neu-mirage-4': `4px 4px 0px ${palette.mirage}`,
        'neu-bunker-4': `4px 4px 0px ${palette.bunker}`,
        'neu-portage-4': `4px 4px 0px ${palette.portage}`,
        'neu-dullLavender-4': `4px 4px 0px ${palette.dullLavender}`,
        'neu-daisyBush-4': `4px 4px 0px ${palette.daisyBush}`,
        'neu-chalky-4': `4px 4px 0px ${palette.chalky}`,
        'neu-skyBlue-4': `4px 4px 0px ${palette.skyBlue}`,

        'neu-pureWhite-5': `5px 5px 0px ${palette.pureWhite}`,
        'neu-myWhite-5': `5px 5px 0px ${palette.myWhite}`,
        'neu-grayChateau-5': `5px 5px 0px ${palette.grayChateau}`,
        'neu-brightGray-5': `5px 5px 0px ${palette.brightGray}`,
        'neu-darkGunmetal-5': `5px 5px 0px ${palette.darkGunmetal}`,
        'neu-mirage-5': `5px 5px 0px ${palette.mirage}`,
        'neu-bunker-5': `5px 5px 0px ${palette.bunker}`,
        'neu-portage-5': `5px 5px 0px ${palette.portage}`,
        'neu-dullLavender-5': `5px 5px 0px ${palette.dullLavender}`,
        'neu-daisyBush-5': `5px 5px 0px ${palette.daisyBush}`,
        'neu-chalky-5': `5px 5px 0px ${palette.chalky}`,
        'neu-skyBlue-5': `5px 5px 0px ${palette.skyBlue}`,

        'neu-pureWhite-6': `6px 6px 0px ${palette.pureWhite}`,
        'neu-myWhite-6': `6px 6px 0px ${palette.myWhite}`,
        'neu-grayChateau-6': `6px 6px 0px ${palette.grayChateau}`,
        'neu-brightGray-6': `6px 6px 0px ${palette.brightGray}`,
        'neu-darkGunmetal-6': `6px 6px 0px ${palette.darkGunmetal}`,
        'neu-mirage-6': `6px 6px 0px ${palette.mirage}`,
        'neu-bunker-6': `6px 6px 0px ${palette.bunker}`,
        'neu-portage-6': `6px 6px 0px ${palette.portage}`,
        'neu-dullLavender-6': `6px 6px 0px ${palette.dullLavender}`,
        'neu-daisyBush-6': `6px 6px 0px ${palette.daisyBush}`,
        'neu-chalky-6': `6px 6px 0px ${palette.chalky}`,
        'neu-skyBlue-6': `6px 6px 0px ${palette.skyBlue}`,
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
