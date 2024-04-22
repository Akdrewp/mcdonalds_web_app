/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', //Apply tailwind to all files in src
  ],
  theme: {
    extend: {
      spacing: {
        '3px': '3px',
      }
    },
    fontFamily: {
      'Inter': ['Inter', { weight: '800' }],
    }
  },
  plugins: [],
}

