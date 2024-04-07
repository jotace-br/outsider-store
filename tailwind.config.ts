import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        preta: '#000',
        azul: '#33405b',
        cinza: '#5f666e',
        branca: '#fff',
        noriGreen: '#525041',
        mescla: '#696969',
        carmenere: '#572531',
        offWhite: '#f1f4e0',
        grayMint: '#dee9ce',
        tobacco: '#765123',
        brightRed: '#f2003d',
        blueFog: '#879ba3',
      },
    },
  },
  plugins: [],
};
export default config;
