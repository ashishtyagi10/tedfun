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
        // Material Design 3 - Primary (Deep Teal)
        primary: {
          DEFAULT: '#1A5F7A',
          50: '#E8F4F8',
          100: '#C5E4ED',
          200: '#9FD3E1',
          300: '#79C1D5',
          400: '#5CB3CC',
          500: '#3FA5C3',
          600: '#2D8BA8',
          700: '#1A5F7A', // main
          800: '#0D3D50',
          900: '#051E28',
        },
        // Material Design 3 - Secondary (Warm Amber)
        secondary: {
          DEFAULT: '#F5A623',
          50: '#FEF7E8',
          100: '#FDEBC5',
          200: '#FBDD9F',
          300: '#F9CF79',
          400: '#F7C35C',
          500: '#F5A623', // main
          600: '#C67C00',
          700: '#945D00',
          800: '#623E00',
          900: '#311F00',
        },
        // Material Design 3 - Surface colors
        surface: {
          DEFAULT: '#FAFAFA',
          dim: '#DED8E1',
          bright: '#FEF7FF',
          container: {
            lowest: '#FFFFFF',
            low: '#F7F2FA',
            DEFAULT: '#F3EDF7',
            high: '#ECE6F0',
            highest: '#E6E0E9',
          },
        },
        // Semantic colors
        success: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        error: {
          DEFAULT: '#C62828',
          light: '#EF5350',
          dark: '#B71C1C',
        },
        warning: {
          DEFAULT: '#F57C00',
          light: '#FFB74D',
          dark: '#E65100',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Material Design 3 elevation levels
        'elevation-1': '0 1px 2px 0 rgba(0,0,0,0.05)',
        'elevation-2': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        'elevation-3': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
        'elevation-4': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
        'elevation-5': '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        // Material Design 3 shape tokens
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '28px',
        'full': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
