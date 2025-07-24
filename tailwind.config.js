/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4CB6B6',
          secondary: '#FF8C7A',
          accent: '#F4E2D8',
          background: '#F7F6F2',
          text: '#3A3A3A',
        },
      },
    },
    plugins: [],
  }
  