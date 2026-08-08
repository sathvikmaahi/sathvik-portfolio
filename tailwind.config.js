/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#6366f1',
        secondary: '#a855f7',
        accent: '#00d4ff',
        'ai-cyan': '#00d4ff',
        'ai-indigo': '#6366f1',
        'ai-purple': '#a855f7',
        'ai-dark': '#06060b',
        'ai-surface': '#0d0d14',
        'ai-card': '#12121c',
        background: '#06060b',
        text: '#e2e8f0',
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.35), 0 0 40px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(0, 212, 255, 0.25)',
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.4)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #00d4ff 100%)',
        'ai-radial': 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
