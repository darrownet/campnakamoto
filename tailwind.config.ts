import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coolest: "#1A3A4A",
        cooler: "#4A90E2",
        cool: "#228B22",
        warm: "#DAA520",
        warmer: "#F97316",
        warmest: "#8B0000",
        neutraldark: "#708090",
        neutrallight: "#F5F5F5"
      },
    },
  },
  plugins: [],
};

export default config;