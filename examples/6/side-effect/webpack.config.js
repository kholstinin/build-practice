import path from "node:path";

export default {
  devtool: false,
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  experiments: {
    css: true,
  },
};
