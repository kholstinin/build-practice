import path from "node:path";
import CompressionPlugin from "compression-webpack-plugin";

export default {
  devtool: false,
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  // plugins: [new CompressionPlugin()],
};
