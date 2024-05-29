/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px'
    },
    colors: {
      orange: {
        neutral: "#ff7d1a",
        pale: "#ffede0",
      },

      neutral: {
        white: "#ffffff",
        black: "#000000",
      },

      blue: {
        darker: "#1d2025",
        dark: "#68707d",
      },

      gray: {
        light: "#f7f8fd",
        neutral: "#b6bcc8",
      },
    },
  },
  plugins: [],
};
