/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        "primary-dark": "#1e40af",
        secondary: "#2563eb",
        accent: "#fbbf24",
        background: "#f8fafc",
        card: "#ffffff",
        "foreground-dark": "#111827",
        "foreground-light": "#ffffff",
        "link-hover": "#fde68a",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};

export default tailwindConfig;
