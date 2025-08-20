import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import MyPlugin from "./plugins/my-plugin.js";

const config = {
  entry: "./src/webpack.tsx",
  mode: "development",
  devtool: false,
  output: {
    publicPath: "/webpack/",
    path: path.resolve(import.meta.dirname, "dist/webpack"),
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
    new MyPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  jsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                  },
                },
              },
            },
          },
          {
            loader: path.resolve('./plugins/my-loader.js')
          }
        ],
      },
    ],
  },
  experiments: {
    css: true,
  },
};

export default config;
