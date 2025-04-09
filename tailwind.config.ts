import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  scrollBehavior: ['responsive'],
  theme: {
    extend: {
      colors: {
        primary: '#0d1b25',
        secondary: '#01eaf9',
        third: '#36556D',
        fourth: '#112331'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      transitionDuration: {
        '4000': '4000ms',
        '5000': '5000ms'
      }
    },
    fontFamily: {
      sans: ['Brown', 'Arial', 'sans-serif']
    }
  },
  plugins: []
}
export default config
