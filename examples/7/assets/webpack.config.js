import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: "./src/index.jsx",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(import.meta.dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
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
      },
      {
        test: /\.(png|jpeg)$/,
        type: "asset/resource",
        // generator: {
        //   publicPath: 'https://storage.yandexcloud.net/kholstinevich-static/',
        //   filename: '[name][ext]'
        // }
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};

export default config;
