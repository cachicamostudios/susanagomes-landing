/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
