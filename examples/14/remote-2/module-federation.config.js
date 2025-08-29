module.exports = {
  name: "components",
  exposes: {
    "./Button": "./src/Button.jsx",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
};
