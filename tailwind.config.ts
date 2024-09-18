import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px", // Extra small devices
      sm: "640px", // Small devices (default)
      md: "768px", // Medium devices (default)
      lg: "1024px", // Large devices (default)
      custom: "970px", // Your custom breakpoint
      xl: "1280px", // Extra large devices (default)
      fd: "1110px",
      "2xl": "1536px", // 2XL devices (default)
    },
    extend: {
      colors: {
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",

        main: "rgba(var(--main-color))",
        grape: "rgba(var(--grape))",
        green: "rgba(var(--green))",
        backGround: "rgba(var(--BackColor))",
        Primary: "#01A4AE",
        SliderBackground: "#F8F8F8",

        FontColor: "#6E6E6E",
        BackgroundFooter: "#202020",
      },
      backgroundImage: {
        // 'gradient-ss': 'linear-gradient(to right, #ff7e5f, #feb47b)',,
        "gradient-ss": `linear-gradient(90.29deg, rgba(13, 116, 141, 0) 57.9%, #01A4AE 108.49%)`,
        "gradient-Primary": `linear-gradient(233.91deg, #0D748D 17.73%, #01A4AE 104.94%)`,
        "gradient-GetAsset": `linear-gradient(179.84deg, #E9F4F6 0.14%, #FFFFFF 99.86%)`,
        "gradient-Block": `linear-gradient(179.85deg, #E9F4F6 0.13%, #FFFFFF 113.44%)`,
        
     

      },
    },
  },
  plugins: [],
};

export default config;
