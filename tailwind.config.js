/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1a1a1a',
          secondary: '#2a2a2a',
          tertiary: '#3a3a3a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
        },
        accent: '#00a8ff',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2rem, 5vw, 4rem)',
        'hero-role': 'clamp(1rem, 2vw, 1.5rem)',
      },
      animation: {
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
