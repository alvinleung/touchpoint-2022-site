// https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Takes the viewport widths in pixels and the font sizes in rem
function getResponsiveValue(minWidth, maxWidth, minFontSize, maxFontSize) {
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
      script: ["Kuenstler-Script-LT-Std", "serif"],
    },

    extend: {
      colors: {
        "accent-red": "#F02828",
      },
      fontSize: {
        // tiny: "24px",
        tiny: [
          getResponsiveValue(screens["sm"], screens["xl"], 20, 24),
          { letterSpacing: "-0.05em", lineHeight: "1.2em" },
        ],
        // small: "35px",
        small: [
          getResponsiveValue(screens["sm"], screens["xl"], 20, 35),
          {
            letterSpacing: "-0.05em",
            lineHeight: getResponsiveValue(
              screens["sm"],
              screens["xl"],
              16 * 1.5,
              35 * 1
            ),
          },
        ],
        // medium: ["60px", { letterSpacing: "-0.05em", lineHeight: "1em" }],
        medium: [
          getResponsiveValue(screens["sm"], screens["xl"], 24, 60),
          {
            letterSpacing: "-0.05em",
            lineHeight: getResponsiveValue(
              screens["sm"],
              screens["xl"],
              24 * 1.0,
              60 * 0.9
            ),
          },
        ],
        // big: ["100px", { letterSpacing: "-0.05em", lineHeight: ".9em" }],
        big: [
          getResponsiveValue(screens["sm"], screens["xl"], 30, 100),
          {
            letterSpacing: "-0.05em",
            // letterSpacing: getResponsiveValue(
            //   screens["sm"],
            //   screens["xl"],
            //   30 * -0.05,
            //   100 * -0.05
            // ),
            // from 1.1em to 0.9em when scaling up
            lineHeight: getResponsiveValue(
              screens["sm"],
              screens["xl"],
              30 * 0.95,
              100 * 0.9
            ),
          },
        ],
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
        "document-side": getResponsiveValue(
          screens["sm"],
          screens["xl"],
          24,
          120
        ),
        "document-top": "2rem",
      },
      padding: {
        "document-side": getResponsiveValue(
          screens["sm"],
          screens["xl"],
          24,
          120
        ),
        "document-top": "2rem",
        "fluid-medium": ".2em",
        "fluid-small": ".2em",
      },
    },
  },
  plugins: [],
};
