import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  devtool: 'source-map',
  mode: "production",
  plugins: [new HtmlWebpackPlugin()],
};
