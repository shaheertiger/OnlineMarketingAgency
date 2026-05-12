import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060B18',
          light:   '#0B1120',
          surface: '#0F172A',
        },
        brand: {
          blue:   '#2563EB',
          indigo: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':    'linear-gradient(135deg, #060B18 0%, #0B1528 50%, #060B18 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 8s ease-in-out infinite',
        'glow':       'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37,99,235,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(37,99,235,0.6)' },
        },
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(37, 99, 235, 0.3)',
        'glow-indigo': '0 0 40px rgba(79, 70, 229, 0.3)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover':  '0 12px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(96,165,250,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
