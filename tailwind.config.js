// https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Takes the viewport widths in pixels and the font sizes in rem
function getResponsiveValue(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const minWidth = minWidthPx;
  const maxWidth = maxWidthPx;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}px, ${yAxisIntersection}px + ${
    slope * 100
  }vw, ${maxFontSize}px)`;
}

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
      colors: {
        "accent-red": "#F02828",
      },
      fontSize: {
        tiny: "24px",
        small: "35px",
        medium: ["60px", { letterSpacing: "-0.05em", lineHeight: "1em" }],
        big: ["100px", { letterSpacing: "-0.05em", lineHeight: ".9em" }],
        "huge-script": "348px",
        // "fluid-medium": [
        //   getResponsiveValue(screens["md"], screens["2xl"], 22, 50),
        //   { letterSpacing: "-0.02em", lineHeight: "1em" },
        // ],
        "fluid-medium": [
          "3.1vw",
          { letterSpacing: "-0.05em", lineHeight: "1em" },
        ],
      },
      margin: {
        "document-side": "5vw",
        "document-top": "2rem",
      },
      padding: {
        "document-side": "5vw",
        "document-top": "2rem",
        "fluid-medium": ".2em",
        "fluid-small": ".2em",
      },
    },
  },
  plugins: [],
};
