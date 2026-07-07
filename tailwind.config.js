/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.{ejs,html,js}",
    "./public/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        light: {
          bg: '#ffffff',
          bg_secondary: '#f8fafc',
          bg_tertiary: '#f1f5f9',
          text: '#1e293b',
          text_light: '#475569',
          border: '#e2e8f0',
        },
        // Dark theme
        dark: {
          bg: '#0f172a',
          bg_secondary: '#1e293b',
          bg_tertiary: '#334155',
          text: '#f1f5f9',
          text_light: '#cbd5e1',
          border: '#334155',
        },
        accent: '#06b6d4',
        'accent-dark': '#0284c7',
        'gradient-start': '#0ea5e9',
        'gradient-end': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'bounce-slow': 'bounceSlow 3s infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'flip': 'flip 0.6s ease-in-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-pop': 'bouncePop 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(6, 182, 212, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(6, 182, 212, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bouncePop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-animated': 'linear-gradient(-45deg, #06b6d4, #0284c7, #06b6d4, #0284c7)',
      },
      backgroundSize: {
        'gradient-size': '400% 400%',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.6)',
        'dark-glow': '0 0 20px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
}