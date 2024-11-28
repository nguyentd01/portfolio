/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      screens: {
        'xs': '320px',
        'sm': '428px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8vw, 1rem)',
        'fluid-base': 'clamp(1rem, 1vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.2vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 2vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 3vw, 3rem)',
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#171717'
        }
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
};