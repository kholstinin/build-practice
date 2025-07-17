import path from "node:path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(import.meta.dirname, "dist"),
  },
  devtool: false,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
