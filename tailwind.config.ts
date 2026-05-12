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
        lime: {
          DEFAULT: '#C8FF00',
          dim:     '#B0E400',
          glow:    '#D6FF1A',
        },
        cobalt: {
          DEFAULT: '#1D4ED8',
          light:   '#2563EB',
        },
        charcoal: {
          DEFAULT: '#0F0F12',
          dark:    '#0A0A0C',
        },
        navy: {
          DEFAULT: '#0A0E1C',
          light:   '#0C1228',
        },
        cream: {
          DEFAULT: '#F7F6F2',
          fog:     '#EDECE8',
        },
        // Backward compat
        brand: {
          blue:   '#1D4ED8',
          indigo: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight:   '-0.025em',
      },
      animation: {
        'pulse-slow':   'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 8s ease-in-out infinite',
        'marquee':      'marquee 32s linear infinite',
        'pulse-lime':   'pulse-lime 2s ease-in-out infinite',
        'glow':         'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'pulse-lime': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.45' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,255,0,0.25)' },
          '50%':      { boxShadow: '0 0 40px rgba(200,255,0,0.5)' },
        },
      },
      boxShadow: {
        'lime':      '0 4px 24px rgba(200, 255, 0, 0.3)',
        'lime-lg':   '0 8px 40px rgba(200, 255, 0, 0.4)',
        'card':      '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover':'0 12px 40px rgba(0, 0, 0, 0.12)',
        'dark-card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        // Backward compat
        'glow-blue':   '0 0 40px rgba(37, 99, 235, 0.3)',
        'glow-indigo': '0 0 40px rgba(79, 70, 229, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
