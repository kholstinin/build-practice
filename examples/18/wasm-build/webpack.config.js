import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  plugins: [new HtmlWebpackPlugin()],
  experiments: {
    asyncWebAssembly: true,
  },
};
