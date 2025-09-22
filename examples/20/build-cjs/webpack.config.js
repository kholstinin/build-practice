import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  // entry: "./src/index.js",
  entry: "./src/esm.js",
  devtool: false,
  mode: "development",
  plugins: [new HtmlWebpackPlugin()],
};
