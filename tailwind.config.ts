import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gym-purple':       '#7B2FBE',
        'gym-purple-dark':  '#6B21A8',
        'gym-purple-light': '#C4B5FD',
        'gym-yellow':       '#F5C518',
        'gym-dark':         '#0A0A0A',
        'gym-gray':         '#0E0E0E',
        'gym-footer':       '#C8C0E8',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
