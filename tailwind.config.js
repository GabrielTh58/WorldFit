module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      backgroundImage: {
        "bg-price": "url('./src/images/price-bg.jpg')", // n pegou
      },
      fontFamily: {
        primary: "var(--fonte-primaria)",
        secondary: "var(--fonte-secundaria)",
      },
    },
  },
  plugins: [],
};
