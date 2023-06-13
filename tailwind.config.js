/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    colors: {
      white: "#ffffff",
      platinum: "#E2E2E2",
      timber: "#D8D4D5",
      sage: {
        100: "#9DC669",
        400: "#8FB45F",
        700: "#80A256",
      },
      gray: {
        300: "#6E7271",
        500: "#5A5D5C",
        700: "#494B4B",
        900: "#3A3C3C",
      },
      black: "#1A2321",
    },
  },
};
