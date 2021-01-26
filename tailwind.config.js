module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'SourceSansPro': ['Source Sans Pro', 'sans-serif', 'system-ui']
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      zIndex: ["hover", "active", "focus-within"],
      position: ["focus-within"],
      
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
