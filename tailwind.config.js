/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desert: "url('./assets/desert.jpg')",
        karu: "url('./assets/karu.png')",
        eh: "linear-gradient(to right bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url('./assets/eh1.png')",
        artist: "url('./assets/kenone.jpg')",
      },
      fontFamily: {
        jacques: ["Jacques Francois", "serif"],
        amsterdam: ["New Amsterdam", "serif"],
      },
      keyframes: {
        downUp: {
          "0%": { backgroundPosition: "0 100%" },
          "100%": { backgroundPosition: "0 10%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        glitch: {
          "2%,64%": {
            transform: "translate(2px,0) skew(0deg)",
          },
          "4%,60%": {
            transform: " translate(-2px,0) skew(0deg)",
          },
          "62%": {
            transform: "translate(0,0) skew(5deg)",
          },
        },
        glitchTop: {
          "2%,64%": {
            transform: "translate(2px,-2px)",
          },
          "4%,60%": {
            transform: "translate(-2px,2px)",
          },
          "62%": {
            transform: "translate(13px,-1px) skew(-13deg)",
          },
        },
        glitchBottom: {
          "2%,64%": {
            transform: "translate(-2px,0)",
          },
          "4%,60%": {
            transform: "translate(-2px,0)",
          },
          "62%": {
            transform: "translate(-22px,5px) skew(21deg)",
          },
        },
      },
      animation: {
        downUp: "downUp 15s ease-in-out alternate infinite",
        glitch: "glitch 1s linear infinite",
        fadeIn: "fadeIn 2s ease-in-out",
      },
    },
  },
};
