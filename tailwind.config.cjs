module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  daisyui: {
  themes: [
      {
        mytheme: {
          "primary": "#25ced1",

          "accent": "#457b9d",

          "neutral": "#1d3557",

          "base-100": "#f1faee",

          "info": "#a8dadc",

          "error": "#e63946"
        },
    },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
};
