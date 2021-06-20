module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : undefined,
  purge: ["./src/**/*.{html,ts,scss}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
