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
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { 
            transform: 'scale(0.5) translateX(50%) translateY(50%)', 
            opacity: 0 
          },
          '100%': { 
            transform: 'scale(1) translateX(0) translateY(0)', 
            opacity: 1 
          },
        },
        'zoom-out': {
          '0%': { 
            transform: 'scale(1) translateX(0) translateY(0)', 
            opacity: 1 
          },
          '100%': { 
            transform: 'scale(0.5) translateX(50%) translateY(50%)', 
            opacity: 0 
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards',
        'zoom-in': 'zoom-in 0.5s ease-out forwards',
        'zoom-out': 'zoom-out 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
};
