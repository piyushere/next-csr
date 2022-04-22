const tailwindForms = require('@tailwindcss/forms');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // default 'media' or 'class'
  variants: {
    extend: {
      tableLayout: ['hover', 'focus', 'responsive'],
    },
  },
  plugins: [tailwindForms],
  corePlugins: {
    tableLayout: true,
  },
};
