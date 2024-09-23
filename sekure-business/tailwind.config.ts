import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--secondary)",
        dark: "var(--dark)",
        dark2: "var(--dark2)",
        dark3: "var(--dark3)",
        danger: "var(--danger)",
        notif: "var(--notif)",
        input: "var(--input)",
        "placeholder-text": "var(--placeholder-text)",
        "primary-fade": "var(--primary-fade)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config

export default config;