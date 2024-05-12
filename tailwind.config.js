/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)'],
        rale: ['var(--font-rale)'],
        openSans : ['var(--font-sans)']
        },
      colors : {
        'neutral' : '#808080',
        'primary' : '#f8f8f8',
        'secondary' : '#001391',
        'tertiary' :'linear-gradient(173deg,#fff -54.74%, #fff0 230.93%)'
      },
      screens : {
        'xxs':'260px',
        'xs': '375px',
        'sm': '600px',
        'md': '768px',
        'lg': '992px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',

      } , 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
