import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import webpack from "webpack";

export default {
  devtool: false,
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
};
