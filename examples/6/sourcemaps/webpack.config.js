import path from "node:path";

export default {
  devtool: 'source-map',
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  }
};
