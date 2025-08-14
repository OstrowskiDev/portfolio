import type { Config } from 'tailwindcss'

const {
  appColors,
} = require('./src/lib/tailwind/appColors')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...appColors,
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
    },
  },
  plugins: [],
}
export default config
