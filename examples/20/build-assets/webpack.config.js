export default {
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.svg/,
        type: "asset/resource",
        // loader: "svgo-loader",
      },
    ],
  },
};
