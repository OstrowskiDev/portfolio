import type { Config } from 'tailwindcss'

const { appColors } = require('./src/lib/tailwind/appColors')

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
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
