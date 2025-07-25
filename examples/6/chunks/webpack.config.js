import path from "node:path";

export default {
  devtool: false,
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     // Do not use minSize 0 in production!
  //     minSize: 0,
  //     cacheGroups: {
  //       utils: {
  //         test: /utils/,
  //       },
  //     },
  //   },
  // },
};
