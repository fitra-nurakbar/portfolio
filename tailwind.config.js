/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 2.1s ease-in-out infinite",
        aurora: "aurora 5s ease-in-out infinite",
        spinning: "spinning 1.5s ease-in-out",
        cube: "cube 12s ease-in forwards infinite",
      },
      keyframes: {
        spinning: {
          from: {
            transform: "scale(0) rotate(0deg)",
          },
          to: {
            transform: "scale(1) rotate(720deg)",
            opacity: 1,
          },
        },
        cube: {
          from: {
            transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
            opacity: 1,
          },
          to: {
            transform: "scale(20) rotate(960deg) translate(-50%, -50%)",
            opacity: 0,
            borderRadius: "100%",
          },
        },
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(14deg)",
          } /* The following five values can be played with to make the waving more or less extreme */,
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          } /* Reset for the last half to pause */,
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animationDelay: {
        200: "200ms",
      },
    },
  },
  plugins: [],
};
