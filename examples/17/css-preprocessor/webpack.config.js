import path from 'node:path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  devtool: false,
  mode: "development",
	output: {
		path: path.join(import.meta.dirname, './dist/webpack'),
		publicPath: '/webpack/'
	},
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  }
};
