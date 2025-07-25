import path from "node:path";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  }
};
