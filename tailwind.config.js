/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primaryColor: '#00171F',
        secondaryColor: '#162327',
        tertiaryColor: '#1E342E',
        accentColor: '#84DCC6',
        accentLighterColor: '#DFF6F0',

        textBody: '#F4EFF5',
        textDate: '#AB9E9C',

        dangerColor: '#E43A48',
        dangerLighterColor: '#F3A5AC',
      },
    },
  },
  plugins: [],
};
