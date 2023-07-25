/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-stron-cyan": "hsl(172, 67%, 45%)",
        "neutral-very-dark-cyan": "hsl(183, 100%, 15%)",
        "neutral-dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "neutral-grayish-cyan": "hsl(184, 14%, 56%)",
        "neutral-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "neutral-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "neutral-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        "text-form": "1.5rem",
      },
      fontFamily: {
        "space-mono": ["Space Mono, monospace"],
      },
    },
  },
  plugins: [],
};
