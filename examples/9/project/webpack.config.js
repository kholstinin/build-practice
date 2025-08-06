import path from "node:path";

import MyPlugin from "./solved/webpack-plugin.js";

const config = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  output: {
    publicPath: "/webpack/",
    path: path.resolve(import.meta.dirname, "dist/webpack"),
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        loader: path.resolve("./solved/webpack-loader.js"),
      },
    ],
  },
  plugins: [new MyPlugin()],
};

export default config;
