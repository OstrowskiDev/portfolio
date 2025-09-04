import type { Config } from 'tailwindcss'

const { appColors } = require('./src/lib/tailwind/appColors')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...appColors,
      },
      screens: {
        xs: '420px',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      keyframes: {
        // przesunięcie okna maski w poziomie
        'mask-move-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        // 2s, liniowo, zatrzymaj na końcu (forwards)
        'mask-move': 'mask-move-x 1s linear forwards',
      },
      dropShadow: {
        strong: [
          '0 0 5px rgba(0,0,0,1)',
          '0 0 10px rgba(0,0,0,0.9)',
          '0 0 20px rgba(0,0,0,0.9)',
          '0 0 30px rgba(0,0,0,0.9)',
        ],
      },
    },
  },
  plugins: [],
}
export default config
