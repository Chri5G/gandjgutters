/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        logo_blue: '#74cbfa',
        dark_blue: "#055b95",
        facebook: '#3b5999',
        instagram: '#e4405f',
      },
    },
  },
  plugins: [],
}