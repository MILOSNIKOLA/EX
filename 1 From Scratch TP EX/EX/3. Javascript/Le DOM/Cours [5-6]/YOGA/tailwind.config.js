/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Yoga app custom colors
        yoga: {
          bg: '#f8fafc',           // slate-50
          primary: '#059669',       // emerald-600
          'primary-dark': '#047857', // emerald-700
          secondary: '#f59e0b',     // amber-500
          text: '#1e293b',          // slate-800
          'text-light': '#64748b',  // slate-500
          breath: '#38bdf8',        // sky-400
          'breath-light': '#e0f2fe', // sky-100
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        'display-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
      animation: {
        'breath-inhale': 'breathInhale 4s ease-in-out',
        'breath-exhale': 'breathExhale 6s ease-in-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        breathInhale: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.2)', opacity: '1' },
        },
        breathExhale: {
          '0%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0.6' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
