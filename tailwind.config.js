/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'sideways': 'sideways 1s linear infinite',
      },
      keyframes: {
        sideways: {
          "0%, 100%": { transform: 'translateX(0)' },
          "50%": { transform: 'translateX(-25%)' },
        },
      },
    },
    fontFamily: {
      'en-font': ['Fraunces'],
      'th-font': ['Kanit'],
    }
  },
  plugins: ['tailwindcss',
  'autoprefixer',],
};