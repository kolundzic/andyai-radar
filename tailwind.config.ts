import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        radar: {
          navy: "#07111f",
          blue: "#38bdf8",
          silver: "#cbd5e1",
          green: "#22c55e",
          amber: "#f59e0b",
          red: "#ef4444"
        }
      }
    }
  },
  plugins: []
};

export default config;
