/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7DC242',
          light: '#B5DE7A',
          lightest: '#E6F4D4',
          container: '#E5F4D9',
          onContainer: '#1F3110',
        },
        secondary: {
          DEFAULT: '#2E2A8A',
          light: '#6960C5',
          lightest: '#DCD9EF',
          container: '#E0DEFF',
          onContainer: '#0B0A22',
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
        headline: ['Newsreader', 'serif'],
        display: ['Newsreader', 'serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-primary': '0 4px 20px -5px rgba(125, 194, 66, 0.15)',
      },
    },
  },
  plugins: [],
};
