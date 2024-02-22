const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/*.{js,jsx}', './src/*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
        // Add more custom font families as needed
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        'primary': '#020104',
        'secondary': '#fdd531',
        'custom_pink': '#ed3996',
        'custom_blue': '#00a1de',
        'custom_green': '#97ca50',
      },
      screens: {
        '3xl': '1680px',
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: '2rem',

        // default breakpoints but with 40px removed
        // screens: {
        //   sm: '600px',
        //   md: '680px',
        //   lg: '800px',
        //   xl: '1024px',
        //   '2xl': '1280px',
        // },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
