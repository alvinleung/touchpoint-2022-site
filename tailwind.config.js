module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lausanne", "sans-serif"],
      script: ["Kuenstler Script LT Std", "serif"],
    },
    extend: {
      fontSize: {
        small: "24px",
        big: "100px",
        "huge-script": "348px",
      },
      margin: {
        "document-side": "4rem",
        "document-top": "2rem",
      },
    },
  },
  plugins: [require("@borisk47/tailwindcss-fluidify")],
};
