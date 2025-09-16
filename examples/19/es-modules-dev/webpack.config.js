import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/a.js",
  devtool: false,
  mode: "development",
  // optimization: {
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 0,
  //     cacheGroups: {
  //       d: {
  //         test: /d\.js$/,
  //         name: "d",
  //       },
  //     },
  //   },
  // },
  plugins: [new HtmlWebpackPlugin()],
};
