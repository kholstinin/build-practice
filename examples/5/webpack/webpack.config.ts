import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import type { Configuration } from "webpack";

const isProduction = process.env.NODE_ENV === "production";

const config: Configuration = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
  devtool: false,
  mode: isProduction ? "production" : "development",
  target: ['web', 'es5'],
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      add: path.resolve("./src/add.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

export default config;
