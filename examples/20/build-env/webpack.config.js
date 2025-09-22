export default {
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
