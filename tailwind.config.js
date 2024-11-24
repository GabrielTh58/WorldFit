module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-color-gradient': 'var(--primary-color-gradient)',
        'secondary-color': 'var(--secondary-color)',
      },
      backgroundImage: {
        'custom-gradient': 'var(--custom-gradient)', 
      },
      fontFamily: {
        'DMSans': 'var(--fonte-primaria)',
        'BrunoAce': 'var(--fonte-secundaria)',
      },
    },
  },
  plugins: [],
}