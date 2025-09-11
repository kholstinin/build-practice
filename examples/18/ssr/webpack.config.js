import webpack from "webpack";

export default {
  target: "node",
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  // plugins: [
  //   new webpack.optimize.LimitChunkCountPlugin({
  //     maxChunks: 1,
  //   }),
  // ],
};
