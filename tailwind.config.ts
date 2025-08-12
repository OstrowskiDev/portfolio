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
    },
  },
  plugins: [],
}
export default config
