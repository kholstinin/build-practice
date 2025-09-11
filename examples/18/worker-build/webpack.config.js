import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  plugins: [new HtmlWebpackPlugin()],
};
