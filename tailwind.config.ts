import type { Config } from 'tailwindcss'

const { appColors } = require('./src/lib/tailwind/appColors')

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...appColors,
      },
    },
  },
  plugins: [],
}
export default config
