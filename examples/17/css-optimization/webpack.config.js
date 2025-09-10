import path from "node:path";
import fg from "fast-glob";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export default {
  devtool: false,
  mode: "production",
  output: {
    path: path.join(import.meta.dirname, "./dist/webpack"),
    publicPath: "/webpack/",
  },
  optimization: {
    usedExports: true,
  },
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env"],
                  purgeCSSPlugin({
                    content: fg.sync(path.join("src", "/**/*.{js,jsx}"), {
                      nodir: true,
                    }),
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
