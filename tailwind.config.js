/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluecolor: "#0284c7",
        cyber: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          neon: '#00f2fe',
        },
        ai: {
          purple: '#8b5cf6',
          violet: '#a855f7',
          cyan: '#06b6d4',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#050814',
          card: '#0a0f24',
          surface: '#111936',
          border: '#1e294f',
        },
        html: "#E54C21",
        css: "#264DE4",
        js: "#CFB433",
        react: "#00D5F7",
        node: "#87bf00",
        bootstrap: '#8913ff'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'radar': 'radar 3s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}