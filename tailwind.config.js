/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C5CBF',
          light: '#B49BDB',
          dark: '#5A3D9E',
        },
        secondary: {
          DEFAULT: '#E8839B',
          light: '#F5B3C4',
        },
        accent: {
          DEFAULT: '#F4A261',
          light: '#F8C99A',
        },
        background: {
          DEFAULT: '#FFF5F0',
          alt: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1F2937',
          light: '#6B7280',
          lighter: '#9CA3AF',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(124, 92, 191, 0.1), 0 2px 4px -1px rgba(124, 92, 191, 0.06)',
        medium: '0 10px 15px -3px rgba(124, 92, 191, 0.1), 0 4px 6px -2px rgba(124, 92, 191, 0.05)',
        large: '0 20px 25px -5px rgba(124, 92, 191, 0.1), 0 10px 10px -5px rgba(124, 92, 191, 0.04)',
      },
    },
  },
  plugins: [],
}
