import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "slate": colors.slate,
      "white": colors.white,
      "primary-1": {
        "100": "#e8f5ce",
        "200": "#d1eb9e",
        "300": "#bae26d",
        "400": "#a3d83d",
        "500": "#8cce0c",
        "600": "#70a50a",
        "700": "#547c07",
        "800": "#385205",
        "900": "#1c2902",
      },
      "primary-2": {
        "100": "#fdeed3",
        "200": "#fadea6",
        "300": "#f8cd7a",
        "400": "#f5bc4d",
        "500": "#f3ac21",
        "600": "#c2891a",
        "700": "#926714",
        "800": "#61450d",
        "900": "#312207",
      },
      "primary-3": {
        "100": "#fcdcda",
        "200": "#fabab4",
        "300": "#f7978f",
        "400": "#f57569",
        "500": "#f25244",
        "600": "#c24236",
        "700": "#913129",
        "800": "#61211b",
        "900": "#30100e",
      },
      "primary-4": {
        "100": "#dbf5fb",
        "200": "#b7ebf6",
        "300": "#94e0f2",
        "400": "#70d6ed",
        "500": "#4ccce9",
        "600": "#3da3ba",
        "700": "#2e7a8c",
        "800": "#1e525d",
        "900": "#0f292f",
      },
    },
    fontFamily: {
      display: ["Inter", "Roboto", "system-ui", "sans-serif"],
      body: ["Inter", "Roboto", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
