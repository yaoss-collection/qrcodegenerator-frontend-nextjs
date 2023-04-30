module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecf7ff',
        secondary: '#00288a',
      },
      fontFamily: {
        'spline-sans': ['Spline Sans', 'sans-serif'],
      },
      animation: {
        'pulse-once': 'pulse 1s linear 1',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
