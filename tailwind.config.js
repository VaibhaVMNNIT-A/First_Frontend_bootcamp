/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color': '#0f172a',
        'card-bg': 'rgba(30, 41, 59, 0.7)',
        'primary-color': '#38bdf8',
        'secondary-color': '#818cf8',
        'text-color': '#f1f5f9',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
      }
    },
  },
  plugins: [],
}
