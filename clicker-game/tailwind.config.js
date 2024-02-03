/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pink': '#ff66cc',
      'brown': '#4b3832',
      'blue': '#66ccff',
      'yellow': '#ffd700',
      'violet': '#3b2d9b',
    },
  },
  plugins: [require("daisyui")],
}

