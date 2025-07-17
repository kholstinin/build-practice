import path from "node:path";

export default {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(import.meta.dirname, "dist"),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  corejs: "3.44.0"
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
