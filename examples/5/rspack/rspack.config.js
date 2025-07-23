import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
  },
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
          loader: "builtin:swc-loader",
        },
      },
    ],
  },
  devtool: false,
  mode: isProduction ? "production" : "development",
  plugins: [new HtmlWebpackPlugin()],
};

export default config;
