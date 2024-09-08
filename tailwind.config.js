/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html" ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins','sans-serif'],
      }
    },
    screens: {
      'mobile' : '340px',
      'tab' : '768px',
      'desk' : '1024px',
    },
  },
  plugins: [],
}

