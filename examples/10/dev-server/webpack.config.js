import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  devtool: false,
  output: {
    path: path.resolve("./dist/webpack"),
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
