/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9DC41B',
          light: '#C1DC6E',
          lightest: '#E8F2C5',
          container: '#E8F2C5',
          onContainer: '#2A3508',
        },
        secondary: {
          DEFAULT: '#37388D',
          light: '#7374B5',
          lightest: '#D7D7E8',
          container: '#D7D7E8',
          onContainer: '#0E0E2E',
        },
        tertiary: {
          DEFAULT: '#F4A24C',
        },
        aqua: {
          DEFAULT: '#4FB4A8',
        },
        surface: {
          DEFAULT: '#FAF8F2',
          dim: '#EBE9E3',
        },
        onSurface: {
          DEFAULT: '#1A1A1A',
          variant: '#6B6B6B',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      fontFamily: {
        // Brand oficial: Kabrio Alternate (Zetafonts, licencia comercial).
        // Outfit es fallback de Google Fonts hasta que se compre la licencia.
        headline: ['"Kabrio Alternate"', 'Outfit', 'sans-serif'],
        display: ['"Kabrio Alternate"', 'Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['"Kabrio Alternate"', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft-primary': '0 4px 20px -5px rgba(125, 194, 66, 0.15)',
      },
    },
  },
  plugins: [],
};
