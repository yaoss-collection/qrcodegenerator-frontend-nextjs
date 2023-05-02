module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecf7ff',
        secondary: '#00288a',
        'secondary-light': '#113a9f',
        'blue-light': '#1e49b3',
        light: '#b0c6e2',
      },
      fontFamily: {
        'spline-sans': ['Spline Sans', 'sans-serif'],
      },
      animation: {
        'pulse-once': 'pulse 350ms ease-in-out 1',
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
